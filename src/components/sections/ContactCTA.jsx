import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const serviceOptions = [
  'Digital Transformation', 'Experience Design', 'Media Planning',
  'Performance Marketing', 'PR & Influencer', 'Social Media & Content', 'Not sure yet',
];

const inputBase = {
  width: '100%',
  border: '1px solid #D1D5DB',
  borderRadius: '4px',
  padding: '10px 14px',
  fontSize: '14px',
  color: '#0D1F3C',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: "'Satoshi', sans-serif",
  background: '#fff',
  boxSizing: 'border-box',
};

const labelStyle = {
  fontSize: '13px',
  fontWeight: '500',
  color: '#374151',
  display: 'block',
  marginBottom: '6px',
};

function FormInput({ label, required, error, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={labelStyle}>
        {label} {required && <span style={{ color: '#EF4444' }}>*</span>}
      </label>
      <input
        {...props}
        style={{
          ...inputBase,
          borderColor: error ? '#EF4444' : focused ? '#EA580C' : '#D1D5DB',
          boxShadow: focused ? '0 0 0 3px rgba(234, 88, 12,0.08)' : 'none',
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {error && <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>{error}</p>}
    </div>
  );
}

export default function ContactCTA() {
  const { ref, isInView } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Add your Web3Forms Access Key here
      const apiKey = "36e7f102-7915-4c75-8e85-fb89c0fbbc6b";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `New Lead from ${data.name} on Advirt Website`,
          from_name: "Advirt Website",
          ...data,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        console.error('Web3Forms error:', result);
      }
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  return (
    <section id="contact" style={{ background: '#0D1F3C', padding: '96px 0' }}>
      <div className="container">
        <div
          className="contact-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
        >
          {/* Left — Copy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow" style={{ color: '#6B7280', marginBottom: '16px' }}>Get In Touch</p>
            <h2
              className="contact-h2"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: '48px',
                fontWeight: '700',
                color: '#FFFFFF',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
              }}
            >
              Let's Talk About<br />Your Growth.
            </h2>
            <p style={{ fontSize: '16px', color: '#9CA3AF', lineHeight: '1.7', maxWidth: '440px', margin: '0 0 40px 0' }}>
              Share your goals with us. We'll respond with a clear strategy and a realistic budget — no generic proposals.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#6B7280" />
                <span style={{ fontSize: '15px', color: '#F3F4F6' }}>advirt.info@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="#6B7280" />
                <span style={{ fontSize: '15px', color: '#9CA3AF' }}>Pune, Maharashtra</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div style={{ background: '#FFFFFF', borderRadius: '8px', padding: '40px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <CheckCircle2 size={48} color="#EA580C" style={{ marginBottom: '16px' }} />
                  <p style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '20px', fontWeight: '700', color: '#0D1F3C', marginBottom: '8px' }}>Thank you!</p>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>We'll be in touch within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ marginTop: '24px' }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <FormInput label="Full Name" required type="text" placeholder="Rajesh Sharma" error={errors.name?.message}
                    {...register('name', { required: 'Full name is required' })} />
                  <FormInput label="Company Name" type="text" placeholder="Acme Corp (optional)" {...register('company')} />
                  <FormInput label="Email Address" required type="email" placeholder="rajesh@example.com" error={errors.email?.message}
                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' } })} />
                  <FormInput label="Phone Number" type="tel" placeholder="+91 98765 43210 (optional)" {...register('phone')} />

                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>Service Required <span style={{ color: '#EF4444' }}>*</span></label>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      style={{
                        ...inputBase,
                        borderColor: errors.service ? '#EF4444' : selectFocused ? '#EA580C' : '#D1D5DB',
                        boxShadow: selectFocused ? '0 0 0 3px rgba(234, 88, 12,0.08)' : 'none',
                        cursor: 'pointer',
                      }}
                      onFocus={() => setSelectFocused(true)}
                      onBlur={() => setSelectFocused(false)}
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {errors.service && <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>{errors.service.message}</p>}
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Your Message <span style={{ color: '#EF4444' }}>*</span></label>
                    <textarea
                      {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Please write at least 20 characters' } })}
                      rows={4}
                      placeholder="Tell us about your business and goals…"
                      style={{
                        ...inputBase,
                        resize: 'vertical',
                        borderColor: errors.message ? '#EF4444' : textareaFocused ? '#EA580C' : '#D1D5DB',
                        boxShadow: textareaFocused ? '0 0 0 3px rgba(234, 88, 12,0.08)' : 'none',
                      }}
                      onFocus={() => setTextareaFocused(true)}
                      onBlur={() => setTextareaFocused(false)}
                    />
                    {errors.message && <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>{errors.message.message}</p>}
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-h2   { font-size: 36px !important; }
        }
      `}</style>
    </section>
  );
}
