import { Button, Navbar } from "flowbite-react";
import React from 'react';
import navbarLogo from "../assets/logoDump/navbarLogo.png";
import "../App.css";

function Component() {
  // Define the gradient style as a constant
  const gradientBackground = {
    backgroundImage: 'linear-gradient(to right, #000026 40%, rgb(136, 19, 136) 100%)'
  };

  return (
    <Navbar style={gradientBackground} className="w-full z-50">
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
