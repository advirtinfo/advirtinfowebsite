import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionHeading({ eyebrow, heading, sub, align = 'left', decorativeRule = false }) {
  const { ref, isInView } = useScrollReveal();

  const textAlign = align === 'center' ? 'center' : 'left';
  const marginLeft = align === 'center' ? 'auto' : '0';
  const marginRight = align === 'center' ? 'auto' : '0';

  return (
    <div ref={ref} style={{ textAlign }}>
      {eyebrow && (
        <motion.p
          className="eyebrow"
          style={{ marginBottom: '12px' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
      )}
      {decorativeRule && (
        <motion.div
          style={{
            width: '48px',
            height: '2px',
            background: 'var(--color-accent)',
            marginBottom: '20px',
            marginLeft,
            marginRight,
          }}
          initial={{ scaleX: 0, originX: align === 'center' ? 0.5 : 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      )}
      <motion.h2
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontSize: '48px',
          fontWeight: '700',
          color: 'var(--color-black)',
          lineHeight: '1.1',
          margin: '0 0 16px 0',
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      >
        {heading}
      </motion.h2>
      {sub && (
        <motion.p
          style={{
            fontSize: '18px',
            color: 'var(--color-muted)',
            lineHeight: '1.7',
            maxWidth: align === 'center' ? '600px' : '520px',
            marginLeft,
            marginRight,
            marginTop: '0',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
