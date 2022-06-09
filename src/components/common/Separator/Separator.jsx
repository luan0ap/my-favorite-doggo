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

Separator.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  className: PropTypes.string
}

Separator.defaultProps = {}

export default Separator
