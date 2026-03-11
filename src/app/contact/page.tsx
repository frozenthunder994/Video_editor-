"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User, Instagram, Youtube, Linkedin, Zap } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call or form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="hero-mini" style={{ padding: '8rem 4rem 2rem', borderBottom: '1px solid var(--line)' }}>
        <ScrollReveal>
          <div className="eyebrow">Contact</div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>Let&apos;s Build <em>The Story.</em></h1>
        </ScrollReveal>
      </section>

      <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh' }}>
        <div className="contact-info" style={{ padding: '6rem 4rem', borderRight: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '120px', height: '120px', background: 'var(--slate)', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/profile.jpg" alt="Bhaargava R" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Bhaargava R</h2>
                <p style={{ color: 'var(--gold)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Visual Architect & Lead Editor</p>
              </div>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                <Mail size={18} style={{ color: 'var(--gold)', marginTop: '0.3rem' }} />
                <div>
                  <span className="contact-item-label" style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Email Me</span>
                  <a href="mailto:bhaargav1747@gmail.com" className="contact-item-value" style={{ fontSize: '1rem', borderBottom: '1px solid var(--gold)', paddingBottom: '2px' }}>bhaargav1747@gmail.com</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                <Phone size={18} style={{ color: 'var(--gold)', marginTop: '0.3rem' }} />
                <div>
                  <span className="contact-item-label" style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Call Me</span>
                  <p className="contact-item-value" style={{ fontSize: '1rem' }}>+91 86607 54175</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                <MapPin size={18} style={{ color: 'var(--gold)', marginTop: '0.3rem' }} />
                <div>
                   <span className="contact-item-label" style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>Location</span>
                   <p className="contact-item-value" style={{ fontSize: '1rem' }}>Mysuru, Karnataka, India</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '2rem' }}>
               <a href="https://www.instagram.com/bhxxrgxvx.r" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}><Instagram size={20} /></a>
            </div>
          </ScrollReveal>
        </div>

        <div className="contact-form-side" style={{ padding: '6rem 5rem' }}>
          {formStatus === "success" ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: 'center', paddingTop: '4rem' }}
            >
              <div style={{ width: '80px', height: '80px', background: 'var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--ink)' }}>
                <Zap size={40} />
              </div>
              <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-playfair)', fontSize: '2.5rem' }}>Message Received.</h3>
              <p style={{ color: 'var(--muted)', maxWidth: '400px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>Thanks for reaching out. I usually respond within 12 hours of transmission. Let&apos;s build something extraordinary.</p>
              <button 
                onClick={() => setFormStatus("idle")} 
                className="btn-ghost" 
                style={{ borderBottomColor: 'var(--gold)' }}
              >
                Send another message &rarr;
              </button>
            </motion.div>
          ) : (
            <ScrollReveal>
              <form 
                className="contact-form" 
                onSubmit={handleSubmit} 
                data-netlify="true" 
                name="contact"
                style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label className="contact-item-label" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }} htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" style={{ width: '100%', padding: '1.2rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--line)', outline: 'none', fontFamily: 'var(--font-dm-mono)', fontSize: '1rem' }} />
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label className="contact-item-label" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }} htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" style={{ width: '100%', padding: '1.2rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--line)', outline: 'none', fontFamily: 'var(--font-dm-mono)', fontSize: '1rem' }} />
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label className="contact-item-label" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }} htmlFor="message">Your Project context</label>
                  <textarea id="message" name="message" className="form-textarea" required placeholder="Tell me about your goals, timeline, and current footage..." style={{ width: '100%', padding: '1.2rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--line)', outline: 'none', fontFamily: 'var(--font-dm-mono)', fontSize: '1rem', minHeight: '150px', resize: 'vertical' }}></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={formStatus === "submitting"}
                  style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
                >
                  {formStatus === "submitting" ? "Transmitting..." : "Send Transmission"}
                </button>
              </form>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  );
}
