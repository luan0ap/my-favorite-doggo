import React from 'react'
import PropTypes from 'prop-types'

import './DogsList.css'

import DogsCard from 'components/Dogs/DogsCard/DogsCard.jsx'
function DogsList ({ dogs }) {
  return (
    <article className='dogs-list'>
      <ul className='dogs-list_list'>
        {
          dogs.map(({ data, status }, index) => {
            return (
              <li key={index}>
                <DogsCard status={status} data={data} />
              </li>
            )
          })
        }
      </ul>
    </article>
  )
}

DogsList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.shape({ url: PropTypes.string.isRequired }),
    status: PropTypes.string.isRequired
  })).isRequired
}

DogsList.defaultProps = {}

export default DogsList
