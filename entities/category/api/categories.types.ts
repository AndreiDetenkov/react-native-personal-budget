import { Database } from '../../../shared/config/supabase/database.types'
import { getCategories } from './categories'

type Categories = Database['public']['Tables']['categories']['Row']
type CategoriesResponse = Awaited<ReturnType<typeof getCategories>>
export type CategoriesResponseSuccess = CategoriesResponse['data']

export interface CategoryItem extends Categories {
  isPressed?: boolean
}
