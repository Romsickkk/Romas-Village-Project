import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jfdplmkhqdyfkmbluvek.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmZHBsbWtocWR5ZmttYmx1dmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMjkwNTAsImV4cCI6MjA0MzgwNTA1MH0.xgpNAkjPDCZ1418CGtRnVj3NzOBJ8zmUibbumeiJELQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
