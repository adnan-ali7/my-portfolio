import React from 'react';
import image1 from "../../Images/image1.svg";

function About() {
  return (

    <div className='text-white md:flex overflow-hidden items-center md:flex-row
     bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12 m-5 h-3/6' id='About'>
      
      {/* Left Section (Image) */}
      <div className='w-full md:w-1/2 md:h-80'>
        <img className='w-full h-full object-cover rounded-lg' src={image1} alt='Photo of Adnan Ali' />
      </div>

      {/* Right Section (Text Content) */}
      <section className='w-full md:w-1/2 mt-6 md:mt-0 md:px-6'>
        <div className='m-auto'>
          <h2 className='text-2xl md:text-4xl font-bold mb-2 '>About Me</h2>
          
          <h1 className='text-xl md:text-2xl font-semibold leading-normal mb-4'>Front-End Developer</h1>
          <p className='text-sm md:text-md leading-relaxed text-justify'>
          Hi, I’m Adnan Ali, a passionate front-end developer based in Bhopal.
            I specialize in creating user-friendly websites using HTML, CSS, and JavaScript.
            I’m particularly interested in working with React and learning how to build interactive web applications.
            My journey as a developer began with online courses and personal projects,
            where I focused on building responsive websites and gaining hands-on experience.
            I’m constantly improving my skills by learning new tools and best practices in web development. I’m excited to contribute to the web development community and
            collaborate with other developers on meaningful projects.
          </p>
        </div>
      </section>
</div>
  );
}

export default About;
