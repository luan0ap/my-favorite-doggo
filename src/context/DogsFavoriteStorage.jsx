import React, { createContext, useState } from 'react'
import { DogsStorage } from 'services/Storage/Dogs'

const dogsStorage = new DogsStorage('@my-favorite-doggo/dogs-favorite')

const DogsFavoriteStorageContext = createContext()

const DogsFavoriteStorageProvider = ({ children }) => {
  const [dogs, setDogs] = useState(dogsStorage.getAll())
  const hasDog = ({ data } = {}) => dogs.some((dog) => data.url === dog.data.url)

  return (
    <DogsFavoriteStorageContext.Provider
      value={{
        dogs,
        favorite: ({ data } = {}) => {
          if (data && Object.keys(data).length > 0 && !hasDog({ data })) {
            dogsStorage.set({ data: { ...data, favorite: true } })
            setDogs([...dogs, { data: { ...data, favorite: true } }])
          }
        },

        unfavorite: ({ data } = {}) => {
          if (data && Object.keys(data).length > 0 && hasDog({ data })) {
            dogsStorage.remove(data)
            setDogs(dogs.filter((dog) => data.url !== dog.data.url))
          }
        }
      }}
    >
      {children}
    </DogsFavoriteStorageContext.Provider>
  )
}

export { DogsFavoriteStorageProvider, DogsFavoriteStorageContext }
