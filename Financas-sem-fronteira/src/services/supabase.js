import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvwymfqvxrjpicgeyvth.supabase.co'
const supabaseAnonKey = 'sb_publishable_mFQxumU25YLqr7YH1DppRA_xTXWPcoO'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)