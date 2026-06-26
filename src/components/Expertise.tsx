import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const labelsFirst = [
  "Active Directory", "Server Administration", "Network Troubleshooting",
  "MDM (ManageEngine)", "IT Asset Management", "ERP Feature Expansion",
  "SOP Documentation", "ISO Audit Support",
];

const labelsSecond = [
  "Python", "UiPath", "PHP (Laravel)", "Flutter", "ElectronJS",
  "RPA (Custom Scripts)", "PostgreSQL", "MySQL", "REST API",
  "HTML5", "CSS3", "JavaScript",
];

const labelsThird = [
  "Power BI", "SQL", "DAX", "ETL", "Data Analysis",
  "Automation Dashboard", "Monitoring System", "Email Alerting",
  "Reporting System", "PostgreSQL",
];

const labelsFourth = [
  "PMI CAPM®", "Project Planning", "Stakeholder Management",
  "Risk Management", "Process Improvement", "Cross-functional Collaboration",
];

const skills = [
  {
    icon: faDocker,
    title: "Infrastructure & IT Administration",
    desc: "Strong background in IT operations and system administration. Hands-on experience managing Active Directory, Windows/Linux servers, endpoints, MDM, and IT asset lifecycles aligned with global IT standards and ISO audit requirements.",
    chips: labelsFirst,
    colorA: "rgba(6,182,212,0.25)",
    colorB: "rgba(6,182,212,0.08)",
  },
  {
    icon: faReact,
    title: "Automation & Full Stack Development",
    desc: "Experienced in developing internal business applications, RPA automation tools, and web-based systems for ERP enhancement, IT operations, and digital transformation. Comfortable across frontend, backend, and system-level integrations.",
    chips: labelsSecond,
    colorA: "rgba(124,58,237,0.25)",
    colorB: "rgba(124,58,237,0.08)",
  },
  {
    icon: faPython,
    title: "Data, Monitoring & Business Intelligence",
    desc: "Proven experience delivering data-driven dashboards, real-time monitoring systems, and automated reporting solutions. Skilled in extracting ERP data, transforming it via Python RPA, and presenting actionable insights in Power BI.",
    chips: labelsThird,
    colorA: "rgba(244,114,182,0.25)",
    colorB: "rgba(244,114,182,0.08)",
  },
  {
    icon: faProjectDiagram,
    title: "Project Management",
    desc: "PMI CAPM® certified with a strong foundation in project planning, stakeholder management, risk management, and continuous process improvement. Experienced coordinating cross-functional IT initiatives from inception to delivery.",
    chips: labelsFourth,
    colorA: "rgba(251,191,36,0.25)",
    colorB: "rgba(251,191,36,0.08)",
  },
];

function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <div className="section-header">
        <h2 className="section-title">Core Expertise</h2>
        <div className="gradient-divider" />
        <p className="section-subtitle" style={{ marginTop: 16, margin: '16px auto 0' }}>
          A versatile skill set spanning infrastructure, development, data intelligence, and project management.
        </p>
      </div>

      <div className="skills-grid skills-grid-2x2">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div
              className="skill-icon-wrap"
              style={{
                background: `linear-gradient(135deg, ${skill.colorA}, ${skill.colorB})`,
                borderColor: skill.colorA.replace('0.25', '0.4'),
              }}
            >
              <FontAwesomeIcon icon={skill.icon} size="2x" style={{ color: 'var(--color-accent-1)' }} />
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
            <span className="chips-label">Tech Stack</span>
            <div className="chip-cloud">
              {skill.chips.map((chip, i) => (
                <span key={i} className="tech-chip">{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
