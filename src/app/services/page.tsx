"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { 
  Home, 
  Video, 
  Target, 
  Zap, 
  Palette, 
  Layers,
  Sparkles,
  Clapperboard
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Home size={32} />,
    title: "Real Estate Video Editing",
    desc: "Luxury property walkthroughs that create emotional connections. Optimized for high-end listings and social media teasers.",
  },
  {
    icon: <Clapperboard size={32} />,
    title: "Cinematic Property Tours",
    desc: "High-end cinematic experiences for elite homes. Focused on natural light, texture, and the premium lifestyle of the space.",
  },
  {
    icon: <Target size={32} />,
    title: "Short-Form Social Content",
    desc: "Retention-first editing for Reels, TikTok, and Shorts. Hooks that stop the scroll and pacing that keeps viewers watching until the CTA.",
  },
  {
    icon: <Zap size={32} />,
    title: "YouTube & Long-Form",
    desc: "Documentary-style edits for creators and brands. I handle the storytelling, pacing, and sound design so you can focus on creation.",
  },
  {
    icon: <Palette size={32} />,
    title: "Advanced Color Grading",
    desc: "The 'Look' that sets you apart. Custom LUTs and color profiles that ensure your footage looks cinematic, cohesive, and premium.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Motion Graphics & VFX",
    desc: "Adding that final layer of polish. Dynamic titles, seamless transitions, and visual effects that enhance the narrative flow.",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="hero-mini" style={{ padding: '8rem 4rem 2rem', borderBottom: '1px solid var(--line)' }}>
        <ScrollReveal>
          <div className="eyebrow">Services</div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>The <em>Toolkit</em> For Results.</h1>
        </ScrollReveal>
      </section>

      <div className="services-grid" style={{ padding: '4rem' }}>
        {services.map((service, index) => (
          <ScrollReveal key={service.title}>
            <motion.div 
              className="service-card"
              style={{ padding: '4rem 3rem', background: 'white', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '1.5rem', transition: 'all 0.4s ease' }}
              whileHover={{ borderColor: 'var(--gold)', y: -10 }}
            >
              <div className="service-icon" style={{ color: 'var(--gold)', marginBottom: '1rem' }}>{service.icon}</div>
              <h2 className="service-title" style={{ fontFamily: 'var(--font-syne)', textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '0.1em' }}>{service.title}</h2>
              <p className="service-desc" style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.8, flex: 1 }}>{service.desc}</p>
              <Link href="/contact" className="btn-ghost" style={{ alignSelf: 'flex-start', borderBottomColor: 'var(--gold)' }}>
                Enquire Now &rarr;
              </Link>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <section style={{ padding: '10rem 4rem', textAlign: 'center', borderTop: '1px solid var(--line)', background: 'var(--slate)', color: 'var(--cream)' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontFamily: 'var(--font-playfair)', marginBottom: '2rem' }}>Custom Project?</h2>
          <p style={{ color: 'rgba(245, 240, 232, 0.6)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.8 }}>
            If you have a unique vision that doesn&apos;t fit into a box, I&apos;d love to hear it. 
            I build custom editing packages tailored to complex brand needs and high-stakes campaigns.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary" 
            style={{ background: 'var(--gold)', color: 'var(--ink)' }}
          >
            Let&apos;s Build It Together
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
