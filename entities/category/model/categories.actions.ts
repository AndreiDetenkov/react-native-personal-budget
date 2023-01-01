import { createAsyncThunk } from '@reduxjs/toolkit'
import { CategoriesResponseSuccess, getCategories } from '../api'

export const getCategoriesRequest = createAsyncThunk<CategoriesResponseSuccess>(
  'categories/getAll',
  async () => {
    const { data } = await getCategories()
    return data
  }
)
