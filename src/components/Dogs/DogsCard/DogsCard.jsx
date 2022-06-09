import React, {} from 'react'
import PropTypes from 'prop-types'

import './DogsCard.css'

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
  const extension = fileExtension(url)

  if (imagesFormat.includes(extension)) {
    return 'image'
  }

  if (videosFormat.includes(extension)) {
    return 'video'
  }

  return 'unknown'
}

const DogsCard = ({ status, data }) => {
  if (status === 'loading') {
    return (
      <div className='dogs-card'>
        <div className='dogs-card_loading'>Loading...</div>
      </div>
    )
  }

  const format = getFileFormat(data.url)
  const extension = fileExtension(data.url)

  if (format === 'video') {
    return (
      <div className='dogs-card'>
        <video className='dogs-card_media' autoPlay loop muted>
          <source src={data.url} type={`video/${extension}`} />
        </video>
      </div>
    )
  }

  if (format === 'image') {
    return (
      <div className='dogs-card'>
        <img className='dogs-card_media' src={data.url} type={`image/${extension}`} alt='A dog' />
      </div>
    )
  }

  return (
    <div className='dogs-card'>
      <div className='dogs-card_loading'>Unknown format</div>
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
