import PropTypes from 'prop-types'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute({ element, ...rest }) {
  const user = localStorage.getItem('codeBurger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  return <Outlet {...rest} element={element} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
