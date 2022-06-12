import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Button.css'

import { getComputedStyle, getStyleVariable } from 'utils'

const Button = ({
  bgColor,
  height,
  width,
  onClick,
  children,
  to,
  className = '',
  borderRadius = '5px',
  borderColor = 'secondary',
  color = 'secondary'
}) => {
  const _color = getStyleVariable(getComputedStyle(), `--${color}`).trim()
  const _borderColor = getStyleVariable(getComputedStyle(), `--${borderColor}`).trim()
  const _backgroundColor = getStyleVariable(getComputedStyle(), `--${bgColor}`).trim()

  if (typeof to === 'string' && to.length > 0) {
    return (
      <Link
        className={`button ${className}`}
        style={{
          borderRadius,
          color: _color ? `rgb(${_color})` : color,
          borderColor: _borderColor ? `rgb(${_borderColor})` : color,
          backgroundColor: _backgroundColor ? `rgb(${_backgroundColor})` : color
        }}
        to={to}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      style={{
        borderRadius,
        height,
        width,
        color: _color ? `rgb(${_color})` : color,
        borderColor: _borderColor ? `rgb(${_borderColor})` : color,
        backgroundColor: _backgroundColor ? `rgb(${_backgroundColor})` : color
      }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string
}

Button.defaultProps = {
  borderColor: 'secondary',
  color: 'secondary',
  borderRadius: '5px'
}

export default Button
