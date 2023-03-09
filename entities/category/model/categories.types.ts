import { Categories } from '../api'

export type CategoryState = {
  categories: Categories[]
}

export interface ICategoriesWithValue extends Categories {
  value: number
}

export interface ICategoriesWithPressed extends Categories {
  isPressed: boolean
}
