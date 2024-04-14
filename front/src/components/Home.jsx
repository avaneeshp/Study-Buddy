import React from 'react';
import { Button } from 'flowbite-react';
import yourImage from '../assets/logoDump/mascotNoBG.png'; // Replace with your actual image import

function Home() {

    const gradientStyle = {
        background: 'linear-gradient(90deg, #000026 0%, #2c3e50 50%, #4c669f 100%)', // Ensures the component takes at least the full height of the viewport
        padding: '100px 0' // Adds padding at the top and bottom of the entire component
      };

  return (
    <div style={gradientStyle} className="min-h-screen flex items-center justify-center text-white">
      <div style={{ maxWidth: '1200px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', padding: '20px' }}>
        {/* Image Section */}
        <div style={{ flex: 1 }}>
          <img src={yourImage} alt="Effortless learning" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>

        {/* Text Section */}
        <div style={{ flex: 1, padding: '0 20px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Effortless Studying</h1>
          <h1 className="powerful-results" style={{ fontSize: '2.5rem', fontWeight: 'bold'}}>Powerful Results</h1>
          <p style={{ marginTop: '20px', fontSize: '1.25rem' }}>
            Introducing your new tutor! See how you can learn a semester's worth of content instantly with the power of AI. No cheats, no hacks, it's just you and your  
              {" "}<span style={{
                background: 'linear-gradient(to right, #F0E2B6 0%, #f8f8ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold'  // Optional, for added emphasis
              }}>
              StudyBuddy.
            </span>
          </p>
          <div style={{ width: '100%', display: 'flex', marginLeft: '10px', marginTop: '40px' }}>
            <Button className="try-it-free-btn" href='/feature'>
              Study Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;