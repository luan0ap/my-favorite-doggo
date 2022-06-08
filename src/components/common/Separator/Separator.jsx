import React from 'react'
import PropTypes from 'prop-types'
import './Separator.css'

const Separator = ({
  color,
  width,
  height,
  className
}) => (
  <hr
    style={{
      backgroundColor: color && `var(--${color})`,
      width,
      height
    }}
    className={`separator ${className}`}
  />
)

Separator.propTypes = {}

Separator.defaultProps = {}

export default Separator
