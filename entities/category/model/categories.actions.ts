import { createAsyncThunk } from '@reduxjs/toolkit'
import { CategoriesResponseSuccess } from '../../../config/supabase/supabase.types'
import { getCategories } from '../../../models/transactions'

export const getCategoriesRequest = createAsyncThunk<CategoriesResponseSuccess>(
  'categories/getAll',
  async () => {
    const { data } = await getCategories()
    return data
  }
)
