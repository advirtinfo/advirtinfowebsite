import React from 'react';
import { Link } from 'react-router-dom';

const AdvirtLogoMark = () => (
  <img src="/logo.png" alt="Advirt Logo" style={{ height: '36px', width: 'auto', background: '#FFFFFF', padding: '4px', borderRadius: '4px' }} />
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
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

const footerServices = [
  'Digital Transformation', 'Experience Design', 'Media Planning & Buying',
  'Performance Marketing', 'PR & Influencer', 'Social Media & Content',
];

const footerCompany = ['About Us', 'Case Studies', 'Clients', 'Blog', 'Careers'];

export default function Footer() {
  return (
    <footer style={{ background: '#0D1F3C' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px' }} className="footer-grid">
          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <AdvirtLogoMark />
              <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '17px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.05em' }}>
                ADVIRT
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', maxWidth: '260px', margin: '0 0 24px 0' }}>
              Results-driven digital marketing for businesses that are serious about growth.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {socialIcons.map((Icon, i) => (
                <a key={i} href="#" style={{ color: '#4B5563', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
                  aria-label={socialLabels[i]}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4B5563', marginBottom: '16px', fontWeight: '600' }}>Services</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerServices.map((s) => (
                <li key={s}>
                  <Link to="/services" style={{ fontSize: '14px', color: '#6B7280', lineHeight: '2.2', textDecoration: 'none', display: 'block', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
                  >{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4B5563', marginBottom: '16px', fontWeight: '600' }}>Company</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerCompany.map((c) => (
                <li key={c}>
                  <a href="#" style={{ fontSize: '14px', color: '#6B7280', lineHeight: '2.2', textDecoration: 'none', display: 'block', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F9FAFB')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
                  >{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4B5563', marginBottom: '16px', fontWeight: '600' }}>Contact</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['advirt.in@gmail.com', '+91 98765 43210', 'Pimpri, Maharashtra, India'].map((item) => (
                <li key={item} style={{ fontSize: '14px', color: '#6B7280', lineHeight: '2.2' }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1F2937' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px', color: '#4B5563', margin: 0 }}>
            © 2026 Advirt Advertising Company. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a key={link} href="#" style={{ fontSize: '13px', color: '#4B5563', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 639px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
