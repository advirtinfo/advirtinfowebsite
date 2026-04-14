import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from '../components/sections/ContactCTA';
import { services } from '../data/services';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeUp, stagger } from '../lib/motion';

function ServiceSection({ service, index }) {
  const { ref, isInView } = useScrollReveal();
  const isEven = index % 2 === 0;
  const bg = isEven ? '#FFFFFF' : '#bcc6f3';

  return (
    <section style={{ background: bg, padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative number */}
      <span
        style={{
          position: 'absolute',
          top: '24px',
          right: isEven ? '48px' : 'auto',
          left: isEven ? 'auto' : '48px',
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontSize: '96px',
          fontWeight: '100',
          color: '#F0F0F0',
          lineHeight: '1',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        {service.number}
      </span>

      <div className="container">
        <div
          className="service-section-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
        >
          {/* Text side */}
          <motion.div
            ref={ref}
            style={{ order: isEven ? 0 : 1 }}
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={isEven ? '' : 'service-text-right'}
          >
            <motion.p variants={fadeUp} className="eyebrow" style={{ marginBottom: '12px' }}>
              {service.number} — {service.title}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '40px', fontWeight: '700', color: '#0D1F3C', lineHeight: '1.1', margin: '0 0 20px 0' }}
              className="service-h2"
            >
              {service.title}
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '16px', color: '#4B5563', lineHeight: '1.7', margin: '0 0 28px 0' }}>
              {service.body}
            </motion.p>

            <motion.ul
              variants={stagger}
              style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}
            >
              {service.details.map((feat) => (
                <motion.li
                  key={feat}
                  variants={fadeUp}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#374151', lineHeight: '1.8' }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '0', background: '#EA580C', flexShrink: 0, marginTop: '7px' }} />
                  {feat}
                </motion.li>
              ))}
            </motion.ul>

            <Link
              variants={fadeUp}
              to="/#contact"
              style={{ fontSize: '14px', fontWeight: '500', color: '#EA580C', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Discuss This Service →
            </Link>
          </motion.div>

          {/* Visual side — Feature detail card */}
          <motion.div
            style={{ order: isEven ? 1 : 0 }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className={isEven ? '' : 'service-card-left'}
          >
            <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '32px' }}>
              <p style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: '#6B7280', letterSpacing: '0.1em', marginBottom: '20px' }}>
                What's Included
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {service.details.map((detail, i) => (
                  <li
                    key={detail}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '10px 0',
                      borderBottom: i < service.details.length - 1 ? '1px solid #F3F4F6' : 'none',
                      fontSize: '14px', color: '#374151',
                    }}
                  >
                    <ChevronRight size={14} color="#EA580C" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .service-section-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .service-text-right   { order: 0 !important; }
          .service-card-left    { order: 1 !important; }
          .service-h2           { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0D1F3C', minHeight: '50vh', display: 'flex', alignItems: 'center', padding: '96px 0' }}>
        <div className="container">
          <motion.p
            className="eyebrow"
            style={{ color: '#EA580C', marginBottom: '16px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.p>
          <motion.h1
            className="services-hero-h1"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '64px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.05', margin: '0 0 24px 0' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Services Beyond Boundaries
          </motion.h1>
          <motion.p
            style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '18px', color: '#9CA3AF', maxWidth: '520px', lineHeight: '1.7', margin: '0 0 40px 0' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            End-to-end digital marketing — from brand strategy to performance campaigns, content, and PR.
          </motion.p>
          <motion.div
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link to="/#contact" className="btn-primary">Start a Project</Link>
            <Link to="/#contact" className="btn-outline-white">Speak to Our Team</Link>
          </motion.div>
        </div>
        <style>{`
          @media (max-width: 639px) { .services-hero-h1 { font-size: 40px !important; } }
        `}</style>
      </section>

      {services.map((service, i) => (
        <ServiceSection key={service.number} service={service} index={i} />
      ))}

      <ContactCTA />
    </>
  );
}
