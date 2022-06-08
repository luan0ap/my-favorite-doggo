import React from 'react'
import { Outlet } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import './MainLayout.css'

import { Icon } from '@mui/material'

import Button from 'components/common/Button/Button.jsx'
import Separator from 'components/common/Separator/Separator.jsx'

import EventBus from 'utils/EventBus.js'

const queryClient = new QueryClient()

const emitRefreshDogs = () => EventBus.$emit('DOGSLIST_REFRESH')

const MainLayout = () => (

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='main-container'>
        <header className='header'>
          <nav className='header_navigation'>
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

        <Separator className='main-container_separator' />

        <main className='container'>
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  </React.StrictMode>
)

MainLayout.propTypes = {}

MainLayout.defaultProps = {}

export default MainLayout
