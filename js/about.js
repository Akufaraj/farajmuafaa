document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Education Journey ---------- */
  const eduGrid = document.getElementById('aboutEduJourney');

  function renderEducation(lang) {
    if (!eduGrid) return;
    eduGrid.innerHTML = SITE_DATA.education.map(e => `
      <div class="edu-card">
        <div class="edu-card-head">
          <div class="edu-logo"><i class="${e.logo}"></i></div>
          <span class="edu-year">${e.year}</span>
        </div>
        <h4>${e.title[lang]}</h4>
        <span class="edu-institution">${e.institution[lang]}</span>
        <p>${e.desc[lang]}</p>
      </div>
    `).join('');
  }

  /* ---------- Skills with visible percentage bars ---------- */
  const rowContainers = {
    languages: document.getElementById('skillRowsLanguages'),
    tools: document.getElementById('skillRowsTools'),
    services: document.getElementById('skillRowsServices')
  };

  function renderSkillRows() {
    Object.entries(rowContainers).forEach(([key, container]) => {
      if (!container) return;
      const items = SITE_DATA.skills[key];

      container.innerHTML = items.map(item => `
        <div class="skill-row-item">
          <div class="skill-row-label">
            <span>${item.name}</span>
            <strong>${item.percentage}%</strong>
          </div>
          <div class="skill-row-bar">
            <div class="skill-row-fill" data-value="${item.percentage}"></div>
          </div>
        </div>
      `).join('');
    });

    animateVisibleBars();
  }

  function animateVisibleBars() {
    requestAnimationFrame(() => {
      const windowHeight = window.innerHeight;
      document.querySelectorAll('.skill-row-fill').forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60 && !el.style.width) {
          el.style.width = (el.dataset.value || '0') + '%';
        }
      });
    });
  }

  window.addEventListener('scroll', animateVisibleBars);

  /* ---------- Tab switcher ---------- */
  const tabButtons = document.querySelectorAll('.skills-tab-btn');
  const panels = document.querySelectorAll('.skills-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`.skills-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
      animateVisibleBars();
    });
  });

  function renderAll() {
    const lang = getLang();
    renderEducation(lang);
    renderSkillRows();
  }

  renderAll();
  document.addEventListener('langchange', e => renderAll());

  // Deep-link support: about.html#skills scrolls and focuses the skills section
  if (window.location.hash === '#skills') {
    setTimeout(() => {
      const el = document.getElementById('skills');
      if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
    }, 100);
  }
});