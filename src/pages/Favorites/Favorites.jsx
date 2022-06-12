import React, { useContext } from 'react'

import { DogsFavoriteStorageContext } from 'context/DogsFavoriteStorage'

import './Favorites.css'

import DogsList from 'components/Dogs/DogsList/DogsList.jsx'

const Favorites = () => {
  const { dogs } = useContext(DogsFavoriteStorageContext)

  return (
    <section className='favorites-page'>
      <DogsList dogs={dogs} />
    </section>
  )
}

export default Favorites
