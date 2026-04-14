import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ number, title, description }) {
  return (
    <div
      className="service-card"
      style={{
        border: '1px solid var(--color-border)',
        borderLeft: '3px solid var(--color-border)',
        borderRadius: '6px',
        padding: '24px 24px 24px 20px',
        transition: 'border-left-color 0.2s ease',
        background: '#fff',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderLeftColor = 'var(--color-accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderLeftColor = 'var(--color-border)';
      }}
    >
      <p
        style={{
          fontSize: '11px',
          fontWeight: '600',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          letterSpacing: '0.1em',
          margin: '0',
        }}
      >
        {number}
      </p>
      <h3
        style={{
          fontFamily: "'Cabinet Grotesk', sans-serif",
          fontSize: '20px',
          fontWeight: '700',
          color: '#0D1F3C',
          marginTop: '8px',
          marginBottom: '8px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: 'var(--color-muted)',
          lineHeight: '1.6',
          margin: '0 0 12px 0',
        }}
      >
        {description}
      </p>
      <Link
        to="/services"
        style={{
          fontSize: '13px',
          color: 'var(--color-accent)',
          fontWeight: '500',
          textDecoration: 'none',
          display: 'inline-block',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
      >
        Learn more →
      </Link>
    </div>
  );
}
