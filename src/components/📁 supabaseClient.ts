import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hrzlvpehexmjzyputslr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhyemx2cGVoZXhtanp5cHV0c2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3OTQ1MjYsImV4cCI6MjA5MDM3MDUyNn0.xA5lZ598moKfZBZah5ybdrd1cp7NwO0G7_JN5wWE4SM";

export const supabase = createClient(supabaseUrl, supabaseKey);