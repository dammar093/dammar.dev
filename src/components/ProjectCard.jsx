import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ item }) => {
  return (
    <div className='md:w-[300px] w-full my-2 p-4 bg-slate-800 rounded-md hover:scale-105 transition-all delay-100'>
      <div className='w-full'>
        <img className='rounded-md' src={item.coverImage} alt="" />
      </div>
      <div><h2 className='text-green-400 text-md font-semibold'>{item.title}</h2></div>
      <div className='text-white text-sm text-justify'>
        {item.desc}
      </div>
      <div className='my-2 flex items-center'>
        <Link target='_blank' to={item.live}><span className='px-4 py-1 text-white bg-green-400 rounded-full hover:bg-green-700'>Live</span></Link>

      </div>
    </div>
  )
}

export default ProjectCard