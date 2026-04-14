import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { stagger, fadeUp } from '../../lib/motion';

const proofPoints = [
  'Founded in Pimpri, Maharashtra',
  '100+ clients across India and beyond',
  'End-to-end — strategy through execution',
];

export default function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Left — Image placeholder */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              aspectRatio: '4/3',
              background: '#E5E7EB',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img src="/modern_agency.png" alt="Advirt Workspace" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#FFFFFF',
                background: 'rgba(0,0,0,0.5)',
                padding: '4px 10px',
                borderRadius: '4px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              A Modern Approach to Growth
            </div>
          </motion.div>

          {/* Right — Text */}
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              heading={"A Marketing Partner,\nNot Just an Agency."}
              decorativeRule
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.p
                variants={fadeUp}
                style={{ fontSize: '16px', color: '#4B5563', lineHeight: '1.7', margin: '24px 0 16px' }}
              >
                Advirt Advertising Company was founded with one belief: smart marketing should be accessible to every business — not just the ones with the biggest budgets. We've spent 5+ years building strategies that actually work.
              </motion.p>

              <motion.p
                variants={fadeUp}
                style={{ fontSize: '16px', color: '#4B5563', lineHeight: '1.7', margin: '0 0 24px' }}
              >
                We work directly with founders, CMOs, and marketing teams to plan, execute, and optimise campaigns across every major digital channel. No fluff, no bloated retainers — just results.
              </motion.p>

              <motion.div
                variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.6 } } }}
                style={{ width: '48px', height: '2px', background: 'var(--bg-gradient-primary)', margin: '24px 0', originX: 0 }}
              />

              <motion.ul
                variants={stagger}
                style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                {proofPoints.map((point) => (
                  <motion.li
                    key={point}
                    variants={fadeUp}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#374151' }}
                  >
                    <ChevronRight size={16} color="#EA580C" strokeWidth={2.5} />
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
