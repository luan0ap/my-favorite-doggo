import React from 'react'
import { Outlet } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import './MainLayout.css'

import HomeIcon from '@mui/icons-material/Home'
import StarIcon from '@mui/icons-material/Star'
import Button from 'components/common/Button/Button.jsx'

const queryClient = new QueryClient()

const MainLayout = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='main-container'>
        <header className='header'>
          <nav className='header_navigation'>
            <Button to='/'>Home <HomeIcon /></Button>
            <Button to='/favorites'>Favorites <StarIcon /></Button>
          </nav>
        </header>

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
