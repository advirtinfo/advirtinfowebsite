import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const AdvirtLogoMark = () => (
  <img src="/logo.png" alt="Advirt Logo" style={{ height: '32px', width: 'auto' }} />
);

// Simple social SVG icons
const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const socialIcons = [LinkedInIcon, InstagramIcon, TwitterIcon, FacebookIcon];
const socialLabels = ['LinkedIn', 'Instagram', 'Twitter', 'Facebook'];

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Clients', href: '/#clients' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href) => {
    if (href === '/services') return location.pathname === '/services';
    return false;
  };

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            aria-label="Advirt Home"
          >
            <AdvirtLogoMark />
            <span
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: '17px',
                fontWeight: '700',
                color: '#0D1F3C',
                letterSpacing: '0.05em',
              }}
            >
              ADVIRT
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} active={isActive(link.href)}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/#contact" className="btn-primary" style={{ padding: '10px 22px' }}>
              Contact Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'none',
              color: '#0D1F3C',
            }}
            className="hamburger-btn"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
              <AdvirtLogoMark />
              <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '17px', fontWeight: '700', color: '#0D1F3C' }}>ADVIRT</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0D1F3C' }} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#0D1F3C',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid #E5E7EB',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/#contact" onClick={() => setMobileOpen(false)} className="btn-primary" style={{ marginTop: '24px', justifyContent: 'center' }}>
              Contact Us
            </Link>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '16px', paddingTop: '24px' }}>
            {socialIcons.map((Icon, i) => (
              <a key={i} href="#" style={{ color: '#4B5563' }} aria-label={socialLabels[i]}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, children, active }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={href}
      style={{
        position: 'relative',
        fontSize: '14px',
        fontWeight: '500',
        color: active || hovered ? '#EA580C' : '#374151',
        textDecoration: 'none',
        letterSpacing: '0.01em',
        transition: 'color 0.2s',
        paddingBottom: '4px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: '#EA580C',
          transform: `scaleX(${active || hovered ? 1 : 0})`,
          transformOrigin: 'left',
          transition: 'transform 0.2s ease',
        }}
      />
    </Link>
  );
}
