import React from 'react'
import PropTypes from 'prop-types'

import { filledEmptyArray } from 'utils/'
import { useQueries, useQueryClient } from 'react-query'

import './DogsList.css'

import DogsCard from 'components/Dogs/DogsCard/DogsCard.jsx'

const TOTAL_DOGS = 10

const fetchDog = () => fetch('https://random.dog/woof.json').then(res => res.json())

const useDogs = () => {
  return useQueries(
    filledEmptyArray(TOTAL_DOGS).map((zero, index) => {
      return {
        queryKey: ['dogs', index],
        queryFn: () => fetchDog(),
        retry: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false
      }
    })
  )
}

const DogsList = () => {
  const queryClient = useQueryClient()
  const dogs = useDogs()

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
