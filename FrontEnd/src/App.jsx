import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateForm from './pages/CreateForm.jsx'
import EditForm from './pages/EditForm.jsx'

function App() {

  return (
    <>
      <header>
        <ul>
          <li><Link to={'/'}>Inicio</Link></li>
          <li><Link to={'/createForm'}>Crear Tarea</Link></li>
        </ul>
      </header>
      <section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createForm' element={<CreateForm />} />
          <Route path='/editForm/:id' element={<EditForm />} />
        </Routes>
      </section>
    </>
  )
}

export default App
