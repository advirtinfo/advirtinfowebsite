import React from 'react';
import { Star } from 'lucide-react';

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');
}

export default function TestimonialCard({ name, role, company, quote, stars }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid var(--color-border)',
        borderRadius: '8px',
        padding: '32px',
        position: 'relative',
        minHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Decorative quote mark */}
      <span
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontSize: '80px',
          color: '#E5E7EB',
          position: 'absolute',
          top: '-8px',
          left: '20px',
          lineHeight: '1',
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        "
      </span>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: '16px',
          color: '#374151',
          lineHeight: '1.7',
          fontStyle: 'italic',
          flex: 1,
          position: 'relative',
          zIndex: 1,
          margin: '0 0 20px 0',
        }}
      >
        {quote}
      </p>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--color-border)', margin: '0 0 20px 0' }} />

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Avatar */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: '700',
            color: 'var(--color-navy)',
            flexShrink: 0,
          }}
        >
          {getInitials(name)}
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: '700', color: '#0D1F3C', margin: 0 }}>{name}</p>
          <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: 0 }}>
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}
