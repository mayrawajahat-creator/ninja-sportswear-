'use client';
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Check, Send } from 'lucide-react';
import PageHero, { HeroAccent } from '@/Components/PageHero';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: '4px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.9rem',
    color: '#111',
    background: '#FAFAFA',
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#444',
    marginBottom: '6px',
    letterSpacing: '0.02em',
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Request Your <HeroAccent>Custom Quote</HeroAccent></>}
        subtitle="Fill in your requirements below. Our team will respond with a detailed quote within 24 business hours."
        align="center"
      />

      {/* Contact Content */}
      <section style={{
        background: '#FAFAFA',
        padding: '5rem 2rem',
        fontFamily: "'Inter', sans-serif",
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* Left: Contact Info */}
          <div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#111',
              margin: '0 0 0.5rem',
            }}>
              Let's Build Together
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: 1.7, margin: '0 0 2.5rem' }}>
              Whether you're placing a first sample order or scaling to 100,000+ units — we're here to help.
            </p>

            {/* Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                {
                  icon: <MapPin size={18} strokeWidth={2} />,
                  title: 'Location',
                  info: 'Sialkot, Punjab, Pakistan',
                  sub: 'Sports Industry Hub',
                },
                {
                  icon: <Mail size={18} strokeWidth={2} />,
                  title: 'Email',
                  info: 'info@ninjasportswear.com',
                  sub: 'We reply within 24 hours',
                },
                {
                  icon: <Phone size={18} strokeWidth={2} />,
                  title: 'Phone',
                  info: '+92 321 000 0000',
                  sub: 'Mon–Sat, 9AM–6PM PKT',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '6px',
                  padding: '1.25rem',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '4px',
                    background: 'rgba(255,107,0,0.08)',
                    color: '#FF6B00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111' }}>{item.info}</div>
                    <div style={{ fontSize: '0.78rem', color: '#aaa' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* B2B Note */}
            <div style={{
              background: 'rgba(255,107,0,0.04)',
              border: '1px solid rgba(255,107,0,0.15)',
              borderRadius: '6px',
              padding: '1.25rem',
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FF6B00', marginBottom: '0.4rem' }}>
                B2B Partnerships Only
              </div>
              <p style={{ fontSize: '0.8rem', color: '#888', lineHeight: 1.6, margin: 0 }}>
                We exclusively serve businesses. Minimum order quantities apply. Retail orders are not accepted.
              </p>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div style={{
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '8px',
            padding: '2.5rem',
            boxShadow: '0 8px 40px rgba(0,0,0,0.05)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(255,107,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}>
                  <Check size={28} strokeWidth={2.5} color="#FF6B00" />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111', margin: '0 0 0.5rem' }}>
                  Quote Request Sent!
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
                  Thank you for reaching out. Our team will review your requirements and respond within 24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:'',email:'',company:'',phone:'',product:'',quantity:'',message:'' }); }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: '#FF6B00',
                    background: 'rgba(255,107,0,0.08)',
                    border: '1px solid rgba(255,107,0,0.2)',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111', margin: '0 0 1.5rem', letterSpacing: '-0.02em' }}>
                  Quote Request Form
                </h3>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={labelStyle} htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                        placeholder="John Smith" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#FF6B00'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(255,107,0,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; e.target.style.background = '#FAFAFA'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="you@company.com" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#FF6B00'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(255,107,0,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; e.target.style.background = '#FAFAFA'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={labelStyle} htmlFor="company">Company Name *</label>
                      <input id="company" name="company" type="text" required value={form.company} onChange={handleChange}
                        placeholder="Acme Sports Ltd." style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#FF6B00'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(255,107,0,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; e.target.style.background = '#FAFAFA'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="+1 234 567 8900" style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = '#FF6B00'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(255,107,0,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; e.target.style.background = '#FAFAFA'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={labelStyle} htmlFor="product">Product Category *</label>
                      <select id="product" name="product" required value={form.product} onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => { e.target.style.borderColor = '#FF6B00'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(255,107,0,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; e.target.style.background = '#FAFAFA'; e.target.style.boxShadow = 'none'; }}
                      >
                        <option value="">Select product...</option>
                        <option>Performance Jerseys</option>
                        <option>Training Hoodies</option>
                        <option>Athletic Bottoms</option>
                        <option>Compression Wear</option>
                        <option>Sports Jackets</option>
                        <option>Team Kits</option>
                        <option>Custom / Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="quantity">Estimated Quantity *</label>
                      <select id="quantity" name="quantity" required value={form.quantity} onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => { e.target.style.borderColor = '#FF6B00'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(255,107,0,0.08)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; e.target.style.background = '#FAFAFA'; e.target.style.boxShadow = 'none'; }}
                      >
                        <option value="">Select quantity...</option>
                        <option>50 – 200 pcs</option>
                        <option>200 – 500 pcs</option>
                        <option>500 – 2,000 pcs</option>
                        <option>2,000 – 10,000 pcs</option>
                        <option>10,000+ pcs</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle} htmlFor="message">Project Details</label>
                    <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                      placeholder="Describe your requirements — fabric type, colors, branding details, delivery timeline, or any custom specifications..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                      onFocus={e => { e.target.style.borderColor = '#FF6B00'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(255,107,0,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.12)'; e.target.style.background = '#FAFAFA'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <button type="submit" style={{
                    width: '100%',
                    padding: '0.9rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: '#fff',
                    background: 'linear-gradient(135deg, #FF6B00, #FF8C00)',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(255,107,0,0.35)',
                    transition: 'all 0.25s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,107,0,0.5)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,107,0,0.35)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Submit Quote Request
                    <Send size={16} strokeWidth={2.5} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </>
  );
}
