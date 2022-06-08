import React, { useEffect, useState } from 'react'
import { useQueries, useQueryClient } from 'react-query'
import PropTypes from 'prop-types'

import { filledEmptyArray } from 'utils/'
import EventBus from 'utils/EventBus.js'

import './DogsList.css'

import DogsCard from 'components/Dogs/DogsCard/DogsCard.jsx'

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
function DogsList () {
  const [hasEventListener, setHasEventListener] = useState(false)
  const dogs = useDogsQueries()
  const queryClient = useQueryClient()

  useEffect(() => {
    if (!hasEventListener) {
      const handleRefresh = () => {
        queryClient.resetQueries()
        return queryClient.invalidateQueries('dogs', { refetchActive: true })
      }

      EventBus.$on('DOGSLIST_REFRESH', handleRefresh)
      setHasEventListener(true)
    }
  }, [])

  return (
    <article className='dogs-list'>
      <ul className='dogs-list_list'>
        {
          dogs.map(({ data, status }, index) => {
            return (
              <li key={index}>
                <DogsCard status={status} data={data} />
              </li>
            )
          })
        }
      </ul>
    </article>
  )
}

DogsList.propTypes = {}

DogsList.defaultProps = {}

export default DogsList
