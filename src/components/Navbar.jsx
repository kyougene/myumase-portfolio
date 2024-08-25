import React, { useState } from 'react';
import logo from "../assets/logo.png"
import instagram from "../assets/instagram.svg"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-2 fixed w-full z-10 backdrop-blur-sm  bg-transparent">
      <div className="flex w-full justify-end md:justify-between items-center">
        {/* Logo (visible on desktop) */}
        <Link to="/" className="hidden md:block w-1/6 h-1/3">
            <img src={logo} />
        </Link>

        {/* Links (hidden on mobile) */}
        <div className="hidden md:flex text-xl text-black space-x-6 mr-12">
          <Link to="/about" className="hover:text-white" style={{
              "fontFamily":  'Katibeh, serif' 
            }}>ABOUT</Link>
          <Link to="/work" className="hover:text-white" style={{
              "fontFamily":  'Katibeh, serif' 
            }}>WORK</Link>
          <Link to="/gallery" className="hover:text-white" style={{
              "fontFamily":  'Katibeh, serif' 
            }}>GALLERY</Link>
          <a href="https://myu12.base.ec/" target='_blank' className="hover:text-white" style={{
              "fontFamily":  'Katibeh, serif' 
            }}>SHOP</a>
          <a href="https://www.instagram.com/myumase/" target='_blank'>
            <img src={instagram} alt="instagram logo" />
          </a>
        </div>

        {/* Hamburger Menu Icon (visible on mobile) */}
        <div className="md:hidden h-[5vh] bg-transparent">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (slides down/up based on isOpen) */}
      <div
        className={`md:hidden bg-transparent fixed top-0 left-0 w-full backdrop-blur-lg text-white transform ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out`}
        style={{ zIndex: -1 }}
      >
        <div className="flex flex-col items-center space-y-2 px-2 py-4 mt-8">
            <Link to="/" className="hover:text-white" style={{
                  "fontFamily":  'Katibeh, serif' 
                }}>HOME</Link>
            <Link to="/about" className="hover:text-gray-300 mb-2" style={{
                  "fontFamily":  'Katibeh, serif' 
                }}>ABOUT</Link>
            <Link to="/work" className="hover:text-gray-300 mb-2" style={{
                  "fontFamily":  'Katibeh, serif' 
                }}>WORK</Link>
            <Link to="/gallery" className="hover:text-gray-300 mb-2" style={{
                  "fontFamily":  'Katibeh, serif' 
                }}>GALLERY</Link>
            <a href="https://myu12.base.ec/" target='_blank' className="hover:text-gray-300" style={{
                  "fontFamily":  'Katibeh, serif' 
                }}>SHOP</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
