const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('mobile-open', !open);
});

document.querySelectorAll('.desktop-nav a').forEach(link => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('mobile-open');
  });
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) header?.classList.add('scrolled');
  else header?.classList.remove('scrolled');
}, { passive: true });

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.addEventListener('click', () => {
    const message = encodeURIComponent('Hi FIA, I’d like to ask about the coffeehouse and florals.');
    link.href = `https://wa.me/447510007001?text=${message}`;
  });
});
