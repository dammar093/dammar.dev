import React from 'react'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Techonologies from '../components/Techonologies'

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
        <Techonologies />
      </div>
      <div className='pb-4'>
        <Contact />
      </div>
    </div>
  )
}

export default Home