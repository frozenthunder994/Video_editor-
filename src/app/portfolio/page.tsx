"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectModal from "@/components/portfolio/ProjectModal";
import ScrollReveal from "@/components/ScrollReveal";

const CATEGORIES = ["All", "Automotive", "Motion Graphics", "Real Estate", "Vlog", "Travel"];

const PROJECTS = [
  {
    id: "1",
    title: "Showreel - Motion Graphics & Autos",
    category: "Automotive",
    client: "Bhaargava R (Portfolio)",
    description: "A high-energy montage focusing on automotive content and advanced motion graphics. This project demonstrates expertise in promotional spots and fast-paced editing styles.",
    thumbnail: "https://d2o7l84cyhha8s.cloudfront.net/nexus-files/editors/0ff3f170-1c70-4fdd-b21f-fd4447dfa6bb/524298d3b49a421a86894b8326fd72fc.jpg",
    previewVideo: "https://d2o7l84cyhha8s.cloudfront.net/nexus-files/editors/0ff3f170-1c70-4fdd-b21f-fd4447dfa6bb/50c0528158c640519a00c10344a92902.mp4",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Adobe After Effects"],
  },
  {
    id: "2",
    title: "Showreel - Vlog & Real Estate",
    category: "Real Estate",
    client: "Bhaargava R (Portfolio)",
    description: "A long-form showreel showcasing vlog-style editing, travel adventures, and real estate cinematography. It features stylized filters, ambient ASMR elements, and a narrative approach.",
    thumbnail: "https://d2o7l84cyhha8s.cloudfront.net/nexus-files/editors/0ff3f170-1c70-4fdd-b21f-fd4447dfa6bb/39234dc07c49439ab273c218c6278497.jpg",
    previewVideo: "https://d2o7l84cyhha8s.cloudfront.net/nexus-files/editors/0ff3f170-1c70-4fdd-b21f-fd4447dfa6bb/2aa07b7dc18248a5a03baf1e065df9c7.mp4",
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve"],
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      <section className="hero-mini" style={{ padding: '8rem 4rem 2rem', borderBottom: '1px solid var(--line)' }}>
        <ScrollReveal>
          <div className="eyebrow">Portfolio</div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>Cinematic <em>Deliverables.</em></h1>
        </ScrollReveal>
      </section>

      <div className="filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      <section className="google-drive-cta" style={{ 
        padding: '10rem 4rem', 
        textAlign: 'center', 
        background: 'var(--ink)', 
        color: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden'
      }}>
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            fontSize: '15rem', 
            color: 'rgba(255,255,255,0.02)', 
            fontWeight: 900, 
            whiteSpace: 'nowrap', 
            pointerEvents: 'none',
            fontFamily: 'var(--font-syne)'
          }}>
            ARCHIVES
          </div>
          <ScrollReveal>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 4rem)', 
              marginBottom: '2rem',
              fontFamily: 'var(--font-playfair)',
              position: 'relative',
              zIndex: 1
            }}>
              Ready to see the <em>full</em> body of work?
            </h2>
            <p style={{ 
              color: 'rgba(245, 240, 232, 0.6)', 
              marginBottom: '4rem', 
              maxWidth: '650px', 
              margin: '0 auto 4rem',
              lineHeight: 1.8,
              fontSize: '0.9rem',
              position: 'relative',
              zIndex: 1
            }}>
                My most recent and confidential projects are stored in my private Google Drive portfolio. Click below to view the full archives, including raw workflow breakdowns and high-bitrate masters.
            </p>
            <Link 
                href="https://drive.google.com/drive/folders/1oajvSe2QOiPAjhS76uPlAFhgkxBFyn47" 
                target="_blank" 
                className="btn-primary"
                style={{ 
                  background: 'var(--gold)', 
                  color: 'var(--ink)',
                  position: 'relative',
                  zIndex: 1
                }}
            >
                View Full Portfolio (Google Drive)
            </Link>
          </ScrollReveal>
      </section>

      <section className="tech-stack" style={{ padding: '8rem 4rem', borderTop: '1px solid var(--line)' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', fontFamily: 'var(--font-playfair)' }}>My <em>Arsenal.</em></h2>
        </ScrollReveal>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Editing Tools</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
              {["CapCut", "Adobe After Effects", "DaVinci Resolve", "Filmora", "Alight Motion"].map(tool => (
                <div key={tool} className="tool-pill" style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--line)', fontSize: '0.8rem' }}>{tool}</div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="eyebrow" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>AI Tools</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {["Sora by OpenAI", "Google VEO", "Kling AI", "HeyGen"].map(tool => (
                <div key={tool} className="tool-pill" style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--line)', fontSize: '0.8rem', color: 'var(--gold)' }}>{tool}</div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
