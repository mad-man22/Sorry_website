import React from 'react';
import { motion } from 'framer-motion';

const MessageCard = ({ text, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="glass-panel"
      style={{ padding: '1.5rem 2rem', textAlign: 'left' }}
    >
      <p style={{ fontSize: '1.125rem', color: '#e2e8f0', lineHeight: '1.6' }}>
        {text}
      </p>
    </motion.div>
  );
};

export default MessageCard;
