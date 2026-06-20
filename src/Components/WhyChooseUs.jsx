'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Clock, Package, UserCheck, Percent, Globe } from 'lucide-react';


const features = [
  {
    icon: <ShieldCheck size={20} strokeWidth={1.8} />,
    title: 'ISO Certified Quality',
    desc: 'Five-stage inspection on every run. Zero-defect delivery — consistently.',
  },
  {
    icon: <Clock size={20} strokeWidth={1.8} />,
    title: '48-Hour Sampling',
    desc: 'Physical samples in 48 hours. From brief to approval in days, not weeks.',
  },
  {
    icon: <Package size={20} strokeWidth={1.8} />,
    title: 'Full OEM & White Label',
    desc: 'Custom labels, tags, cuts, and packaging. Your brand on every unit.',
  },
  {
    icon: <UserCheck size={20} strokeWidth={1.8} />,
    title: 'Dedicated Manager',
    desc: 'One point of contact for orders, updates, and logistics. Always.',
  },
  {
    icon: <Percent size={20} strokeWidth={1.8} />,
    title: 'Volume Pricing',
    desc: 'Transparent tiered pricing that scales with your order. No surprises.',
  },
  {
    icon: <Globe size={20} strokeWidth={1.8} />,
    title: 'Global Logistics',
    desc: 'Delivery to 60+ countries via trusted freight partners with live tracking.',
  },
];

/* ── Variants ── */
const fade = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section ref={sectionRef} style={{ background: '#fff', padding: '5rem 2rem 5.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>

          {/* Left: eyebrow + headline */}
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.65rem' }}>
              <div style={{ height: '1px', width: '28px', background: '#FF6B00', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FF6B00',
              }}>
                Why Partner With Us
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
              fontWeight: 800, letterSpacing: '-0.03em',
              color: '#111', lineHeight: 1.15, margin: 0,
            }}>
              Enterprise Manufacturing,{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Startup Agility
              </span>
            </h2>
          </motion.div>

          {/* Right: descriptor */}
          <motion.p
            custom={1}
            variants={fade}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem', color: '#999', lineHeight: 1.7,
              maxWidth: '340px', margin: 0, paddingTop: '2rem',
            }}
          >
            Industrial-scale production with the responsiveness and flexibility that growing brands demand.
          </motion.p>
        </div>

        {/* ── Feature grid — 3 columns × 2 rows = 6 clean cells ── */}
        <div 
          className="wcu-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {features.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .wcu-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .wcu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ f, i, inView }) {
  return (
    <motion.div
      custom={i + 2}
      variants={fade}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ backgroundColor: 'rgba(255,107,0,0.022)' }}
      style={{
        background: '#fff',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        cursor: 'default',
        transition: 'background 0.25s ease',
      }}
    >
      {/* Icon box */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          width: '42px', height: '42px',
          borderRadius: '4px',
          background: 'rgba(255,107,0,0.07)',
          color: '#FF6B00',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1rem', flexShrink: 0,
        }}
      >
        {f.icon}
      </motion.div>

      <h3 style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.92rem', fontWeight: 700,
        color: '#111', margin: '0 0 0.4rem', letterSpacing: '-0.01em',
      }}>
        {f.title}
      </h3>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.82rem', color: '#aaa', lineHeight: 1.65, margin: 0,
      }}>
        {f.desc}
      </p>
    </motion.div>
  );
}
