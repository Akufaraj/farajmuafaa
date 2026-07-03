document.addEventListener('DOMContentLoaded', () => {

  const timeline = document.getElementById('experienceTimeline');
  if (!timeline) return;

  function render(lang) {
    timeline.innerHTML = SITE_DATA.experience.map(e => `
      <div class="timeline-item">
        <span class="timeline-dot"></span>
        <div class="timeline-card">
          <span class="timeline-period">${e.period[lang]}</span>
          <div class="timeline-head">
            <div>
              <h3>${e.title[lang]}</h3>
              <span class="timeline-org">${e.org[lang]}</span>
            </div>
          </div>
          <p class="timeline-desc">${e.description[lang]}</p>

          <div class="progress-block">
            <div class="progress-label">
              <span>${e.percentLabel[lang]}</span>
              <strong>${e.percentage}%</strong>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" data-value="${e.percentage}"></div>
            </div>
          </div>

          <ul class="timeline-details">
            ${e.details[lang].map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');

    // Trigger progress bar + reveal animation for freshly injected content
    requestAnimationFrame(() => {
      timeline.classList.add('active-reveal');
      const windowHeight = window.innerHeight;
      timeline.querySelectorAll('.progress-fill').forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 60) {
          el.style.width = (el.dataset.value || '0') + '%';
        }
      });
    });
  }

  render(getLang());
  document.addEventListener('langchange', e => render(e.detail.lang));

  // Animate any progress bars that scroll into view later
  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    timeline.querySelectorAll('.progress-fill').forEach(el => {
      if (el.style.width) return;
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 60) {
        el.style.width = (el.dataset.value || '0') + '%';
      }
    });
  });
});