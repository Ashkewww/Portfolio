import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

const supabase = createClient(supabaseUrl!, supabaseKey!)

if (!supabaseUrl) {
    console.log('Missing Supabase URL')
}
if (!supabaseKey) {
    console.log('Missing Supabase Key')
}



export default supabase