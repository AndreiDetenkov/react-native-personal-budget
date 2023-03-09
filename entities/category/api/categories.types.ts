import { Database } from '../../../shared/config/supabase/database.types'
import { getCategories } from './categories'

export type Categories = Database['public']['Tables']['categories']['Row']
export type CategoriesResponse = Awaited<ReturnType<typeof getCategories>>
export type CategoriesResponseSuccess = CategoriesResponse['data']
