'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    id: 1,
    title: 'Performance Jerseys',
    category: 'Jerseys & Kits',
    desc: 'Moisture-wicking, breathable fabric engineered for peak athletic performance. Full sublimation and screen print options.',
    image: '/product1.png',
    moq: '50 pcs',
    lead: '2–3 wks',
    tag: 'Best Seller',
  },
  {
    id: 2,
    title: 'Training Hoodies',
    category: 'Hoodies & Fleece',
    desc: 'Premium 350gsm fleece hoodies with full embroidery support, YKK zippers, and custom branded labels.',
    image: '/product2.png',
    moq: '30 pcs',
    lead: '3–4 wks',
    tag: 'New',
  },
  {
    id: 3,
    title: 'Athletic Bottoms',
    category: 'Shorts & Track Pants',
    desc: 'Technical stretch-fabric bottoms available as shorts or full-length track pants with custom waistbands.',
    image: '/product3.png',
    moq: '50 pcs',
    lead: '2–3 wks',
    tag: 'Popular',
  },
  {
    id: 4,
    title: 'Warmup Jackets',
    category: 'Outerwear',
    desc: 'Lightweight, windproof warmup jackets with breathable mesh lining and custom heat-transfer team logos.',
    image: '/product1.png',
    moq: '40 pcs',
    lead: '3–4 wks',
    tag: 'New Design',
  },
  {
    id: 5,
    title: 'Compression Tights',
    category: 'Activewear',
    desc: 'High-compression fabric supporting muscle recovery with flatlock seams and sweat-wicking technology.',
    image: '/product2.png',
    moq: '50 pcs',
    lead: '2–3 wks',
    tag: 'Trending',
  },
  {
    id: 6,
    title: 'Team Gear Bags',
    category: 'Accessories',
    desc: 'Heavy-duty water-resistant gear bags with dedicated compartments for shoes, kits, and branding options.',
    image: '/product3.png',
    moq: '30 pcs',
    lead: '3–4 wks',
    tag: 'Hot Item',
  },
];

const headerVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ProductCard({ p }) {
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '6px',
        overflow: 'hidden',
        border: 'none',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.015)',
        transition: 'box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.transform = 'translateY(-6px)';
        const img = e.currentTarget.querySelector(`.prod-img-${p.id}`);
        if (img) {
          img.style.transform = 'scale(1.03)';
        }
        const btn = e.currentTarget.querySelector(`.quote-btn-${p.id}`);
        if (btn) {
          btn.style.background = '#FF6B00';
          btn.style.borderColor = '#FF6B00';
          btn.style.color = '#ffffff';
          const arrow = btn.querySelector('.arrow-svg');
          if (arrow) arrow.style.transform = 'translateX(4px)';
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.015)';
        e.currentTarget.style.transform = 'none';
        const img = e.currentTarget.querySelector(`.prod-img-${p.id}`);
        if (img) {
          img.style.transform = 'scale(1)';
        }
        const btn = e.currentTarget.querySelector(`.quote-btn-${p.id}`);
        if (btn) {
          btn.style.background = 'transparent';
          btn.style.borderColor = 'rgba(0, 0, 0, 0.12)';
          btn.style.color = '#111111';
          const arrow = btn.querySelector('.arrow-svg');
          if (arrow) arrow.style.transform = 'none';
        }
      }}
    >
      {/* Image Container (aspect-ratio: 1/1 square) */}
      <div style={{ position: 'relative', aspectRatio: '1/1', background: '#F5F5F5', overflow: 'hidden' }}>
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`prod-img-${p.id}`}
          style={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
        />

        {/* Glassmorphic Tag */}
        {p.tag && (
          <div style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            color: '#111111',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.62rem',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '3px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            zIndex: 2,
          }}>
            {p.tag}
          </div>
        )}
      </div>

      {/* Content Body */}
      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Category Eyebrow */}
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.65rem',
            fontWeight: 700,
            color: '#FF6B00',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.4rem',
          }}>
            {p.category}
          </span>

          {/* Title */}
          <h3 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.15rem',
            fontWeight: 800,
            color: '#111111',
            margin: '0 0 0.6rem 0',
            letterSpacing: '-0.01em',
            lineHeight: 1.25,
          }}>
            {p.title}
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.86rem',
            color: '#666666',
            lineHeight: 1.6,
            margin: 0,
          }}>
            {p.desc}
          </p>
        </div>

        {/* Request a Quote Button */}
        <div>
          <Link href="/contact" className={`quote-btn-${p.id}`} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#111111',
            background: 'transparent',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            padding: '0.7rem 1.25rem',
            borderRadius: '4px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginTop: '1.5rem',
            transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
            width: '100%',
          }}>
            <span>Request a Quote</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow-svg"
              style={{
                transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="feat-products-section" style={{ background: '#FAFAFA', padding: '6rem 2rem 7rem', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.6rem' }}>
              <div style={{ height: '1px', width: '28px', background: '#FF6B00', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FF6B00',
              }}>
                Our Product Range
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
              fontWeight: 800, letterSpacing: '-0.03em', color: '#111', margin: 0, lineHeight: 1.15,
            }}>
              Crafted for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Performance</span>
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <Link href="/products" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.82rem', fontWeight: 600, color: '#FF6B00',
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'gap 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.gap = '10px'}
              onMouseLeave={e => e.currentTarget.style.gap = '6px'}
            >
              View Full Catalog
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Slider Navigation controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button className="swiper-button-prev-custom" style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#111', cursor: 'pointer', transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = '#FF6B00';
                  e.currentTarget.style.borderColor = '#FF6B00';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#111';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <button className="swiper-button-next-custom" style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#111', cursor: 'pointer', transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = '#FF6B00';
                  e.currentTarget.style.borderColor = '#FF6B00';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#111';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Product Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', paddingBottom: '3rem' }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            style={{ padding: '0.5rem 0.5rem 2rem 0.5rem', margin: '-0.5rem' }}
          >
            {products.map((p) => (
              <SwiperSlide key={p.id} style={{ height: 'auto', display: 'flex' }}>
                <ProductCard p={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .feat-products-section .swiper-pagination {
          bottom: 0px !important;
        }
        .feat-products-section .swiper-pagination-bullet {
          background: #cccccc;
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 6px !important;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .feat-products-section .swiper-pagination-bullet-active {
          background: #FF6B00;
          width: 24px;
          border-radius: 4px;
        }
      ` }} />
    </section>
  );
}
