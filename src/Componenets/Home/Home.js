
import React from 'react';
import image2 from "../../Images/image2.svg";
import TextChanger from '../../TextChanger/TextChanger';



function Home() {
  return (
    <div id='Home' className='text-white flex flex-col md:flex-row justify-between items-center p-6 md:p-20'>
      <div className='md:w-2/4 md:pt-10 px-4 md:px-0 '>
     
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter '>
       <TextChanger/>
        </h1>
        <p className='text-sm md:text-2xl tracking-tight mt-4 md:mt-6'>
          I'm a passionate front-end developer focused on creating responsive, user-friendly websites.
        </p>
        <button className='mt-5 md:mt-10 text-white py-2 px-6 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
        duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#6C63FF]'>
          <a href='#Contact'>Contact Me</a>
        </button>
      </div>
      <div className='w-full md:w-2/4 mt-6 md:mt-0'>
        <img className='w-full h-auto object-contain' src={image2} alt='Adnan' />
      </div>
    </div>
  );
}

export default Home;