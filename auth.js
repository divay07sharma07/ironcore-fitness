const SUPABASE_URL = "https://fobcfqtzatvxrtieytns.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "YOUR_PUBLISHABLE_KEY";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
