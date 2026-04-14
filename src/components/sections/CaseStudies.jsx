import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { caseStudies } from '../../data/caseStudies';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { stagger, fadeUp } from '../../lib/motion';

function CaseStudyCard({ study, large = false }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {/* Image area */}
      <div
        style={{
          aspectRatio: large ? '16/7' : '16/9',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${study.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '24px',
        }}
      >
        <p
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: '600',
            color: '#FFFFFF',
            fontSize: large ? '20px' : '16px',
            margin: 0,
            opacity: 0.85,
          }}
        >
          {study.service}
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: '32px' }}>
        {/* Service tag */}
        <span
          style={{
            border: '1px solid #D1D5DB',
            borderRadius: '4px',
            fontSize: '11px',
            textTransform: 'uppercase',
            color: '#6B7280',
            padding: '3px 10px',
            letterSpacing: '0.06em',
            fontWeight: '600',
          }}
        >
          {study.service}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: large ? '22px' : '20px',
            fontWeight: '700',
            color: '#0D1F3C',
            margin: '12px 0',
          }}
        >
          {study.title}
        </h3>

        {/* Metrics */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {study.metrics.map((metric) => (
            <span
              key={metric}
              style={{
                background: '#EEF2FF',
                color: '#EA580C',
                fontSize: '12px',
                fontWeight: '600',
                padding: '4px 12px',
                borderRadius: '4px',
              }}
            >
              {metric}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p
          style={{
            fontSize: '14px',
            color: '#6B7280',
            lineHeight: '1.6',
            margin: '0 0 16px 0',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {study.summary}
        </p>

        {/* Link */}
        <Link
          to={`/case-studies/${study.id}`}
          style={{
            fontSize: '13px',
            color: '#EA580C',
            fontWeight: '500',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          View Case Study →
        </Link>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const { ref, isInView } = useScrollReveal();
  const featured = caseStudies.find((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);

  return (
    <section id="case-studies" className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <SectionHeading
            eyebrow="Case Studies"
            heading="Work That Speaks for Itself"
            sub="A selection of recent results."
            align="left"
          />
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {/* Featured */}
          <motion.div variants={fadeUp}>
            <CaseStudyCard study={featured} large />
          </motion.div>

          {/* Two smaller cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
            }}
            className="case-studies-bottom"
          >
            {rest.map((study) => (
              <motion.div key={study.id} variants={fadeUp}>
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 639px) {
          .case-studies-bottom {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
