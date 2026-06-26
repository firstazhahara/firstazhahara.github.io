import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-icons">
        <a href="https://github.com/firstazhahara" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/firstazhahara" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>
      <p className="footer-copy">
        Portfolio of{' '}
        <a href="https://github.com/firstazhahara/portfolio" target="_blank" rel="noreferrer">
          Firsta Zhahara
        </a>{' '}
        💜
      </p>
    </footer>
  );
}

export default Footer;