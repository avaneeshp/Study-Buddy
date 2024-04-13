import React from 'react';
import { Button } from 'flowbite-react';

function Why() {
  // Inline styles for the gradient background if needed
  const gradientTextStyle = {
    background: 'linear-gradient(to right, #F0E2B6 0%, #f8f8ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className="why-component" style={{ background: 'linear-gradient(to bottom, #000026, #2c3e50, #f8f8ff)', minHeight: '100vh', color: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Trusted by students and institutions worldwide</h2>
      
      <div className="statistics" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '2rem 0' }}>
        <div>
          <span style={gradientTextStyle}>97%</span>
          <p>of users saw improvement</p>
        </div>
        <div>
          <span style={gradientTextStyle}>5 hrs</span>
          <p>a week reported saved</p>
        </div>
        <div>
          <span style={gradientTextStyle}>4.7/5</span>
          <p>rating by critics</p>
        </div>
      </div>

      <h3 style={{ fontSize: '1.5rem' }}>Still don't buy the hype?</h3>
      <p>See what users have to say.</p>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
        <Button color="light">Try it Free</Button>
        <img src="../assets/navbarLogo.png" alt="Click here arrow" style={{ marginLeft: '1rem' }} />
        <span style={{ marginLeft: '1rem' }}>Click here!</span>
      </div>
    </div>
  );
}

export default Why;
