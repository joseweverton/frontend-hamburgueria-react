import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../containers/login'
import Register from '../containers/register'

function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </Router>
  )
}
export default myRoutes
