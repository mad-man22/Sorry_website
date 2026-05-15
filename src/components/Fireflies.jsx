import React, { useEffect, useState } from 'react';

const Fireflies = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    // Generate 30 fireflies
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 5 + 3}s`, // 3 to 8s drift
      animationDelay: `${Math.random() * 5}s`,
      size: `${Math.random() * 3 + 2}px`,
    }));
    setFireflies(generated);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {fireflies.map((ff) => (
        <div
          key={ff.id}
          style={{
            position: 'absolute',
            left: ff.left,
            top: ff.top,
            width: ff.size,
            height: ff.size,
            backgroundColor: '#fef08a', // soft yellow glow
            borderRadius: '50%',
            boxShadow: '0 0 10px 2px rgba(254, 240, 138, 0.8), 0 0 20px 5px rgba(254, 240, 138, 0.4)',
            animation: `firefly-drift ${ff.animationDuration} ease-in-out infinite alternate, firefly-blink ${ff.animationDuration} ease-in-out infinite alternate`,
            animationDelay: ff.animationDelay,
            opacity: 0,
          }}
        />
      ))}
      <style>
        {`
          @keyframes firefly-drift {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * -100 - 50}px);
            }
          }
          
          @keyframes firefly-blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Fireflies;
