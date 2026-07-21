import React from 'react';
import { Mail, ExternalLink, Code2, Globe } from 'lucide-react';
import './App.css';

function App() {
  const skills = [
    'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript (ES6+)',
    'Vite', 'REST APIs', 'Git / GitHub', 'HTML5 / CSS3', 'Graphic Design'
  ];

  const projects = [
    {
      title: 'Dev Analytics Dashboard',
      description: 'A full-stack MERN analytics dashboard tracking developer activity, commit trends, and dynamic project metrics with interactive charts.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts', 'Vercel', 'Render'],
      liveUrl: 'https://dev-analytics-dashboard-seven.vercel.app',
      githubUrl: 'https://github.com/KirkFranklin/dev-analytics-dashboard'
    }
  ];

  return (
    <div className="container">
     {/* Hero Header */}
      <header>
        <h1>Hi, I'm <span className="highlight">Kirk</span></h1>
        <p className="tagline">
          I build modern web applications using React, Node.js and MongoDB.
        </p>

        <p className="tagline">
         I enjoy creating fast, responsive and user-friendly applications that solve real-world problems.
        </p>

        <div className="social-links">
          <a href="https://github.com/KirkFranklin" target="_blank" rel="noopener noreferrer">
            <Code2 size={20} />
          </a>
          <a href="mailto:your-email@example.com">
            <Mail size={20} />
          </a>
        </div>
      </header>

      {/* Tech Stack */}
      <section>
        <h2>Technical Stack</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-pill">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  <Code2 size={16} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;