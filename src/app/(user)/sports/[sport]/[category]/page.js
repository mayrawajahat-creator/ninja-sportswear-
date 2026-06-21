'use client';
import React, { useRef, useState, use } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Package, Clock, Tag } from 'lucide-react';
import PageHero, { HeroAccent } from '@/Components/PageHero';

/* ─── All Data Inlined ─── */
const SPORTS_DB = {
  lacrosse: {
    accent: 'Lacrosse',
    categories: [
      {
        slug: 'jerseys', name: 'Lacrosse Jerseys', icon: '🥍', image: '/product1.png',
        desc: 'Lightweight sublimated jerseys with custom numbering, logos & colorways.',
        products: [
          { id: 1, name: 'Elite Sublimated Jersey', sku: 'LAX-J-001', desc: 'Full dye-sublimation jersey with moisture-wicking 100% polyester. Custom name, number and logo placement.', image: '/product1.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Best Seller', features: ['Full sublimation', '100% polyester', 'Moisture-wicking', 'Custom numbering'] },
          { id: 2, name: 'Pro Cut Performance Jersey', sku: 'LAX-J-002', desc: 'Athletic-cut jersey with side mesh panels for superior ventilation during high-intensity play.', image: '/product2.png', moq: '30 pcs', lead: '2–3 weeks', tag: 'Popular', features: ['Side mesh panels', 'Tagless neck label', '4-way stretch', 'Screen print or sublimation'] },
          { id: 3, name: 'Loose Fit Game Jersey', sku: 'LAX-J-003', desc: 'Relaxed-fit game jersey with reinforced shoulder seams and double-layer fabric body.', image: '/product3.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'New', features: ['Double-layer body', 'Reinforced shoulders', 'Custom color blocking', 'Anti-odor finish'] },
          { id: 4, name: 'Reversible Game Jersey', sku: 'LAX-J-004', desc: 'Reversible jersey — two team colors in one. Perfect for tournament play and cost savings.', image: '/product1.png', moq: '30 pcs', lead: '3–4 weeks', tag: 'Value', features: ['Dual-side wearable', 'Contrast inner color', 'Sublimated both sides', 'Low MOQ'] },
        ],
      },
      {
        slug: 'pinnies', name: 'Reversible Pinnies', icon: '🔄', image: '/product2.png',
        desc: 'Dual-color reversible pinnies — ideal for practice & scrimmages.',
        products: [
          { id: 1, name: 'Classic Reversible Pinnie', sku: 'LAX-P-001', desc: 'Standard reversible mesh pinnie with contrasting side panels. Numbers both sides.', image: '/product2.png', moq: '20 pcs', lead: '1–2 weeks', tag: 'Best Seller', features: ['Reversible mesh', 'Numbers both sides', 'Contrast colors', 'Quick-dry fabric'] },
          { id: 2, name: 'Pro Reversible Pinnie', sku: 'LAX-P-002', desc: 'Premium pinnie with tagless neck, reinforced seams and vivid sublimated print.', image: '/product3.png', moq: '20 pcs', lead: '2–3 weeks', tag: 'Premium', features: ['Tagless neck', 'Sublimated print', 'Anti-pill mesh', 'Custom logo'] },
          { id: 3, name: 'Training Scrimmage Vest', sku: 'LAX-P-003', desc: 'Lightweight open-side scrimmage vest for drills and practice sessions.', image: '/product1.png', moq: '20 pcs', lead: '1–2 weeks', tag: 'New', features: ['Open side panels', 'Ultra-lightweight', 'Team color', 'Budget-friendly'] },
        ],
      },
      {
        slug: 'shorts', name: 'Shorts', icon: '🩳', image: '/product3.png',
        desc: 'Stretch-fabric shorts with inner compression liner and custom waistband.',
        products: [
          { id: 1, name: 'Game Day Shorts', sku: 'LAX-S-001', desc: '4-way stretch game shorts with deep pockets and custom elastic waistband.', image: '/product3.png', moq: '30 pcs', lead: '2–3 weeks', tag: 'Best Seller', features: ['4-way stretch', 'Deep pockets', 'Custom waistband', 'Anti-odor fabric'] },
          { id: 2, name: 'Compression Lined Shorts', sku: 'LAX-S-002', desc: 'Outer shell with built-in compression liner for added support and modesty.', image: '/product1.png', moq: '30 pcs', lead: '2–3 weeks', tag: 'Popular', features: ['Built-in liner', 'Compression support', 'Moisture-wicking', 'Side seam logo'] },
          { id: 3, name: 'Warm-Up Shorts', sku: 'LAX-S-003', desc: 'Lightweight warm-up shorts with zippered pockets and matching warm-up design.', image: '/product2.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'New', features: ['Zippered pockets', 'Lightweight', 'Custom print', 'Team color'] },
        ],
      },
      {
        slug: 'shooter-shirts', name: 'Shooter Shirts', icon: '👕', image: '/product1.png',
        desc: 'Technical-fit shooter shirts with vented mesh panels for max airflow.',
        products: [
          { id: 1, name: 'Classic Shooter Shirt', sku: 'LAX-SS-001', desc: 'Open-sided shooter shirt with sublimated print and breathable mesh side panels.', image: '/product1.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Popular', features: ['Open side panels', 'Sublimated print', 'Mesh ventilation', 'Custom logo'] },
          { id: 2, name: 'Long Sleeve Shooter', sku: 'LAX-SS-002', desc: 'Long-sleeve shooter shirt for cooler conditions with moisture-wicking fabric.', image: '/product2.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'New', features: ['Long sleeve', 'Moisture-wicking', 'Full sublimation', 'Custom name'] },
        ],
      },
      {
        slug: 'practice-uniforms', name: 'Practice Uniforms', icon: '⚙️', image: '/product2.png',
        desc: 'Full-set practice kits — jersey, shorts & socks in team colors.',
        products: [
          { id: 1, name: 'Full Practice Kit', sku: 'LAX-PU-001', desc: 'Complete practice set — jersey, shorts, and socks — delivered as a matched set.', image: '/product2.png', moq: '20 sets', lead: '3–4 weeks', tag: 'Bundle', features: ['Jersey + shorts + socks', 'Matched colors', 'Custom branding', 'Bulk discount'] },
          { id: 2, name: 'Practice Jersey Only', sku: 'LAX-PU-002', desc: 'Durable practice jersey with reinforced stitching for daily training use.', image: '/product3.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Value', features: ['Reinforced seams', 'Budget material', 'Screen print', 'Color block'] },
        ],
      },
    ],
  },
  soccer: {
    accent: 'Soccer',
    categories: [
      {
        slug: 'jerseys', name: 'Soccer Jerseys', icon: '⚽', image: '/product1.png',
        desc: 'Fully sublimated jerseys with moisture-wicking polyester fabric.',
        products: [
          { id: 1, name: 'Club Match Jersey', sku: 'SOC-J-001', desc: 'Full sublimation match jersey with custom crest, name and number placement.', image: '/product1.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Best Seller', features: ['Full sublimation', 'Custom crest', 'Player name/number', 'Moisture-wicking'] },
          { id: 2, name: 'Academy Training Jersey', sku: 'SOC-J-002', desc: 'Lightweight training jersey for academy and school programs with club branding.', image: '/product2.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Popular', features: ['Academy fit', 'Sublimated print', 'Breathable mesh', 'Low MOQ'] },
          { id: 3, name: 'Goalkeeper Jersey', sku: 'SOC-J-003', desc: 'Padded GK jersey with reinforced elbows, foam panels and contrast colorway.', image: '/product3.png', moq: '15 pcs', lead: '3–4 weeks', tag: 'Specialist', features: ['Elbow padding', 'Foam panels', 'Grip cuffs', 'Custom color'] },
          { id: 4, name: 'Retro Jersey', sku: 'SOC-J-004', desc: 'Classic retro-style collar jersey for fan kits, retail brands and heritage clubs.', image: '/product1.png', moq: '30 pcs', lead: '2–3 weeks', tag: 'New', features: ['Retro collar', 'Woven badge', 'Heritage colors', 'Sublimated body'] },
        ],
      },
      {
        slug: 'shorts', name: 'Soccer Shorts', icon: '🩳', image: '/product3.png',
        desc: 'Lightweight shorts with side slits and custom waistband design.',
        products: [
          { id: 1, name: 'Match Shorts', sku: 'SOC-SH-001', desc: 'Game-day shorts with side slits for free movement.', image: '/product3.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Best Seller', features: ['Side slits', 'Elastic waistband', 'Sublimated', 'Team color'] },
          { id: 2, name: 'Training Shorts', sku: 'SOC-SH-002', desc: 'Budget-friendly training shorts with draw cord and pockets.', image: '/product2.png', moq: '25 pcs', lead: '2 weeks', tag: 'Value', features: ['Drawstring', 'Side pockets', 'Quick-dry', 'Custom print'] },
        ],
      },
      {
        slug: 'training-kits', name: 'Training Kits', icon: '🎽', image: '/product2.png',
        desc: 'Full training set with jersey, shorts and socks — ready to ship.',
        products: [
          { id: 1, name: 'Full Club Kit', sku: 'SOC-TK-001', desc: 'Complete kit — jersey, shorts, socks — custom branded and shipped together.', image: '/product2.png', moq: '20 sets', lead: '3–4 weeks', tag: 'Bundle', features: ['Jersey + shorts + socks', 'Matching design', 'Custom branding', 'Bulk discount'] },
          { id: 2, name: 'Training Kit Set', sku: 'SOC-TK-002', desc: 'Practice-focused kit in durable fabric for daily training sessions.', image: '/product1.png', moq: '20 sets', lead: '2–3 weeks', tag: 'Popular', features: ['Durable fabric', 'Matching set', 'Academy color', 'Budget price'] },
        ],
      },
      {
        slug: 'socks', name: 'Custom Socks', icon: '🧦', image: '/product3.png',
        desc: 'Team-branded socks with non-slip grip sole and crew-length cut.',
        products: [
          { id: 1, name: 'Crew Match Socks', sku: 'SOC-SK-001', desc: 'Crew-length match socks with reinforced heel/toe and grip sole.', image: '/product3.png', moq: '50 pairs', lead: '2 weeks', tag: 'Best Seller', features: ['Crew length', 'Grip sole', 'Reinforced heel', 'Custom stripe'] },
          { id: 2, name: 'Knee-High Socks', sku: 'SOC-SK-002', desc: 'Knee-high socks with full-length elastic support and custom team color.', image: '/product2.png', moq: '50 pairs', lead: '2 weeks', tag: 'Popular', features: ['Knee-high', 'Elastic support', 'Team color', 'Custom logo'] },
        ],
      },
    ],
  },
  baseball: {
    accent: 'Baseball',
    categories: [
      {
        slug: 'jerseys', name: 'Baseball Jerseys', icon: '⚾', image: '/product1.png',
        desc: 'Button-front or pull-over jerseys with full sublimation or screen print.',
        products: [
          { id: 1, name: 'Button-Front Jersey', sku: 'BB-J-001', desc: 'Classic button-front jersey with two-button or full-button placket. Screen print or sublimation.', image: '/product1.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Best Seller', features: ['Button-front', 'Full sublimation', 'Custom tackle twill', 'Moisture-wicking'] },
          { id: 2, name: 'Pull-Over Jersey', sku: 'BB-J-002', desc: 'Athletic pull-over jersey with two-color design and custom screen print.', image: '/product2.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Popular', features: ['Pull-over style', 'Color blocking', 'Screen print', '100% polyester'] },
        ],
      },
      {
        slug: 'pants', name: 'Baseball Pants', icon: '🩳', image: '/product2.png',
        desc: 'Open-bottom or knicker-cut pants with reinforced knees and custom piping.',
        products: [
          { id: 1, name: 'Open Bottom Pants', sku: 'BB-P-001', desc: 'Full-length open-bottom pants with stretch fabric and custom piping stripe.', image: '/product2.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Best Seller', features: ['Open bottom', 'Stretch fabric', 'Custom piping', 'Reinforced knees'] },
          { id: 2, name: 'Knicker Pants', sku: 'BB-P-002', desc: 'Classic knicker-cut below-knee pants with elastic hem and snap closure.', image: '/product3.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Classic', features: ['Below-knee', 'Elastic hem', 'Snap closure', 'Piping stripe'] },
        ],
      },
      {
        slug: 'jackets', name: 'Training Jackets', icon: '🧥', image: '/product3.png',
        desc: 'Windproof warm-up jackets with mesh lining and custom team branding.',
        products: [
          { id: 1, name: 'Dugout Jacket', sku: 'BB-JK-001', desc: 'Full-zip dugout jacket with mesh lining, custom embroidery and team logo.', image: '/product3.png', moq: '20 pcs', lead: '3–4 weeks', tag: 'Popular', features: ['Full-zip', 'Mesh lining', 'Team embroidery', 'Windproof'] },
        ],
      },
      {
        slug: 'caps', name: 'Custom Caps', icon: '🧢', image: '/product1.png',
        desc: 'Structured 6-panel caps with embroidered logos and custom fit.',
        products: [
          { id: 1, name: 'Structured Fitted Cap', sku: 'BB-C-001', desc: '6-panel wool-blend cap with embroidered front logo and moisture-wicking sweatband.', image: '/product1.png', moq: '24 pcs', lead: '2–3 weeks', tag: 'Best Seller', features: ['6-panel', 'Embroidered logo', 'Fitted', 'Sweatband'] },
        ],
      },
    ],
  },
  basketball: {
    accent: 'Basketball',
    categories: [
      {
        slug: 'jerseys', name: 'Basketball Jerseys', icon: '🏀', image: '/product1.png',
        desc: 'Reversible or single-layer jerseys with full sublimation and number sets.',
        products: [
          { id: 1, name: 'Pro Sublimated Jersey', sku: 'BBB-J-001', desc: 'Full sublimation pro-cut jersey with custom name, number and team logo.', image: '/product1.png', moq: '20 pcs', lead: '2–3 weeks', tag: 'Best Seller', features: ['Full sublimation', 'Pro cut', 'Custom number set', 'Moisture-wicking'] },
          { id: 2, name: 'Reversible Jersey', sku: 'BBB-J-002', desc: 'Reversible home/away jersey sublimated on both sides for tournament play.', image: '/product2.png', moq: '20 pcs', lead: '3–4 weeks', tag: 'Value', features: ['Reversible', 'Home & away', 'Sublimated both sides', 'Low MOQ'] },
          { id: 3, name: 'Retro Hardwood Jersey', sku: 'BBB-J-003', desc: 'Classic retro-style basketball jersey for lifestyle brands and heritage courts.', image: '/product3.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'New', features: ['Retro cut', 'Woven label', 'Screen print', 'Color block'] },
        ],
      },
      {
        slug: 'shorts', name: 'Basketball Shorts', icon: '🩳', image: '/product2.png',
        desc: 'Mid-length shorts with side pockets, elastic waistband and piping.',
        products: [
          { id: 1, name: 'Pro Game Shorts', sku: 'BBB-SH-001', desc: 'Mid-length shorts with deep side pockets, elastic waistband and piping stripe.', image: '/product2.png', moq: '20 pcs', lead: '2–3 weeks', tag: 'Best Seller', features: ['Deep pockets', 'Elastic waistband', 'Piping stripe', 'Sublimated'] },
          { id: 2, name: 'Compression Shorts', sku: 'BBB-SH-002', desc: 'Under-shorts compression wear for support, recovery and modesty.', image: '/product3.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Popular', features: ['Compression', 'Under-wear', 'Stretch fabric', 'Team color'] },
        ],
      },
      {
        slug: 'warmup-suits', name: 'Warmup Suits', icon: '🎽', image: '/product3.png',
        desc: 'Matching jacket & pant warmup sets with custom team branding.',
        products: [
          { id: 1, name: 'Full Warmup Set', sku: 'BBB-WU-001', desc: 'Matching warmup jacket and pants set with full sublimation and custom logos.', image: '/product3.png', moq: '15 sets', lead: '3–4 weeks', tag: 'Bundle', features: ['Jacket + pants', 'Full sublimation', 'Custom logos', 'Side pockets'] },
        ],
      },
      {
        slug: 'shooting-shirts', name: 'Shooting Shirts', icon: '👕', image: '/product1.png',
        desc: 'Open-sided shooting shirts for pre-game warmup and bench wear.',
        products: [
          { id: 1, name: 'Classic Shooting Shirt', sku: 'BBB-SS-001', desc: 'Open-sided shooting shirt with sublimated print for warmup and bench wear.', image: '/product1.png', moq: '20 pcs', lead: '2–3 weeks', tag: 'Popular', features: ['Open sides', 'Sublimated', 'Custom number', 'Lightweight'] },
        ],
      },
    ],
  },
  football: {
    accent: 'American Football',
    categories: [
      {
        slug: 'jerseys', name: 'Football Jerseys', icon: '🏈', image: '/product1.png',
        desc: 'Durable mesh jerseys with tackle twill numbers and custom team colors.',
        products: [
          { id: 1, name: 'Game Day Jersey', sku: 'FB-J-001', desc: 'Durable game jersey with tackle twill numbers, custom color blocking and mesh body.', image: '/product1.png', moq: '25 pcs', lead: '3–4 weeks', tag: 'Best Seller', features: ['Tackle twill numbers', 'Mesh body', 'Custom color block', 'Reinforced stitching'] },
          { id: 2, name: 'Youth Football Jersey', sku: 'FB-J-002', desc: 'Youth-sized game jersey with full sublimation and easy-care polyester fabric.', image: '/product2.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Popular', features: ['Youth sizes', 'Full sublimation', 'Easy-care', 'Custom name'] },
        ],
      },
      {
        slug: 'pants', name: 'Football Pants', icon: '🩳', image: '/product2.png',
        desc: 'Compression pants with integrated or removable padding options.',
        products: [
          { id: 1, name: 'Integrated Pad Pants', sku: 'FB-P-001', desc: 'Compression pants with built-in hip, thigh and knee pads for complete protection.', image: '/product2.png', moq: '25 pcs', lead: '3–4 weeks', tag: 'Best Seller', features: ['Built-in pads', 'Compression fit', 'Hip/thigh/knee', 'Custom color'] },
          { id: 2, name: 'Shell Pants', sku: 'FB-P-002', desc: 'Loose-fit shell pants with removable pad pockets for custom pad configuration.', image: '/product3.png', moq: '25 pcs', lead: '2–3 weeks', tag: 'Flexible', features: ['Pad pockets', 'Removable pads', 'Custom piping', 'Team color'] },
        ],
      },
      {
        slug: 'practice-jerseys', name: 'Practice Jerseys', icon: '🔄', image: '/product3.png',
        desc: 'Lightweight reversible practice jerseys — durable and fast turnaround.',
        products: [
          { id: 1, name: 'Reversible Practice Jersey', sku: 'FB-PJ-001', desc: 'Lightweight reversible practice jersey in two team colors for offense/defense drill splits.', image: '/product3.png', moq: '20 pcs', lead: '1–2 weeks', tag: 'Fast', features: ['Reversible', 'Dual color', 'Numbers both sides', 'Low cost'] },
        ],
      },
      {
        slug: 'compression', name: 'Compression Gear', icon: '💪', image: '/product1.png',
        desc: 'Full-body compression base layers for under-pad support.',
        products: [
          { id: 1, name: 'Full-Body Compression Set', sku: 'FB-CG-001', desc: 'Compression shirt and tights set for under-pad layering and muscle recovery support.', image: '/product1.png', moq: '30 pcs', lead: '2–3 weeks', tag: 'Premium', features: ['Compression fit', 'Shirt + tights', 'Muscle support', 'Anti-odor'] },
        ],
      },
    ],
  },
};

const TAG_COLORS = {
  'Best Seller': '#FF6B00', 'Popular': '#6366F1', 'New': '#10B981',
  'Value': '#F59E0B', 'Premium': '#8B5CF6', 'Bundle': '#EC4899',
  'Classic': '#6B7280', 'Fast': '#06B6D4', 'Specialist': '#14B8A6', 'Flexible': '#F97316',
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function CategoryPage({ params }) {
  const resolvedParams = use(params);
  const { sport: sportSlug, category: categorySlug } = resolvedParams;
  const sport = SPORTS_DB[sportSlug];
  const category = sport?.categories?.find(c => c.slug === categorySlug);

  if (!sport || !category) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center', fontFamily: "'Inter', sans-serif" }}>
        <h1 style={{ color: '#111', fontSize: '1.5rem', marginBottom: '1rem' }}>Category not found</h1>
        <p style={{ color: '#888', marginBottom: '2rem' }}>Sport: {sportSlug} | Category: {categorySlug}</p>
        <Link href={`/sports/${sportSlug || ''}`} style={{ color: '#FF6B00', fontWeight: 700, fontSize: '0.9rem' }}>← Back to {sport?.accent || 'Sports'}</Link>
      </div>
    );
  }

  const otherCategories = sport.categories.filter(c => c.slug !== categorySlug);

  return (
    <>
      <PageHeader sport={sport} category={category} sportSlug={sportSlug} />
      <ProductsSection sport={sport} category={category} sportSlug={sportSlug} otherCategories={otherCategories} />
      <CTASection category={category} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @media (max-width: 1024px) { .cat-layout { grid-template-columns: 1fr !important; } .sidebar { display: none !important; } }
        @media (max-width: 700px) { .prod-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}

/* ── Page Header ── */
function PageHeader({ sport, category, sportSlug }) {
  return (
    <PageHero
      eyebrow={`${sport.accent} — ${category.products.length} Products`}
      breadcrumbs={[
        { label: 'Sports', href: '/sports' },
        { label: sport.accent, href: `/sports/${sportSlug}` },
        { label: category.name }
      ]}
      title={<>Custom <HeroAccent>{category.name}</HeroAccent></>}
      subtitle={category.desc}
      align="center"
    />
  );
}

/* ── Products + Sidebar ── */
function ProductsSection({ sport, category, sportSlug, otherCategories }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: '#fafafa', padding: '5rem 2rem 7rem', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={ref}>
        <div className="cat-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', alignItems: 'start' }}>

          {/* Left — Products */}
          <div>
            <motion.div custom={0} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111', margin: '0 0 0.25rem', letterSpacing: '-0.02em' }}>All {category.name}</h2>
                <p style={{ fontSize: '0.83rem', color: '#aaa', margin: 0 }}>{category.products.length} products available — click any to enquire</p>
              </div>
              <Link href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FF6B00', color: '#fff', textDecoration: 'none', padding: '0.65rem 1.5rem', borderRadius: '4px', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', boxShadow: '0 4px 16px rgba(255,107,0,0.3)' }}>
                Get a Quote <ArrowRight size={13} />
              </Link>
            </motion.div>

            <div className="prod-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
              {category.products.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  i={i}
                  inView={inView}
                  sportSlug={sportSlug}
                  categorySlug={category.slug}
                />
              ))}
            </div>
          </div>

          {/* Right — Sidebar */}
          <div className="sidebar" style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Other categories */}
            <motion.div custom={1} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{ background: '#fff', borderRadius: '8px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)' }}>
              <h4 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6B00', margin: '0 0 1.25rem' }}>
                Other {sport.accent} Categories
              </h4>
              {otherCategories.map((cat, i) => (
                <Link key={i} href={`/sports/${sportSlug}/${cat.slug}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.75rem', borderRadius: '4px', textDecoration: 'none', color: '#444', fontSize: '0.85rem', fontWeight: 500, border: '1px solid transparent', transition: 'all 0.2s ease', marginBottom: '0.3rem' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,107,0,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,107,0,0.15)'; e.currentTarget.style.color = '#FF6B00'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = '#444'; }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1rem' }}>{cat.icon}</span>{cat.name}
                  </span>
                  <ArrowRight size={13} />
                </Link>
              ))}
            </motion.div>

            {/* Quick Facts */}
            <motion.div custom={2} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{ background: '#050508', borderRadius: '8px', padding: '1.75rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                <div style={{ height: '1px', width: '20px', background: '#FF6B00' }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#FF6B00', textTransform: 'uppercase' }}>Quick Facts</span>
              </div>
              {[
                { icon: <Package size={13} />, label: 'MOQ', val: 'From 20 pcs' },
                { icon: <Clock size={13} />, label: 'Lead Time', val: '2–4 weeks' },
                { icon: <Tag size={13} />, label: 'Customization', val: 'Full OEM / White Label' },
                { icon: <Check size={13} />, label: 'Quality', val: 'ISO Certified, 5-stage QC' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '4px', background: 'rgba(255,107,0,0.12)', color: '#FF6B00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{item.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{item.val}</div>
                  </div>
                </div>
              ))}
              <Link href="/quote" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '1.25rem', background: '#FF6B00', color: '#fff', textDecoration: 'none', padding: '0.75rem', borderRadius: '4px', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: '0 4px 16px rgba(255,107,0,0.35)' }}>
                Request a Quote <ArrowRight size={13} />
              </Link>
            </motion.div>

            <motion.div custom={3} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <Link href={`/sports/${sportSlug}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.85rem 1.25rem', borderRadius: '6px', textDecoration: 'none', color: '#555', fontSize: '0.84rem', fontWeight: 600, border: '1px solid rgba(0,0,0,0.08)', background: '#fff', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FF6B00'; e.currentTarget.style.borderColor = 'rgba(255,107,0,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; }}>
                ← Back to {sport.accent} Overview
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Product Card ── */
function ProductCard({ product, i, inView, sportSlug, categorySlug }) {
  const [hovered, setHovered] = useState(false);
  const tagBg = TAG_COLORS[product.tag] || '#111';
  const detailUrl = `/sports/${sportSlug}/${categorySlug}/${product.id}`;

  return (
    <motion.div custom={i + 2} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', border: `1px solid ${hovered ? 'rgba(255,107,0,0.2)' : 'rgba(0,0,0,0.07)'}`, boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)', transform: hovered ? 'translateY(-4px)' : 'translateY(0)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>

      {/* Image Link */}
      <Link href={detailUrl} style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#f5f5f5', display: 'block' }}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width:700px) 100vw, 50vw"
          style={{ objectFit: 'cover', transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.6s cubic-bezier(0.25,1,0.5,1)' }} />
        <span style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', fontSize: '0.6rem', fontWeight: 800, background: tagBg, color: '#fff', padding: '0.25rem 0.7rem', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 1 }}>{product.tag}</span>
        <span style={{ position: 'absolute', bottom: '0.85rem', right: '0.85rem', fontFamily: "'Courier New',monospace", fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', background: 'rgba(0,0,0,0.55)', padding: '0.2rem 0.5rem', borderRadius: '2px', zIndex: 1 }}>{product.sku}</span>
      </Link>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Link href={detailUrl} style={{ textDecoration: 'none' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#111', margin: 0, letterSpacing: '-0.01em', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
            onMouseLeave={e => e.currentTarget.style.color = '#111'}>
            {product.name}
          </h3>
        </Link>
        <p style={{ fontSize: '0.83rem', color: '#888', lineHeight: 1.65, margin: 0 }}>{product.desc}</p>

        {/* Feature tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {product.features.map((f, fi) => (
            <span key={fi} style={{ fontSize: '0.7rem', fontWeight: 600, color: hovered ? '#FF6B00' : '#666', background: hovered ? 'rgba(255,107,0,0.08)' : 'rgba(0,0,0,0.04)', padding: '0.2rem 0.6rem', borderRadius: '3px', transition: 'all 0.25s ease' }}>{f}</span>
          ))}
        </div>

        {/* MOQ + Lead time */}
        <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#bbb', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>MOQ</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#111' }}>{product.moq}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#bbb', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Lead Time</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#111' }}>{product.lead}</div>
          </div>
        </div>

        {/* CTA Link */}
        <Link href={detailUrl} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '0.25rem', background: hovered ? '#FF6B00' : '#111', color: '#fff', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'background 0.25s ease' }}>
          View Product Details <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}

/* ── CTA ── */
function CTASection({ category }) {
  return (
    <section style={{ background: '#050508', padding: '5rem 2rem', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
            <div style={{ height: '1px', width: '24px', background: '#FF6B00' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', color: '#FF6B00', textTransform: 'uppercase' }}>Bulk Ordering</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 0.75rem' }}>
            Need Custom{' '}
            <span style={{ background: 'linear-gradient(135deg,#FF6B00,#FF9500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{category.name}?</span>
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', margin: 0, maxWidth: '420px', lineHeight: 1.65 }}>
            Low MOQs, 48-hour samples, ISO-certified quality. Get your tailored quote today.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/quote" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FF6B00', color: '#fff', textDecoration: 'none', padding: '0.85rem 2rem', borderRadius: '4px', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', boxShadow: '0 4px 20px rgba(255,107,0,0.4)' }}>
            Request a Quote <ArrowRight size={15} />
          </Link>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', padding: '0.85rem 2rem', borderRadius: '4px', fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
