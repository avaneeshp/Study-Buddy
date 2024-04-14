import React from 'react';
import { Button } from 'flowbite-react';
import mich from '../assets/universities/umich.png';
import gtech from '../assets/universities/gtech.png';
import msu from '../assets/universities/msu.png';
import penn from '../assets/universities/upenn.png';
import berk from '../assets/universities/berkley.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import bc2 from '../assets/testimonials/bc2.png'
import jjm from '../assets/testimonials/jjm.jpeg'



function Testimonial({ quote, author, authorImageSrc }) {
  const testimonialStyle = {
    margin: '1rem',
    padding: '1rem',
    borderLeft: '4px solid #1a8cd8',
    fontStyle: 'italic',
    maxWidth: '45%', // Adjusted for side by side layout
  };

  const authorStyle = {
    display: 'flex',
    alignItems: 'center', // Align image and author name vertically
    marginTop: '0.5rem',
  };

  const authorImageStyle = {
    width: '100px', // Set your desired image size
    height: '100px',
    borderRadius: '50%',
    marginRight: '10px',
    objectFit: 'cover', // Ensures the image covers the area without distortion
  };

  return (
    <blockquote style={testimonialStyle}>
      <p>"{quote}"</p>
      <div style={authorStyle}>
        <img src={authorImageSrc} alt={author} style={authorImageStyle} />
        <footer>{author}</footer>
      </div>
    </blockquote>
  );
}

function Statistic({ value, decimals, suffix, label }) {
  const numberStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #1a8cd8 0%, #4dabf7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline', // Required for background-clip to work
    transition: 'transform 0.3s ease-in-out',
    cursor: 'default', // Change cursor to indicate it's not a link
  };

  const handleMouseOver = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={{ textAlign: 'center', margin: '1rem' }}>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div
            style={numberStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isVisible ? (
              <CountUp end={value} duration={2.5} decimals={decimals} preserveValue />
            ) : (
              '0'
            )}
            {suffix}
          </div>
        )}
      </VisibilitySensor>
      <p style={{ fontSize: '1rem' }}>{label}</p>
    </div>
  );
}

function Why() {
  const contentBoxStyle = {
    background: 'linear-gradient(to bottom, #ffffff, #f8f8ff)',
    borderRadius: '25px',
    padding: '2rem',
    margin: '4rem auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1200px',
  };

  const imageContainerStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const images = [mich, gtech, msu, penn, berk];

  return (
    <div className="why-component" style={{ background: 'linear-gradient(90deg, #000026 0%, #2c3e50 50%, #4c669f 100%)', minHeight: '100vh', padding: '4rem 1rem' }}>
      <div style={contentBoxStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ flexBasis: '50%', fontSize: '1.5rem' }}>
          <h2 style={{ fontWeight: 'bold', color: '#000', textAlign: 'center' }}>
            Our tool is trusted by students and institutions worldwide. Yeah, {" "} <span className='sweet'>
              its sweet.
            </span>
          </h2>
          </div>
          <div style={{ flexBasis: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {images.map((src, index) => (
              <div key={`university-${index}`} style={imageContainerStyle}>
                <img src={src} alt={`university-${index}`} style={{ width: '100%', height: 'auto' }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', marginTop: '2rem' }}>
          <Statistic value={97} decimals={0} suffix="%" label="of students saw improvement" />
          <Statistic value={5} decimals={0} suffix=" hours" label="a week reported saved" />
          <Statistic value={4.7} decimals={1} suffix="/5" label="rating by critics" />
        </div>

      {/* 'Still don't believe us?' Section */}
      <div style={{ width: '100%', textAlign: 'center', margin: '2rem 0' }}>
          <h2 style={{ color: '#1a8cd8', fontSize: '1.8rem', fontWeight: 'bold' }}>
            Still don't belive the hype?
          </h2>
          <p style={{ fontSize: '1rem', color: '#000' }}>See what our users had to say:</p>
        </div>

        {/* Testimonials */}
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', width: '100%', flexWrap: 'wrap' }}>
          <Testimonial
            quote="StudyBuddy is a game changer. When I found myself 7 lectures behind in my class with the final exam looming just a week away, I turned to StudyBuddy for help. With a quick upload, StudyBuddy summarized all of my lectures, highlighting key points that I needed to know. The multiple-choice practice questions provided by StudyBuddy were invaluable in preparing for the exam. Thanks to StudyBuddy, I not only caught up but also aced my final!"
            author="Blake Corum, Michigan"
            authorImageSrc={bc2}
          />
          <Testimonial
            quote="Tired of listening to my boring professor drone on, I turned to StudyBuddy for a fresh and interactive approach to learning my lecture content. StudyBuddy quickly became my go-to tool for concise and efficient learning. With StudyBuddy's summaries, I was able to grasp everything I needed to know quickly and effectively. The interactive multiple-choice questions provided by StudyBuddy not only helped solidify my understanding but also reignited my passion for the class. Thanks to StudyBuddy, my grades improved, and I found a renewed interest in the subject."
            author="JJ McCarthy, Michigan"
            authorImageSrc={jjm}
          />
        </div>
        <p className='disclaimer-text'>*Note: This entire box's information is made up for show*</p>
      </div>
    </div>
  );
}

export default Why;
