import React from 'react'; 
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { PiPhoneCall } from 'react-icons/pi';


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div id='Contact' className='bg-[#6C63FF] bg-opacity-60 shadow-xl mx-4 md:mx-16 lg:mx-32 mb-8 p-6
     sm:p-8 md:p-12 rounded-lg text-white m-5 w-auto'>
     
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center'>
        {/* Left Section: Title and Footer Text */}
        <div className='text-center sm:text-left ml-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2'>Contact</h1>
        <h3 className='text-lg sm:text-xl md:text-2xl font-normal mb-4'>Feel Free to Reach Out!</h3>
        </div>
        
        {/* Right Section: Contact Info List */}
        <ul className='space-y-4 text-sm sm:text-base md:text-lg'>
          <li className='flex gap-3 items-center'>
            <MdOutlineEmail size={24} />
            <a href="mailto:adnanali6030786@gmail.com" className="hover:underline">adnanali6030786@gmail.com</a>
          </li>
          <li className='flex gap-3 items-center'>
            <CiLinkedin size={24} />
            <a href="https://www.linkedin.com/in/adnan-ali-6b81912ab" target="_blank" rel="noopener noreferrer" className="hover:underline">Linkedin/adnan-ali</a>
          </li>
          <li className='flex gap-3 items-center'>
            <FaGithub size={24} />
            <a href="https://github.com/adnan-ali7" target="_blank" rel="noopener noreferrer" className="hover:underline">Github/adnan-ali7</a>
          </li>
          <p className="text-sm sm:text-base">&copy; {currentYear} Adnan Ali. All Rights Reserved.</p>
        </ul>
        
      </div>
    </div>
  );
}

export default Footer;
