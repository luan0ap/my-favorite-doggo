import React from 'react'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './MainLayout.module.css'
import Button from 'components/common/Button/Button.jsx'

// import Button from 'components/Button/Button.jsx'

const MainLayout = () => (
  <React.StrictMode>
    <div className={styles['main-container']}>
      <header className={styles.header}>
        <nav className={styles.header_navigation}>
          <Button to='/'>Home</Button>
          <Button to='/favorites'>Favorites</Button>
          <Button>Botão</Button>
        </nav>
      </header>

      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  </React.StrictMode>
)

MainLayout.propTypes = {}

MainLayout.defaultProps = {}

export default MainLayout
