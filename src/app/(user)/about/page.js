'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Handshake, Zap, Globe, ArrowRight } from 'lucide-react';
import PageHero, { HeroAccent } from '@/Components/PageHero';

const values = [
  { icon: <Target size={24} strokeWidth={1.8} />, title: 'Precision', desc: 'Every stitch, seam, and cut is executed with meticulous attention to detail across all production runs.' },
  { icon: <Handshake size={24} strokeWidth={1.8} />, title: 'Partnership', desc: 'We operate as an extension of your brand — not just a supplier, but a long-term manufacturing partner.' },
  { icon: <Zap size={24} strokeWidth={1.8} />, title: 'Speed', desc: '48-hour sample turnaround and 2–4 week bulk production windows for time-sensitive launches.' },
  { icon: <Globe size={24} strokeWidth={1.8} />, title: 'Global Reach', desc: 'Shipping to 60+ countries with proven freight partnerships and comprehensive documentation.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Forged in Excellence, <HeroAccent>Built for Scale</HeroAccent></>}
        subtitle="Since 2009, Ninja Sports Wear has been engineering premium athletic apparel for the world's fastest-growing sports brands. Our Sialkot-based facility combines traditional craftsmanship with modern production technology."
        align="center"
      />

      {/* Widescreen Banner Overlap */}
      <div style={{ maxWidth: '1280px', margin: '-4rem auto 4rem', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{
          position: 'relative',
          aspectRatio: '21/9',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
        }}>
          <Image
            src="/slide1.png"
            alt="Sportswear design studio and athletic team training"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Mission */}
      <section style={{
        background: '#fff',
        padding: '5rem 2rem',
        fontFamily: "'Inter', sans-serif",
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FF6B00',
              display: 'block',
              marginBottom: '0.75rem',
            }}>
              Our Mission
            </span>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#111',
              margin: '0 0 1rem',
              lineHeight: 1.25,
            }}>
              Empowering Brands Through World-Class Manufacturing
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#777', lineHeight: 1.75, margin: '0 0 1rem' }}>
              We believe every great sports brand deserves a manufacturing partner that matches their ambition. Ninja Sports Wear was founded to bridge the gap between high-quality production and accessible B2B pricing.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#777', lineHeight: 1.75, margin: 0 }}>
              From emerging startups placing 50-unit orders to established enterprises ordering 100,000+ units annually — we scale with your business, never compromising on quality.
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {[
              { n: '2009', l: 'Founded' },
              { n: 'ISO', l: 'Certified' },
              { n: '150+', l: 'Active Partners' },
              { n: '10M+', l: 'Units / Year' },
            ].map((s, i) => (
              <div key={i} style={{
                background: '#fff',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: '#FF6B00',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}>{s.n}</div>
                <div style={{ fontSize: '0.78rem', color: '#999', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stitching Banner Image */}
      <section style={{
        position: 'relative',
        height: '350px',
        width: '100%',
        overflow: 'hidden',
      }}>
        <Image
          src="/about-banner.png"
          alt="Technical sportswear stitching and assembly line"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 20%, transparent 80%, rgba(250,250,250,0.5) 100%)',
          pointerEvents: 'none',
        }} />
      </section>

      {/* Values */}
      <section style={{
        background: '#FAFAFA',
        padding: '5rem 2rem',
        fontFamily: "'Inter', sans-serif",
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FF6B00',
              display: 'block',
              marginBottom: '0.6rem',
            }}>Our Values</span>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#111',
              margin: 0,
            }}>
              What Drives Us Every Day
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}>
            {values.map((v, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '4px',
                padding: '2rem',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.07)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ color: '#FF6B00', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', margin: '0 0 0.5rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#888', lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section style={{
        position: 'relative',
        padding: '8rem 2rem',
        fontFamily: "'Inter', sans-serif",
        textAlign: 'center',
        background: '#0A0A0A',
        overflow: 'hidden',
      }}>
        {/* Background Image with dark overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/about-cta-bg.png"
            alt="Sportswear production and material storage"
            fill
            style={{ objectFit: 'cover', opacity: 0.35, filter: 'grayscale(30%)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />
        </div>

        <div style={{ maxWidth: '560px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: '0 0 0.75rem',
          }}>Ready to Partner With Us?</h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 0 2rem' }}>
            Let's discuss your manufacturing needs and build something great together.
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: '0.9rem',
            color: '#fff',
            background: 'linear-gradient(135deg, #FF6B00, #FF8C00)',
            padding: '0.9rem 2.25rem',
            borderRadius: '4px',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(255,107,0,0.35)',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,107,0,0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,107,0,0.35)';
            }}
          >
            Contact Us
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
