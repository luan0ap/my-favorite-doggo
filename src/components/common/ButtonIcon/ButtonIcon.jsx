import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './ButtonIcon.css'

import { getComputedStyle, getStyleVariable } from 'utils'

const ButtonIcon = ({
  borderColor = 'secondary',
  color = 'secondary',
  height,
  width,
  onClick,
  children,
  to
}) => {
  const _color = getStyleVariable(getComputedStyle(), `--${color}`).trim() || color
  const _borderColor = getStyleVariable(getComputedStyle(), `--${borderColor}`).trim() || borderColor

  if (typeof to === 'string' && to.length > 0) {
    return (
      <Link
        className='button'
        style={{
          color: _color,
          borderColor: _borderColor
        }}
        to={to}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className='button'
      onClick={onClick}
      style={{
        color: _color,
        height,
        width,
        borderColor: _borderColor
      }}
    >
      {children}
    </button>
  )
}

ButtonIcon.propTypes = {
  border: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  radius: PropTypes.string,
  onClick: PropTypes.func
}

ButtonIcon.defaultProps = {}

export default ButtonIcon
