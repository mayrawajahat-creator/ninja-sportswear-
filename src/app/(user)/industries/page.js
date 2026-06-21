'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap, BookOpen, Trophy, Users, ShoppingBag, Handshake,
  Check, ArrowRight,
} from 'lucide-react';
import PageHero, { HeroAccent } from '@/Components/PageHero';

const INDUSTRIES = [
  {
    id: '01',
    icon: <GraduationCap size={26} strokeWidth={1.7} />,
    title: 'Schools',
    subtitle: 'K-12 Athletic Programs',
    desc: 'Custom team uniforms for school athletic departments, gym classes and spirit wear programs. Affordable bulk pricing with fast turnaround.',
    sports: ['Lacrosse', 'Soccer', 'Basketball', 'Baseball', 'Football'],
    badge: 'Most Popular',
  },
  {
    id: '02',
    icon: <BookOpen size={26} strokeWidth={1.7} />,
    title: 'Colleges',
    subtitle: 'Collegiate Athletics',
    desc: 'NCAA-ready custom uniforms for collegiate teams. Technical fabrics, full sublimation and OEM packaging for varsity and club programs.',
    sports: ['All Sports', 'Varsity Kits', 'Practice Sets', 'Warm-ups'],
    badge: null,
  },
  {
    id: '03',
    icon: <Trophy size={26} strokeWidth={1.7} />,
    title: 'Athletic Departments',
    subtitle: 'Multi-Sport Programs',
    desc: 'Bulk uniform programs for athletic departments managing multiple teams. One vendor, one invoice, all sports covered.',
    sports: ['Lacrosse', 'Soccer', 'Basketball', 'Football', 'Baseball'],
    badge: null,
  },
  {
    id: '04',
    icon: <Users size={26} strokeWidth={1.7} />,
    title: 'Sports Clubs',
    subtitle: 'Amateur & Pro Clubs',
    desc: 'Custom kits for community clubs, travel teams and elite academies. Low MOQs, fast sampling and personal account management.',
    sports: ['Soccer Clubs', 'Basketball', 'Lacrosse Teams', 'Baseball'],
    badge: null,
  },
  {
    id: '05',
    icon: <ShoppingBag size={26} strokeWidth={1.7} />,
    title: 'Retail Brands',
    subtitle: 'Private Label & OEM',
    desc: 'White-label and private-label manufacturing for retail sportswear brands. Your label, your tags, your packaging — our precision.',
    sports: ['OEM Production', 'White Label', 'Retail Packs', 'Custom Labels'],
    badge: 'OEM Focus',
  },
  {
    id: '06',
    icon: <Handshake size={26} strokeWidth={1.7} />,
    title: 'Team Dealers',
    subtitle: 'B2B Resellers',
    desc: 'Partner with us as a team dealer. Competitive wholesale pricing, volume discounts and dedicated account support for resellers.',
    sports: ['Wholesale Pricing', 'Volume Deals', 'Drop Ship', 'Custom Programs'],
    badge: null,
  },
];

const STATS = [
  { value: '150+', label: 'Brand Partners Worldwide' },
  { value: '60+', label: 'Countries Served' },
  { value: '10M+', label: 'Units Produced Annually' },
  { value: '15+', label: 'Years of Excellence' },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function IndustriesPage() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={<>Built for Every <HeroAccent>Buyer</HeroAccent></>}
        subtitle="From school athletic departments to global retail brands — Ninja Sportswear manufactures for every type of buyer. We understand your volume, your deadlines and your budget."
        cta={[
          { label: 'Get a Quote', href: '/quote', primary: true }
        ]}
        align="center"
      />

      {/* ── Stats Bar ── */}
      <section style={{ background: '#FF6B00', padding: '2.5rem 2rem', fontFamily: "'Inter', sans-serif" }} ref={statsRef}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
        }} className="stats-bar">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              custom={i} variants={fade} initial="hidden" animate={statsInView ? 'visible' : 'hidden'}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 900, color: '#fff',
                letterSpacing: '-0.04em', lineHeight: 1,
                marginBottom: '0.3rem',
              }}>{s.value}</div>
              <div style={{
                fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)',
                fontWeight: 500, letterSpacing: '0.04em',
              }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Industries Grid ── */}
      <section style={{ background: '#fafafa', padding: '7rem 2rem 8rem', fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={gridRef}>
          <motion.div
            custom={0} variants={fade} initial="hidden" animate={gridInView ? 'visible' : 'hidden'}
            style={{ marginBottom: '4rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
              <div style={{ height: '1px', width: '28px', background: '#FF6B00' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF6B00' }}>
                Who We Work With
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
              fontWeight: 800, letterSpacing: '-0.03em',
              color: '#111', margin: 0,
            }}>
              We Manufacture for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Every Buyer Type</span>
            </h2>
          </motion.div>

          <div
            className="industries-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
          >
            {INDUSTRIES.map((ind, i) => (
              <IndustryCard key={i} ind={ind} i={i} inView={gridInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Section ── */}
      <section style={{ background: '#050508', padding: '7rem 2rem', fontFamily: "'Inter', sans-serif", position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)',
        }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} ref={ctaRef}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }} className="trust-grid">
            <motion.div
              custom={0} variants={fade} initial="hidden" animate={ctaInView ? 'visible' : 'hidden'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                <div style={{ height: '2px', width: '28px', background: '#FF6B00' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF6B00' }}>
                  Why Buyers Choose Us
                </span>
              </div>
              <h2 style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
                fontWeight: 800, letterSpacing: '-0.03em',
                color: '#fff', margin: '0 0 1.5rem', lineHeight: 1.2,
              }}>
                Most Sialkot exporters don&apos;t speak{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>your language.</span>
                {' '}We do.
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, margin: '0 0 2rem' }}>
                We understand what school athletic directors, club managers and retail buyers actually need — 
                fast samples, clear pricing, reliable delivery and zero surprises.
              </p>
              <Link href="/quote" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#FF6B00', color: '#fff', textDecoration: 'none',
                padding: '0.85rem 2rem', borderRadius: '4px',
                fontSize: '0.88rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.04em',
                boxShadow: '0 4px 20px rgba(255,107,0,0.35)',
              }}>
                Start Your Order <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              custom={1} variants={fade} initial="hidden" animate={ctaInView ? 'visible' : 'hidden'}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {[
                { point: 'Dedicated account manager for every buyer type', },
                { point: '48-hour physical samples — shipped to your door', },
                { point: 'Transparent, tiered pricing with no hidden fees', },
                { point: 'ISO-certified 5-stage quality control on every unit', },
                { point: 'Delivery to 60+ countries via trusted freight partners', },
                { point: 'Low MOQs — starting from 20 units per style', },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '6px',
                }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: 'rgba(255,107,0,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '1px',
                  }}>
                    <Check size={12} color="#FF6B00" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                    {item.point}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @media (max-width: 900px) {
          .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 560px) {
          .industries-grid { grid-template-columns: 1fr !important; }
          .stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}

function IndustryCard({ ind, i, inView }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      custom={i + 1} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hovered ? 'rgba(255,107,0,0.2)' : 'rgba(0,0,0,0.07)'}`,
        borderRadius: '8px',
        padding: '2rem',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.07)' : '0 2px 8px rgba(0,0,0,0.03)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {ind.badge && (
        <span style={{
          position: 'absolute', top: '1.25rem', right: '1.25rem',
          fontSize: '0.6rem', fontWeight: 700,
          background: '#FF6B00', color: '#fff',
          padding: '0.2rem 0.6rem', borderRadius: '2px',
          textTransform: 'uppercase', letterSpacing: '0.1em',
        }}>
          {ind.badge}
        </span>
      )}

      <div style={{
        width: '52px', height: '52px', borderRadius: '6px',
        background: hovered ? 'rgba(255,107,0,0.12)' : 'rgba(255,107,0,0.07)',
        color: '#FF6B00',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.25rem',
        transition: 'background 0.3s ease',
      }}>
        {ind.icon}
      </div>

      <div style={{
        fontSize: '0.65rem', fontWeight: 700,
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: '#FF6B00', marginBottom: '0.35rem',
      }}>
        {ind.id} — {ind.subtitle}
      </div>

      <h3 style={{
        fontSize: '1.15rem', fontWeight: 800,
        color: '#111', margin: '0 0 0.75rem',
        letterSpacing: '-0.02em',
      }}>
        {ind.title}
      </h3>

      <p style={{
        fontSize: '0.85rem', color: '#888',
        lineHeight: 1.7, margin: '0 0 1.25rem',
      }}>
        {ind.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {ind.sports.map((tag, t) => (
          <span key={t} style={{
            fontSize: '0.7rem', fontWeight: 600,
            color: hovered ? '#FF6B00' : '#888',
            background: hovered ? 'rgba(255,107,0,0.08)' : 'rgba(0,0,0,0.04)',
            padding: '0.2rem 0.6rem', borderRadius: '3px',
            transition: 'all 0.25s ease',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
