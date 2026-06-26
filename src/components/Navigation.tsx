import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';

const navItems = [
  { label: 'Expertise',       id: 'expertise' },
  { label: 'History',         id: 'history' },
  { label: 'Projects',        id: 'projects' },
  { label: 'Certifications',  id: 'certifications' },
  { label: 'Contact',         id: 'contact' },
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Main navbar */}
      <nav
        id="navigation"
        className={`nav-glass${scrolled ? ' scrolled' : ''}`}
      >
        <div className="nav-inner">
          {/* Logo */}
          <div
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Firsta<span>.</span>
          </div>

          {/* Desktop links */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {navItems.map(item => (
              <button
                key={item.id}
                className="nav-link-btn"
                style={{
                  background: 'none',
                  border: '1px solid transparent',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-sans)',
                }}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.color = 'var(--color-text-primary)';
                  el.style.background = 'var(--glass-bg)';
                  el.style.borderColor = 'var(--glass-border)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.color = 'var(--color-text-secondary)';
                  el.style.background = 'none';
                  el.style.borderColor = 'transparent';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconButton
              className="nav-mode-btn"
              onClick={modeChange}
              aria-label="Toggle theme"
            >
              {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>

            {/* Hamburger (mobile) */}
            <IconButton
              className="nav-hamburger"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { sm: 'none' } }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            background: 'var(--color-bg-surface)',
            borderLeft: '1px solid var(--glass-border)',
          },
        }}
      >
        <div style={{ padding: '20px 16px' }}>
          {/* Drawer header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>
              Menu
            </span>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'var(--color-text-primary)' }}>
              <CloseIcon />
            </IconButton>
          </div>

          {/* Drawer links */}
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                display: 'flex',
                width: '100%',
                padding: '14px 16px',
                marginBottom: '4px',
                border: '1px solid transparent',
                borderRadius: '16px',
                background: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                transition: 'all 0.15s ease',
                textAlign: 'left',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.background = 'var(--glass-bg)';
                el.style.borderColor = 'var(--glass-border)';
                el.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.background = 'none';
                el.style.borderColor = 'transparent';
                el.style.color = 'var(--color-text-secondary)';
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Theme toggle in drawer */}
          <div style={{ borderTop: '1px solid var(--glass-border)', marginTop: '16px', paddingTop: '16px' }}>
            <button
              onClick={() => { modeChange(); setMobileOpen(false); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                background: 'var(--glass-bg)',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
              }}
            >
              {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Navigation;