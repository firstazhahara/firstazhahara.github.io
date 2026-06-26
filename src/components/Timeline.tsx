import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const timelineData = [
  {
    type: 'work',
    date: "May 2019 – Present",
    title: "IT Business Application",
    subtitle: "PT. Yamaha Indonesia Motor Manufacturing — Jakarta, Indonesia",
    desc: "Provide on-site and remote end-user support. Administer Active Directory and audit policies to align with global IT standards. Manage IT assets and implement MDM using ManageEngine. Develop ERP automated reporting features, generate weekly ticketing reports, and support ISO audits with compliance documentation.",
    achievements: [
      "Built PC Provisioner Automation Tool (Python + PostgreSQL + Windows API) — reduced provisioning time from ~60 mins to <10 mins.",
      "Developed VICSMON Monitoring System (ElectronJS + PostgreSQL) — monitors 273 production devices with real-time health checks and email alerts.",
      "Designed Production Plan & Result Dashboard (Python RPA + PostgreSQL + Power BI) — live KPI dashboards for production management.",
      "Implemented Integrated Poka-Yoke Traceability System using Atlas Copco Open Protocol — prevents defective motorcycles from advancing on the conveyor.",
    ],
  },
  {
    type: 'work',
    date: "Feb 2024 – May 2024",
    title: "System Analyst (Freelance)",
    subtitle: "PT. Dharmapala Usaha Sukses — Cilacap, Indonesia",
    desc: "Customized and deployed a Helpdesk System (Hesk) for the Engineering Center department. Configured ticket categories, priority levels, and custom fields for engineering-specific needs. Trained staff and provided adoption support.",
    achievements: [
      "Improved ticket response times by 30% and user satisfaction by 25%.",
    ],
  },
  {
    type: 'work',
    date: "Jan 2024 – Mar 2024",
    title: "Full Stack Developer (Freelance)",
    subtitle: "PT. Letty Karya Abadi — Bekasi, Indonesia",
    desc: "Led digital transformation project improving company online presence and internal systems. Built and deployed a responsive company website, company profile documents, and a custom email system with domain integration. Ensured system security, reliability, and SEO optimization.",
    achievements: [],
  },
  {
    type: 'work',
    date: "Mar 2023 – Jul 2023",
    title: "IT Specialist (Internship)",
    subtitle: "Gedhe Nusantara Foundation — Purwokerto, Indonesia",
    desc: "Managed Linux servers, WordPress development, and IT infrastructure. Provided teacher training in digital literacy and internet use in rural areas. Supported educational technology and broadcasting initiatives to improve accessibility.",
    achievements: [],
  },
  {
    type: 'education',
    date: "2019 – 2023",
    title: "Bachelor of Information System",
    subtitle: "Universitas Terbuka · GPA 3.34",
    desc: "Studied Information Systems covering software development, database management, IT project management, and business process analysis.",
    achievements: [],
  },
  {
    type: 'education',
    date: "2015 – 2018",
    title: "Teknik Komputer dan Jaringan (TKJ)",
    subtitle: "SMK Negeri 1 Binangun",
    desc: "Vocational studies in computer and networking technology, covering hardware, network infrastructure, and systems administration fundamentals.",
    achievements: [],
  },
];

function Timeline() {
  return (
    <section className="timeline-section" id="history">
      <div className="section-header">
        <h2 className="section-title">Career & Education</h2>
        <div className="gradient-divider" />
        <p className="section-subtitle" style={{ marginTop: 16, margin: '16px auto 0' }}>
          A track record of delivering impactful technology solutions across industries.
        </p>
      </div>

      <VerticalTimeline lineColor="rgba(124,58,237,0.3)">
        {timelineData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            className={`vertical-timeline-element--${item.type}`}
            contentStyle={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)',
              borderRadius: '24px',
              padding: '28px',
            }}
            contentArrowStyle={{ borderRight: '7px solid var(--glass-border)' }}
            date={item.date}
            iconStyle={{
              background: item.type === 'work'
                ? 'linear-gradient(135deg, #7c3aed, #06b6d4)'
                : 'linear-gradient(135deg, #f472b6, #7c3aed)',
              boxShadow: item.type === 'work'
                ? '0 0 0 4px rgba(124,58,237,0.2), 0 8px 24px rgba(124,58,237,0.35)'
                : '0 0 0 4px rgba(244,114,182,0.2), 0 8px 24px rgba(244,114,182,0.35)',
            }}
            icon={
              <FontAwesomeIcon
                icon={item.type === 'work' ? faBriefcase : faGraduationCap}
                style={{ color: '#fff' }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <p>{item.desc}</p>
            {item.achievements.length > 0 && (
              <ul className="timeline-achievements">
                {item.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
