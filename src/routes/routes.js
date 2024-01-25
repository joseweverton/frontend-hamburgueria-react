import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Product, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-routes'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Product />} path="/produtos" />
          <Route element={<Cart />} path="/carrinho" />
        </Route>

        <Route element={<PrivateRoute isAdmin />}>
          <Route element={<Admin />} path="/pedidos" />
        </Route>
      </Routes>
    </Router>
  )
}
export default MyRoutes
