import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";


const Navbar = () => {
  return (
    <header className='bg-slate-800 w-full h-14 '>
      <Container>
        <div className='w-full flex justify-between gap-4 items-center h-14'>
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
              <NavLink className={"text-white text-xl font-semibold hover:text-green-400"} target='_blank' to={"https://github.com/dammar093"}>
                <span><FaGithub /></span>
              </NavLink>
              <NavLink className={"text-white text-xl font-semibold hover:text-green-400"} target='_blank' to={"https://www.linkedin.com/in/dammar-rana-983077238/"}>
                <span><FaLinkedin /></span>
              </NavLink>
            </div>
          </div>
          <div className=' w-8 h-8 md:hidden flex justify-center items-center border border-dashed'>
            <MdMenu className='text-xl text-white' />
          </div>
        </div>
      </Container>
    </header >
  )
}

export default Navbar