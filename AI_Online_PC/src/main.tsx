/*
 * @Date: 2023-07-25 09:21:23
 * @Author: Bruce Hsu
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'

// Custom Imports
import './index.css'
import Home from './containers/Home'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Home />
  </React.StrictMode>,
)
