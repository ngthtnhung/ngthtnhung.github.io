import { projectsData as initialProjects } from '../data/portfolioData';

const STORAGE_KEY = 'portfolio_projects';

// Initialize storage with default data if empty
export const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjects));
  }
};

// Get all projects
export const getProjects = () => {
  initializeStorage();
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Get single project by ID
export const getProjectById = (id) => {
  const projects = getProjects();
  return projects.find(p => p.id === id);
};

// Get project by slug
export const getProjectBySlug = (slug) => {
  const projects = getProjects();
  return projects.find(p => p.slug === slug);
};

// Save project (add or update)
export const saveProject = (project) => {
  const projects = getProjects();
  
  if (project.id) {
    // Update existing
    const index = projects.findIndex(p => p.id === project.id);
    if (index !== -1) {
      projects[index] = project;
    }
  } else {
    // Add new
    project.id = Math.max(...projects.map(p => p.id), 0) + 1;
    projects.push(project);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  return project;
};

// Delete project
export const deleteProject = (id) => {
  const projects = getProjects();
  const filtered = projects.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

// Reset to default data
export const resetToDefault = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjects));
};
