'use client';
import React, { useRef, useState, use } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PageHero, { HeroAccent } from '@/Components/PageHero';

const SPORTS_DB = {
  lacrosse: {
    title: 'Custom Lacrosse Uniforms',
    heroImage: '/stats-athlete.png',
    accent: 'Lacrosse',
    sub: 'Championship-grade lacrosse apparel manufactured in Sialkot. Full sublimation, screen print & OEM options.',
    categories: [
      { slug: 'jerseys', name: 'Lacrosse Jerseys', icon: '🥍', image: '/product1.png', desc: 'Lightweight sublimated jerseys with custom numbering, logos & colorways.', count: 4 },
      { slug: 'pinnies', name: 'Reversible Pinnies', icon: '🔄', image: '/product2.png', desc: 'Dual-color reversible pinnies — ideal for practice & scrimmages.', count: 3 },
      { slug: 'shorts', name: 'Shorts', icon: '🩳', image: '/product3.png', desc: 'Stretch-fabric shorts with inner compression liner and custom waistband.', count: 3 },
      { slug: 'shooter-shirts', name: 'Shooter Shirts', icon: '👕', image: '/product1.png', desc: 'Technical-fit shooter shirts with vented mesh panels for max airflow.', count: 2 },
      { slug: 'practice-uniforms', name: 'Practice Uniforms', icon: '⚙️', image: '/product2.png', desc: 'Full-set practice kits — jersey, shorts & socks in team colors.', count: 2 },
    ],
  },
  soccer: {
    title: 'Custom Soccer Uniforms',
    heroImage: '/blog-action.png',
    accent: 'Soccer',
    sub: 'Professional soccer kits produced for clubs, academies, schools and retail brands worldwide.',
    categories: [
      { slug: 'jerseys', name: 'Soccer Jerseys', icon: '⚽', image: '/product1.png', desc: 'Fully sublimated jerseys with moisture-wicking polyester fabric.', count: 4 },
      { slug: 'shorts', name: 'Soccer Shorts', icon: '🩳', image: '/product3.png', desc: 'Lightweight shorts with side slits and custom waistband design.', count: 2 },
      { slug: 'training-kits', name: 'Training Kits', icon: '🎽', image: '/product2.png', desc: 'Full training set with jersey, shorts and socks — ready to ship.', count: 2 },
      { slug: 'socks', name: 'Custom Socks', icon: '🧦', image: '/product3.png', desc: 'Team-branded socks with non-slip grip sole and crew-length cut.', count: 2 },
    ],
  },
  baseball: {
    title: 'Custom Baseball Uniforms',
    heroImage: '/about-hero.png',
    accent: 'Baseball',
    sub: 'Full-package baseball uniforms for teams, academies and retail brands — delivered in one shipment.',
    categories: [
      { slug: 'jerseys', name: 'Baseball Jerseys', icon: '⚾', image: '/product1.png', desc: 'Button-front or pull-over jerseys with full sublimation or screen print.', count: 2 },
      { slug: 'pants', name: 'Baseball Pants', icon: '🩳', image: '/product2.png', desc: 'Open-bottom or knicker-cut pants with reinforced knees and custom piping.', count: 2 },
      { slug: 'jackets', name: 'Training Jackets', icon: '🧥', image: '/product3.png', desc: 'Windproof warm-up jackets with mesh lining and custom team branding.', count: 1 },
      { slug: 'caps', name: 'Custom Caps', icon: '🧢', image: '/product1.png', desc: 'Structured 6-panel caps with embroidered logos and custom fit.', count: 1 },
    ],
  },
  basketball: {
    title: 'Custom Basketball Uniforms',
    heroImage: '/blog-run.png',
    accent: 'Basketball',
    sub: 'Court-ready basketball kits built for performance, identity and durability at every level.',
    categories: [
      { slug: 'jerseys', name: 'Basketball Jerseys', icon: '🏀', image: '/product1.png', desc: 'Reversible or single-layer jerseys with full sublimation and number sets.', count: 3 },
      { slug: 'shorts', name: 'Basketball Shorts', icon: '🩳', image: '/product2.png', desc: 'Mid-length shorts with side pockets, elastic waistband and piping.', count: 2 },
      { slug: 'warmup-suits', name: 'Warmup Suits', icon: '🎽', image: '/product3.png', desc: 'Matching jacket & pant warmup sets with custom team branding.', count: 1 },
      { slug: 'shooting-shirts', name: 'Shooting Shirts', icon: '👕', image: '/product1.png', desc: 'Open-sided shooting shirts for pre-game warmup and bench wear.', count: 1 },
    ],
  },
  football: {
    title: 'Custom American Football Uniforms',
    heroImage: '/slide3.png',
    accent: 'American Football',
    sub: 'Gridiron-ready football kits built for impact, durability and full custom team identity.',
    categories: [
      { slug: 'jerseys', name: 'Football Jerseys', icon: '🏈', image: '/product1.png', desc: 'Durable mesh jerseys with tackle twill numbers and custom team colors.', count: 2 },
      { slug: 'pants', name: 'Football Pants', icon: '🩳', image: '/product2.png', desc: 'Compression pants with integrated or removable padding options.', count: 2 },
      { slug: 'practice-jerseys', name: 'Practice Jerseys', icon: '🔄', image: '/product3.png', desc: 'Lightweight reversible practice jerseys — durable and fast turnaround.', count: 1 },
      { slug: 'compression', name: 'Compression Gear', icon: '💪', image: '/product1.png', desc: 'Full-body compression base layers for under-pad support.', count: 1 },
    ],
  },
};

const PROCESS = [
  { num: '01', title: 'Design Approval', desc: 'Submit your design or finalize with our team.' },
  { num: '02', title: 'Sampling', desc: 'Physical samples shipped within 48 hours.' },
  { num: '03', title: 'Production', desc: 'Full-scale manufacturing with precision stitching.' },
  { num: '04', title: 'Quality Check', desc: '5-stage QC on every unit before packing.' },
  { num: '05', title: 'Shipping', desc: 'Packed and dispatched via your preferred freight.' },
];

const GALLERY = [
  '/stats-athlete.png', '/blog-run.png', '/about-hero.png', '/blog-action.png',
  '/slide3.png', '/cta-athlete.png', '/stats-athlete.png', '/blog-action.png',
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function SportPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.sport;
  const sport = SPORTS_DB[slug];

  if (!sport) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center', fontFamily: "'Inter', sans-serif" }}>
        <h1 style={{ color: '#111' }}>Sport not found</h1>
        <Link href="/sports" style={{ color: '#FF6B00' }}>← Back to Sports</Link>
      </div>
    );
  }

  return (
    <>
      <HeroSection sport={sport} slug={slug} />
      <CategoriesSection sport={sport} slug={slug} />
      <GallerySection sport={sport} />
      <ProcessSection />
      <CTASection sport={sport} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @media (max-width: 900px) { .cat-grid { grid-template-columns: repeat(2,1fr) !important; } .gal-grid { grid-template-columns: repeat(2,1fr) !important; grid-auto-rows: 200px !important; } .proc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .cat-grid { grid-template-columns: 1fr !important; } .gal-grid { grid-template-columns: 1fr !important; } .proc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}

function HeroSection({ sport, slug }) {
  const words = sport.title.split(' ');
  const firstPart = words.slice(0, -1).join(' ');
  const lastWord = words.slice(-1)[0];

  return (
    <PageHero
      breadcrumbs={[
        { label: 'Sports', href: '/sports' },
        { label: sport.accent }
      ]}
      title={<>{firstPart} <HeroAccent>{lastWord}</HeroAccent></>}
      subtitle={sport.sub}
      cta={[
        { label: 'Get a Quote', href: '/quote', primary: true },
        { label: 'Contact Us', href: '/contact', primary: false }
      ]}
      align="center"
    />
  );
}

function CategoriesSection({ sport, slug }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <section style={{ background: '#fff', padding: '6rem 2rem', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={ref}>
        <motion.div custom={0} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
            <div style={{ height: '1px', width: '28px', background: '#FF6B00' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF6B00' }}>Shop by Category</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#111', margin: '0 0 0.5rem' }}>
            Products We <span style={{ background: 'linear-gradient(135deg,#FF6B00,#FF9500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Manufacture</span>
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#999', margin: 0 }}>Click a category to explore all products, specs and ordering options.</p>
        </motion.div>
        <div className="cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {sport.categories.map((cat, i) => <CategoryCard key={cat.slug} cat={cat} sportSlug={slug} i={i} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat, sportSlug, i, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div custom={i + 1} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      <Link href={`/sports/${sportSlug}/${cat.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: '#fff', border: `1px solid ${hovered ? 'rgba(255,107,0,0.25)' : 'rgba(0,0,0,0.07)'}`, borderRadius: '8px', overflow: 'hidden', boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)', transform: hovered ? 'translateY(-4px)' : 'translateY(0)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
          <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
            <Image src={cat.image} alt={cat.name} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover', transform: hovered ? 'scale(1.06)' : 'scale(1)', filter: hovered ? 'brightness(0.8)' : 'brightness(0.65)', transition: 'transform 0.6s cubic-bezier(0.25,1,0.5,1), filter 0.5s ease' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(5,5,8,0.7) 0%,transparent 60%)' }} />
            <span style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.6rem', fontWeight: 700, background: '#FF6B00', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '2px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cat.count} Products</span>
            <span style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontSize: '1.5rem' }}>{cat.icon}</span>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#111', margin: '0 0 0.4rem', letterSpacing: '-0.01em' }}>{cat.name}</h3>
            <p style={{ fontSize: '0.83rem', color: '#888', lineHeight: 1.6, margin: '0 0 1rem' }}>{cat.desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 700, color: hovered ? '#FF6B00' : '#111', textTransform: 'uppercase', letterSpacing: '0.06em', transition: 'color 0.25s ease' }}>
              <span>View Products</span><ArrowRight size={13} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function GallerySection({ sport }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(null);
  return (
    <section style={{ background: '#050508', padding: '6rem 2rem 7rem', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={ref}>
        <motion.div custom={0} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
            <div style={{ height: '2px', width: '28px', background: '#FF6B00' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF6B00' }}>Design Gallery</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
            {sport.accent} <span style={{ background: 'linear-gradient(135deg,#FF6B00,#FF9500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Showcase</span>
          </h2>
        </motion.div>
        <div className="gal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridAutoRows: '240px', gap: '1rem' }}>
          {GALLERY.map((img, i) => (
            <motion.div key={i} custom={i} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)', gridColumn: i === 0 || i === 4 ? 'span 2' : 'span 1' }}>
              <Image src={img} alt={`${sport.accent} ${i+1}`} fill sizes="25vw" style={{ objectFit: 'cover', transform: hovered === i ? 'scale(1.08)' : 'scale(1)', filter: hovered === i ? 'brightness(0.85)' : 'brightness(0.65)', transition: 'transform 0.6s cubic-bezier(0.25,1,0.5,1),filter 0.5s ease' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(to top,rgba(5,5,8,0.85) 0%,transparent 100%)', opacity: hovered === i ? 1 : 0, transition: 'opacity 0.3s ease' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FF6B00', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Design {String(i+1).padStart(2,'0')}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <section style={{ background: '#08080c', padding: '6rem 2rem', fontFamily: "'Inter', sans-serif", position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 50% at 50% 50%,rgba(255,107,0,0.05) 0%,transparent 70%)' }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }} ref={ref}>
        <motion.div custom={0} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
            <div style={{ height: '1px', width: '28px', background: '#FF6B00' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF6B00' }}>How It Works</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
            Manufacturing <span style={{ background: 'linear-gradient(135deg,#FF6B00,#FF9500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Process</span>
          </h2>
        </motion.div>
        <div className="proc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1.25rem' }}>
          {PROCESS.map((step, i) => (
            <motion.div key={i} custom={i+1} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '1.75rem', transition: 'border-color 0.25s ease,background 0.25s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,107,0,0.2)'; e.currentTarget.style.background='rgba(255,107,0,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: "'Courier New',monospace", fontSize: '0.68rem', fontWeight: 700, color: 'rgba(255,107,0,0.6)', letterSpacing: '0.1em' }}>{step.num}</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF6B00', boxShadow: '0 0 8px rgba(255,107,0,0.6)' }} />
              </div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ sport }) {
  return (
    <section style={{ background: '#fff', padding: '5rem 2rem', fontFamily: "'Inter', sans-serif", borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
            <div style={{ height: '1px', width: '24px', background: '#FF6B00' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', color: '#FF6B00', textTransform: 'uppercase' }}>Ready to Order?</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#111', margin: 0 }}>
            Get Your Custom <span style={{ background: 'linear-gradient(135deg,#FF6B00,#FF9500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{sport.accent} Uniforms</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/quote" style={{ display: 'inline-flex', alignItems: 'center', background: '#FF6B00', color: '#fff', textDecoration: 'none', padding: '0.8rem 2rem', borderRadius: '4px', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', boxShadow: '0 4px 20px rgba(255,107,0,0.35)' }}>Request a Quote</Link>
          <Link href="/industries" style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(0,0,0,0.12)', color: '#111', textDecoration: 'none', padding: '0.8rem 2rem', borderRadius: '4px', fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Industries We Serve</Link>
        </div>
      </div>
    </section>
  );
}
