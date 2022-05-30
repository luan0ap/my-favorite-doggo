import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({
  border,
  color,
  radius,
  height,
  width,
  onClick,
  children,
  to
}) => {
  if (typeof to === 'string' && to.length > 0) {
    return (
      <Link
        className={styles['button--link']}
        to={to}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{
        backgroundColor: color, 
        border,
        borderRadius: radius,
        height,
        width
      }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  border: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.element,
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

Button.defaultProps = {}

export default Button
