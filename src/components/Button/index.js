import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

const Button = ({ children }) => {
  return <ContainerButton>{children}</ContainerButton>
}

export default Button

Button.propTypes = { children: PropTypes.string }
