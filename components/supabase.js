
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gxjmrcnetsosqaccvlev.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4am1yY25ldHNvc3FhY2N2bGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NjQyNzYsImV4cCI6MjA1MDA0MDI3Nn0.ayd4IGwZgzpq9zdbsEvrycbgEfwZRe82CV4xMcRmCt8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase