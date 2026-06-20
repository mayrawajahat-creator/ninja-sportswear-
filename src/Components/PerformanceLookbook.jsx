'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const PANELS = [
  {
    id: 1,
    tag: '01 / SPEED & AGILITY',
    title: 'Explosive Motion',
    spec: 'Engineered moisture management & 4-way stretch fibers.',
    image: '/blog-run.png',
    link: '/products',
    category: 'Lacrosse & Track',
  },
  {
    id: 2,
    tag: '02 / COMBAT & POWER',
    title: 'Unrivaled Focus',
    spec: 'Advanced ergonomic compression & reinforced seams.',
    image: '/stats-athlete.png',
    link: '/products',
    category: 'Football & Training',
  },
  {
    id: 3,
    tag: '03 / FLOW & RECOVERY',
    title: 'Elite Endurance',
    spec: 'Micro-knit breathable lining & quick-dry technology.',
    image: '/blog-stretch.png',
    link: '/products',
    category: 'Baseball & Activewear',
  },
];

export default function PerformanceLookbook() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section style={{
      background: '#050508',
      padding: '7rem 2rem 8rem',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Dynamic Background Overlays */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,0,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '4.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
            <div style={{ height: '2px', width: '24px', background: '#FF6B00' }} />
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FF6B00',
            }}>
              Performance Lookbook
            </span>
            <div style={{ height: '2px', width: '24px', background: '#FF6B00' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            margin: '0 0 1.25rem',
            lineHeight: 1.1,
            textTransform: 'uppercase',
          }}>
            Engineered For{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B00, #FF8200)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              High Output
            </span>
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.4)',
            maxWidth: '620px',
            lineHeight: 1.7,
            margin: 0,
          }}>
            A visual overview of elite custom sportswear designed for championship performance. Built to withstand the absolute limits of athletic competition.
          </p>
        </div>

        {/* Interactive Panels Showcase */}
        <div className="lookbook-container" style={{
          display: 'flex',
          gap: '1.25rem',
          height: '520px',
          width: '100%',
        }}>
          {PANELS.map((panel) => {
            const isHovered = hoveredId === panel.id;
            const isAnyHovered = hoveredId !== null;

            return (
              <div
                key={panel.id}
                onMouseEnter={() => setHoveredId(panel.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`lookbook-panel ${isHovered ? 'hovered' : ''}`}
                style={{
                  position: 'relative',
                  flex: isHovered ? 1.8 : isAnyHovered ? 0.7 : 1,
                  height: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'flex 0.6s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease',
                }}
              >
                {/* Background Image */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      filter: isHovered 
                        ? 'brightness(0.95) contrast(1.1)' 
                        : isAnyHovered 
                          ? 'brightness(0.5) contrast(0.9) grayscale(20%)' 
                          : 'brightness(0.7) contrast(1)',
                      transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), filter 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  />
                </div>

                {/* Dark Gradient Mask overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: isHovered
                    ? 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)'
                    : 'linear-gradient(to top, rgba(5,5,8,0.85) 0%, rgba(5,5,8,0.4) 100%)',
                  transition: 'background 0.5s ease',
                  zIndex: 1,
                }} />

                {/* Glassmorphic Top Eyebrow Tag */}
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  left: '24px',
                  zIndex: 2,
                  background: 'rgba(5, 5, 8, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  opacity: isAnyHovered && !isHovered ? 0.4 : 1,
                  transition: 'opacity 0.4s ease',
                }}>
                  <span style={{
                    fontSize: '0.62rem',
                    fontFamily: "'Courier New', Courier, monospace",
                    fontWeight: 700,
                    color: isHovered ? '#FF6B00' : 'rgba(255,255,255,0.8)',
                    letterSpacing: '0.08em',
                  }}>
                    {panel.tag}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2.5rem',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  height: '100%',
                }}>
                  {/* Category Title */}
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    color: '#FF6B00',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                    display: 'block',
                    transform: isHovered ? 'translateY(0)' : 'translateY(15px)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}>
                    {panel.category}
                  </span>

                  {/* Panel Title */}
                  <h3 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                    fontWeight: 900,
                    color: '#ffffff',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}>
                    {panel.title}
                  </h3>

                  {/* Specs & Description (Expands on hover) */}
                  <div style={{
                    maxHeight: isHovered ? '80px' : '0px',
                    opacity: isHovered ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    marginTop: isHovered ? '0.75rem' : '0px',
                  }}>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.6,
                      margin: '0 0 1rem 0',
                    }}>
                      {panel.spec}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div style={{
                    marginTop: '1rem',
                    transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1) 0.1s',
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      borderBottom: '2px solid #FF6B00',
                      paddingBottom: '3px',
                      transition: 'color 0.2s',
                    }}>
                      Request Quote
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
