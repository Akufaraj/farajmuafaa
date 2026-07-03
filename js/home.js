document.addEventListener('DOMContentLoaded', () => {

  const projectsPreview = document.getElementById('homeProjectsPreview');
  const projectsCount = document.getElementById('homeProjectsCount');
  const experienceGrid = document.getElementById('homeExperienceGrid');

  function renderProjectsPreview() {
    if (!projectsPreview) return;
    const items = SITE_DATA.projects.slice(0, 3);

    projectsPreview.innerHTML = items.map(p => `
      <img src="${p.image}" alt="${p.title[getLang()]}">
    `).join('');

    if (projectsCount) projectsCount.textContent = SITE_DATA.projects.length + '+';
  }

  function renderExperience(lang) {
    if (!experienceGrid) return;
    const items = SITE_DATA.experience.slice(0, 3);

    experienceGrid.innerHTML = items.map(e => `
      <div class="service-card">
        <i class="fa-solid fa-briefcase service-icon"></i>
        <h3>${e.title[lang]}</h3>
        <p>${e.org[lang]} · ${e.period[lang]}</p>
        <div class="progress-block" style="margin-top:16px;">
          <div class="progress-label">
            <span>${e.percentLabel[lang]}</span>
            <strong>${e.percentage}%</strong>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" data-value="${e.percentage}"></div>
          </div>
        </div>
      </div>
    `).join('');

    // Re-trigger progress animation for newly injected bars
    requestAnimationFrame(() => {
      document.querySelectorAll('#homeExperienceGrid .progress-fill').forEach(el => {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60) {
          el.style.width = (el.dataset.value || '0') + '%';
        }
      });
    });
  }

  function renderAll() {
    const lang = getLang();
    renderProjectsPreview();
    renderExperience(lang);
  }

  renderAll();
  document.addEventListener('langchange', renderAll);
});