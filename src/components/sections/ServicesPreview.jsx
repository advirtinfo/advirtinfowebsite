import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { stagger, fadeUp } from '../../lib/motion';

export default function ServicesPreview() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="services" className="section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <SectionHeading
            eyebrow="Our Services"
            heading="What We Do"
            sub="From strategy to execution — complete digital marketing under one roof."
            align="center"
          />
        </div>

        {/* Grid */}
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
          className="services-grid"
        >
          {services.map((service) => (
            <motion.div key={service.number} variants={fadeUp}>
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/services" className="btn-outline">
            See All Services →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
