import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = () => {
  return typeof supabaseUrl === 'string' && supabaseUrl.trim() !== '' &&
         typeof supabaseKey === 'string' && supabaseKey.trim() !== '';
};

// Use placeholders to prevent import crash, components should check isSupabaseConfigured()
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseKey || 'placeholder'
)

export default supabase