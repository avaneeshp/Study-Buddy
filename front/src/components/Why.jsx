import React from 'react';
import { Button } from 'flowbite-react';
import mich from '../assets/universities/umich.png';
import gtech from '../assets/universities/gtech.png';
import msu from '../assets/universities/msu.png';
import penn from '../assets/universities/upenn.png';
import berk from '../assets/universities/harvard.jpg';



function Why() {
  const contentBoxStyle = {
    background: 'linear-gradient(to bottom, #ffffff, #f8f8ff)', // White to off-white gradient
    borderRadius: '15px', // Rounded corners
    padding: '2rem', // Padding inside the box
    margin: '2rem auto', // Margin for spacing around the box
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // A subtle shadow for depth
    color: '#000', // Text color for readability
    maxWidth: '1200px', // Max width of the content box
  };

  // Define styles for circular image placeholders
  const circleStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    display: 'inline-block',
    margin: '10px',
  };

  return (
    <div className="why-component" style={{ background: 'linear-gradient(90deg, #000026 0%, #2c3e50 50%, #4c669f 100%)', minHeight: '100vh', padding: '4rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Content Box */}
      <div style={contentBoxStyle}>
        {/* Text Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000', textAlign: 'left' }}>Trusted by students and institutions worldwide</h2>
        </div>
  
        {/* Circular Image Placeholders */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          {[...Array(5)].map((_, index) => (
            <div key={index} style={circleStyle}></div> // Render each circle using map
          ))}
        </div>
        
        {/* Statistics */}
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '2rem 0' }}>
          {/* ... Your statistics content ... */}
        </div>

        {/* Call to Action and Additional Info */}
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '1rem' }}>Still don't buy the hype?</h3>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '2rem' }}>See what users have to say.</p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Button color="light" href="/feature">Lets Study!</Button>
          <span style={{ fontSize: '1rem', color: '#333' }}>What are you waiting for, Lets Go!</span>
        </div>
      </div>
    </div>
  );
}

export default Why;
