import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const NavbarMain = () => {
  return (
    <div className='p-6'>
      <Navbar
        fluid
        rounded
        className='bg-[#171718] border-2 border-[#28e98c] rounded-full shadow-lg p-6 items-center shadow-dgreen text-dgreen'
      >
        {/* Branding Section */}
        <Navbar.Brand href="/" className="flex items-center">
          <span className="text-4xl font-bold p-2 px-4">Parth</span>
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle className="text-[#28e98c] hover:text-green-400" />
        

        {/* Navbar Links */}
        <Navbar.Collapse className="space-x-4  p-4">
          <a href="#Home" className="hover:text-green-400 transition-colors text-lg">
            Home
          </a>
          <a href="#Tech" className="hover:text-green-400 transition-colors text-lg">
            Tech-Stack
          </a>
          <a href="#Projects" className="hover:text-green-400 transition-colors text-lg">
            Projects
          </a>
          <a href="#Contact" className="hover:text-green-400 transition-colors text-lg">
            Contact
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
