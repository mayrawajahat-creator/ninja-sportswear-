'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageHero, { HeroAccent } from '@/Components/PageHero';

const SPORTS = [
  {
    slug: 'lacrosse',
    title: 'Custom Lacrosse Uniforms',
    sub: 'Jerseys, reversible pinnies, shorts, shooter shirts & practice uniforms — manufactured to team spec.',
    image: '/stats-athlete.png',
    tag: '01',
    accent: 'Lacrosse',
  },
  {
    slug: 'soccer',
    title: 'Custom Soccer Uniforms',
    sub: 'Sublimation jerseys, shorts, training kits & custom socks — crafted for every level of play.',
    image: '/blog-action.png',
    tag: '02',
    accent: 'Soccer',
  },
  {
    slug: 'baseball',
    title: 'Custom Baseball Uniforms',
    sub: 'Jerseys, pants, training jackets & custom caps — full team packages delivered in one shipment.',
    image: '/about-hero.png',
    tag: '03',
    accent: 'Baseball',
  },
  {
    slug: 'basketball',
    title: 'Custom Basketball Uniforms',
    sub: 'Performance jerseys, shorts, warmup suits & shooting shirts — built for the court.',
    image: '/blog-run.png',
    tag: '04',
    accent: 'Basketball',
  },
  {
    slug: 'football',
    title: 'Custom Football Uniforms',
    sub: 'Jerseys, pants, practice wear & compression gear — engineered for the gridiron.',
    image: '/slide3.png',
    tag: '05',
    accent: 'American Football',
  },
];

const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SportsPage() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <>
      <PageHero
        eyebrow="Sports We Manufacture"
        title={<>Elite Sportswear, <HeroAccent>Every Sport</HeroAccent></>}
        subtitle="Sialkot-based B2B manufacturer producing custom team uniforms across 5 major sports. OEM, white-label and bulk orders welcome."
        align="center"
      />

      {/* ── Sports Grid ── */}
      <section style={{ background: '#fafafa', padding: '6rem 2rem 8rem', fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={gridRef}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {SPORTS.map((sport, i) => (
              <SportRow key={sport.slug} sport={sport} i={i} inView={gridInView} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .sport-row:hover .sport-img { transform: scale(1.06); }
        .sport-row:hover .sport-arrow { transform: translateX(4px); }
        .sport-arrow { transition: transform 0.3s ease; }
        @media (max-width: 768px) {
          .sport-row-inner { flex-direction: column !important; }
          .sport-img-wrap { width: 100% !important; height: 220px !important; }
        }
      `}</style>
    </>
  );
}

function SportRow({ sport, i, inView }) {
  const [hovered, setHovered] = React.useState(false);
  const isEven = i % 2 === 0;

  return (
    <motion.div
      custom={i}
      variants={fade}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="sport-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#fff' : '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.08)' : '0 2px 12px rgba(0,0,0,0.03)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
    >
      <Link href={`/sports/${sport.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div
          className="sport-row-inner"
          style={{
            display: 'flex',
            flexDirection: isEven ? 'row' : 'row-reverse',
            alignItems: 'stretch',
            minHeight: '280px',
          }}
        >
          {/* Image */}
          <div
            className="sport-img-wrap"
            style={{ width: '380px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}
          >
            <Image
              src={sport.image}
              alt={sport.title}
              fill
              sizes="380px"
              style={{
                objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.25,1,0.5,1)',
              }}
              className="sport-img"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: hovered
                ? 'linear-gradient(135deg, rgba(255,107,0,0.15) 0%, transparent 60%)'
                : 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 60%)',
              transition: 'background 0.4s ease',
            }} />
            <span style={{
              position: 'absolute', top: '1.25rem', left: '1.25rem',
              fontFamily: "'Courier New', monospace",
              fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.12em', color: '#fff',
              background: '#FF6B00',
              padding: '0.2rem 0.6rem', borderRadius: '2px',
            }}>
              {sport.tag}
            </span>
          </div>

          {/* Content */}
          <div style={{
            flex: 1,
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            <span style={{
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#FF6B00',
            }}>
              {sport.accent}
            </span>
            <h2 style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
              fontWeight: 800, letterSpacing: '-0.02em',
              color: '#111', margin: 0, lineHeight: 1.15,
            }}>
              {sport.title}
            </h2>
            <p style={{
              fontSize: '0.88rem', color: '#888',
              lineHeight: 1.7, margin: 0, maxWidth: '420px',
            }}>
              {sport.sub}
            </p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '0.82rem', fontWeight: 700,
              color: hovered ? '#FF6B00' : '#111',
              textTransform: 'uppercase', letterSpacing: '0.06em',
              transition: 'color 0.25s ease',
              marginTop: '0.5rem',
            }}>
              <span>View Products</span>
              <span className="sport-arrow">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
