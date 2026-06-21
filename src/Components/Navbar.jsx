'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sports', href: '/sports', isCatalog: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const catalogCategories = [
  {
    title: 'Lacrosse',
    links: [
      { label: 'Lacrosse Jerseys', href: '/sports/lacrosse' },
      { label: 'Practice Pinnies', href: '/sports/lacrosse' },
      { label: 'Lacrosse Shorts', href: '/sports/lacrosse' },
      { label: 'View All Lacrosse', href: '/sports/lacrosse' },
    ],
  },
  {
    title: 'Soccer',
    links: [
      { label: 'Soccer Jerseys', href: '/sports/soccer' },
      { label: 'Soccer Shorts', href: '/sports/soccer' },
      { label: 'Training Kits', href: '/sports/soccer' },
      { label: 'View All Soccer', href: '/sports/soccer' },
    ],
  },
  {
    title: 'Basketball',
    links: [
      { label: 'Basketball Jerseys', href: '/sports/basketball' },
      { label: 'Basketball Shorts', href: '/sports/basketball' },
      { label: 'Warmup Suits', href: '/sports/basketball' },
      { label: 'View All Basketball', href: '/sports/basketball' },
    ],
  },
  {
    title: 'American Football',
    links: [
      { label: 'Football Jerseys', href: '/sports/football' },
      { label: 'Football Pants', href: '/sports/football' },
      { label: 'Practice Jerseys', href: '/sports/football' },
      { label: 'View All Football', href: '/sports/football' },
    ],
  },
  {
    title: 'Baseball',
    links: [
      { label: 'Baseball Jerseys', href: '/sports/baseball' },
      { label: 'Baseball Pants', href: '/sports/baseball' },
      { label: 'Training Jackets', href: '/sports/baseball' },
      { label: 'View All Baseball', href: '/sports/baseball' },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileCatalogOpen(false);
    setIsCatalogOpen(false);
  }, [pathname]);

  const isDarkNavText = scrolled || isCatalogOpen;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          background: isDarkNavText
            ? 'rgba(255,255,255,0.98)'
            : 'transparent',
          backdropFilter: isDarkNavText ? 'blur(20px)' : 'none',
          boxShadow: isDarkNavText ? '0 1px 0 rgba(0,0,0,0.06), 0 4px 30px rgba(0,0,0,0.05)' : 'none',
          borderBottom: isDarkNavText ? '1px solid rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src="/logo.png"
              alt="Ninja Sports Wear Logo"
              width={140}
              height={36}
              priority
              style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul style={{
            display: 'flex',
            gap: '0.25rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            height: '100%',
            alignItems: 'center',
          }} className="navbar-links">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              const isCatalog = link.isCatalog;

              return (
                <li
                  key={link.href}
                  onMouseEnter={isCatalog ? () => setIsCatalogOpen(true) : undefined}
                  onMouseLeave={isCatalog ? () => setIsCatalogOpen(false) : undefined}
                  style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                >
                  <Link href={link.href} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: active ? 600 : 500,
                    color: isDarkNavText
                      ? (active ? '#FF6B00' : '#111')
                      : (active ? '#FF6B00' : 'rgba(255,255,255,0.9)'),
                    textDecoration: 'none',
                    padding: '1.75rem 1rem', // seamless bridge hover
                    transition: 'all 0.2s',
                    position: 'relative',
                    letterSpacing: '0.01em',
                    display: 'block',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#FF6B00';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = isDarkNavText
                        ? (active ? '#FF6B00' : '#111')
                        : (active ? '#FF6B00' : 'rgba(255,255,255,0.9)');
                    }}>
                    {link.label}
                    {active && (
                      <span style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '16px',
                        height: '2px',
                        background: '#FF6B00',
                        borderRadius: '2px',
                      }} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <Link href="/quote" className="navbar-cta" style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '0.875rem',
            color: '#fff',
            backgroundColor: '#FF6B00',
            padding: '0.6rem 1.5rem',
            borderRadius: '4px',
            textDecoration: 'none',
            letterSpacing: '0.01em',
            boxShadow: '0 2px 12px rgba(255,107,0,0.35)',
            transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,107,0,0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(255,107,0,0.35)';
            }}>
            Get a Quote
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '4px',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: isDarkNavText ? '#111' : '#fff',
                borderRadius: '2px',
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                    : i === 1 ? 'scale(0)' : 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Desktop Catalog Mega Dropdown Menu */}
        <AnimatePresence>
          {isCatalogOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setIsCatalogOpen(true)}
              onMouseLeave={() => setIsCatalogOpen(false)}
              style={{
                position: 'absolute',
                top: '72px',
                left: 0,
                right: 0,
                width: '100vw',
                background: '#ffffff',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.06)',
                zIndex: 999,
                padding: '3.5rem 2rem 4rem',
              }}
            >
              <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '2rem',
              }}>
                {catalogCategories.map((cat, idx) => (
                  <div key={idx}>
                    <h4 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#FF6B00',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      marginBottom: '1.25rem',
                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                      paddingBottom: '0.5rem',
                    }}>
                      {cat.title}
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {cat.links.map((link, lIdx) => (
                        <li key={lIdx} style={{ marginBottom: '0.5rem' }}>
                          <Link href={link.href} className="mega-menu-link">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* OEM Studio Featured Card */}
                <div style={{
                  background: 'rgba(255, 107, 0, 0.025)',
                  border: '1px solid rgba(255, 107, 0, 0.08)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  borderRadius: '4px',
                }}>
                  <div>
                    <span style={{
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      background: '#FF6B00',
                      color: '#fff',
                      padding: '0.2rem 0.6rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      display: 'inline-block',
                      marginBottom: '1rem',
                      borderRadius: '2px',
                    }}>
                      OEM Studio
                    </span>
                    <h5 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      color: '#111',
                      margin: '0 0 0.5rem 0',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.01em',
                    }}>
                      Custom Prototypes
                    </h5>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.78rem',
                      color: '#666',
                      lineHeight: '1.45',
                      margin: 0,
                    }}>
                      Design bespoke mockups with premium breathable textures, cut selections, and custom branding in 7 days.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#FF6B00',
                      textDecoration: 'none',
                      marginTop: '1.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                    className="mega-menu-cta"
                  >
                    <span>Request Sample</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <div style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '600px' : '0',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(16px)',
          borderTop: menuOpen ? '1px solid rgba(0,0,0,0.06)' : 'none',
        }}>
          <div style={{ padding: '1rem 2rem 1.5rem' }}>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              const isCatalog = link.isCatalog;

              if (isCatalog) {
                return (
                  <div key={link.href} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <button
                      onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1rem',
                        fontWeight: active ? 600 : 500,
                        color: active ? '#FF6B00' : '#111',
                        padding: '0.75rem 0',
                        cursor: 'pointer',
                      }}
                    >
                      <span>{link.label}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform: mobileCatalogOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Collapsible mobile subcategories */}
                    <div style={{
                      maxHeight: mobileCatalogOpen ? '450px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease-out',
                      paddingLeft: '1rem',
                    }}>
                      {catalogCategories.map((cat, catIdx) => (
                        <div key={catIdx} style={{ margin: '0.75rem 0' }}>
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: '#FF6B00',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            display: 'block',
                            marginBottom: '0.25rem',
                          }}>
                            {cat.title}
                          </span>
                          {cat.links.map((subLink, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subLink.href}
                              onClick={() => setMenuOpen(false)}
                              style={{
                                display: 'block',
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.875rem',
                                color: '#444',
                                textDecoration: 'none',
                                padding: '0.35rem 0',
                              }}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={link.href} href={link.href} style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  fontWeight: active ? 600 : 500,
                  color: active ? '#FF6B00' : '#111',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  transition: 'color 0.2s',
                }}>
                  {link.label}
                </Link>
              );
            })}
            <Link href="/quote" style={{
              display: 'inline-block',
              marginTop: '1rem',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              color: '#fff',
              background: 'linear-gradient(135deg, #FF6B00, #FF8C00)',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(255,107,0,0.35)',
            }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        .mega-menu-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          display: block;
          padding: 0.3rem 0;
          transition: all 0.25s ease;
        }
        .mega-menu-link:hover {
          color: #FF6B00;
          transform: translateX(4px);
        }
        .mega-menu-cta {
          transition: gap 0.25s ease;
        }
        .mega-menu-cta:hover {
          gap: 8px !important;
        }

        @media (max-width: 768px) {
          .navbar-links { display: none !important; }
          .navbar-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;