import { Button, Navbar } from "flowbite-react";
import React, {useState, useEffect} from 'react';
import navbarLogo from "../assets/navbarLogo.png";
import "../App.css"

function Component() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the state to true if scrolled more than 50px, for example
      setIsScrolled(window.scrollY > 50);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Navbar style={{ backgroundColor: '#000026' }} className={`fixed w-full z-50 transition-all duration-900 ease-in-out ${isScrolled ? 'rounded-full shadow-lg border-2 border-white' : 'rounded-none'}`}>
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
            <Navbar.Link href="#" className="nav-link text-xl text-white px-4 py-2 relative">Home</Navbar.Link>
            <Navbar.Link href="#" className="nav-link text-xl text-white px-4 py-2 relative">About Us</Navbar.Link>
          </div>
          
          {/* Action Button */}
          <Button>Study Now!</Button>
        </div>

        {/* Responsive Navbar Toggle */}
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default Component;
