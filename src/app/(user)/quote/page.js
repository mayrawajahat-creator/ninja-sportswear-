'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Upload, Check, ArrowRight, Phone, Mail } from 'lucide-react';
import PageHero, { HeroAccent } from '@/Components/PageHero';

const SPORTS = ['Lacrosse', 'Soccer', 'Baseball', 'Basketball', 'American Football', 'Other'];
const PRODUCT_TYPES = [
  'Jerseys / Kits', 'Shorts / Pants', 'Training Tops', 'Hoodies / Sweatshirts',
  'Compression Wear', 'Warmup Suits / Jackets', 'Full Team Kits', 'Accessories', 'Other',
];
const COUNTRIES = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
  'France', 'Netherlands', 'UAE', 'Saudi Arabia', 'South Africa', 'Other',
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function QuotePage() {
  const [form, setForm] = useState({
    name: '', company: '', country: '', email: '',
    whatsapp: '', sport: '', productType: '', quantity: '',
    message: '', file: null,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const sportParam = params.get('sport') || '';
      const productParam = params.get('product') || '';
      const skuParam = params.get('sku') || '';

      // Match sport string case-insensitively with standard list
      let matchedSport = '';
      if (sportParam) {
        matchedSport = SPORTS.find(s => s.toLowerCase() === sportParam.toLowerCase()) || 'Other';
      }

      // Match productType string case-insensitively with standard list
      let matchedProduct = '';
      if (productParam) {
        matchedProduct = PRODUCT_TYPES.find(p => p.toLowerCase().includes(productParam.toLowerCase())) || 'Other';
      }

      setForm(prev => ({
        ...prev,
        sport: matchedSport || prev.sport,
        productType: matchedProduct || prev.productType,
        message: skuParam ? `Hi, I want a quotation for product SKU: ${skuParam}.` : prev.message,
      }));
    }
  }, []);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [fileName, setFileName] = useState('');

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: '-60px' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (f) { setForm(prev => ({ ...prev, file: f })); setFileName(f.name); }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase = (name) => ({
    width: '100%',
    padding: '0.85rem 1rem',
    border: `1px solid ${focused === name ? '#FF6B00' : 'rgba(0,0,0,0.1)'}`,
    borderRadius: '4px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    color: '#111',
    background: focused === name ? '#fff' : '#FAFAFA',
    outline: 'none',
    transition: 'all 0.25s ease',
    boxSizing: 'border-box',
    boxShadow: focused === name ? '0 0 0 3px rgba(255,107,0,0.08)' : 'none',
  });

  const labelStyle = {
    display: 'block',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#444',
    marginBottom: '6px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  };

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#050508',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', sans-serif",
        padding: '2rem',
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            textAlign: 'center',
            maxWidth: '520px',
          }}
        >
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'rgba(255,107,0,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: '2px solid rgba(255,107,0,0.25)',
          }}>
            <Check size={32} color="#FF6B00" strokeWidth={2.5} />
          </div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800, color: '#fff',
            letterSpacing: '-0.03em', margin: '0 0 0.75rem',
          }}>
            Quote Request Received!
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: '0 0 2rem' }}>
            Thank you. Our team will review your requirements and get back to you within{' '}
            <strong style={{ color: '#FF6B00' }}>24 hours</strong> with a tailored quote.
          </p>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#FF6B00', color: '#fff', textDecoration: 'none',
            padding: '0.85rem 2rem', borderRadius: '4px',
            fontSize: '0.88rem', fontWeight: 700,
          }}>
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title={<>Your Order, <HeroAccent>Our Precision</HeroAccent></>}
        subtitle="Fill out the form below and our team will respond with a detailed quote within 24 hours. No commitment required."
        align="center"
      />

      {/* ── Form Section ── */}
      <section style={{ background: '#fafafa', padding: '6rem 2rem 8rem', fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }} ref={formRef}>
          <div
            className="quote-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 380px',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* ── Form ── */}
            <motion.div
              custom={0} variants={fade} initial="hidden" animate={formInView ? 'visible' : 'hidden'}
            >
              <div style={{
                background: '#fff',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.07)',
                padding: '2.5rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              }}>
                <h2 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.25rem', fontWeight: 800,
                  color: '#111', margin: '0 0 0.4rem',
                  letterSpacing: '-0.02em',
                }}>
                  Request a Custom Quote
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#aaa', margin: '0 0 2rem', lineHeight: 1.6 }}>
                  All fields marked * are required. We respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name + Company */}
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                        placeholder="John Smith"
                        style={inputBase('name')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Company / Team *</label>
                      <input
                        name="company" required value={form.company} onChange={handleChange}
                        onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
                        placeholder="City Lacrosse Club"
                        style={inputBase('company')}
                      />
                    </div>
                  </div>

                  {/* Row 2: Country + Email */}
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={labelStyle}>Country *</label>
                      <select
                        name="country" required value={form.country} onChange={handleChange}
                        onFocus={() => setFocused('country')} onBlur={() => setFocused(null)}
                        style={{ ...inputBase('country'), cursor: 'pointer' }}
                      >
                        <option value="">Select Country</option>
                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                        placeholder="john@example.com"
                        style={inputBase('email')}
                      />
                    </div>
                  </div>

                  {/* Row 3: WhatsApp + Sport */}
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={labelStyle}>WhatsApp Number</label>
                      <input
                        name="whatsapp" value={form.whatsapp} onChange={handleChange}
                        onFocus={() => setFocused('whatsapp')} onBlur={() => setFocused(null)}
                        placeholder="+1 555 000 0000"
                        style={inputBase('whatsapp')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Sport *</label>
                      <select
                        name="sport" required value={form.sport} onChange={handleChange}
                        onFocus={() => setFocused('sport')} onBlur={() => setFocused(null)}
                        style={{ ...inputBase('sport'), cursor: 'pointer' }}
                      >
                        <option value="">Select Sport</option>
                        {SPORTS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Product Type + Quantity */}
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={labelStyle}>Product Type *</label>
                      <select
                        name="productType" required value={form.productType} onChange={handleChange}
                        onFocus={() => setFocused('productType')} onBlur={() => setFocused(null)}
                        style={{ ...inputBase('productType'), cursor: 'pointer' }}
                      >
                        <option value="">Select Product</option>
                        {PRODUCT_TYPES.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Quantity (units) *</label>
                      <input
                        name="quantity" required value={form.quantity} onChange={handleChange}
                        onFocus={() => setFocused('quantity')} onBlur={() => setFocused(null)}
                        placeholder="e.g. 150 pieces"
                        style={inputBase('quantity')}
                      />
                    </div>
                  </div>

                  {/* Upload Design */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={labelStyle}>Upload Design (optional)</label>
                    <label
                      htmlFor="design-upload"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '0.85rem 1rem',
                        border: `1px dashed ${focused === 'file' ? '#FF6B00' : 'rgba(0,0,0,0.15)'}`,
                        borderRadius: '4px',
                        background: '#FAFAFA',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        fontFamily: "'Inter', sans-serif",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF6B00'; e.currentTarget.style.background = 'rgba(255,107,0,0.02)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; e.currentTarget.style.background = '#FAFAFA'; }}
                    >
                      <Upload size={18} color="#FF6B00" />
                      <span style={{ fontSize: '0.88rem', color: fileName ? '#111' : '#aaa' }}>
                        {fileName || 'Click to upload — PNG, PDF, AI, EPS (max 20MB)'}
                      </span>
                    </label>
                    <input
                      id="design-upload" type="file"
                      accept=".png,.jpg,.jpeg,.pdf,.ai,.eps"
                      onChange={handleFile}
                      style={{ display: 'none' }}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={labelStyle}>Message / Requirements</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                      rows={5}
                      placeholder="Describe your requirements — fabrics, colors, custom branding, delivery timeline, etc."
                      style={{
                        ...inputBase('message'),
                        resize: 'vertical',
                        minHeight: '120px',
                        lineHeight: 1.6,
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #FF6B00, #FF8C00)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(255,107,0,0.4)',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,107,0,0.5)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,107,0,0.4)'; }}
                  >
                    Submit Quote Request <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ── Sidebar ── */}
            <motion.div
              custom={1} variants={fade} initial="hidden" animate={formInView ? 'visible' : 'hidden'}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {/* Why Us */}
              <div style={{
                background: '#050508',
                borderRadius: '8px',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <div style={{ height: '1px', width: '20px', background: '#FF6B00' }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#FF6B00', textTransform: 'uppercase' }}>
                    Why Choose Us
                  </span>
                </div>
                <h3 style={{
                  fontSize: '1rem', fontWeight: 800,
                  color: '#fff', margin: '0 0 1rem',
                }}>
                  What you get with every order
                </h3>
                {[
                  '48-hour physical samples',
                  'ISO-certified 5-stage QC',
                  'Low MOQ from 20 units',
                  'OEM & white-label ready',
                  'Global freight & tracking',
                  'Dedicated account manager',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    marginBottom: '0.65rem',
                  }}>
                    <div style={{
                      width: '18px', height: '18px', borderRadius: '50%',
                      background: 'rgba(255,107,0,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Check size={10} color="#FF6B00" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.55)' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div style={{
                background: '#fff',
                borderRadius: '8px',
                padding: '1.75rem',
                border: '1px solid rgba(0,0,0,0.07)',
              }}>
                <h3 style={{
                  fontSize: '0.92rem', fontWeight: 700,
                  color: '#111', margin: '0 0 1rem',
                }}>
                  Prefer to reach out directly?
                </h3>
                <a href="mailto:info@ninjasportswear.com" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  marginBottom: '0.75rem', textDecoration: 'none',
                  color: '#444', fontSize: '0.85rem',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
                  onMouseLeave={e => e.currentTarget.style.color = '#444'}
                >
                  <Mail size={15} color="#FF6B00" />
                  info@ninjasportswear.com
                </a>
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  textDecoration: 'none', color: '#444', fontSize: '0.85rem',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#FF6B00'}
                  onMouseLeave={e => e.currentTarget.style.color = '#444'}
                >
                  <Phone size={15} color="#FF6B00" />
                  +92 300 123 4567
                </a>
              </div>

              {/* Response time badge */}
              <div style={{
                background: 'linear-gradient(135deg, #FF6B00, #FF8C00)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: '2rem', fontWeight: 900,
                  color: '#fff', letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}>
                  24hrs
                </div>
                <div style={{
                  fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)',
                  fontWeight: 500, marginTop: '0.35rem',
                }}>
                  Average response time
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @media (max-width: 1024px) {
          .quote-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
