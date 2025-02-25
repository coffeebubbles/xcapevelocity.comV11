/*
  # Create consultation bookings system

  1. New Tables
    - `consultation_slots`
      - `id` (uuid, primary key)
      - `date` (date)
      - `time` (time)
      - `is_blocked` (boolean)
      - `created_by` (uuid, references user_profiles)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `consultation_bookings`
      - `id` (uuid, primary key)
      - `slot_id` (uuid, references consultation_slots)
      - `client_id` (uuid, references user_profiles)
      - `agency_id` (uuid, references user_profiles, optional)
      - `status` (text, enum: 'pending', 'confirmed', 'cancelled')
      - `agenda` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for different roles
*/

-- Create enum type for booking status
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled');

-- Create consultation_slots table
CREATE TABLE IF NOT EXISTS consultation_slots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  time time NOT NULL,
  is_blocked boolean DEFAULT false,
  created_by uuid REFERENCES user_profiles(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(date, time)
);

-- Create consultation_bookings table
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slot_id uuid REFERENCES consultation_slots(id) NOT NULL,
  client_id uuid REFERENCES user_profiles(id) NOT NULL,
  agency_id uuid REFERENCES user_profiles(id),
  status booking_status DEFAULT 'pending',
  agenda text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE consultation_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Policies for consultation_slots
CREATE POLICY "Super admins can manage all slots"
  ON consultation_slots
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM user_profiles
    WHERE user_id = auth.uid()
    AND role = 'super_admin'
  ));

CREATE POLICY "Everyone can read available slots"
  ON consultation_slots
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for consultation_bookings
CREATE POLICY "Users can read own bookings"
  ON consultation_bookings
  FOR SELECT
  TO authenticated
  USING (
    client_id IN (
      SELECT id FROM user_profiles WHERE user_id = auth.uid()
    )
    OR agency_id IN (
      SELECT id FROM user_profiles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create bookings"
  ON consultation_bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (
    client_id IN (
      SELECT id FROM user_profiles WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Super admins can manage all bookings"
  ON consultation_bookings
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM user_profiles
    WHERE user_id = auth.uid()
    AND role = 'super_admin'
  ));

-- Create functions to handle timestamp updates
CREATE OR REPLACE FUNCTION handle_slots_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION handle_bookings_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER update_consultation_slots_timestamp
  BEFORE UPDATE ON consultation_slots
  FOR EACH ROW
  EXECUTE FUNCTION handle_slots_update();

CREATE TRIGGER update_consultation_bookings_timestamp
  BEFORE UPDATE ON consultation_bookings
  FOR EACH ROW
  EXECUTE FUNCTION handle_bookings_update();