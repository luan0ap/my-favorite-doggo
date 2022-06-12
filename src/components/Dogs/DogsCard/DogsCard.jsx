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

const DogsCard = ({ status, data }) => {
  if (status === 'loading') {
    return (
      <div className='dogs-card'>
        <div className='dogs-card__loading'>Loading...</div>
      </div>
    )
  }

  const { favorite, unfavorite } = useContext(DogsFavoriteStorageContext)
  const mediaElement = getMediaElementByFormat({ data })

  if (mediaElement === null) {
    return null
  }

  return (
    <div className='dogs-card'>
      {
       mediaElement
      }
      <div className='dogs-card__favorite'>
        <Button
          bgColor='secondary'
          color='primary'
          className='button--favorite'
          onClick={() => data.favorite === true ? unfavorite({ data }) : favorite({ data })}
        >
          <span>Favorite</span>{data.favorite === true ? <Icon fontSize='medium'>star</Icon> : <Icon fontSize='medium'>star_border</Icon>}
        </Button>
      </div>
    </div>
  )
}

DogsCard.propTypes = {
  status: PropTypes.string,
  data: PropTypes.shape({
    url: PropTypes.string
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

DogsCard.defaultProps = {}

export default DogsCard
