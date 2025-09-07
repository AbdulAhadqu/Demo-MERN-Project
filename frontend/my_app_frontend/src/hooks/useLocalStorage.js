import { useState, useEffect, useCallback } from "react"

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async (fetchUrl = url, fetchOptions = options) => {
    if (!fetchUrl) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(fetchUrl, {
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers
        },
        ...fetchOptions
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [url, options])

  useEffect(() => {
    if (url && !options.manual) {
      fetchData()
    }
  }, [fetchData, url, options.manual])

  const refetch = () => fetchData()

  return { data, loading, error, refetch, fetch: fetchData }
}
