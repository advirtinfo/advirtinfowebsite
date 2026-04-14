import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find(c => c.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!study) {
    return (
      <div style={{ padding: '120px 24px', textAlign: 'center', background: 'transparent', minHeight: '100vh' }}>
        <h2>Case Study Not Found</h2>
        <Link to="/" style={{ color: '#EA580C', textDecoration: 'none' }}>← Back Home</Link>
      </div>
    );
  }

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', paddingTop: '68px' }}>
      {/* Hero Header */}
      <div 
        style={{
          width: '100%',
          height: '50vh',
          minHeight: '400px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${study.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 64px 24px', width: '100%', zIndex: 2 }}>
          <Link to="/#case-studies" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'inline-block', marginBottom: '24px', opacity: 0.8 }}>
            ← Back to Case Studies
          </Link>
          <br/>
          <span style={{ display: 'inline-block', padding: '6px 16px', background: 'var(--bg-gradient-primary)', color: 'white', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '16px' }}>
            {study.service}
          </span>
          <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(32px, 5vw, 56px)', fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: '700', maxWidth: '800px', lineHeight: 1.1, margin: 0 }}>
            {study.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '48px', padding: '32px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          {study.metrics.map(metric => (
            <div key={metric}>
              <h3 style={{ color: '#EA580C', fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0' }}>{metric}</h3>
              <p style={{ color: '#6B7280', fontSize: '14px', margin: 0 }}>Verified Result</p>
            </div>
          ))}
        </div>

        <div style={{ color: '#4B5563', fontSize: '18px', lineHeight: 1.8 }}>
          <h2 style={{ color: '#0D1F3C', fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '28px', marginBottom: '24px' }}>Project Overview</h2>
          <p style={{ marginBottom: '24px' }}>{study.summary}</p>
          <p style={{ marginBottom: '24px' }}>For this case study, our team took a comprehensive approach to redefine the digital presence and ensure sustainable growth. By analyzing the current market trends and performing a deep dive into the analytics, we identified key areas for improvement.</p>
          <h2 style={{ color: '#0D1F3C', fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '28px', marginTop: '48px', marginBottom: '24px' }}>The Approach</h2>
          <p style={{ marginBottom: '24px' }}>Implementation was rolled out in phases, prioritizing high-impact optimizations first. Through continuous testing and data-driven iterations, the campaign exceeded all initial benchmarks within the first quarter.</p>
        </div>

        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <Link to="/#contact" className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>Ready for similar results?</Link>
        </div>
      </div>
    </div>
  );
}
