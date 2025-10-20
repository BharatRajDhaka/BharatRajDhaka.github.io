(function(){
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  menuBtn?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  // Fallback for hero portrait: use GitHub avatar if local image fails
  const heroImg = document.querySelector('.hero-photo');
  if (heroImg) {
    heroImg.addEventListener('error', () => {
      heroImg.src = 'https://avatars.githubusercontent.com/u/201881990?v=4';
    });
  }

  // Reveal on scroll
  const items = document.querySelectorAll('.reveal');
  const onIntersect = (entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  };
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver(onIntersect, {threshold: 0.12}) : null;
  items.forEach(i => io ? io.observe(i) : i.classList.add('in'));

  // Projects tabs (Ongoing/Completed)
  const tabs = document.querySelectorAll('.projects-tabs [role="tab"]');
  const panels = {
    'tab-ongoing': document.getElementById('panel-ongoing'),
    'tab-completed': document.getElementById('panel-completed')
  };
  function activateTab(tabId, setHash = true){
    tabs.forEach(btn => {
      const isActive = btn.id === tabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
      panels[btn.id]?.toggleAttribute('hidden', !isActive);
    });
    if (setHash) {
      if (tabId === 'tab-ongoing') location.hash = 'ongoing-projects';
      if (tabId === 'tab-completed') location.hash = 'completed-projects';
    }
  }
  tabs.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.id));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const list = Array.from(tabs);
        const i = list.indexOf(btn);
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const next = list[(i + dir + list.length) % list.length];
        next.focus();
        activateTab(next.id);
      }
    });
  });
  const hash = location.hash.replace('#','');
  if (hash === 'ongoing-projects') activateTab('tab-ongoing', false);
  else activateTab('tab-completed', false);

  // Lightbox for Certifications
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.querySelector('.lightbox-close');
  let lastFocus = null;

  function openLightbox(src, caption){
    if (!lightbox) return;
    lastFocus = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Certificate';
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    closeBtn?.focus();
  }
  function closeLightbox(){
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.removeAttribute('src');
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('.cert-link');
    if (a){
      e.preventDefault(); // keep basic link fallback if JS off
      const src = a.getAttribute('href');
      const caption = a.getAttribute('data-caption') || a.textContent.trim();
      openLightbox(src, caption);
    }
    if (e.target === lightbox) closeLightbox(); // click overlay to close
    if (e.target === closeBtn) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('open')) closeLightbox();
  });
})();