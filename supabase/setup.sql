-- Chaitanya University Database Setup
-- Run this script in Supabase SQL Editor

-- ============================================
-- CONTACT INQUIRIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  inquiry_type TEXT NOT NULL DEFAULT 'general',
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'closed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts on contact_inquiries" ON contact_inquiries
  FOR INSERT WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);

-- ============================================
-- NEWSLETTER SUBSCRIBERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  source TEXT DEFAULT 'website'
);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts on newsletter_subscribers" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Create index
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscribers(is_active) WHERE is_active = true;

-- ============================================
-- ADMISSION INQUIRIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS admission_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  program_interest TEXT,
  current_qualification TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'enrolled', 'closed'))
);

-- Enable Row Level Security
ALTER TABLE admission_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts on admission_inquiries" ON admission_inquiries
  FOR INSERT WITH CHECK (true);

-- Create index
CREATE INDEX IF NOT EXISTS idx_admission_inquiries_created_at ON admission_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admission_inquiries_status ON admission_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_admission_inquiries_program ON admission_inquiries(program_interest);

-- ============================================
-- EVENT REGISTRATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS event_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  registered_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts on event_registrations" ON event_registrations
  FOR INSERT WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_event_registrations_event ON event_registrations(event_id);
CREATE INDEX IF NOT EXISTS idx_event_registrations_email ON event_registrations(email);

-- ============================================
-- PAGE VIEWS TABLE (Optional - Analytics)
-- ============================================
CREATE TABLE IF NOT EXISTS page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  ip_address TEXT,
  viewed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts on page_views" ON page_views
  FOR INSERT WITH CHECK (true);

-- Create index
CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_date ON page_views(viewed_at DESC);

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to contact_inquiries
DROP TRIGGER IF EXISTS update_contact_inquiries_updated_at ON contact_inquiries;
CREATE TRIGGER update_contact_inquiries_updated_at
    BEFORE UPDATE ON contact_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VIEWS FOR DASHBOARD (Optional)
-- ============================================

-- Recent contact inquiries view
CREATE OR REPLACE VIEW recent_contact_inquiries AS
SELECT
  id,
  full_name,
  email,
  inquiry_type,
  status,
  created_at
FROM contact_inquiries
ORDER BY created_at DESC
LIMIT 100;

-- Newsletter stats view
CREATE OR REPLACE VIEW newsletter_stats AS
SELECT
  COUNT(*) as total_subscribers,
  COUNT(*) FILTER (WHERE is_active = true) as active_subscribers,
  COUNT(*) FILTER (WHERE subscribed_at > NOW() - INTERVAL '30 days') as new_this_month
FROM newsletter_subscribers;

-- Admission inquiry stats view
CREATE OR REPLACE VIEW admission_stats AS
SELECT
  program_interest,
  COUNT(*) as inquiry_count,
  COUNT(*) FILTER (WHERE status = 'enrolled') as enrolled_count
FROM admission_inquiries
GROUP BY program_interest
ORDER BY inquiry_count DESC;

-- ============================================
-- GRANT PERMISSIONS (for authenticated users to read)
-- ============================================

-- Allow authenticated users to read all tables (for admin dashboard)
CREATE POLICY "Allow authenticated read on contact_inquiries" ON contact_inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated read on newsletter_subscribers" ON newsletter_subscribers
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated read on admission_inquiries" ON admission_inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated read on event_registrations" ON event_registrations
  FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to update status
CREATE POLICY "Allow authenticated update on contact_inquiries" ON contact_inquiries
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on admission_inquiries" ON admission_inquiries
  FOR UPDATE USING (auth.role() = 'authenticated');
