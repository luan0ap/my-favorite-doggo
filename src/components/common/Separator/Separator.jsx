import React from 'react'
import PropTypes from 'prop-types'
import './Separator.css'

const Separator = ({
  color,
  width,
  height
}) => (
  <hr
    style={{
      backgroundColor: `var(--${color})`,
      width,
      height
    }}
    className='separator'
  />
)

Separator.propTypes = {}

Separator.defaultProps = {}

export default Separator
