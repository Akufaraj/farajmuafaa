document.addEventListener('DOMContentLoaded', () => {

  const grid = document.getElementById('allProjectsGrid');
  if (!grid) return;

  function render(lang) {
    grid.innerHTML = SITE_DATA.projects.map(p => `
      <a href="project-detail.html?id=${p.id}" class="project-card">
        <span class="project-index">${p.index}</span>
        <div class="project-media"><img src="${p.image}" alt="${p.title[lang]}"></div>
        <h3>${p.title[lang]}</h3>
        <p>${p.summary[lang]}</p>
        <div class="skills">
          ${p.skills.map(s => `<span>${s}</span>`).join('')}
        </div>
        <div class="project-card-footer">
          <span class="view-detail">${I18N[lang]['section.projects.viewdetail']} <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </a>
    `).join('');

    // Re-run reveal check for newly injected content
    requestAnimationFrame(() => {
      const el = grid.closest('.reveal') || grid;
      el.classList.add('active-reveal');
    });
  }

  render(getLang());
  document.addEventListener('langchange', e => render(e.detail.lang));
});