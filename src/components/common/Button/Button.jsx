import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Button.css'

import { getComputedStyle, getStyleVariable } from 'utils'

const Button = ({
  borderColor = 'secondary',
  color = 'secondary',
  bgColor = 'transparent',
  height,
  width,
  onClick,
  children,
  to,
  className = '',
  borderRadius = '5px'
}) => {
  const _color = getStyleVariable(getComputedStyle(), `--${color}`).trim() || color
  const _borderColor = getStyleVariable(getComputedStyle(), `--${borderColor}`).trim() || borderColor
  const _backgroundColor = getStyleVariable(getComputedStyle(), `--${bgColor}`).trim() || bgColor

  if (typeof to === 'string' && to.length > 0) {
    return (
      <Link
        className={`button ${className}`}
        style={{
          borderRadius,
          color: _color,
          borderColor: _borderColor,
          backgroundColor: _backgroundColor
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
        color: _color,
        borderColor: _borderColor,
        backgroundColor: _backgroundColor
      }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  to: PropTypes.string,
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
  onClick: PropTypes.func,
  className: PropTypes.string,
  bgColor: PropTypes.string
}

Button.defaultProps = {
  borderColor: 'secondary',
  color: 'secondary'
}

export default Button
