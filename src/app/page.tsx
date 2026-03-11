"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import WhyHire from "@/components/WhyHire";

const specialties = [
  "Real Estate Walkthroughs",
  "Cinematic Property Tours",
  "Event Highlight Reels",
  "Social Media Reels",
  "Brand Storytelling",
  "YouTube Long-Form",
  "Colour Grading",
  "Motion Graphics",
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <motion.div 
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="eyebrow" variants={itemVariants}>
            Video Editor · Storyteller · Visual Architect
          </motion.div>
          <motion.h1 variants={itemVariants}>
            Frames That<br/><em>Sell,</em><br/>Stories That<br/>Stay.
          </motion.h1>
          <motion.p className="hero-tagline" variants={itemVariants}>
            Most editors hand you a polished file. I hand you a conversion machine. 
            Every cut, colour grade, and caption is engineered to make your audience 
            stop scrolling, start feeling, and take action.
          </motion.p>
          <motion.div className="cta-row" variants={itemVariants}>
            <Link href="/contact" className="btn-primary">Hire Me Now</Link>
            <Link href="#niches" className="btn-ghost" onClick={(e) => {
              e.preventDefault();
              document.getElementById('niches')?.scrollIntoView({ behavior: 'smooth' });
            }}>See Why &rarr;</Link>
          </motion.div>
        </motion.div>

        <div className="hero-right">
          <div className="stat-grid">
            <div className="stat-cell">
              <AnimatedCounter value="4+" />
              <span className="stat-label">Industries Mastered</span>
            </div>
            <div className="stat-cell">
              <AnimatedCounter value="∞" />
              <span className="stat-label">Revisions Commitment</span>
            </div>
            <div className="stat-cell">
              <AnimatedCounter value="24h" />
              <span className="stat-label">Avg. Turnaround</span>
            </div>
            <div className="stat-cell">
              <AnimatedCounter value="0" />
              <span className="stat-label">Generic Cuts Delivered</span>
            </div>
          </div>
          <div className="niches">
            <span className="niche-tag">Real Estate</span>
            <span className="niche-tag">Content Creation</span>
            <span className="niche-tag">Film Making</span>
            <span className="niche-tag">Events</span>
            <span className="niche-tag">Short-Form</span>
            <span className="niche-tag">Long-Form</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={specialties} />

      {/* LONG BIO PREVIEW */}
      <section className="bio-section">
        <div className="bio-sidebar">
          <div>
            <span className="sidebar-label">Recent Niches</span>
            <ul className="service-list">
              <li>Property Showcase Videos</li>
              <li>Cinematic Walk-throughs</li>
              <li>Short-Form Reels & TikToks</li>
              <li>YouTube & Long-Form Edits</li>
              <li>Event Highlight Films</li>
            </ul>
          </div>
          <div>
            <span className="sidebar-label">Tools & Software</span>
            <div className="tool-pills">
              <span className="tool-pill">Premiere Pro</span>
              <span className="tool-pill">DaVinci Resolve</span>
              <span className="tool-pill">After Effects</span>
              <span className="tool-pill">CapCut Pro</span>
            </div>
          </div>
        </div>

        <div className="bio-main">
          <ScrollReveal>
            <div className="bio-opener">
              Somewhere between the <em>golden hour glow</em> of a luxury listing and the roar of a crowd at a sold-out event, I found my craft — and I've been perfecting it ever since.
            </div>
          </ScrollReveal>

          <div className="bio-body">
            <ScrollReveal>
              <p>
                Let's skip the pleasantries. You didn't land on this page to read another editor's résumé dressed up in buzzwords. You're here because you have footage — raw, beautiful, potential-packed footage — and you need someone who can transform it into a video that <strong>makes people feel something and do something</strong>. That's exactly what I do.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                My work isn't just about making things look pretty (though they will look <em>very</em> pretty). It's about understanding that every frame is an argument — a persuasive, visual argument for why a buyer should fall in love with a property, why a viewer should hit subscribe, why an audience should relive that event forever.
              </p>
            </ScrollReveal>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/about" className="btn-ghost" style={{ borderBottomColor: 'var(--gold)' }}>Read Full Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="pull-quote">
        <ScrollReveal>
          <blockquote>
            "A mediocre video whispers. A great edit <em>commands</em> the room — even when no one's in it."
          </blockquote>
        </ScrollReveal>
      </section>

      {/* WHY HIRE */}
      <WhyHire />

      {/* SHORT BIO SECTION */}
      <section className="shortbio-section" id="niches">
        <div className="shortbio-left">
          <ScrollReveal>
            <span className="section-label">Short Bio — For Press / Collabs</span>
            <h2>The 100-Word Version</h2>
            <p className="short-bio-text">
              I'm a video editor specialising in real estate, content creation, filmmaking, and events — across both short-form and long-form formats. My edits don't just document moments; they manufacture desire, build trust, and drive action. I work with property professionals who need buyers to fall in love before they book a viewing, with content creators who need retention over virality.
            </p>
          </ScrollReveal>
        </div>
        <div className="shortbio-right">
          <ScrollReveal>
            <span className="section-label">Elevator Pitch — For Social / DMs</span>
            <h2>The 30-Second Version</h2>
            <p className="short-bio-text-light">
              Video editor for real estate, events, and creators. I turn raw footage into content that sells properties, grows audiences, and makes moments unforgettable. Long-form or short-form — I do both, and I do both well.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/portfolio" className="btn-primary">View Portfolio</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
