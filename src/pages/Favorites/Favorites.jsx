import React, { useEffect, useState } from 'react'

import EventBus from 'utils/EventBus.js'
import { favoriteDogStorage } from 'services/Storage/FavoriteDog'

import './Favorites.css'

import DogsList from 'components/Dogs/DogsList/DogsList.jsx'

const Home = () => {
  const [mounted, setMounted] = useState(false)
  const [dogs, setDogs] = useState(favoriteDogStorage.getAll())

  useEffect(() => {
    if (!mounted) {
      const handleRefresh = () => {
        return EventBus.emit('refresh')
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
