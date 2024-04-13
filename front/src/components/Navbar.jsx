import { Button, Navbar } from "flowbite-react";
import navbarLogo from "../assets/navbarLogo.png";
import "../App.css"

function Component() {
  return (
    <Navbar style={{ backgroundColor: '#000026' }}>
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
