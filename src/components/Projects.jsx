import React from 'react'
import data from '../data/data'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <section className='min-h-[300px]'>
      <h2 className='text-center text-white text-2xl md:text-3xl py-4 font-semibold uppercase'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 place-items-center'>
        {
          data.map(item => (
            <ProjectCard item={item} key={item.id} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects