import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container">
          <h1>Project Not Found</h1>
          <Link to="/#projects" className="btn btn-primary">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <Link to="/#projects" className="back-link">← Back to Projects</Link>
        
        <h1 className="project-detail-title">{project.title}</h1>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
        
        <div className="project-meta">
          <div className="meta-item">
            <strong>Role:</strong> {project.role}
          </div>
          <div className="meta-item">
            <strong>Tools:</strong> {project.tools.join(', ')}
          </div>
          <div className="meta-item">
            <strong>Techniques:</strong> {project.techniques.join(', ')}
          </div>
        </div>

        <section className="project-section">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
        </section>

        <section className="project-section">
          <h2>Key Highlights</h2>
          <ul className="highlight-list">
            {project.highlights.map((highlight, index) => (
              <li key={index}>
                <strong>{highlight.title}:</strong> {highlight.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="project-section">
          <h2>Technical Implementation</h2>
          <div className="implementation-details">
            {project.implementation.map((impl, index) => (
              <div key={index} className="detail-block">
                <h3>{impl.title}</h3>
                <p>{impl.description}</p>
                <ul>
                  {impl.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2>Results & Impact</h2>
          <div className="results-grid">
            {project.results.map((result, index) => (
              <div key={index} className="result-card">
                <h3>{result.title}</h3>
                <p>{result.description}</p>
              </div>
            ))}
          </div>
        </section>

        {project.recommendations && (
          <section className="project-section">
            <h2>Business Recommendations</h2>
            <ul className="highlight-list">
              {project.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </section>
        )}

        {project.challenges && (
          <section className="project-section">
            <h2>Technical Challenges & Solutions</h2>
            <ul className="highlight-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
        )}

        {project.futureEnhancements && (
          <section className="project-section">
            <h2>Future Enhancements</h2>
            <ul className="highlight-list">
              {project.futureEnhancements.map((enhancement, index) => (
                <li key={index}>{enhancement}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="project-section">
          <h2>Key Learnings</h2>
          <p>{project.learnings}</p>
        </section>

        <div className="project-actions">
          <Link to="/#projects" className="btn btn-primary">← Back to Projects</Link>
          <a href={project.github} className="btn btn-secondary">View on GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
