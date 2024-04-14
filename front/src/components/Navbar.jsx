import { Button, Navbar } from "flowbite-react";
import React, { useState, useEffect } from 'react';
import navbarLogo from "../assets/navbarLogo.png";
import "../App.css"

function Component() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define the gradient style as a constant
  const gradientBackground = 'linear-gradient(90deg, #000026 0%, #2c3e50 50%, #4c669f 100%)';

  // Define navbar styles based on scroll state
  const navbarStyle = {
    transition: 'all 0.3s ease-in-out',
    backgroundColor: isScrolled ? '#2c3e50' : 'transparent',
    borderRadius: isScrolled ? '50px' : '0',  // Adjust this value for desired roundness
    boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
    border: isScrolled ? '2px solid white' : 'none',
    top: isScrolled ? '10px' : '0'  // Adds padding above the navbar when scrolled
  };

  return (
    <Navbar style={navbarStyle} className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center w-full">
        {/* Navbar Brand */}
        <Navbar.Brand href="/">
          <img src={navbarLogo} className="mr-3 h-20 sm:h-9" alt="Study Buddy Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">Study Buddy</span>
        </Navbar.Brand>

        {/* Flex container for Links and Button */}
        <div className="flex items-center pr-10">
          {/* Navbar Links */}
          <div className="flex list-none items-center px-10">
            <Navbar.Link href="/" className="nav-link text-xl text-white px-4 py-2 relative hover:text-white">Home</Navbar.Link>
            <Navbar.Link href="/about" className="nav-link text-xl text-white px-4 py-2 relative">About Us</Navbar.Link>
          </div>
          
          {/* Action Button */}
          <Button className="try-it-free-btn" href="/feature">Study Now!</Button>
        </div>

        {/* Responsive Navbar Toggle */}
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default Component;
