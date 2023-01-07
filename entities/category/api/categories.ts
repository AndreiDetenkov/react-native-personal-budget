import { supabase } from '../../../shared/config'

export async function getCategories() {
  return supabase.from('categories').select(`id,title,icon`).order('title', { ascending: true })
}
