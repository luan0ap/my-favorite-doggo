import React from 'react'
import PropTypes from 'prop-types'

import './Home.css'

import DogsList from 'components/Dogs/DogsList/DogsList.jsx'

const Home = () => (
  <section className='home-page'>
    <DogsList />
  </section>
)

Home.propTypes = {}

Home.defaultProps = {}

export default Home
