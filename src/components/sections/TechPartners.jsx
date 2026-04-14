import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { stagger, fadeUp } from '../../lib/motion';

const partners = [
  'Google Partner',
  'Meta Business Partner',
  'LinkedIn Marketing Partner',
  'HubSpot Partner',
];

export default function TechPartners() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section style={{ background: '#FFFFFF', padding: '64px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p
          style={{
            fontSize: '14px',
            color: '#6B7280',
            marginBottom: '32px',
            margin: '0 0 32px 0',
          }}
        >
          Certified partners with the platforms that matter.
        </p>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {partners.map((partner) => (
            <motion.div key={partner} variants={fadeUp}>
              <PartnerBadge name={partner} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PartnerBadge({ name }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        border: `1px solid ${hovered ? '#EA580C' : '#E5E7EB'}`,
        borderRadius: '6px',
        padding: '12px 28px',
        fontSize: '14px',
        fontWeight: '600',
        color: hovered ? '#EA580C' : '#374151',
        transition: 'all 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {name}
    </div>
  );
}
