document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('detailRoot');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = SITE_DATA.projects.find(p => p.id === id) || SITE_DATA.projects[0];

  // Find neighbors for prev/next nav
  const idx = SITE_DATA.projects.findIndex(p => p.id === project.id);
  const prev = SITE_DATA.projects[(idx - 1 + SITE_DATA.projects.length) % SITE_DATA.projects.length];
  const next = SITE_DATA.projects[(idx + 1) % SITE_DATA.projects.length];

  function render(lang) {
    document.getElementById('pageTitle').textContent = `${project.title[lang]} — Faraj Muafa`;

    const demoBlock = project.demoUrl
      ? `<a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn-primary detail-demo-btn">
           <i class="fa-solid fa-arrow-up-right-from-square"></i> ${I18N[lang]['detail.demo']}
         </a>`
      : `<div class="detail-unavailable">${I18N[lang]['detail.notavailable']}</div>`;

    root.innerHTML = `
      <div class="detail-hero">
        <a href="projects.html" class="breadcrumb"><i class="fa-solid fa-arrow-left"></i> ${I18N[lang]['detail.back']}</a>
        <span class="detail-index">${project.index}</span>
        <h1>${project.title[lang]}</h1>
        <p class="detail-summary">${project.summary[lang]}</p>
      </div>

      <div class="detail-hero">
        <div class="detail-media">
          <img src="${project.image}" alt="${project.title[lang]}">
        </div>
      </div>

      <div class="detail-body">
        <div class="detail-main">
          <h2>${I18N[lang]['detail.overview']}</h2>
          <p>${project.overview[lang]}</p>

          <h2>${I18N[lang]['detail.role']}</h2>
          <p>${project.role[lang]}</p>

          <h2>${I18N[lang]['detail.challenges']}</h2>
          <ul class="detail-list">
            ${project.challenges[lang].map(c => `<li><i class="fa-solid fa-circle-check"></i> ${c}</li>`).join('')}
          </ul>
        </div>

        <aside class="detail-side">
          <h3>${I18N[lang]['detail.stack']}</h3>
          <div class="skills">
            ${project.skills.map(s => `<span>${s}</span>`).join('')}
          </div>
          ${demoBlock}
        </aside>
      </div>

      <div class="detail-nav">
        <div class="btn-row">
          <a href="project-detail.html?id=${prev.id}" class="btn btn-outline">
            <i class="fa-solid fa-arrow-left"></i> ${prev.title[lang]}
          </a>
          <a href="project-detail.html?id=${next.id}" class="btn btn-outline">
            ${next.title[lang]} <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
  }

  render(getLang());
  document.addEventListener('langchange', e => render(e.detail.lang));
});