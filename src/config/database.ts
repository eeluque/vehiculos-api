import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';
const supabase = createClient('https://wdazdwcnsfnzvekcaqty.supabase.co', process.env.API_KEY!);
export default supabase;

