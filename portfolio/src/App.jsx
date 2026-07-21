import React from 'react';
import { Mail, ExternalLink, Code2, ArrowUpRight, Download, Terminal } from 'lucide-react';
import './App.css';

function App() {
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'Express.js', icon: '⚙️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'JavaScript (ES6+)', icon: '⚡' },
    { name: 'Vite', icon: '⚡' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Git & GitHub', icon: '📦' },
    { name: 'HTML5 & CSS3', icon: '🎨' },
    { name: 'Graphic Design', icon: '✨' },
  ];

  const projects = [
    {
      title: 'Dev Analytics Dashboard',
      description: 'A full-stack developer analytics platform tracking commit history, productivity trends, and interactive project management metrics using real-time database sync.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts', 'Vercel', 'Render'],
      liveUrl: 'https://dev-analytics-dashboard-seven.vercel.app',
      githubUrl: 'https://github.com/KirkFranklin/dev-analytics-dashboard',
      // Put a screenshot in public/dashboard-preview.png once ready!
      image: null 
    }
  ];

  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="container nav-content">
          <a href="#" className="nav-logo">&lt;Kirk /&gt;</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        {/* Hero Section */}
        <header className="hero">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm Kirk 👋</p>
            <h1>Full-Stack Web Developer</h1>
            <p className="tagline">
              I build fast, responsive, and user-friendly web applications using React, Node.js, and MongoDB. Focused on clean code and practical software solutions.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn-primary">
                View My Projects <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch <Mail size={18} />
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about">
          <h2>About Me</h2>
          <p className="about-text">
            I'm an Information Technology student at Kenyatta University with a passion for full-stack software development, REST API design, and intuitive UI engineering. I enjoy building complete end-to-end web applications—from database schemas in MongoDB to responsive interfaces in React. I'm currently seeking software development and engineering internship opportunities where I can solve real-world problems and contribute to active engineering teams.
          </p>
        </section>

        {/* Technical Stack */}
        <section id="skills">
          <h2>Technical Stack</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-pill">
                <span>{skill.icon}</span> {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-preview">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <Terminal size={48} style={{ marginBottom: '12px', color: 'var(--accent)' }} />
                      <p style={{ fontSize: '0.9rem' }}>Dev Analytics Live App Preview</p>
                    </div>
                  )}
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

        {/* Contact Section */}
        <section id="contact">
          <div className="contact-container">
            <h2>Let's Work Together</h2>
            <p>
              I am actively looking for internship and junior full-stack opportunities. Feel free to reach out if you'd like to collaborate or chat!
            </p>
            <a href="mailto:your-email@example.com" className="btn-primary" style={{ display: 'inline-flex' }}>
              Say Hello <Mail size={18} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>© {new Date().getFullYear()} Built with React & Vite by Kirk.</p>
        </footer>
      </div>
    </>
  );
}

export default App;