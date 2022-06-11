import React, { createContext, useState } from 'react'
import { DogsStorage } from 'services/Storage/Dogs'

const dogsStorage = new DogsStorage('luan0ap/dogs')

const DogsStorageContext = createContext()

const DogsStorageProvider = ({ children }) => {
  const [dogs, setDogs] = useState(dogsStorage.getAll())

  return (
    <DogsStorageContext.Provider
      value={{
        dogs,
        setDogs: (dog) => {
          dogsStorage.set(dog)
          setDogs([...dogs, dog])
        }
      }}
    >
      {children}
    </DogsStorageContext.Provider>
  )
}

export { DogsStorageProvider, DogsStorageContext }
