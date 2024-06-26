import React from 'react'
import Navbar from './components/Navbar'
import Container from './components/Container'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-[#0E1630]'>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <Container>
        <Outlet />
      </Container>
      <hr />
      <Footer />
    </div>
  )
}

export default App