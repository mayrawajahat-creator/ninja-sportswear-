'use client';

import Link from 'next/link';
import Image from 'next/image';
import PageHero, { HeroAccent } from '@/Components/PageHero';

const products = [
  {
    id: 1,
    title: 'Performance Jerseys',
    category: 'Jerseys & Kits',
    desc: 'Lightweight, moisture-wicking fabric engineered for peak athletic performance. Available in sublimation or screen print.',
    image: '/product1.png',
    moq: '50 pcs',
    lead: '2–3 weeks',
    tag: 'Best Seller',
    features: ['Moisture-wicking', 'Anti-odor', 'Custom sublimation', '100% polyester'],
    href: '/sports/soccer/jerseys/1',
  },
  {
    id: 2,
    title: 'Training Hoodies',
    category: 'Hoodies & Sweatshirts',
    desc: 'Premium-weight fleece hoodies with ribbed cuffs, adjustable drawstring, and full embroidery support.',
    image: '/product2.png',
    moq: '30 pcs',
    lead: '3–4 weeks',
    tag: 'New',
    features: ['350gsm fleece', 'Custom embroidery', 'YKK zippers', 'Branded labels'],
    href: '/sports/basketball/warmup-suits/1',
  },
  {
    id: 3,
    title: 'Athletic Bottoms',
    category: 'Shorts & Track Pants',
    desc: 'Versatile athletic bottoms available as shorts or full-length track pants with technical fabric and custom waistbands.',
    image: '/product3.png',
    moq: '50 pcs',
    lead: '2–3 weeks',
    tag: 'Popular',
    features: ['Stretch fabric', 'Deep pockets', 'Elastic waistband', 'Custom inseam'],
    href: '/sports/soccer/shorts/1',
  },
  {
    id: 4,
    title: 'Compression Wear',
    category: 'Compression',
    desc: 'Graduated compression technology for training and recovery. Available in full-length tights, shorts, and tops.',
    image: '/product1.png',
    moq: '100 pcs',
    lead: '3–4 weeks',
    tag: 'Premium',
    features: ['4-way stretch', 'UV protection', 'Flatlock seams', 'Muscle support'],
    href: '/sports/football/compression/1',
  },
  {
    id: 5,
    title: 'Sports Jackets',
    category: 'Outerwear',
    desc: 'Windproof, water-resistant jackets with full custom lining, reflective detailing, and packable options.',
    image: '/product2.png',
    moq: '30 pcs',
    lead: '4–5 weeks',
    tag: 'New',
    features: ['Windproof shell', 'Water-resistant', 'Packable design', 'Custom lining'],
    href: '/sports/baseball/jackets/1',
  },
  {
    id: 6,
    title: 'Team Kits',
    category: 'Complete Kits',
    desc: 'Full team kit packages — jersey, shorts, socks, and bag — custom branded and delivered in one shipment.',
    image: '/product3.png',
    moq: '20 sets',
    lead: '4–6 weeks',
    tag: 'Bundle',
    features: ['Full kit package', 'Matching socks', 'Team bag', 'Bulk discount'],
    href: '/sports/soccer/training-kits/1',
  },
];

const tagColors = {
  'Best Seller': '#FF6B00',
  'New': '#10B981',
  'Popular': '#6366F1',
  'Premium': '#8B5CF6',
  'Bundle': '#F59E0B',
};

function ProductCatalogCard({ product, tagColors }) {
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
        const img = e.currentTarget.querySelector(`.prod-img-${product.id}`);
        if (img) {
          img.style.transform = 'scale(1.03)';
        }
        const btn = e.currentTarget.querySelector(`.quote-btn-${product.id}`);
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
        const img = e.currentTarget.querySelector(`.prod-img-${product.id}`);
        if (img) {
          img.style.transform = 'scale(1)';
        }
        const btn = e.currentTarget.querySelector(`.quote-btn-${product.id}`);
        if (btn) {
          btn.style.background = 'transparent';
          btn.style.borderColor = 'rgba(0, 0, 0, 0.12)';
          btn.style.color = '#111111';
          const arrow = btn.querySelector('.arrow-svg');
          if (arrow) arrow.style.transform = 'none';
        }
      }}
    >
      {/* Image Container (aspect-ratio: 1/1 square for catalog consistency) */}
      <div style={{ position: 'relative', aspectRatio: '1/1', background: '#F5F5F5', overflow: 'hidden' }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`prod-img-${product.id}`}
          style={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
        />

        {/* Tag */}
        {product.tag && (
          <div style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: tagColors[product.tag] || '#FF6B00',
            color: '#fff',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.62rem',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '3px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            zIndex: 2,
          }}>
            {product.tag}
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
            {product.category}
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
            {product.title}
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.86rem',
            color: '#666666',
            lineHeight: 1.6,
            margin: 0,
          }}>
            {product.desc}
          </p>
        </div>

        {/* Request a Quote Button */}
        <div>
          <Link href={product.href || '/sports'} className={`quote-btn-${product.id}`} style={{
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
            <span>View Product Details</span>
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

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title={<>Premium Sportswear, <HeroAccent>Bulk Ready</HeroAccent></>}
        subtitle="Every product is available for full custom branding, custom cuts, and private label manufacturing. Minimum order quantities apply per category."
        align="center"
      >
        {/* Info Pills */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
          {['Custom Branding', 'OEM Available', 'Fast Sampling', 'Bulk Pricing'].map(pill => (
            <div key={pill} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              padding: '0.35rem 0.9rem',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.02em',
              }}>
                {pill}
              </span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Products Grid */}
      <section style={{
        background: '#FAFAFA',
        padding: '5rem 2rem',
        fontFamily: "'Inter', sans-serif",
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {products.map((product) => (
              <ProductCatalogCard key={product.id} product={product} tagColors={tagColors} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        background: '#fff',
        padding: '5rem 2rem',
        fontFamily: "'Inter', sans-serif",
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#111',
            margin: '0 0 0.75rem',
          }}>
            Don't See What You Need?
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#888', lineHeight: 1.7, margin: '0 0 2rem' }}>
            We offer fully custom manufacturing. Tell us your vision and we'll make it reality — any fabric, any cut, any branding.
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
            Request Custom Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
