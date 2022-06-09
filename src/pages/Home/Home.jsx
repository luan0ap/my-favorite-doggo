import React, { useEffect, useState } from 'react'
import { useQueries, useQueryClient } from 'react-query'

import { filledEmptyArray } from 'utils/'
import EventBus from 'utils/EventBus.js'

import './Home.css'

import DogsList from 'components/Dogs/DogsList/DogsList.jsx'

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
        cacheTime: -1
      }
    })
  )
}

const Home = () => {
  const [mounted, setMounted] = useState(false)
  const dogs = useDogsQueries()
  const queryClient = useQueryClient()

  useEffect(() => {
    if (!mounted) {
      const handleRefresh = () => {
        queryClient.resetQueries()
        return queryClient.invalidateQueries('dogs', { refetchActive: true })
      }

      EventBus.$on('DOGSLIST_REFRESH', handleRefresh)
      setMounted(true)
    }
  }, [])

  return (
    <section className='home-page'>
      <DogsList dogs={dogs} />
    </section>
  )
}

export default Home
