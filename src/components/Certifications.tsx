import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const certifications = [
  {
    icon: <VerifiedIcon />,
    name: "Certified Associate in Project Management (CAPM®)",
    issuer: "Project Management Institute (PMI)",
    color: "#7c3aed",
    highlight: true,
  },
  {
    icon: <SmartToyIcon />,
    name: "Google AI Professional Specialization",
    issuer: "Google",
    color: "#06b6d4",
    highlight: false,
  },
  {
    icon: <AnalyticsIcon />,
    name: "DQLab Data Analyst Track",
    issuer: "DQLab · Data wrangling, visualization, SQL, Python",
    color: "#f472b6",
    highlight: false,
  },
  {
    icon: <SecurityIcon />,
    name: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    color: "#22c55e",
    highlight: false,
  },
  {
    icon: <SchoolIcon />,
    name: "Bachelor of Information System",
    issuer: "Universitas Terbuka · GPA 3.34",
    color: "#fb923c",
    highlight: false,
  },
];

const toolGroups = [
  {
    label: "BI & Analytics",
    tools: ["Power BI", "SQL", "DAX", "ETL", "R"],
  },
  {
    label: "Infrastructure",
    tools: ["Active Directory", "ManageEngine", "Linux Admin", "Git"],
  },
  {
    label: "Development",
    tools: ["Python", "PHP", "Flutter", "MySQL", "PostgreSQL"],
  },
  {
    label: "Automation & PM",
    tools: ["UiPath", "RPA Scripts", "MS Office", "PMI CAPM®"],
  },
];

const languages = [
  { lang: "Bahasa Indonesia", level: "Native", pct: 100 },
  { lang: "Javanese",         level: "Native", pct: 100 },
  { lang: "English",          level: "Professional", pct: 75 },
];

function Certifications() {
  return (
    <section className="certs-section" id="certifications">
      <div className="section-header">
        <h2 className="section-title">Certifications &amp; Skills</h2>
        <div className="gradient-divider" />
        <p className="section-subtitle" style={{ marginTop: 16, margin: '16px auto 0' }}>
          Continuous learning backed by industry-recognized credentials.
        </p>
      </div>

      {/* Certifications grid */}
      <div className="certs-grid">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className={`cert-card glass${cert.highlight ? ' cert-highlight' : ''}`}
            style={{ '--cert-color': cert.color } as React.CSSProperties}
          >
            <div className="cert-icon" style={{ color: cert.color }}>
              {cert.icon}
            </div>
            <div className="cert-body">
              <p className="cert-name">{cert.name}</p>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
            {cert.highlight && (
              <div className="cert-badge-star">★</div>
            )}
          </div>
        ))}
      </div>

      {/* Tools & Languages row */}
      <div className="tools-langs-row">
        {/* Tools */}
        <div className="tools-card glass">
          <h3 className="tools-title">Tools &amp; Technologies</h3>
          {toolGroups.map((group, idx) => (
            <div key={idx} className="tool-group">
              <span className="tool-group-label">{group.label}</span>
              <div className="chip-cloud">
                {group.tools.map((t, i) => (
                  <span key={i} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="langs-card glass">
          <h3 className="tools-title">Languages</h3>
          {languages.map((lang, idx) => (
            <div key={idx} className="lang-item">
              <div className="lang-header">
                <span className="lang-name">{lang.lang}</span>
                <span className="lang-level">{lang.level}</span>
              </div>
              <div className="lang-bar">
                <div
                  className="lang-bar-fill"
                  style={{ width: `${lang.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
