import React from 'react';
import { Mail, ExternalLink, Code2, ArrowUpRight, Download, Terminal, MapPin, GraduationCap, Briefcase, FileText, Video, CheckSquare, Layout, Activity } from 'lucide-react';
import './App.css';

function App() {
  const categorizedSkills = {
    Frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'JavaScript (ES6+)', icon: '⚡' },
      { name: 'HTML5 & CSS3', icon: '🎨' },
    ],
    Backend: [
      { name: 'Node.js', icon: '🟩' },
      { name: 'Express.js', icon: '⚙️' },
      { name: 'REST API Design', icon: '🔌' },
    ],
    Database: [
      { name: 'MongoDB', icon: '🍃' },
    ],
    Tools: [
      { name: 'Git & GitHub', icon: '📦' },
      { name: 'Vite', icon: '⚡' },
      { name: 'Graphic Design', icon: '✨' },
    ]
  };

  const timelineEvents = [
    {
      year: '2023 - Present',
      title: 'BSc in Information Technology',
      organization: 'Kenyatta University',
      description: 'Focusing on core software development, database systems, object-oriented programming, and web engineering.'
    },
    {
      year: '2024 - 2025',
      title: 'Full-Stack Software Bootcamps',
      organization: 'Technical Certifications',
      description: 'Completed intensive short-term training covering Front-End, Back-End, Python, and AI applications.'
    },
    {
      year: '2026',
      title: 'Active Open Source & Full-Stack Projects',
      organization: 'Independent Engineering',
      description: 'Created 5 production-grade GitHub repositories featuring MERN web apps, UI clones, planning utilities, and interactive trackers.'
    }
  ];

  const projects = [
    {
      title: 'Linear Clone & Issue Tracker',
      description: 'A modern issue management platform modeled after Linear. Features an interactive landing page, dark-theme design system, and a functional Kanban workflow board.',
      tech: ['React', 'JavaScript', 'CSS3', 'Vite', 'REST APIs'],
      liveUrl: 'https://linear-clone-gjf6.vercel.app/',
      githubUrl: 'https://github.com/KirkFranklin/Linear-Clone',
      icon: <Layout size={40} color="var(--accent)" />
    },
    {
      title: 'Dev Analytics Dashboard',
      description: 'A full-stack MERN analytics application that tracks developer commit trends, project management metrics, and live productivity stats with real-time database sync.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts'],
      liveUrl: 'https://dev-analytics-dashboard-seven.vercel.app/',
      githubUrl: 'https://github.com/KirkFranklin/dev-analytics-dashboard',
      icon: <Activity size={40} color="var(--accent)" />
    },
    {
      title: 'Task Tracker App',
      description: 'A streamlined web app built for task management, project organization, state filtering, and progress tracking with dynamic interactive UI.',
      tech: ['React', 'JavaScript', 'CSS3', 'Vite'],
      liveUrl: 'https://gregarious-tarsier-0ac73b.netlify.app/',
      githubUrl: 'https://github.com/KirkFranklin/task-tracker',
      icon: <CheckSquare size={40} color="var(--accent)" />
    },
    {
      title: 'YouTube Story Planner',
      description: 'A productivity web tool designed for content creators to plan, outline, and structure video narratives, story arcs, and publishing workflows efficiently.',
      tech: ['React', 'JavaScript', 'CSS3', 'Vite', 'Local Storage'],
      liveUrl: 'https://github.com/KirkFranklin/youtube-story-planner',
      githubUrl: 'https://github.com/KirkFranklin/youtube-story-planner',
      icon: <Video size={40} color="var(--accent)" />
    },
    {
      title: 'Developer Portfolio',
      description: 'A high-performance developer portfolio showcasing engineering projects, technical stack, and academic timeline with clean dark-mode UI/UX.',
      tech: ['React', 'Vite', 'CSS3', 'Lucide Icons', 'Vercel'],
      liveUrl: 'https://github.com/KirkFranklin/portfolio',
      githubUrl: 'https://github.com/KirkFranklin/portfolio',
      icon: <Terminal size={40} color="var(--accent)" />
    }
  ];

  return (
    <>
      {/* Sticky Navbar */}
      <nav>
        <div className="container nav-content">
          <a href="#" className="nav-logo">&lt;Kirk /&gt;</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="mailto:your-email@example.com" className="btn-secondary" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
                <FileText size={14} /> Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        {/* Two-Column Hero Header */}
        <header className="hero">
          <div>
            <p className="hero-greeting">Hi 👋, I'm Kirk</p>
            <h1>Full-Stack Web Developer</h1>
            <p className="tagline">
              I build fast, responsive, and reliable web applications using React, Node.js, and MongoDB. Passionate about backend APIs and practical software solutions.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowUpRight size={18} />
              </a>
              <a href="mailto:your-email@example.com" className="btn-secondary">
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div className="hero-card">
            <div className="avatar-placeholder">K</div>
            <div className="quick-facts">
              <div className="fact-item">
                <MapPin size={18} color="var(--accent)" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="fact-item">
                <GraduationCap size={18} color="var(--accent)" />
                <span>IT Student @ Kenyatta Univ</span>
              </div>
              <div className="fact-item">
                <Briefcase size={18} color="var(--accent)" />
                <span>Open for Software Internships</span>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about">
          <h2>About Me</h2>
          <p className="about-text">
            I'm an Information Technology student at Kenyatta University driven by building practical, real-world software. I specialize in full-stack JavaScript development—creating RESTful backend services with Express and MongoDB, coupled with clean, accessible interfaces in React. I enjoy taking ideas from initial architecture to live production deployment.
          </p>
        </section>

        {/* Categorized Technical Stack */}
        <section id="skills">
          <h2>Technical Stack</h2>
          {Object.entries(categorizedSkills).map(([category, items]) => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {items.map((skill, index) => (
                  <span key={index} className="skill-pill">
                    <span>{skill.icon}</span> {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Experience & Education Timeline */}
        <section id="experience">
          <h2>Education & Journey</h2>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <p className="timeline-year">{event.year}</p>
                <h3 className="timeline-title">{event.title} — <span style={{ color: 'var(--text-muted)' }}>{event.organization}</span></h3>
                <p className="timeline-desc">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-preview">
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ marginBottom: '12px' }}>{project.icon}</div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{project.title} Preview</p>
                  </div>
                </div>

                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      Source Code <Code2 size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expanded Contact Section */}
        <section id="contact">
          <h2 style={{ textAlign: 'center' }}>Let's Work Together</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '30px' }}>
            I am actively seeking full-stack software development and junior engineering opportunities.
          </p>

          <div className="contact-grid">
            <a href="mailto:your-email@example.com" className="contact-card">
              <Mail size={28} />
              <span>Email Me</span>
            </a>
            <a href="https://github.com/KirkFranklin" target="_blank" rel="noopener noreferrer" className="contact-card">
              <Code2 size={28} />
              <span>GitHub Profile</span>
            </a>
            <a href="mailto:your-email@example.com" className="contact-card">
              <FileText size={28} />
              <span>Download CV</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>© {new Date().getFullYear()} Made with ❤️ by Kirk. Built with React & Vite.</p>
        </footer>
      </div>
    </>
  );
}

export default App;