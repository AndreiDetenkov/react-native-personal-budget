import { useEffect, useState } from 'react'
import { PostgrestError, PostgrestResponse } from '@supabase/supabase-js'
import { Alert } from 'react-native'

type Props = () => Promise<PostgrestResponse<unknown>>
export function useFetch(fetch: Props): NonNullable<any> {
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<any>([])

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data, error } = await fetch()
      if (error) {
        Alert.alert(JSON.stringify(error, null, 2))
        return
      }
      setResponse(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, response }
}
