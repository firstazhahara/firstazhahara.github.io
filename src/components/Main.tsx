import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import profileImg from '../assets/images/profile.jpg';

function Main() {
  return (
    <section className="hero-section">
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="hero-content">
        {/* Avatar */}
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-ring">
            <img
              src={profileImg}
              alt="Firsta Zhahara"
              className="hero-avatar"
            />
          </div>
        </div>

        {/* Text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" />
            CAPM® Certified · 7+ Years Experience
          </div>

          <h1 className="hero-name">
            Firsta <span className="highlight">Zhahara</span>
          </h1>
          <p className="hero-role-full">Wiji Ramadhani</p>
          <p className="hero-role">IT Specialist &amp; Project Manager</p>

          <div className="hero-contact-row">
            <span className="hero-contact-item">
              <EmailIcon style={{ fontSize: '0.95rem' }} />
              firstazh@gmail.com
            </span>
            <span className="hero-contact-sep">·</span>
            <span className="hero-contact-item">
              <PhoneIcon style={{ fontSize: '0.95rem' }} />
              +62 882 1675 3313
            </span>
            <span className="hero-contact-sep">·</span>
            <span className="hero-contact-item">
              Jakarta, Indonesia
            </span>
          </div>

          {/* Social icons */}
          <div className="hero-social">
            <a
              href="https://github.com/firstazhahara"
              target="_blank"
              rel="noreferrer"
              className="hero-social-btn"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/firstazhahara"
              target="_blank"
              rel="noreferrer"
              className="hero-social-btn"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* CTA buttons */}
          <div className="hero-cta">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vQih0w9xKWhpFDqGXmteoW7accT1LUPWjh3pMIYM6qaXW9xHPCTEYHyhQBeUZZLuA/pub"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <span>View Resume</span>
              <ArticleIcon style={{ fontSize: '1.1rem' }} />
            </a>
            <button
              className="btn-ghost"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </button>
          </div>

          {/* Summary */}
          <p className="hero-summary">
            IT Specialist with 7+ years of experience in IT Operations, System Administration,
            Automation, and Project Management. CAPM® certified with a passion for leveraging
            technology and automation to drive operational excellence.
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-indicator">
        <div className="scroll-label">Scroll</div>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Main;