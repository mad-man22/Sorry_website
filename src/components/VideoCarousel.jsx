import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!videos || videos.length === 0) return null;

  const nextVideo = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '2rem auto', zIndex: 10 }}>
      {/* Video Container */}
      <div className="video-wrapper" style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '1rem', backgroundColor: '#000', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.video
            key={currentIndex}
            src={videos[currentIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            controls
            autoPlay
            muted
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </AnimatePresence>

        {/* Navigation Buttons Overlaid */}
        {videos.length > 1 && (
          <>
            <button 
              onClick={prevVideo}
              className="carousel-nav-btn"
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 20 }}
            >
              &lt;
            </button>
            <button 
              onClick={nextVideo}
              className="carousel-nav-btn"
              style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 20 }}
            >
              &gt;
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {videos.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          {videos.map((_, idx) => (
            <div 
              key={idx} 
              style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: idx === currentIndex ? '#8b5cf6' : 'rgba(255,255,255,0.3)',
                transition: 'background-color 0.3s ease'
              }} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
