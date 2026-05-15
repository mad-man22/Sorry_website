import React from 'react';
import { motion } from 'framer-motion';

const MessageCard = ({ text, delay, image, video }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.02, y: -5, rotateX: 2, rotateY: -2 }}
      className="glass-panel message-card"
      style={{ 
        textAlign: 'left', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {image && (
        <img 
          src={image} 
          alt="Memory" 
          style={{ width: '100%', borderRadius: '0.5rem', maxHeight: '300px', objectFit: 'cover' }} 
        />
      )}
      {video && (
        <video 
          src={video} 
          controls 
          autoPlay 
          muted 
          loop
          style={{ width: '100%', borderRadius: '0.5rem', maxHeight: '300px', objectFit: 'cover' }} 
        />
      )}
      <p style={{ fontSize: '1.125rem', color: '#e2e8f0', lineHeight: '1.6' }}>
        {text}
      </p>
    </motion.div>
  );
};

export default MessageCard;
