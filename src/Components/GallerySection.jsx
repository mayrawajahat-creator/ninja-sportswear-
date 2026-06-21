'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    title: 'Elite Lacrosse Gear',
    category: 'LACROSSE / 01',
    image: '/stats-athlete.png',
    gridArea: 'span 2 / span 1', // Tall vertical
  },
  {
    id: 2,
    title: 'Custom Soccer Uniforms',
    category: 'SOCCER / 02',
    image: '/about-hero.png',
    gridArea: 'span 1 / span 2', // Wide horizontal
  },
  {
    id: 3,
    title: 'Championship Basketball Kits',
    category: 'BASKETBALL / 03',
    image: '/blog-run.png',
    gridArea: 'span 1 / span 1', // Square
  },
  {
    id: 4,
    title: 'Pro Football Gear',
    category: 'AMERICAN FOOTBALL / 04',
    image: '/blog-action.png',
    gridArea: 'span 1 / span 1', // Square
  },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section ref={ref} style={{
      background: '#050508',
      padding: '7rem 2rem 8rem',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,0,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,0,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header Title */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fade}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.6rem' }}>
              <div style={{ height: '2px', width: '24px', background: '#FF6B00', flexShrink: 0 }} />
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#FF6B00',
              }}>
                Team in Action
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.1,
              textTransform: 'uppercase',
            }}>
              Gear Showcase{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B00, #FF8200)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Gallery</span>
            </h2>
          </div>

          <Link href="/products" style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#ffffff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            borderBottom: '2px solid #FF6B00',
            paddingBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
            onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
          >
            Explore Catalog
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '280px',
            gap: '1.5rem',
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={fade}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                gridArea: item.gridArea,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                cursor: 'pointer',
              }}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                  objectFit: 'cover',
                  transform: hoveredId === item.id ? 'scale(1.08)' : 'scale(1)',
                  filter: hoveredId === item.id ? 'brightness(0.9) contrast(1.15)' : 'brightness(0.7) contrast(1)',
                  transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />

              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: hoveredId === item.id
                  ? 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, rgba(5,5,8,0.2) 60%, transparent 100%)'
                  : 'linear-gradient(to top, rgba(5,5,8,0.7) 0%, transparent 80%)',
                transition: 'background 0.4s ease',
                zIndex: 1,
              }} />

              {/* Content text */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                zIndex: 2,
                transform: hoveredId === item.id ? 'translateY(0)' : 'translateY(10px)',
                transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
              }}>
                <span style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: hoveredId === item.id ? '#FF6B00' : 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '4px',
                  transition: 'color 0.3s ease',
                }}>
                  {item.category}
                </span>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                }}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 240px !important;
          }
          .gallery-grid > div:nth-child(1) {
            grid-area: span 1 / span 1 !important;
          }
          .gallery-grid > div:nth-child(2) {
            grid-area: span 1 / span 2 !important;
          }
        }
        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 250px !important;
          }
          .gallery-grid > div {
            grid-area: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
