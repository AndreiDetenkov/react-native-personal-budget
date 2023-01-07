import { CategoryItem } from '../api'

export type CategoryState = {
  categories: CategoryItem[]
}

export interface ICategoriesWithValue {
  id: string
  title: string
  value: number
  icon: string
}
