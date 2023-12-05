import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/home'
import Login from '../containers/login'
import Register from '../containers/register'
import PrivateRoute from './private-routes'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" exact />
        </Route>
      </Routes>
    </Router>
  )
}
export default MyRoutes
