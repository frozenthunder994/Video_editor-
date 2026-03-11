"use client";

import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    num: "01",
    title: "Cinematic Eye",
    desc: "I don't just cut clips; I compose visual symphonies. Every transition is motivated, ensuring your audience stays immersed from the first frame to the last.",
    tag: "AESTHETICS",
  },
  {
    num: "02",
    title: "conversion focused",
    desc: "Understanding audience psychology is key. I structure edits to highlight value propositions, driving engagement and measurable results for your brand.",
    tag: "STRATEGY",
  },
  {
    num: "03",
    title: "high-end finishing",
    desc: "From advanced color grading that sets the mood to crisp motion graphics that polish the message—your content will look like a multi-million dollar production.",
    tag: "QUALITY",
  },
  {
    num: "04",
    title: "rapid turnaround",
    desc: "Time is money. My optimized workflow ensures premium edits are delivered within tight deadlines without ever compromising on the artistic vision.",
    tag: "EFFICIENCY",
  },
  {
    num: "05",
    title: "versatile styles",
    desc: "Whether it's the high-energy pulse of a social reel or the sophisticated rhythm of a luxury property tour, I adapt my style to fit your unique brand voice.",
    tag: "VERSATILITY",
  },
  {
    num: "06",
    title: "Story First",
    desc: "Technical skills are just tools. My priority is the narrative. I find the heart of your footage and build everything around the story you need to tell.",
    tag: "NARRATIVE",
  },
];

const WhyHire = () => {
  return (
    <section className="why-section" id="why">
      <ScrollReveal>
        <div className="why-header">
          <h2 className="section-title">
            Why <em>Hire</em><br/>A Visual Architect?
          </h2>
          <p className="why-intro">
            In a world of noise, clarity is luxury. I provide the technical precision 
            and creative vision to ensure your message doesn't just reach people—it 
            resonates with them.
          </p>
        </div>
      </ScrollReveal>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <ScrollReveal key={reason.num}>
            <div className="reason-card">
              <div className="reason-num">{reason.num}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-desc">{reason.desc}</p>
              <span className="reason-tag">{reason.tag}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default WhyHire;
