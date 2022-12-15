import { createApi, fakeBaseQuery, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from '../../config/supabase/supabase'
import { TransactionsResponseSuccess } from '../../config/supabase/supabase.types'

const transactionApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getTransactionsByRange: builder.query<
      TransactionsResponseSuccess,
      { from: string; to: string }
    >({
      queryFn: async ({ from, to }) => {
        const { data, error } = await supabase
          .from('transactions')
          .select(`id,name,value,created_at, categories(id,title,icon)`)
          .gt('created_at', from)
          .lt('created_at', to)
          .order('created_at', { ascending: false })

        return { data }
      },
    }),
  }),
})

export const { useGetTransactionsByRangeQuery } = transactionApi
