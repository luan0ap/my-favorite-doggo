import React, { useContext } from 'react'

import { DogsStorageContext } from 'context/DogsStorage'

import './Favorites.css'

import DogsList from 'components/Dogs/DogsList/DogsList.jsx'

const Favorites = () => {
  const { dogs } = useContext(DogsStorageContext)

  const favoriteDogs = dogs.filter(({ data = {} }) => data.favorite === true)

  return (
    <section className='home-page'>
      <DogsList dogs={favoriteDogs} />
    </section>
  )
}

export default Favorites
