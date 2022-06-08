import React from 'react'
import { Outlet } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import './MainLayout.css'

import HomeIcon from '@mui/icons-material/Home'
import StarIcon from '@mui/icons-material/Star'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'

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
            <Button to='/'>Home <HomeIcon /></Button>
            <Button to='/favorites'>Favorites <StarIcon /></Button>
            <Button onClick={emitRefreshDogs}>Refresh <RefreshOutlinedIcon /></Button>
          </nav>
        </header>

        <Separator color='secondary' width='25%' height='1px' />

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
