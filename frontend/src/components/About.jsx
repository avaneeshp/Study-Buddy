// About.jsx
import React from 'react';

function About() {
  // Define the styles for this component
  const aboutStyle = {
    display: 'flex',           // Use flexbox for centering
    justifyContent: 'center',  // Center horizontally
    alignItems: 'center',      // Center vertically
    height: '100vh',           // Full viewport height
    color: 'white',            // Text color
    background: 'linear-gradient(to bottom, #000026, #2c3e50, #ffffff)', // Gradient background
    fontSize: '2rem',          // Font size
    fontWeight: 'bold'         // Font weight
  };

  return (
    <div style={aboutStyle}>
      Coming Soon
    </div>
  );
}

export default About;
