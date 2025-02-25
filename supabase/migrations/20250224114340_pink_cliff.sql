/*
  # Fix user_profiles RLS policies

  1. Changes
    - Add insert policy to allow new users to create their profile
    - Add update policy for users to modify their own profile
    - Add update policy for agencies to modify their clients' profiles
    - Add update policy for super admins to modify any profile

  2. Security
    - Users can only create their own profile
    - Users can only update their own profile
    - Agencies can update their clients' profiles
    - Super admins can update any profile
*/

-- Create policy to allow users to create their own profile
CREATE POLICY "Users can create own profile"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to update their own profile
CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create policy to allow agencies to update their clients' profiles
CREATE POLICY "Agencies can update client profiles"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_id = auth.uid()
      AND role = 'agency'
      AND id = user_profiles.agency_id
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_id = auth.uid()
      AND role = 'agency'
      AND id = user_profiles.agency_id
    )
  );

-- Create policy to allow super admins to update any profile
CREATE POLICY "Super admins can update any profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_id = auth.uid()
      AND role = 'super_admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_id = auth.uid()
      AND role = 'super_admin'
    )
  );