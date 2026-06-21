'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#0A0A0A',
      color: '#fff',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Main Footer */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '4rem 2rem 3rem',
        display: 'grid',
        gridTemplateColumns: '1.5fr repeat(3, 1fr)',
        gap: '3rem',
      }} className="footer-grid">

        {/* Brand Column */}
        <div>
          {/* Logo */}
          <div style={{ marginBottom: '1.25rem' }}>
            <Image
              src="/logo.png"
              alt="Ninja Sports Wear Logo"
              width={140}
              height={36}
              style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
            />
          </div>

          <p style={{
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.7,
            maxWidth: '260px',
            margin: '0 0 1.5rem',
          }}>
            Premium B2B sportswear manufacturer delivering quality and precision at scale to brands worldwide.
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { label: 'Twitter/X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.737l7.733-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            ].map((social) => (
              <a key={social.label} href="#" aria-label={social.label}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s',
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,107,0,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            margin: '0 0 1.25rem',
          }}>
            Company
          </h4>
          {['About Us', 'Our Story', 'Manufacturing', 'Certifications', 'Careers'].map(item => (
            <a key={item} href="#" style={{
              display: 'block',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              marginBottom: '0.7rem',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Sports Links */}
        <div>
          <h4 style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            margin: '0 0 1.25rem',
          }}>
            Sports
          </h4>
          {[
            { label: 'Lacrosse', href: '/sports/lacrosse' },
            { label: 'Soccer', href: '/sports/soccer' },
            { label: 'Basketball', href: '/sports/basketball' },
            { label: 'Baseball', href: '/sports/baseball' },
            { label: 'American Football', href: '/sports/football' },
          ].map(item => (
            <a key={item.label} href={item.href} style={{
              display: 'block',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              marginBottom: '0.7rem',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            margin: '0 0 1.25rem',
          }}>
            Contact
          </h4>
          {[
            { icon: '📍', text: 'Sialkot, Pakistan' },
            { icon: '📧', text: 'info@ninjasportswear.com' },
            { icon: '📞', text: '+92 321 000 0000' },
            { icon: '⏰', text: 'Mon–Sat: 9AM – 6PM PKT' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              marginBottom: '0.75rem',
            }}>
              <span style={{ fontSize: '0.85rem', flexShrink: 0 }}>{item.icon}</span>
              <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '1.25rem 2rem',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © {year} Ninja Sports Wear. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Use'].map(item => (
              <a key={item} href="#" style={{
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;