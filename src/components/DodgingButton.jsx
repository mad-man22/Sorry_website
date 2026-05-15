import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const DodgingButton = ({ onClick, text = "No" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleHover = () => {
    if (!buttonRef.current) return;
    
    // Calculate random offset to move the button away from the cursor
    // The bounds are kept relatively close so it stays within view
    const xOffset = (Math.random() - 0.5) * 300;
    const yOffset = (Math.random() - 0.5) * 300;
    
    // Ensure it doesn't move too little
    const finalX = Math.abs(xOffset) < 50 ? xOffset * 2 : xOffset;
    const finalY = Math.abs(yOffset) < 50 ? yOffset * 2 : yOffset;

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
