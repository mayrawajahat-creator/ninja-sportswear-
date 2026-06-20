'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ARTICLES = [
  {
    id: 1,
    title: 'Choosing the Right Fabrics for Technical Activewear',
    category: 'Material Science',
    desc: 'An in-depth guide to GSM, moisture-wicking coatings, nylon-spandex blends, and eco-friendly recycled fabrics for performance sportswear.',
    date: 'June 18, 2026',
    readTime: '6 min read',
    image: '/blog-run.png',
  },
  {
    id: 2,
    title: 'Understanding Sportswear MOQs and Sample Runs',
    category: 'Supply Chain',
    desc: 'How growing activewear brands can navigate minimum order quantities, manage prototype design phases, and scale bulk production cycles efficiently.',
    date: 'June 10, 2026',
    readTime: '8 min read',
    image: '/blog-stretch.png',
  },
  {
    id: 3,
    title: 'The Future of Sublimation and Screen Printing in B2B',
    category: 'Manufacturing Tech',
    desc: 'Analyzing modern digital printing advancements, durability of ink bonding under high-friction sports environments, and eco-conscious dye processes.',
    date: 'May 28, 2026',
    readTime: '5 min read',
    image: '/blog-action.png',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function BlogPage() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-60px' });

  return (
    <main style={{ background: '#fafafa', minHeight: '100svh', paddingBottom: '6rem' }} className="blog-page">
      {/* Page Hero */}
      <section style={{
        background: '#0A0A0A',
        padding: 'clamp(7rem, 12vw, 10rem) 2rem clamp(4rem, 8vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif",
        marginBottom: '4rem',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FF6B00',
            display: 'block',
            marginBottom: '1rem',
            fontFamily: "'Inter', sans-serif",
          }}>
            Ninja Insights
          </span>
          <h1 style={{
            fontSize: 'clamp(2.3rem, 5vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#fff',
            margin: '0 0 1.25rem',
            lineHeight: 1.05,
            fontFamily: "'Inter', sans-serif",
          }}>
            Manufacturing & Design{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Insights Studio
            </span>
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.75,
            maxWidth: '680px',
            margin: '0 auto',
            fontFamily: "'Inter', sans-serif",
          }}>
            An in-depth guide to sportswear material science, B2B production tips, and global apparel logistics.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Grid of Articles */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {ARTICLES.map((art) => (
            <motion.article
              key={art.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,107,0,0.2)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)';
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', aspectRatio: '16/10', background: '#f5f5f5', overflow: 'hidden' }}>
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  style={{ objectFit: 'cover', filter: 'grayscale(30%)', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(6px)',
                  color: '#fff',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '3px 10px',
                  borderRadius: '2px',
                }}>
                  {art.category}
                </span>
              </div>

              {/* Text Info */}
              <div style={{ padding: '1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '10px', fontSize: '0.75rem', color: '#999', marginBottom: '0.75rem' }}>
                    <span>{art.date}</span>
                    <span>&bull;</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h2 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#111',
                    lineHeight: '1.35',
                    margin: '0 0 0.75rem 0',
                    letterSpacing: '-0.02em',
                  }}>
                    {art.title}
                  </h2>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.84rem',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: '0 0 1.5rem 0',
                  }}>
                    {art.desc}
                  </p>
                </div>

                <Link
                  href={`/products`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#FF6B00',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  className="blog-link-btn"
                >
                  <span>Read Article</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        .blog-link-btn {
          transition: gap 0.2s ease;
        }
        .blog-link-btn:hover {
          gap: 7px !important;
        }
      `}</style>
    </main>
  );
}
