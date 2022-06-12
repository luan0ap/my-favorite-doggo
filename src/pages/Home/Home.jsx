import React, { useContext, useEffect } from 'react'

import './Home.css'

import DogsList from 'components/Dogs/DogsList/DogsList.jsx'

import { DogsQueryContext } from 'context/DogsQuery.jsx'

const Home = () => {
  const { queries, refresh } = useContext(DogsQueryContext)

  useEffect(() => {
    refresh()
  }, [])

  return (
    <section className='home-page'>
      <DogsList dogs={queries} />
    </section>
  )
}

export default Home
