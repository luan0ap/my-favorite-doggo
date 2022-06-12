import React, { useContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { DogsFavoriteStorageProvider } from 'context/DogsFavoriteStorage.jsx'
import { DogsQueryProvider, DogsQueryContext } from 'context/DogsQuery.jsx'

import './MainLayout.css'

import { Icon } from '@mui/material'

import Button from 'components/common/Button/Button.jsx'
import Separator from 'components/common/Separator/Separator.jsx'

const RefresButton = () => {
  const { refresh } = useContext(DogsQueryContext)

  return (
    <Button onClick={refresh}>
      <span className='desktop-only'>Refresh</span> <Icon>refresh_outlined</Icon>
    </Button>
  )
}

const MainLayout = () => {
  const location = useLocation()

  return (
    <React.StrictMode>
      <DogsFavoriteStorageProvider>
        <DogsQueryProvider>
          <div className='main-container'>
            <header className='header'>
              <nav className='header__navigation'>
                <div>
                  <Button to='/'>
                    <span className='desktop-only'>Home</span> <Icon>home</Icon>
                  </Button>
                </div>

                <div>
                  <Button to='/favorites'>
                    <span className='desktop-only'>Favorites</span> <Icon>star</Icon>
                  </Button>
                </div>

                {location.pathname === '/' ? <div> <RefresButton /> </div> : null}
              </nav>
            </header>

            <Separator className='main-container__separator' />

            <main className='container'>
              <Outlet />
            </main>
          </div>
        </DogsQueryProvider>
      </DogsFavoriteStorageProvider>
    </React.StrictMode>
  )
}

export default MainLayout
