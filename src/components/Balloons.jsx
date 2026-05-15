import React from 'react';
import { motion } from 'framer-motion';

const Balloons = () => {
  const balloonColors = [
    '#ff4d4d', // red
    '#4dff4d', // green
    '#4d4dff', // blue
    '#ffff4d', // yellow
    '#ff4dff', // pink
    '#4dffff', // cyan
    '#ff9933', // orange
    '#9933ff', // purple
  ];

  // Generate 15 random balloons
  const balloons = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
    left: `${Math.random() * 90 + 5}%`,
    delay: Math.random() * 4, // Random delay up to 4 seconds
    duration: Math.random() * 5 + 8, // Random duration between 8s and 13s
    size: Math.random() * 20 + 40, // Random size between 40px and 60px
  }));

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5, overflow: 'hidden' }}>
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          initial={{ y: '110vh', x: 0 }}
          animate={{ 
            y: '-10vh', 
            x: [0, 20, -20, 20, -20, 0] // Swaying back and forth
          }}
          transition={{ 
            y: { duration: balloon.duration, repeat: Infinity, ease: 'linear', delay: balloon.delay },
            x: { duration: balloon.duration, repeat: Infinity, ease: 'easeInOut', delay: balloon.delay }
          }}
          style={{
            position: 'absolute',
            left: balloon.left,
            width: balloon.size,
            height: balloon.size * 1.3,
            backgroundColor: balloon.color,
            borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
            boxShadow: 'inset -5px -5px 15px rgba(0,0,0,0.2), inset 5px 5px 10px rgba(255,255,255,0.4)',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {/* Balloon string */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            width: '2px',
            height: '30px',
            backgroundColor: 'rgba(255,255,255,0.4)',
          }}></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Balloons;
