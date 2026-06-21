'use client';
import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Package, Clock, ShieldCheck, Tag, MessageSquare } from 'lucide-react';
import PageHero, { HeroAccent } from '@/Components/PageHero';
import { SPORTS_DB } from '@/data/sportsData';

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const { sport: sportSlug, category: categorySlug, productId } = resolvedParams;

  const sport = SPORTS_DB[sportSlug];
  const category = sport?.categories?.find(c => c.slug === categorySlug);
  const product = category?.products?.find(p => p.id === parseInt(productId) || p.sku === productId);

  // Dynamic fabric selection
  const [selectedFabric, setSelectedFabric] = useState('100% Technical Interlock Polyester');
  
  if (!sport || !category || !product) {
    return (
      <div style={{ padding: '10rem 2rem 8rem', textAlign: 'center', fontFamily: "'Inter', sans-serif" }}>
        <h1 style={{ color: '#111', fontSize: '1.75rem', marginBottom: '1rem' }}>Product Not Found</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>The product you are looking for does not exist in our catalog.</p>
        <Link href="/sports" style={{ color: '#FF6B00', fontWeight: 700, textDecoration: 'none' }}>
          ← Back to Sports
        </Link>
      </div>
    );
  }

  // Generate 4 dynamic views based on the images available
  const images = [
    product.image || '/product1.png',
    product.image === '/product1.png' ? '/product2.png' : product.image === '/product2.png' ? '/product3.png' : '/product1.png',
    product.image === '/product3.png' ? '/product2.png' : '/product3.png',
    product.image || '/product1.png',
  ];
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewLabels = [
    'Front View',
    'Back View',
    'Stitching Detail',
    'Fit Overview'
  ];

  // Pre-fill WhatsApp message link
  const whatsappNumber = '923210000000'; // Replace with Sialkot factory number
  const messageText = `Hi, I am interested in ordering custom garments:\n\n*Product Name:* ${product.name}\n*SKU:* ${product.sku}\n*Sport:* ${sport.accent}\n*Category:* ${category.name}\n*Fabric Chosen:* ${selectedFabric}\n\nPlease provide a B2B quotation.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  // Standard Quote url
  const quoteUrl = `/quote?sport=${encodeURIComponent(sport.accent)}&product=${encodeURIComponent(category.name)}&sku=${encodeURIComponent(product.sku)}`;

  return (
    <>
      <PageHero
        eyebrow={`SKU: ${product.sku}`}
        breadcrumbs={[
          { label: 'Sports', href: '/sports' },
          { label: sport.accent, href: `/sports/${sportSlug}` },
          { label: category.name, href: `/sports/${sportSlug}/${categorySlug}` },
          { label: product.name }
        ]}
        title={<>{product.name.split(' ').slice(0, -1).join(' ')} <HeroAccent>{product.name.split(' ').slice(-1)[0]}</HeroAccent></>}
        subtitle={`Championship-grade athletic apparel manufactured in Sialkot, Pakistan. Customizable details, low MOQ, and fast air freight.`}
        align="center"
      />

      <section style={{ background: '#fafafa', padding: '5rem 2rem 7rem', fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="product-detail-layout" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            
            {/* Left Column: Image Gallery */}
            <div>
              {/* Main Image View */}
              <div style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '8px',
                aspectRatio: '1/1',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.02)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  src={images[activeImageIndex]}
                  alt={`${product.name} - ${viewLabels[activeImageIndex]}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'contain', padding: '2rem' }}
                />
                
                {/* Active View Label */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '3px'
                }}>
                  {viewLabels[activeImageIndex]}
                </div>
              </div>

              {/* Thumbnail Gallery (3-4 Views) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      background: '#ffffff',
                      border: idx === activeImageIndex ? '2px solid #FF6B00' : '1px solid rgba(0,0,0,0.08)',
                      borderRadius: '6px',
                      aspectRatio: '1/1',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      padding: 0,
                      boxShadow: idx === activeImageIndex ? '0 4px 12px rgba(255,107,0,0.15)' : 'none',
                      transition: 'all 0.25s ease',
                      outline: 'none'
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail view ${idx + 1}`}
                      fill
                      sizes="120px"
                      style={{ objectFit: 'contain', padding: '0.5rem' }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Information & Options */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 8px 30px rgba(0,0,0,0.015)' }}>
              
              {/* Heading Specs */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'rgba(255,107,0,0.1)', color: '#FF6B00', padding: '0.25rem 0.7rem', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {sport.accent}
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, background: '#111', color: '#fff', padding: '0.25rem 0.7rem', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {category.name}
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, background: '#e0f2fe', color: '#0369a1', padding: '0.25rem 0.7rem', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {product.tag}
                </span>
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#111', margin: '0 0 1rem', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                {product.name}
              </h2>

              <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.7, margin: '0 0 2rem' }}>
                {product.desc}
              </p>

              {/* Specifications Block */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: 'rgba(255,107,0,0.08)', color: '#FF6B00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Package size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', color: '#888', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Min. Order (MOQ)</div>
                    <div style={{ fontSize: '0.9rem', color: '#111', fontWeight: 800 }}>{product.moq}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: 'rgba(255,107,0,0.08)', color: '#FF6B00', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', color: '#888', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Production Lead Time</div>
                    <div style={{ fontSize: '0.9rem', color: '#111', fontWeight: 800 }}>{product.lead}</div>
                  </div>
                </div>
              </div>

              {/* Technical features list */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Custom Specs & Features
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
                  {product.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={14} color="#FF6B00" strokeWidth={2.5} />
                      <span style={{ fontSize: '0.85rem', color: '#444', fontWeight: 500 }}>{feat}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color="#FF6B00" strokeWidth={2.5} />
                    <span style={{ fontSize: '0.85rem', color: '#444', fontWeight: 500 }}>Reinforced Stitching</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color="#FF6B00" strokeWidth={2.5} />
                    <span style={{ fontSize: '0.85rem', color: '#444', fontWeight: 500 }}>Private Labeling</span>
                  </div>
                </div>
              </div>

              {/* Fabric Dropdown Select */}
              <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  Select Fabric Grade
                </label>
                <select
                  value={selectedFabric}
                  onChange={e => setSelectedFabric(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    border: '1px solid rgba(0,0,0,0.12)',
                    borderRadius: '4px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.88rem',
                    color: '#333',
                    background: '#FAFAFA',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option>100% Technical Interlock Polyester (145gsm)</option>
                  <option>Pro-Cool Spandex Blend (220gsm)</option>
                  <option>Double Knit Heavyweight Mesh (250gsm)</option>
                  <option>Eco-Friendly Recycled Polyester (150gsm)</option>
                </select>
                <span style={{ display: 'block', fontSize: '0.72rem', color: '#888', marginTop: '0.35rem' }}>
                  All our fabrics feature premium anti-pill & moisture-wicking coatings.
                </span>
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {/* Direct WhatsApp Quote */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: '#25D366',
                    color: '#ffffff',
                    textDecoration: 'none',
                    padding: '0.9rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.25)',
                    transition: 'all 0.25s ease',
                    textAlign: 'center'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.25)';
                  }}
                >
                  <MessageSquare size={16} />
                  Order via WhatsApp
                </a>

                {/* Standard Quote Form */}
                <Link
                  href={quoteUrl}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: '#FF6B00',
                    color: '#ffffff',
                    textDecoration: 'none',
                    padding: '0.9rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 16px rgba(255,107,0,0.3)',
                    transition: 'all 0.25s ease',
                    textAlign: 'center'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,107,0,0.45)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,107,0,0.3)';
                  }}
                >
                  Request Standard Quote
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Quality Seal */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)', justifyContent: 'center' }}>
                <ShieldCheck size={16} color="#10B981" />
                <span style={{ fontSize: '0.78rem', color: '#666', fontWeight: 600 }}>Ninja Guarantee: 5-Stage QA Check Shipped From Sialkot</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
