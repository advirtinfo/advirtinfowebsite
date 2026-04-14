import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { stagger, fadeUp } from '../../lib/motion';

export default function Testimonials() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="testimonials" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <SectionHeading
            eyebrow="Client Feedback"
            heading="Trusted by Businesses Across India"
            align="left"
          />
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
