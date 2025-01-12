
import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';

function Navbar() {
    const [menu, setMenu] = useState(false); // Renamed from openMenu to setMenu
    const [showMenu, setShowMenu] = useState(true);

    // Handle toggle of menu visibility
    const toggleMenu = () => {
        setMenu(!menu);
        setShowMenu(!showMenu);
    };

    return (
        <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
            <span className="text-2xl font-bold tracking-wide mt-3">ADNAN</span>
            
            {/* Menu items container */}
            <ul 
                className={`${menu ? 'block' : 'hidden'} mx-auto py-2 mt-4 font-semibold md:mt-5 px-2 rounded-xl 
                bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
            >
                
                <a href="#Home">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">Home</li>
                </a>
                <a href="#About">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
                </a>
                <a href="#Skills">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">Skills</li>
                </a>
                <a href="#Projects">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
                </a>
                <a href="#Contact">
                    <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
                </a>
            </ul>
            
            {/* Toggle Menu Icon */}
            {showMenu ? (
                <RiMenu2Line
                size={30} 
                className="md:hidden absolute right-10 top-6 transition-all duration-300" 
                onClick={toggleMenu}
                />
                
            ) : (
                <RiCloseLine
                size={30} 
                className="md:hidden absolute right-10 top-6 transition-all duration-300" 
                onClick={toggleMenu}
                />
                            
                  )}
        </nav>
    );
}

export default Navbar;
