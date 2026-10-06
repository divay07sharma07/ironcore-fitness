const SUPABASE_URL = "https://fobcfqtzatvxrtieytns.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WgVDSkDAX35fk_5cqfQCLw_Nqzvr3wn";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
