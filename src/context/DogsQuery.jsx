import React, { createContext } from 'react'
import { useQueries } from 'react-query'

import { filledEmptyArray } from 'utils/'

const TOTAL_DOGS = 10

const fetchDog = () => fetch('https://random.dog/woof.json').then(res => res.json())

const useDogsQueries = () => {
  return useQueries(
    filledEmptyArray(TOTAL_DOGS).map((zero, index) => {
      return {
        queryKey: ['dogs', `dog-${index}`],
        queryFn: () => fetchDog(),
        retry: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        keepPreviousData: false,
        cacheTime: -1,
        enabled: false
      }
    })
  )
}

const DogsQueryContext = createContext()

const DogsQueryProvider = ({ children }) => {
  const queries = useDogsQueries()

  const refresh = () => {
    for (const query of queries) {
      query.remove()
      query.refetch()
    }
  }

  return (
    <DogsQueryContext.Provider
      value={{
        queries,
        refresh
      }}
    >
      {children}
    </DogsQueryContext.Provider>
  )
}

export { DogsQueryProvider, DogsQueryContext }
