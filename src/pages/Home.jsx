import React from 'react'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div>
        <HeroSection />
      </div>
      <div>
        <Projects />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  )
}

export default Home