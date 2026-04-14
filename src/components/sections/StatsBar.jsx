import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { stagger, fadeUp } from '../../lib/motion';

const stats = [
  { target: 5, suffix: '+', label: 'Years Serving' },
  { target: 100, suffix: '+', label: 'Clients Served' },
  { target: 78, suffix: '%', label: 'Retention Rate' },
  { target: 48, suffix: ' hrs', label: 'Avg. Response' },
];

export default function StatsBar() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        borderBottom: '1px solid #E5E7EB',
        padding: '40px 0',
      }}
    >
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              style={{
                textAlign: 'center',
                padding: '0 24px',
                borderRight: i < stats.length - 1 ? '1px solid #E5E7EB' : 'none',
              }}
            >
              <p
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#0D1F3C',
                  margin: '0 0 4px 0',
                  lineHeight: '1',
                }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2.5} />
              </p>
              <p
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#6B7280',
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 639px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .stats-grid > div {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
