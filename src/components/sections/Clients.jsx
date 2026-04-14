import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { clients } from '../../data/clients';

export default function Clients() {
  // Duplicate for seamless looping
  const doubled = [...clients, ...clients];

  return (
    <section
      id="clients"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        borderBottom: '1px solid #E5E7EB',
        padding: '64px 0',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ marginBottom: '40px', textAlign: 'center' }}>
        <SectionHeading
          eyebrow="Our Clients"
          heading="Brands That Trust Us"
          align="center"
        />
      </div>

      {/* Marquee */}
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: '15px',
                fontWeight: '600',
                color: '#9CA3AF',
                whiteSpace: 'nowrap',
                cursor: 'default',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#374151')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
