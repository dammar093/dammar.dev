import React from 'react'
import heroImage from "../assets/dyM.jpg"
const HeroSection = () => {
  return (
    <section className=' w-full h-screen flex md:justify-between justify-center md:items-center flex-wrap-reverse'>
      <div className='md:w-[47%] w-full md:text-left text-center'>
        <div>
          <div className='text-green-400 text-2xl md:text-3xl'>Hello👋</div>
          <br />
          <div className='text-3xl md:text-4xl font-semibold text-white'>I'm Dammar Singh Rana</div>
          <div className='text-[#999999] text-xl'>Fontend Developer👨‍💻</div>
        </div>
        <div>
          <br />
          <p className='text-md' style={{ textAlign: "justify" }}>
            Hi there. My name is Dammar Singh Rana. I am a frontend developer.
            I am working with HTML,CSS,JS,React,Tailwind and Bootstrap. I have 2+ experience of frontend developement.
          </p>
        </div>
        <br />
        <div>
          <button className='px-4 py-2 bg-green-400 rounded-full tex-white font-semibold'>Download Resume</button>
        </div>
      </div>
      <div className='md:w-[47%] w-full flex items-center justify-center'>
        <div className='rounded-full w-[300px] h-[300px] md:h-[500px] md:w-[500px] '>
          <img className='h-full w-full rounded-full object-cover' src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection