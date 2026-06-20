'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Submit Your Inquiry',
    desc: 'Fill out our quote form with product requirements — quantity, style, fabric, and branding specs.',
  },
  {
    num: '02',
    title: 'Sample Development',
    desc: 'Our team develops prototypes from your brief. Physical samples delivered within 48 hours.',
  },
  {
    num: '03',
    title: 'Production & QC',
    desc: 'Full-scale manufacturing begins. Every unit passes our 5-stage quality control process.',
  },
  {
    num: '04',
    title: 'Delivery & Logistics',
    desc: 'Packed, labeled, and shipped via your preferred freight method — with full tracking.',
  },
];

const fade = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const lineGrow = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
};

export default function ProcessSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} style={{
      background: '#08080c',
      padding: '5.5rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,107,0,0.06) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <motion.div
            custom={0} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.6rem' }}>
              <div style={{ height: '1px', width: '28px', background: '#FF6B00', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FF6B00',
              }}>How It Works</span>
            </div>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
              fontWeight: 800, letterSpacing: '-0.03em',
              color: '#fff', margin: 0, lineHeight: 1.15,
            }}>
              From Quote to{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Delivery</span>
            </h2>
          </motion.div>

          <motion.p
            custom={1} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)',
              maxWidth: '280px', lineHeight: 1.65, margin: 0,
            }}
          >
            A simple, transparent process — from your first inquiry to goods at your door.
          </motion.p>
        </div>

        {/* ── Steps ── */}
        <div style={{ position: 'relative' }}>


          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            position: 'relative',
            zIndex: 1,
          }} className="process-grid">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                custom={i + 2}
                variants={fade}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '6px',
                  padding: '1.75rem',
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.2)';
                  e.currentTarget.style.background  = 'rgba(255,107,0,0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background  = 'rgba(255,255,255,0.03)';
                }}
              >
                {/* Step number + dot */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.1em', color: 'rgba(255,107,0,0.5)',
                  }}>
                    {step.num}
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
                  <div style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: '#FF6B00',
                    boxShadow: '0 0 8px rgba(255,107,0,0.6)',
                    flexShrink: 0,
                  }} />
                </div>

                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem', fontWeight: 700,
                  color: '#fff', margin: '0 0 0.5rem', letterSpacing: '-0.01em',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem', color: 'rgba(255,255,255,0.38)',
                  lineHeight: 1.65, margin: 0,
                }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 520px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
