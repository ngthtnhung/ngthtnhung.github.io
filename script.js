// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.textContent = open ? 'CLOSE' : 'MENU';
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Project filter (projects.html only)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const rows = document.querySelectorAll('.project-row');
  if (filterBtns.length && rows.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const role = btn.dataset.role;
        rows.forEach(row => {
          if (role === 'all' || row.dataset.roles.includes(role)) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }
});
