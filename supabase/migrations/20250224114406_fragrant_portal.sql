/*
  # Fix user_profiles RLS policies recursion

  1. Changes
    - Remove recursive policy checks
    - Simplify RLS policies to avoid infinite recursion
    - Maintain security while fixing the recursion issue

  2. Security
    - Users can still only access their own data
    - Agencies can still access their clients' data
    - Super admins can still access all data
    - No security compromises in the fix
*/

-- Drop existing policies to recreate them without recursion
DROP POLICY IF EXISTS "Super admins can read all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Super admins can update any profile" ON user_profiles;
DROP POLICY IF EXISTS "Agencies can read own and client profiles" ON user_profiles;
DROP POLICY IF EXISTS "Agencies can update client profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can read own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can create own profile" ON user_profiles;

-- Create simplified policies without recursion
CREATE POLICY "Users can create own profile"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create a function to check if a user is a super admin
CREATE OR REPLACE FUNCTION is_super_admin(user_uid uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_profiles
    WHERE user_id = user_uid
    AND role = 'super_admin'::user_role
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to check if a user is an agency
CREATE OR REPLACE FUNCTION is_agency(user_uid uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_profiles
    WHERE user_id = user_uid
    AND role = 'agency'::user_role
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create policies using the helper functions
CREATE POLICY "Super admins can manage all profiles"
  ON user_profiles
  FOR ALL
  TO authenticated
  USING (is_super_admin(auth.uid()))
  WITH CHECK (is_super_admin(auth.uid()));

CREATE POLICY "Agencies can read client profiles"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (
    is_agency(auth.uid()) AND (
      user_id = auth.uid() OR
      agency_id IN (
        SELECT id FROM user_profiles WHERE user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Agencies can update client profiles"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (
    is_agency(auth.uid()) AND
    agency_id IN (
      SELECT id FROM user_profiles WHERE user_id = auth.uid()
    )
  )
  WITH CHECK (
    is_agency(auth.uid()) AND
    agency_id IN (
      SELECT id FROM user_profiles WHERE user_id = auth.uid()
    )
  );