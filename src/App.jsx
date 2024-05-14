import React from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='bg-slate-800'>
      <div className='sticky top-0 z-100'>
        <Navbar />
      </div>
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default App