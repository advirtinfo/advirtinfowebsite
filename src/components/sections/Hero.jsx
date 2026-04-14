import React from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Target, Megaphone } from 'lucide-react';
import { fadeUp, fadeIn, lineReveal } from '../../lib/motion';
import { Link } from 'react-router-dom';

const FloatingHeroVisual = () => (
  <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', maxWidth: '460px', margin: '0 auto' }}>
    {/* Background Glow */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      style={{ position: 'absolute', inset: '10%', background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', filter: 'blur(70px)', borderRadius: '50%', zIndex: 0 }}
    />
    
    {/* Main Large Card - Glassmorphism */}
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [-12, 12, -12] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: 'absolute', inset: '15%', background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)', borderRadius: '16px', boxShadow: '0 24px 48px rgba(13,31,60,0.06)', border: '1px solid rgba(255,255,255,0.8)', overflow: 'hidden', zIndex: 1, display: 'flex', flexDirection: 'column'
      }}
    >
      <div style={{ padding: '24px', borderBottom: '1px solid rgba(13,31,60,0.05)' }}>
        <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#6B7280', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TrendingUp size={16} color="#EA580C" /> Total Ad ROAS
        </p>
        <p style={{ fontSize: '38px', fontWeight: '800', color: '#0D1F3C', margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          4.8x <span style={{ fontSize: '14px', padding: '4px 10px', background: 'rgba(5, 150, 105, 0.1)', color: '#059669', borderRadius: '20px', border: '1px solid rgba(5,150,105,0.2)' }}>Top 10%</span>
        </p>
      </div>
      <div style={{ flex: 1, padding: '24px', display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
         {/* Fake Chart Bars with glassmorphism */}
         {[30, 45, 40, 65, 55, 100].map((h, i) => (
            <motion.div 
              key={i} 
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1.5, delay: i * 0.15 + 0.5, type: 'spring' }}
              style={{ flex: 1, background: i === 5 ? 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' : 'rgba(13,31,60,0.08)', borderRadius: '6px 6px 0 0' }}
            />
         ))}
      </div>
    </motion.div>

    {/* Floating Element 1 - Campaigns */}
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: [0, -18, 0], opacity: 1 }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      style={{
        position: 'absolute', top: '12%', right: '-5%', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', padding: '16px 20px', borderRadius: '12px', boxShadow: '0 16px 32px rgba(13,31,60,0.08)', border: '1px solid rgba(255,255,255,0.8)', zIndex: 2, display: 'flex', alignItems: 'center', gap: '12px'
      }}
    >
       <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(234, 88, 12, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <Megaphone size={20} color="#EA580C" strokeWidth={2.5} />
       </div>
       <div>
         <p style={{ fontSize: '12px', color: '#6B7280', margin: 0, fontWeight: '600', textTransform: 'uppercase' }}>Active Ads</p>
         <p style={{ fontSize: '18px', color: '#0D1F3C', margin: 0, fontWeight: '800' }}>1,204</p>
       </div>
    </motion.div>

    {/* Floating Element 2 - conversion */}
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: [0, 18, 0], opacity: 1 }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      style={{
        position: 'absolute', bottom: '15%', left: '-5%', background: 'rgba(13,31,60,0.8)', backdropFilter: 'blur(16px)', padding: '16px 24px', borderRadius: '12px', boxShadow: '0 16px 32px rgba(13,31,60,0.15)', zIndex: 2, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '14px'
      }}
    >
       <Target size={24} color="#60A5FA" strokeWidth={2} />
       <div>
         <p style={{ fontSize: '11px', color: '#9CA3AF', margin: 0, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CPA Goal</p>
         <p style={{ fontSize: '20px', color: '#FFFFFF', margin: '-2px 0 0', fontWeight: '800' }}>- 24.8% <span style={{ color: '#34D399', fontSize: '14px' }}>↓</span></p>
       </div>
    </motion.div>

  </div>
);

export default function Hero() {
  return (
    <section id="hero" style={{ background: 'transparent', padding: '128px 0 96px', position: 'relative' }}>
      <div className="container">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '60fr 40fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left — Text */}
          <div>
            <motion.p
              className="eyebrow"
              style={{ marginBottom: '24px',fontSize: '12px', color: '#EA580C' }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
               Marketing Agency — Pune, India
            </motion.p>

            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                className="hero-h1"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: '64px',
                  fontWeight: '800',
                  color: '#0D1F3C',
                  lineHeight: '1.05',
                  margin: 0,
                }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                Your Success Is The
              </motion.h1>
              <motion.h1
                className="hero-h1"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: '64px',
                  fontWeight: '800',
                  color: '#0D1F3C',
                  lineHeight: '1.05',
                  margin: 0,
                  textDecoration: 'underline',
                  textDecorationColor: '#EA580C',
                  textUnderlineOffset: '6px',
                  textDecorationThickness: '2px',
                }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Only Metric We Track.
              </motion.h1>
            </div>

            <motion.hr
              style={{ width: '48px', height: '1px', background: '#D1D5DB', border: 'none', margin: '24px 0' }}
              variants={lineReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
            />

            <motion.p
              style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '18px', color: '#374151', lineHeight: '1.7', maxWidth: '480px', margin: '0 0 32px 0' }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              Advirt is a results-driven digital marketing agency helping corporate companies, MNCs, and ambitious startups grow faster with smart, creative, and data-backed strategies.
            </motion.p>

            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.55 }}
            >
              <a href="#contact" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const target = document.getElementById('contact');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }
              }} className="btn-primary">Let's Talk</a>
              <Link
                to="/#case-studies"
                style={{ fontSize: '14px', fontWeight: '500', color: '#EA580C', textDecoration: 'none', letterSpacing: '0.01em' }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                View Our Work →
              </Link>
            </motion.div>

            <motion.div
              style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.65 }}
            >
              {['5+ Years', '100+ Clients', '78% Retention Rate'].map((item) => (
                <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#6B7280' }}>
                  <Check size={14} color="#EA580C" strokeWidth={2.5} />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — SVG Graphic */}
          <motion.div
            style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <FloatingHeroVisual />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-h1   { font-size: 48px !important; }
        }
        @media (max-width: 639px) {
          .hero-h1   { font-size: 40px !important; }
        }
      `}</style>
    </section>
  );
}
