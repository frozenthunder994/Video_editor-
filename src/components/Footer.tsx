"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        Frame<span>&</span>Story
      </div>
      <div className="footer-cta">
        Ready to tell your story?{" "}
        <a href="mailto:bhaargav1747@gmail.com">bhaargav1747@gmail.com</a>
      </div>
      <div className="nav" style={{ display: 'flex' }}>
        <a href="https://www.instagram.com/bhxxrgxvx.r" target="_blank" rel="noopener noreferrer" className="nav-link">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
