import { createClient } from '@supabase/supabase-js';

// Browser/app client. Public values only (the publishable key is meant to ship).
// null until the Supabase project is wired up - the app then runs without
// accounts, exactly as before auth existed.
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = url && key ? createClient(url, key) : null;
