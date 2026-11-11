// Loaded blocking in <head> so the .js class is set before the first paint.
document.documentElement.classList.add('js');

// Every load starts at the top: the browser must not restore the old scroll
// position, and a #section left in the address bar must not jump down.
history.scrollRestoration = 'manual';
if (location.hash) history.replaceState(null, '', location.pathname + location.search);
addEventListener('load', () => scrollTo({ top: 0, behavior: 'instant' }));

addEventListener('DOMContentLoaded', () => {
  // Loader rings: stand each letter around a circle sized to fit them all.
  document.querySelectorAll('.loader .ring').forEach((ring) => {
    const letters = [...ring.children];
    const step = parseFloat(getComputedStyle(ring).getPropertyValue('--step'));
    const radius = (letters.length * step) / (2 * Math.PI);
    letters.forEach((el, i) => {
      el.style.transform = `rotateY(${(i * 360) / letters.length}deg) translateZ(${radius}em)`;
    });
  });

  // Scroll reveal: .in while an element is on screen, removed when it leaves,
  // so it plays again every time. .above marks elements that left through the top.
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        e.target.classList.toggle('in', e.isIntersecting);
        e.target.classList.toggle('above', !e.isIntersecting && e.boundingClientRect.top < 0);
      }),
    { rootMargin: '0px 0px -10% 0px' },
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Phone menu: close it when a link is tapped. Closing puts focus back on the
  // Menu button, which would cancel the jump, so the jump happens after closing.
  const menu = document.getElementById('menu');
  menu?.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', (e) => {
      menu.hidePopover();
      const target = a.hash && document.querySelector(a.hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView();
        history.pushState(null, '', a.hash);
      }
    }),
  );

  // Services titles: light up the selected column (the first while none is
  // selected), scaled by how much of the row is on screen.
  const cols = document.querySelector('.cols');
  if (cols) {
    const items = [...cols.children];
    let active = null;
    let seen = 0;
    const paint = () =>
      items.forEach((c, i) => {
        const on = active ? c === active : i === 0;
        c.style.setProperty('--fill', on ? Math.min(1, seen / 0.6).toFixed(3) : '0');
      });
    const pick = (c) => () => {
      active = c;
      paint();
    };
    items.forEach((c) => {
      c.addEventListener('pointerenter', pick(c));
      c.addEventListener('focusin', pick(c));
    });
    cols.addEventListener('pointerleave', () => {
      if (!cols.contains(document.activeElement)) pick(null)();
    });
    cols.addEventListener('focusout', (e) => {
      if (!cols.contains(e.relatedTarget) && !cols.matches(':hover')) pick(null)();
    });
    new IntersectionObserver(
      ([e]) => {
        seen = e.intersectionRatio;
        paint();
      },
      { threshold: Array.from({ length: 51 }, (_, i) => i / 50) },
    ).observe(cols);
  }

  // Live local time for elements like <span data-time="Asia/Dhaka">.
  const tick = () =>
    document.querySelectorAll('[data-time]').forEach((el) => {
      el.textContent = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: el.dataset.time,
      }).format(new Date());
    });
  tick();
  setInterval(tick, 30000);
});
