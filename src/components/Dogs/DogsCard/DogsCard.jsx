import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './DogsCard.css'

const DogsCard = ({ status, data }) => {
  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <p>{data.url}</p>
  )
}

DogsCard.propTypes = {}

DogsCard.defaultProps = {}

export default DogsCard
