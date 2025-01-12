import React from 'react'
import image4 from './../../Images/image4.svg'

function ProjectCard({title, main, link}) {
  return (
    <div className='p-3 md:p-6 flex flex-col w-auto bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
        <img className='p-4' src={image4}/>
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
            {title}
        </h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2'>
             {main}
        </p>
    <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4 justify-center'>
    <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 font-semibold duration-300 hover:scale-105
          rounded-3xl bg-[#6C63FF]'>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </button>
    </div>
    </div>
  )
}

export default ProjectCard