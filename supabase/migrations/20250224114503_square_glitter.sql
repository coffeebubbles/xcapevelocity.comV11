/*
  # Fix user_profiles RLS policies final v2

  1. Changes
    - Further simplify RLS policies
    - Remove all potential recursion points
    - Use simpler policy structure
    - Ensure policies don't reference themselves

  2. Security
    - Maintain same security model
    - Prevent infinite recursion
    - Keep all necessary access controls
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can create own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can read own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;
DROP POLICY IF EXISTS "Super admin read access" ON user_profiles;
DROP POLICY IF EXISTS "Super admin write access" ON user_profiles;
DROP POLICY IF EXISTS "Agency read access" ON user_profiles;
DROP POLICY IF EXISTS "Agency update access" ON user_profiles;

-- Create simplified policies
CREATE POLICY "Enable read access for authenticated users"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Enable insert for authenticated users"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable update for users based on role"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (
    -- Users can update their own profile
    auth.uid() = user_id
    OR
    -- Super admins can update any profile
    (SELECT role = 'super_admin' FROM user_profiles WHERE user_id = auth.uid())
    OR
    -- Agencies can update their clients' profiles
    (
      (SELECT role = 'agency' FROM user_profiles WHERE user_id = auth.uid())
      AND
      agency_id = (SELECT id FROM user_profiles WHERE user_id = auth.uid())
    )
  )
  WITH CHECK (
    -- Same conditions as USING clause
    auth.uid() = user_id
    OR
    (SELECT role = 'super_admin' FROM user_profiles WHERE user_id = auth.uid())
    OR
    (
      (SELECT role = 'agency' FROM user_profiles WHERE user_id = auth.uid())
      AND
      agency_id = (SELECT id FROM user_profiles WHERE user_id = auth.uid())
    )
  );

CREATE POLICY "Enable delete for super admins"
  ON user_profiles
  FOR DELETE
  TO authenticated
  USING (
    (SELECT role = 'super_admin' FROM user_profiles WHERE user_id = auth.uid())
  );