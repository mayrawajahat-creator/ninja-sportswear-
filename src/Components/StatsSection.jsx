'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Handshake, Trophy, Globe } from 'lucide-react';

/* ─── Stats data (clean Lucide icons) ─── */
const STATS = [
  {
    value: 10,
    suffix: 'M+',
    label: 'Units Produced Annually',
    icon: <TrendingUp size={22} strokeWidth={1.8} />,
  },
  {
    value: 150,
    suffix: '+',
    label: 'Global Brand Partners',
    icon: <Handshake size={22} strokeWidth={1.8} />,
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years of Excellence',
    icon: <Trophy size={22} strokeWidth={1.8} />,
  },
  {
    value: 60,
    suffix: '+',
    label: 'Countries Served',
    icon: <Globe size={22} strokeWidth={1.8} />,
  },
];

/* ─── Animated counter ─── */
function AnimatedNumber({ value, suffix, inView }) {
  const displayRef = useRef(null);
  const startRef   = useRef(false);

  React.useEffect(() => {
    if (!inView || startRef.current) return;
    startRef.current = true;

    const el       = displayRef.current;
    if (!el) return;
    const duration = 1800;
    const start    = performance.now();

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current  = Math.floor(easeOut(progress) * value);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value, suffix]);

  return (
    <span ref={displayRef}>
      0{suffix}
    </span>
  );
}

/* ─── Container variants ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};

/* ─── Main component ─── */
export default function StatsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{
      background: '#fff',
      padding: '5.5rem 2rem',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Label row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '3.5rem',
          }}
        >
          {/* Decorative line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              height: '1px',
              width: '36px',
              background: '#FF6B00',
              transformOrigin: 'left',
              flexShrink: 0,
            }}
          />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#FF6B00',
          }}>
            Trusted by brands worldwide
          </span>
        </motion.div>

        {/* ── Stats grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1px',
            background: 'rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {STATS.map((stat, i) => (
            <StatCard
              key={i}
              stat={stat}
              inView={inView}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Individual stat card ─── */
function StatCard({ stat, inView, index }) {
  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(255,107,0,0.025)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#fff';
      }}
      style={{
        background: '#fff',
        padding: '2.75rem 2.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        cursor: 'default',
        transition: 'background 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle corner accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          width: '36px',
          height: '36px',
          borderRadius: '4px',
          background: 'rgba(255,107,0,0.07)',
          color: '#FF6B00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {stat.icon}
      </motion.div>

      {/* Number */}
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
        fontWeight: 900,
        letterSpacing: '-0.05em',
        color: '#111',
        lineHeight: 1,
        marginBottom: '0.6rem',
      }}>
        <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: '1.5px',
          width: '28px',
          background: '#FF6B00',
          transformOrigin: 'left',
          marginBottom: '0.65rem',
        }}
      />

      {/* Label */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8rem',
          fontWeight: 500,
          color: '#999',
          letterSpacing: '0.01em',
          lineHeight: 1.4,
        }}
      >
        {stat.label}
      </motion.span>
    </motion.div>
  );
}
