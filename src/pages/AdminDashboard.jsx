import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getProjects, deleteProject } from '../utils/projectStorage';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    if (localStorage.getItem('adminAuth') !== 'true') {
      navigate('/admin/login');
      return;
    }

    loadProjects();
  }, [navigate]);

  const loadProjects = () => {
    setProjects(getProjects());
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
      loadProjects();
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="container">
          <h1>Admin Dashboard</h1>
          <div className="admin-actions">
            <Link to="/" className="btn btn-secondary">View Site</Link>
            <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
          </div>
        </div>
      </div>

      <div className="admin-content container">
        <div className="dashboard-header">
          <h2>Manage Projects</h2>
          <Link to="/admin/project/new" className="btn btn-primary">+ Add New Project</Link>
        </div>

        <div className="projects-table">
          <table>
            <thead>
              <tr>
                <th>Icon</th>
                <th>Title</th>
                <th>Role</th>
                <th>Tools</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <td className="project-icon">{project.icon}</td>
                  <td>
                    <strong>{project.title}</strong>
                    <br />
                    <small>{project.subtitle}</small>
                  </td>
                  <td>{project.role}</td>
                  <td>{project.tools.join(', ')}</td>
                  <td className="action-buttons">
                    <Link 
                      to={`/admin/project/edit/${project.id}`}
                      className="btn-edit"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDelete(project.id)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {projects.length === 0 && (
            <div className="empty-state">
              <p>No projects yet. Click "Add New Project" to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
