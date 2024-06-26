import React from 'react'
import heroImage from "../assets/dyM.jpg"
import resume from "../assets/resume.pdf"
const HeroSection = () => {

  const handleDownload = () => {
    const fileName = resume;
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    link.click();
  }
  return (
    <section className=' w-full h-[90vh] flex md:justify-between justify-center md:items-center flex-wrap-reverse mt-4 py-4'>
      <div className='md:w-[47%] w-full md:text-left text-center'>
        <div>
          <div className='text-green-400 text-2xl md:text-3xl'>Hello👋</div>
          <br />
          <div className='text-3xl md:text-4xl font-semibold text-white'>I'm Dammar Singh Rana</div>
          <div className='text-[#999999] text-xl'>Frontend Developer👨‍💻</div>
        </div>
        <div>
          <br />
          <p className='text-md text-white' style={{ textAlign: "justify" }}>
            Hi there. My name is Dammar Singh Rana. I am a frontend developer.
            I am working with HTML, CSS, JS,ReactJS, Tailwind and Bootstrap. I have 2+ years experience of frontend developement.
          </p>
        </div>
        <br />
        <div>
          <button onClick={handleDownload} className='px-4 py-2 bg-green-400 rounded-full tex-white font-semibold'>Download Resume</button>
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

export default HeroSection