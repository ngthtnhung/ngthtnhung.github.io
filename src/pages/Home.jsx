import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import BlogCard from '../components/BlogCard';
import { projectsData, skillsData, blogData } from '../data/portfolioData';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Scroll to hash on mount
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="section hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Nguyen Thi Tuyet Nhung</span>
            </h1>
            <p className="hero-subtitle">Data Analyst | ML Engineer | Business Intelligence</p>
            <p className="hero-description">
              I transform complex data into actionable insights using advanced analytics and machine learning.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm a passionate Data Analyst with expertise in transforming raw data into 
                strategic insights. I specialize in building predictive models, creating interactive 
                dashboards, and developing AI-powered solutions that drive business decisions.
              </p>
              <p>
                With a strong foundation in machine learning, business intelligence, and data 
                visualization, I help organizations unlock the full potential of their data through 
                analytical rigor and innovative approaches.
              </p>
              
              <h3>Skills</h3>
              <div className="skills-grid">
                {skillsData.map((skill, index) => (
                  <SkillCard 
                    key={index}
                    category={skill.category}
                    skills={skill.skills}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section blog-section">
        <div className="container">
          <h2 className="section-title">Blog</h2>
          <div className="blog-grid">
            {blogData.map(blog => (
              <BlogCard 
                key={blog.id}
                date={blog.date}
                title={blog.title}
                excerpt={blog.excerpt}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <h4>Email</h4>
                  <p>contact@example.com</p>
                </div>
                <div className="contact-item">
                  <h4>Location</h4>
                  <p>City, Country</p>
                </div>
                <div className="contact-item">
                  <h4>Social</h4>
                  <div className="social-links">
                    <a href="#" className="social-link">GitHub</a>
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form" id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
