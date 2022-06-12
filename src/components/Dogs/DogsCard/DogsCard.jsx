import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import './DogsCard.css'

import Button from 'components/common/Button/Button.jsx'
import { Icon } from '@mui/material'

import { DogsFavoriteStorageContext } from 'context/DogsFavoriteStorage'

const fileExtension = (url = '') => url.split('.').pop()

const imagesFormat = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  'svg'
]

const videosFormat = [
  'mp4',
  'webm',
  'ogg'
]

const getFileFormat = (url = '') => {
  const extension = typeof url === 'string' ? fileExtension(url.toLowerCase()) : ''

  if (imagesFormat.includes(extension)) {
    return 'image'
  }

  if (videosFormat.includes(extension)) {
    return 'video'
  }

  return 'unknown'
}

const getMediaElementByFormat = ({ data = {} } = {}) => {
  const format = getFileFormat(data.url)
  const extension = fileExtension(data.url)

  if (format === 'video') {
    return (
      <video className='dogs-card__media' autoPlay loop muted>
        <source src={data.url} type={`video/${extension}`} />
      </video>
    )
  }

  if (format === 'image') {
    return (
      <img className='dogs-card__media' src={data.url} alt={data.name} />
    )
  }

  return null
}

const FavoriteButton = ({ data } = {}) => {
  const { favorite, unfavorite } = useContext(DogsFavoriteStorageContext)

  if (data.favorite === true) {
    return (
      <Button
        borderColor='primary'
        color='primary'
        className='button--favorite'
        onClick={() => {
          unfavorite({ data })
          data.favorite = false
        }}
      >
        <span>Unfavorite</span> <Icon fontSize='medium'>star</Icon>
      </Button>
    )
  }

  return (
    <Button
      borderColor='primary'
      color='primary'
      className='button--favorite'
      onClick={() => {
        favorite({ data })
        data.favorite = true
      }}
    >
      <span>Favorite</span><Icon fontSize='medium'>star_border</Icon>
    </Button>
  )
}

const DogsCard = ({ status, data, className = '' }) => {
  if (status === 'loading') {
    return (
      <div className={`dogs-card ${className}`}>
        <div className='dogs-card__loading'>Loading...</div>
      </div>
    )
  }

  const mediaElement = getMediaElementByFormat({ data })

  if (mediaElement === null) {
    return null
  }

  return (
    <div className={`dogs-card ${className}`}>
      {
       mediaElement
      }
      <div className='dogs-card__favorite'>
        <FavoriteButton data={data} />
      </div>
    </div>
  )
}

DogsCard.propTypes = {
  status: PropTypes.string,
  data: PropTypes.shape({
    url: PropTypes.string
  }),
  className: PropTypes.string
}

DogsCard.defaultProps = {}

export default DogsCard
