import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Certifications,
} from "./components";
import './index.scss';

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    setMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <div className="content-push">
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;