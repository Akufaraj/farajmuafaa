document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Nav active-state + smooth scroll (in-page anchors only) ---------- */
  const navItems = document.querySelectorAll('.nav-list li');
  const sections = document.querySelectorAll('main section[id], body > section[id]');

  function clearActive() { navItems.forEach(li => li.classList.remove('active')); }

  navItems.forEach(li => {
    const link = li.querySelector('a');
    if (!link) return;
    const href = link.getAttribute('href') || '';

    if (href.startsWith('#')) {
      link.addEventListener('click', e => {
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
        clearActive();
        li.classList.add('active');
        const navList = document.getElementById('navList');
        if (navList) navList.classList.remove('mobile-open');
      });
    }
  });

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const revealEls = document.querySelectorAll('.reveal');
  const progressFills = document.querySelectorAll('.progress-fill, .skill-row-fill');
  const animatedProgress = new WeakSet();

  function onScroll() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        clearActive();
        const activeLi = document.querySelector(`.nav-list li[data-section="${section.id}"]`);
        if (activeLi) activeLi.classList.add('active');
      }
    });

    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 500);

    const windowHeight = window.innerHeight;

    revealEls.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 120) el.classList.add('active-reveal');
    });

    progressFills.forEach(el => {
      if (animatedProgress.has(el)) return;
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 60) {
        const target = el.dataset.value || '0';
        el.style.width = target + '%';
        animatedProgress.add(el);
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- Typing effect (home hero only) ---------- */
  const typingEl = document.getElementById('typing');
  if (typingEl) {
    const words = ['Mature User Experience.', 'Clean Interface.', 'Responsive Website.'];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
      const current = words[wordIndex % words.length];
      typingEl.textContent = current.substring(0, charIndex);

      let speed = isDeleting ? 45 : 90;

      if (!isDeleting && charIndex < current.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
        speed = 1100;
      }
      setTimeout(type, speed);
    }
    type();
  }

  /* ---------- Dark mode ---------- */
  const toggleBtn = document.getElementById('darkToggle');
  if (toggleBtn) {
    const toggleIcon = toggleBtn.querySelector('i');

    function applyDarkPreference(isDark) {
      document.body.classList.toggle('dark-mode', isDark);
      toggleIcon.classList.toggle('fa-moon', !isDark);
      toggleIcon.classList.toggle('fa-sun', isDark);
      localStorage.setItem('site-dark', isDark ? '1' : '0');
    }

    const saved = localStorage.getItem('site-dark');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyDarkPreference(saved !== null ? saved === '1' : prefersDark);

    toggleBtn.addEventListener('click', () => {
      applyDarkPreference(!document.body.classList.contains('dark-mode'));
    });
  }

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => navList.classList.toggle('mobile-open'));
  }

  /* ---------- Skills tab switcher (About page) ---------- */
  const tabButtons = document.querySelectorAll('.skills-tab-btn');
  const panels = document.querySelectorAll('.skills-panel');
  if (tabButtons.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.querySelector(`.skills-panel[data-panel="${btn.dataset.tab}"]`);
        if (panel) panel.classList.add('active');
        onScroll();
      });
    });
  }

  /* ---------- Contact form — submits to Formspree via fetch ---------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      const endpoint = form.getAttribute('action') || '';
      if (!endpoint || endpoint.includes('GANTI_DENGAN_ENDPOINT')) {
        status.textContent = "Form belum terhubung ke email. Lihat komentar di index.html untuk cara setup Formspree.";
        status.style.color = '#C77B4C';
        return;
      }

      const submitBtn = form.querySelector('.btn-send');
      const originalLabel = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Mengirim... <i class="fa-solid fa-spinner fa-spin"></i>';

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          status.textContent = "Terima kasih! Pesanmu berhasil terkirim, saya akan segera membalas.";
          status.style.color = '';
          form.reset();
        } else {
          status.textContent = "Maaf, ada masalah saat mengirim. Coba lagi atau hubungi lewat email/WhatsApp langsung.";
          status.style.color = '#C77B4C';
        }
      } catch (err) {
        status.textContent = "Maaf, ada masalah koneksi. Coba lagi atau hubungi lewat email/WhatsApp langsung.";
        status.style.color = '#C77B4C';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalLabel;
      }
    });
  }

  /* ---------- Deep-link scroll (e.g. about.html#skills) ---------- */
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      setTimeout(() => {
        window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
      }, 100);
    }
  }

});