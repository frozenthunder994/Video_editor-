"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { 
  Video, 
  Film, 
  Scissors, 
  Palette, 
  Zap, 
  Layers, 
  Music, 
  Share2 
} from "lucide-react";

const industries = [
  "Luxury Real Estate",
  "High-End Events",
  "Brand Documentary",
  "Social Media Growth",
  "Content Strategy",
];

const tools = [
  { name: "Premiere Pro", icon: <Scissors size={20} /> },
  { name: "DaVinci Resolve", icon: <Palette size={20} /> },
  { name: "After Effects", icon: <Layers size={20} /> },
  { name: "Audition", icon: <Music size={20} /> },
  { name: "CapCut Pro", icon: <Zap size={20} /> },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="hero-mini" style={{ padding: '8rem 4rem 4rem', borderBottom: '1px solid var(--line)' }}>
        <ScrollReveal>
          <div className="eyebrow">The Architect</div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>The <em>Mind</em> Behind The Edit.</h1>
        </ScrollReveal>
      </section>

      <section className="bio-section">
        <div className="bio-sidebar">
          <ScrollReveal>
            <div style={{ width: '100%', aspectRatio: '1/1', background: 'var(--slate)', marginBottom: '1rem', overflow: 'hidden' }}>
               <img src="/profile.jpg" alt="Bhaargava R" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ marginBottom: '3rem' }}>
              <h3 className="sidebar-label" style={{ marginBottom: '0.5rem' }}>Bhaargava R</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Visual Architect</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <span className="sidebar-label">Industries I Work With</span>
            <ul className="service-list">
              {industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <span className="sidebar-label">Advanced Toolkit</span>
            <div className="tool-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {tools.map((tool) => (
                <motion.div 
                  key={tool.name} 
                  className="tool-pill"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem' }}
                  whileHover={{ scale: 1.05, background: 'var(--gold)', color: 'var(--ink)' }}
                >
                  <motion.span
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    {tool.icon}
                  </motion.span>
                  <span style={{ fontSize: '0.8rem' }}>{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="bio-main">
          <div className="bio-body">
            <ScrollReveal>
              <h2 style={{ marginBottom: '2rem', fontFamily: 'var(--font-playfair)', fontSize: '2.5rem' }}>My Story</h2>
              <p>
                Somewhere between the <em>golden hour glow</em> of a luxury listing and the roar of a crowd at a sold-out event, I found my craft. I didn't start as an editor; I started as a storyteller who happened to use software to tell the truth.
              </p>
              <p>
                Most people see editing as a technical task. I see it as architecture — every video must have flow, light, and a sense of purpose. I don't just cut footage. I sequence emotions.
              </p>
              <p>
                I treat the algorithm like a collaborator, not a gatekeeper. I craft edits with intentional hooks, pacing that makes leaving feel rude, and a rhythm that rewards every extra second a viewer stays. Each frame is a quiet argument for why they shouldn't look away.
              </p>
              <p>
                My goal is simple: take your raw footage and hand you back something <strong>weaponised</strong> — a video that builds trust, drives action, and works for your brand long after you've logged off.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
