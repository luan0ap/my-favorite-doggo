import React from 'react'
import { Outlet } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { DogsStorageProvider } from 'context/DogsStorage.jsx'

import './MainLayout.css'

import { Icon } from '@mui/material'

import Button from 'components/common/Button/Button.jsx'
import Separator from 'components/common/Separator/Separator.jsx'

import EventBus from 'utils/EventBus.js'

const queryClient = new QueryClient()

const emitRefreshDogs = () => EventBus.$emit('DOGSLIST_REFRESH')

const MainLayout = () => (

  <React.StrictMode>
    <DogsStorageProvider>
      <QueryClientProvider client={queryClient}>
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

              <div>
                <Button onClick={emitRefreshDogs}>
                  <span className='desktop-only'>Refresh</span> <Icon>refresh_outlined</Icon>
                </Button>
              </div>
            </nav>
          </header>

          <Separator className='main-container__separator' />

          <main className='container'>
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </DogsStorageProvider>
  </React.StrictMode>
)

export default MainLayout
