import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Contact } from './pages/Contact'
import { CourseList } from './pages/CourseList'
import { CourseInfo } from './pages/CourseInfo'
import { CourseClass } from './pages/CourseClass'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="sobre" element={<About />}/>
        <Route path="login" element={<Login />}/>
        <Route path="registro" element={<Register />}/>
        <Route path="contato" element={<Contact />}/>
        <Route path="cursos" element={<CourseList />}/>
        <Route path="curso/" element={<CourseInfo />}/>
        <Route path="curso/aulas" element={<CourseClass />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
