/*
  # Create Appointments Table

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `name` (text, required) - Patient's full name
      - `email` (text, required) - Patient's email address
      - `phone` (text, required) - Patient's phone number
      - `service` (text, required) - Treatment/service they're interested in
      - `preferred_date` (text) - Their preferred appointment date
      - `message` (text, optional) - Additional notes or concerns
      - `status` (text, default: pending) - Appointment status tracking
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `appointments` table
    - Add policy for public to insert appointments (booking form is public)
    - Add policy for authenticated admin users to read all appointments
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  preferred_date text,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit appointment requests"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);
