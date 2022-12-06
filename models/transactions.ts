import {supabase} from "../config/supabase/supabase";

export async function getTransactions() {
  return supabase
      .from("transactions")
      .select(`id,name,value,created_at, categories(title,id,icon)`)
      .order("created_at", { ascending: false })
      .limit(20);
}
