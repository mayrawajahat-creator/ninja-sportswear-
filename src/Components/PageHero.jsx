'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

/**
 * PageHero — shared hero used on every inner page (not the homepage).
 *
 * Props:
 *   eyebrow  {string}           — small label above the title (e.g. "About Us")
 *   title    {string|ReactNode} — main headline; wrap words in <HeroAccent> for orange gradient
 *   subtitle {string}           — subheading paragraph
 *   breadcrumbs {Array<{label, href}>} — optional breadcrumb trail; last item has no href
 *   cta      {Array<{label, href, primary}>} — optional CTA buttons
 *   align    {'center'|'left'}  — default 'left'
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  cta,
  align = 'left',
  children,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const isCenter = align === 'center';

  return (
    <section style={{
      background: '#0A0A0A',
      minHeight: '380px',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(7rem, 12vw, 10rem) 2rem clamp(4rem, 8vw, 6rem)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: isCenter
          ? 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,107,0,0.08) 0%, transparent 70%)'
          : 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)',
      }} />
      {/* Top edge accent line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.35) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, textAlign: isCenter ? 'center' : 'left' }} ref={ref}>

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap', justifyContent: isCenter ? 'center' : 'flex-start' }}
          >
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {crumb.href ? (
                  <Link href={crumb.href} style={{
                    fontSize: '0.72rem', fontWeight: 600,
                    color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FF6B00' }}>{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.72rem' }}>/</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', justifyContent: isCenter ? 'center' : 'flex-start' }}
          >
            {!isCenter && <div style={{ height: '1px', width: '32px', background: '#FF6B00', flexShrink: 0 }} />}
            <span style={{
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#FF6B00',
            }}>
              {eyebrow}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 3.75rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#fff',
            margin: '0 0 1.25rem',
            lineHeight: 1.08,
            textTransform: 'uppercase',
            maxWidth: isCenter ? '900px' : '700px',
            marginLeft: isCenter ? 'auto' : 0,
            marginRight: isCenter ? 'auto' : 0,
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)',
              color: 'rgba(255,255,255,0.45)',
              maxWidth: isCenter ? '600px' : '520px',
              lineHeight: 1.75,
              margin: isCenter ? '0 auto' : 0,
              marginBottom: cta ? '2.5rem' : 0,
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA buttons */}
        {cta && cta.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: subtitle ? '2.5rem' : '1.5rem', justifyContent: isCenter ? 'center' : 'flex-start' }}
          >
            {cta.map((btn, i) => (
              <Link key={i} href={btn.href} style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: btn.primary ? '#FF6B00' : 'transparent',
                color: '#fff',
                border: btn.primary ? 'none' : '1px solid rgba(255,255,255,0.2)',
                textDecoration: 'none',
                padding: '0.8rem 2rem',
                borderRadius: '4px',
                fontSize: '0.88rem', fontWeight: btn.primary ? 700 : 600,
                letterSpacing: '0.04em', textTransform: 'uppercase',
                boxShadow: btn.primary ? '0 4px 20px rgba(255,107,0,0.4)' : 'none',
                transition: 'all 0.25s ease',
              }}
                onMouseEnter={e => {
                  if (btn.primary) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,107,0,0.5)'; }
                  else { e.currentTarget.style.borderColor = '#FF6B00'; e.currentTarget.style.color = '#FF6B00'; }
                }}
                onMouseLeave={e => {
                  if (btn.primary) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,107,0,0.4)'; }
                  else { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#fff'; }
                }}
              >
                {btn.label}
              </Link>
            ))}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}

/** Wrap part of title text in this to get the orange gradient accent */
export function HeroAccent({ children }) {
  return (
    <span style={{
      background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      {children}
    </span>
  );
}
