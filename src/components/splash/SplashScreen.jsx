import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.floor(Math.random() * 12) + 2;
      if (start >= 100) {
        start = 100;
        clearInterval(interval);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 800);
        }, 500);
      }
      setPercent(start);
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, #E0F2FE 0%, #FFFFFF 100%)',
            padding: '40px',
          }}
          exit={{ opacity: 0, y: '-10%', filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6B7280', fontSize: '12px', fontFamily: "'Satoshi', sans-serif", textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '600' }}>
            <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Advirt Agency</motion.span>
            <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Pune, IND</motion.span>
          </div>

          {/* Center typography */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
             <motion.h1 
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: 'clamp(48px, 12vw, 160px)',
                  fontWeight: '800',
                  color: '#0D1F3C',
                  margin: 0,
                  lineHeight: '1',
                  letterSpacing: '0.02em',
                }}
             >
                ADVIRT.
             </motion.h1>
          </div>

          {/* Bottom Loading Bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6B7280', fontSize: '13px', fontFamily: "'Satoshi', sans-serif", marginBottom: '16px', fontWeight: '500' }}>
              <span>Loading Experience</span>
              <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: '700', fontSize: '16px', color: '#0D1F3C' }}>{percent}%</span>
            </div>
            <div style={{ width: '100%', height: '2px', background: 'rgba(13,31,60,0.1)', overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ width: `${percent}%` }}
                transition={{ ease: 'linear', duration: 0.1 }}
                style={{ height: '100%', background: '#EA580C' }} // Using the CTA bright orange
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
