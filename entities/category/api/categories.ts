import { supabase } from '../../../shared/config'

export async function getCategories() {
  return supabase.from('categories').select(`id,title`).order('title', { ascending: true })
}
