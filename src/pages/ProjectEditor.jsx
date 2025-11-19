import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getProjectById, saveProject } from '../utils/projectStorage';
import './ProjectEditor.css';

const ProjectEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';

  const [project, setProject] = useState({
    title: '',
    subtitle: '',
    role: '',
    tools: [],
    techniques: [],
    icon: '📊',
    brief: '',
    tags: [],
    overview: '',
    highlights: [],
    implementation: [],
    results: [],
    learnings: '',
    github: '#'
  });

  useEffect(() => {
    // Check authentication
    if (localStorage.getItem('adminAuth') !== 'true') {
      navigate('/admin/login');
      return;
    }

    if (!isNew) {
      const existingProject = getProjectById(parseInt(id));
      if (existingProject) {
        setProject(existingProject);
      }
    }
  }, [id, isNew, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate slug if new project
    if (isNew) {
      project.slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }

    saveProject(project);
    navigate('/admin/dashboard');
  };

  const handleArrayInput = (field, value) => {
    const array = value.split(',').map(item => item.trim()).filter(item => item);
    setProject({ ...project, [field]: array });
  };

  const addHighlight = () => {
    setProject({
      ...project,
      highlights: [...project.highlights, { title: '', description: '' }]
    });
  };

  const updateHighlight = (index, field, value) => {
    const newHighlights = [...project.highlights];
    newHighlights[index][field] = value;
    setProject({ ...project, highlights: newHighlights });
  };

  const removeHighlight = (index) => {
    const newHighlights = project.highlights.filter((_, i) => i !== index);
    setProject({ ...project, highlights: newHighlights });
  };

  const addImplementation = () => {
    setProject({
      ...project,
      implementation: [...project.implementation, { title: '', description: '', details: [] }]
    });
  };

  const updateImplementation = (index, field, value) => {
    const newImpl = [...project.implementation];
    if (field === 'details') {
      newImpl[index][field] = value.split('\n').filter(item => item.trim());
    } else {
      newImpl[index][field] = value;
    }
    setProject({ ...project, implementation: newImpl });
  };

  const removeImplementation = (index) => {
    const newImpl = project.implementation.filter((_, i) => i !== index);
    setProject({ ...project, implementation: newImpl });
  };

  const addResult = () => {
    setProject({
      ...project,
      results: [...project.results, { title: '', description: '' }]
    });
  };

  const updateResult = (index, field, value) => {
    const newResults = [...project.results];
    newResults[index][field] = value;
    setProject({ ...project, results: newResults });
  };

  const removeResult = (index) => {
    const newResults = project.results.filter((_, i) => i !== index);
    setProject({ ...project, results: newResults });
  };

  return (
    <div className="project-editor">
      <div className="editor-header">
        <div className="container">
          <h1>{isNew ? 'Add New Project' : 'Edit Project'}</h1>
          <Link to="/admin/dashboard" className="btn btn-secondary">← Back</Link>
        </div>
      </div>

      <div className="editor-content container">
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Basic Information</h2>
            
            <div className="form-group">
              <label>Project Title *</label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => setProject({ ...project, title: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Subtitle</label>
              <input
                type="text"
                value={project.subtitle}
                onChange={(e) => setProject({ ...project, subtitle: e.target.value })}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Icon (Emoji)</label>
                <input
                  type="text"
                  value={project.icon}
                  onChange={(e) => setProject({ ...project, icon: e.target.value })}
                  placeholder="📊"
                />
              </div>

              <div className="form-group">
                <label>Your Role</label>
                <input
                  type="text"
                  value={project.role}
                  onChange={(e) => setProject({ ...project, role: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Tools (comma-separated)</label>
              <input
                type="text"
                value={project.tools.join(', ')}
                onChange={(e) => handleArrayInput('tools', e.target.value)}
                placeholder="Power BI, Excel, Python"
              />
            </div>

            <div className="form-group">
              <label>Techniques (comma-separated)</label>
              <input
                type="text"
                value={project.techniques.join(', ')}
                onChange={(e) => handleArrayInput('techniques', e.target.value)}
                placeholder="Data Cleaning, EDA, Visualization"
              />
            </div>

            <div className="form-group">
              <label>Tags (comma-separated)</label>
              <input
                type="text"
                value={project.tags.join(', ')}
                onChange={(e) => handleArrayInput('tags', e.target.value)}
                placeholder="Power BI, Excel, EDA"
              />
            </div>

            <div className="form-group">
              <label>Brief Description</label>
              <textarea
                value={project.brief}
                onChange={(e) => setProject({ ...project, brief: e.target.value })}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Project Overview</label>
              <textarea
                value={project.overview}
                onChange={(e) => setProject({ ...project, overview: e.target.value })}
                rows="4"
              />
            </div>
          </div>

          <div className="form-section">
            <div className="section-header">
              <h2>Highlights</h2>
              <button type="button" onClick={addHighlight} className="btn-add">+ Add Highlight</button>
            </div>

            {project.highlights.map((highlight, index) => (
              <div key={index} className="array-item">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={highlight.title}
                    onChange={(e) => updateHighlight(index, 'title', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={highlight.description}
                    onChange={(e) => updateHighlight(index, 'description', e.target.value)}
                    rows="2"
                  />
                </div>
                <button type="button" onClick={() => removeHighlight(index)} className="btn-remove">Remove</button>
              </div>
            ))}
          </div>

          <div className="form-section">
            <div className="section-header">
              <h2>Technical Implementation</h2>
              <button type="button" onClick={addImplementation} className="btn-add">+ Add Section</button>
            </div>

            {project.implementation.map((impl, index) => (
              <div key={index} className="array-item">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={impl.title}
                    onChange={(e) => updateImplementation(index, 'title', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={impl.description}
                    onChange={(e) => updateImplementation(index, 'description', e.target.value)}
                    rows="2"
                  />
                </div>
                <div className="form-group">
                  <label>Details (one per line)</label>
                  <textarea
                    value={impl.details.join('\n')}
                    onChange={(e) => updateImplementation(index, 'details', e.target.value)}
                    rows="4"
                  />
                </div>
                <button type="button" onClick={() => removeImplementation(index)} className="btn-remove">Remove</button>
              </div>
            ))}
          </div>

          <div className="form-section">
            <div className="section-header">
              <h2>Results & Impact</h2>
              <button type="button" onClick={addResult} className="btn-add">+ Add Result</button>
            </div>

            {project.results.map((result, index) => (
              <div key={index} className="array-item">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={result.title}
                    onChange={(e) => updateResult(index, 'title', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={result.description}
                    onChange={(e) => updateResult(index, 'description', e.target.value)}
                    rows="2"
                  />
                </div>
                <button type="button" onClick={() => removeResult(index)} className="btn-remove">Remove</button>
              </div>
            ))}
          </div>

          <div className="form-section">
            <h2>Additional Information</h2>
            
            <div className="form-group">
              <label>Key Learnings</label>
              <textarea
                value={project.learnings}
                onChange={(e) => setProject({ ...project, learnings: e.target.value })}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>GitHub URL</label>
              <input
                type="text"
                value={project.github}
                onChange={(e) => setProject({ ...project, github: e.target.value })}
                placeholder="https://github.com/..."
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Save Project</button>
            <Link to="/admin/dashboard" className="btn btn-secondary">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectEditor;
