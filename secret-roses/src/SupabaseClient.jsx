import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://rxoayejqovoytzzjdsow.supabase.co";
const supabaseKey =  "sb_publishable_UU0iQ6PA8iEdMYHWWizWkQ_okDGGMBH";
const supabase = createClient(supabaseUrl, supabaseKey);  
export default supabase;

