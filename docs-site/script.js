(() => {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');
  const sideLinks = [...document.querySelectorAll('#sideNav a')];
  const tocLinks = [...document.querySelectorAll('#tocNav a')];
  const sections = [...document.querySelectorAll('.doc-section')];
  const crumb = document.getElementById('crumb');

  menuToggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
  });

  [...sideLinks, ...tocLinks].forEach(link => {
    link.addEventListener('click', () => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      const label = (link.textContent || '').replace(/^\d+\s*/, '').trim();
      crumb.textContent = label || target.querySelector('h1,h2')?.textContent || 'Dokumentasi';
      sidebar.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.parentElement.querySelector('code');
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.innerText);
        button.textContent = 'Tersalin ✓';
      } catch {
        button.textContent = 'Salin manual';
      }
      window.setTimeout(() => { button.textContent = 'Salin'; }, 1600);
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      [...sideLinks, ...tocLinks].forEach(link => {
        const active = link.getAttribute('href') === '#' + id;
        link.classList.toggle('active', active);
      });
      const activeSection = sections.find(section => section.id === id);
      const heading = activeSection?.querySelector('h1,h2');
      if (heading) crumb.textContent = heading.textContent;
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
})();