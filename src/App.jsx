import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import ParticleBackground from './components/ParticleBackground';
import MessageCard from './components/MessageCard';
import DodgingButton from './components/DodgingButton';
import './App.css';

const apologyMessages = [
  { text: "I know I messed up, and I can't stop thinking about it." },
  {
    text: "Our friendship means absolutely everything to me.",
    // Uncomment and add your image name here (make sure the file is in the public/ folder)
    // image: "/memory1.jpg" 
  },
  { text: "I realize my mistake and how it made you feel." },
  {
    text: "I am truly, deeply sorry.",
    // Uncomment and add your video name here (make sure the file is in the public/ folder)
    // video: "/funny-memory.mp4" 
  },
  { text: "You're one of the best things in my life, and I hate that I hurt you." }
];

function App() {
  const [stage, setStage] = useState('entrance'); // entrance, apology, ask, resolution
  const { width, height } = useWindowSize();

  const handleStart = () => setStage('apology');

  const handleAsk = () => setStage('ask');

  const handleForgive = () => setStage('resolution');

  return (
    <>
      <ParticleBackground />
      <div className="app-container">
        <AnimatePresence mode="wait">
          {stage === 'entrance' && (
            <motion.div
              key="entrance"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <h1 className="title">I messed up.</h1>
              <p className="subtitle">And I need to tell you something important.</p>
              <button className="btn-primary" onClick={handleStart} style={{ marginTop: '2rem' }}>
                Hear me out
              </button>
            </motion.div>
          )}

          {stage === 'apology' && (
            <motion.div
              key="apology"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="cards-container"
            >
              {apologyMessages.map((msg, index) => (
                <MessageCard
                  key={index}
                  text={msg.text}
                  image={msg.image}
                  video={msg.video}
                  delay={index * 1.5}
                />
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: apologyMessages.length * 1.5 + 1, duration: 1 }}
                style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
              >
                <button className="btn-primary" onClick={handleAsk}>
                  One more thing...
                </button>
              </motion.div>
            </motion.div>
          )}

          {stage === 'ask' && (
            <motion.div
              key="ask"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}
            >
              <h2 className="title" style={{ fontSize: '2.5rem' }}>Will you forgive me?</h2>

              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <button className="btn-primary" onClick={handleForgive} style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
                  Yes
                </button>
                <DodgingButton text="No" />
              </div>
            </motion.div>
          )}

          {stage === 'resolution' && (
            <motion.div
              key="resolution"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="resolution-container"
            >
              <Confetti width={width} height={height} recycle={false} numberOfPieces={800} gravity={0.15} />
              <h1 className="resolution-title">Thank You! 💖</h1>
              <p className="final-message">I promise to make it up to you.</p>

              {/* Replace "/your-video.mp4" with your actual video filename in the public/ folder */}
              <video
                src="/video_funny.mp4"
                controls
                autoPlay
                muted
                loop
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '1rem',
                  marginTop: '2rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
                  zIndex: 10
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
