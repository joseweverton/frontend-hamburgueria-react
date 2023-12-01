import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Login from './containers/login'
import Register from './containers/register'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Register />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </>
)
