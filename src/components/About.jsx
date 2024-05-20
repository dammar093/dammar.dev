import React from 'react'
import heroImage from "../assets/dyM.jpg"
const About = () => {
  return (
    <section className=' w-full h-[90vh] flex md:justify-between justify-center md:items-center flex-wrap-reverse mt-4 py-4'>
      <div className='md:w-[47%] w-full md:text-left text-center'>
        <div>
          <br />
          <p className='text-md text-white' style={{ textAlign: "justify" }}>
            Hi there. My name is Dammar Singh Rana. I live in Laljhadi-04, Dnaga Jain Kanchanpur.
            I am studying BCA.
          </p>
        </div>
        <br />
        <div>
        </div>
      </div>
      <div className='md:w-[47%] w-full flex items-center justify-center'>
        <div className='rounded-full w-[280px] h-[280px] md:h-[450px] md:w-[450px] '>
          <img className='h-full w-full rounded-full object-cover' src={heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  )
}

export default About