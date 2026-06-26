import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

const projects = [
  {
    img: mock10,
    title: "PC Provisioner – Device Automation Tool",
    stack: ["Python", "PostgreSQL", "Windows API", "customtkinter"],
    desc: "Automated hostname configuration, domain join, NIC/IP setup, firewall policies, and user initialization. Reduced provisioning time from ~60 minutes to under 10 minutes, standardizing device setup across the enterprise.",
  },
  {
    img: mock09,
    title: "VICSMON – Network & Device Monitoring System",
    stack: ["ElectronJS", "PostgreSQL", "Python", "Windows API"],
    desc: "Real-time monitoring of 273 production devices tracking uptime, CPU, disk health, and hardware status. Integrated automated email alerts and a problem-reporting module to proactively reduce downtime and improve production availability.",
  },
  {
    img: mock08,
    title: "Production Plan & Result Dashboard",
    stack: ["Python RPA", "PostgreSQL", "Power BI"],
    desc: "Automated ERP data extraction using Python RPA, stored in PostgreSQL, and visualized with Power BI for daily and cumulative production KPI tracking. Enabled faster data-driven management decisions.",
  },
  {
    img: mock07,
    title: "Integrated Poka-Yoke Traceability System",
    stack: ["Atlas Copco Open Protocol", "Python", "PostgreSQL"],
    desc: "Captures real-time tightening data from Atlas Copco tools via Open Protocol for complete production traceability. Automatically detects missing assembly processes and halts the conveyor to prevent defective motorcycles from advancing.",
  },
  {
    img: mock06,
    title: "Helpdesk System Deployment",
    stack: ["Hesk", "PHP", "MySQL"],
    desc: "Customized and deployed an internal helpdesk system (Hesk) for the Engineering Center. Configured ticket categories, priority workflows, and custom fields. Improved response times by 30% and user satisfaction by 25%.",
  },
  {
    img: mock05,
    title: "ERP Automated Reporting",
    stack: ["Python", "PostgreSQL", "Power BI", "SQL"],
    desc: "Developed automated ERP reporting features eliminating manual data processing. Generated scheduled reports and dashboards to improve IT service visibility and support data-driven decision-making for business stakeholders.",
  },
  {
    img: mock04,
    title: "IT Asset Management & MDM Implementation",
    stack: ["ManageEngine", "Active Directory"],
    desc: "Implemented IT asset lifecycle tracking and mobile device management using ManageEngine. Improved endpoint visibility, software licensing control, and compliance with internal IT policies and global standards.",
  },
  {
    img: mock03,
    title: "Web & Email System (Corporate Digital Transformation)",
    stack: ["PHP", "Laravel", "DNS", "SEO"],
    desc: "Led digital transformation by building a responsive corporate website, company profile assets, and a secure custom email system with domain integration. Focused on SEO optimization, reliability, and operational security.",
  },
  {
    img: mock02,
    title: "IT Operations Documentation & ISO Audit Support",
    stack: ["SOP", "ISO Standards", "Data Reporting"],
    desc: "Prepared SOP documentation, compliance records, and monthly IT data reports to support ISO audit processes. Collaborated with internal teams to ensure adherence to global IT standards and continuous process improvement.",
  },
  {
    img: mock01,
    title: "SaaS System Design & Development",
    stack: ["Laravel", "PostgreSQL", "Flutter", "REST API"],
    desc: "Designed and developed broky.biz.id as a full-featured business website and SaaS system. Covered full-stack development, deployment pipeline, and optimization focused on performance, security, and responsive UX.",
  },
];

function Project() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects &amp; Solutions</h2>
        <div className="gradient-divider" />
        <p className="section-subtitle" style={{ marginTop: 16, margin: '16px auto 0' }}>
          Real-world systems and tools built from the ground up to solve operational challenges.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-img-wrap">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay" />
            </div>
            <div className="project-body">
              <h2>{project.title}</h2>
              <div className="project-stack">
                {project.stack.map((s, i) => (
                  <span key={i} className="project-stack-tag">{s}</span>
                ))}
              </div>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
