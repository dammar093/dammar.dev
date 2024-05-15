import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [menu, setmenu] = useState(true)
  return (
    <header className='overflow-hidden w-full bg-[#0E1630] shadow-lg '>
      <Container >
        <div className='w-full flex justify-between gap-4 items-center h-14 relative'>
          <div>
            <Link className='font-["Yellowtail"] text-white text-2xl md:text-3xl'><span className='text-green-400'>D</span>ammar <span className='text-green-400'>S</span>ingh <span className='text-green-400'>R</span>ana</Link>
          </div>
          <div className='md:flex gap-6 items-center hidden'>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "text-green-400 text-md font-semibold" : "text-white text-md font-semibold hover:text-green-400")}>
              <span>Home</span>
            </NavLink>
            <NavLink to={"projects"} className={({ isActive }) => (isActive ? "text-green-400 text-md font-semibold" : "text-white text-md font-semibold hover:text-green-400")}>
              <span>Projects</span>
            </NavLink>
            <NavLink to={"about"} className={({ isActive }) => (isActive ? "text-green-400 text-md font-semibold" : "text-white text-md font-semibold hover:text-green-400")}>
              <span>About</span>
            </NavLink>
            <NavLink to={"contact"} className={({ isActive }) => (isActive ? "text-green-400 text-md font-semibold" : "text-white text-md font-semibold hover:text-green-400")}>
              <span>Contact</span>
            </NavLink>

            <div className='flex gap-6 items-center'>
              <Link className={"text-white text-xl font-semibold hover:text-green-400"} target='_blank' to={"https://github.com/dammar093"}>
                <span><FaGithub /></span>
              </Link>
              <Link className={"text-white text-xl font-semibold hover:text-green-400"} target='_blank' to={"https://www.linkedin.com/in/dammar-rana-983077238/"}>
                <span><FaLinkedin /></span>
              </Link>
            </div>
          </div>
          <div className=' w-8 h-8 md:hidden flex justify-center items-center border border-dashed'>
            {
              menu ? <MdMenu className='text-xl transition-all delay-200 text-white' onClick={() => {
                setmenu(false)
              }
              } /> : <MdClose className='text-xl transition-all delay-200 text-white' onClick={() => {
                setmenu(true)
              }} />
            }
          </div>
        </div>
        {
          !menu ? <div className='w-full h-screen bg-slate-950 md:hidden flex items-center justify-center flex-col gap-10 z-30 absolute top-14 left-0 right-0'>
            <div>
              <NavLink to={"/"} className={'text-xl text-white hover:text-green-400'}
                onClick={() => setmenu(prev => !prev)}
              ><span>Home</span></NavLink>
            </div>
            <div>
              <NavLink to={"projects"} className={'text-xl text-white hover:text-green-400'}
                onClick={() => setmenu(prev => !prev)}
              ><span>Projects</span></NavLink>
            </div>
            <div>
              <NavLink to={"about"} className={'text-xl text-white hover:text-green-400'}
                onClick={() => setmenu(prev => !prev)}
              ><span>About</span></NavLink>
            </div>
            <div>
              <NavLink to={"contact"} className={'text-xl text-white hover:text-green-400'}
                onClick={() => setmenu(false)}
              ><span>Contact</span></NavLink>
            </div>
            <div className='flex gap-4'>
              <Link className={"text-white text-2xl font-semibold hover:text-green-400"} target='_blank' to={"https://github.com/dammar093"}>
                <span><FaGithub /></span>
              </Link>
              <Link className={"text-white text-2xl font-semibold hover:text-green-400"} target='_blank' to={"https://www.linkedin.com/in/dammar-rana-983077238/"}>
                <span><FaLinkedin /></span>
              </Link>
            </div>
          </div> : ""
        }
      </Container>
    </header >
  )
}

export default Navbar