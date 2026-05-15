import React, { useEffect, useState } from 'react';

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const topOffset = Math.random() * 50; // spawn in top 50%
      const duration = Math.random() * 1.5 + 1; // 1 to 2.5s duration
      const delay = Math.random() * 5 + 2; // Random delay between stars
      
      const newStar = { id, topOffset, duration, delay };
      
      setStars((currentStars) => [...currentStars, newStar]);

      // Remove star after it's done animating
      setTimeout(() => {
        setStars((currentStars) => currentStars.filter(star => star.id !== id));
      }, (duration + delay) * 1000 + 500);
    };

    // Spawn a star occasionally
    const interval = setInterval(() => {
      createStar();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            top: `${star.topOffset}%`,
            left: '110%', // start offscreen right
            width: '100px',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(139, 92, 246, 0.8)',
            transform: 'rotate(-45deg)',
            animation: `shooting-star ${star.duration}s linear ${star.delay}s forwards`,
            opacity: 0,
          }}
        />
      ))}
      <style>
        {`
          @keyframes shooting-star {
            0% {
              transform: translateX(0) translateY(0) rotate(-45deg);
              opacity: 1;
            }
            100% {
              transform: translateX(-150vw) translateY(150vw) rotate(-45deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ShootingStars;
