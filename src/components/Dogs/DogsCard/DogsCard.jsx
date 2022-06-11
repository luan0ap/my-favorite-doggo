import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import './DogsCard.css'

import Button from 'components/common/Button/Button.jsx'
import { Icon } from '@mui/material'

import { DogsStorageContext } from 'context/DogsStorage'

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

const DogsCard = ({ status, data, isFavorite }) => {
  if (status === 'loading') {
    return (
      <div className='dogs-card'>
        <div className='dogs-card__loading'>Loading...</div>
      </div>
    )
  }

  const { setDogs } = useContext(DogsStorageContext)
  const format = getFileFormat(data.url)
  const extension = fileExtension(data.url)

  if (format === 'video') {
    return (
      <div className='dogs-card'>
        <video className='dogs-card__media' autoPlay loop muted>
          <source src={data.url} type={`video/${extension}`} />
        </video>
        <div className='dogs-card__favorite'>
          <Button
            bgColor='secondary'
            color='primary'
            className='button--favorite'
            onClick={() => setDogs({ data: { ...data, favorite: true } })}
          >
            <span>Favorite</span> <Icon fontSize='medium'>star</Icon>
          </Button>
        </div>
      </div>
    )
  }

  if (format === 'image') {
    return (
      <div className='dogs-card'>
        <img className='dogs-card__media' src={data.url} type={`image/${extension}`} alt='A dog' />
        <div className='dogs-card__favorite'>
          <Button
            bgColor='secondary'
            color='primary'
            className='button--favorite'
            onClick={() => setDogs({ data: { ...data, favorite: true } })}
          >
            <span>Favorite</span> <Icon fontSize='medium'>star</Icon>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className='dogs-card'>
      <div className='dogs-card__loading'>Unknown format</div>
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
