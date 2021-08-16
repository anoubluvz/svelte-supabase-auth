import { createClient } from "@supabase/supabase-js";

import { SVELTE_APP_SUPABASE_URL, SVELTE_APP_SUPABASE_ANON_KEY } from "./env";

const supabaseUrl = SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);