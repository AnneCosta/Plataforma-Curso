import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="sobre" element={<About />}/>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
