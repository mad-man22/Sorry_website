import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const DodgingButton = ({ onClick, text = "No" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleHover = () => {
    if (!buttonRef.current) return;
    
    // Check if mobile
    const isMobile = window.innerWidth < 768;
    const maxOffset = isMobile ? 120 : 300;
    const minMove = isMobile ? 40 : 50;
    
    const xOffset = (Math.random() - 0.5) * maxOffset;
    const yOffset = (Math.random() - 0.5) * maxOffset;
    
    // Ensure it doesn't move too little, but keep it within bounds
    const finalX = Math.abs(xOffset) < minMove ? (xOffset >= 0 ? minMove : -minMove) * 1.5 : xOffset;
    const finalY = Math.abs(yOffset) < minMove ? (yOffset >= 0 ? minMove : -minMove) * 1.5 : yOffset;

    setPosition({ x: finalX, y: finalY });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseEnter={handleHover}
      onClick={handleHover} // In case they try to click fast on mobile
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="btn-secondary"
      style={{ position: 'relative', zIndex: 50 }}
    >
      {text}
    </motion.button>
  );
};

export default DodgingButton;
