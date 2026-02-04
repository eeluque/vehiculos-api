import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL || 'https://wdazdwcnsfnzvekcaqty.supabase.co';
const supabaseKey = process.env.API_KEY || process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseKey) {
    throw new Error(
        'Supabase API key is required. Set API_KEY, SUPABASE_SERVICE_KEY, or SUPABASE_ANON_KEY in your environment variables (Railway: Variables tab).'
    );
}

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

