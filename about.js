document.getElementById('year').textContent = new Date().getFullYear();

// Mark sections/cards for reveal-on-scroll
document.querySelectorAll('.pillars, .card, .quote-bar, .hero-copy').forEach(el => {
  el.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.75 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Animate skill bar fills when the skills card scrolls into view
const fillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.fill').forEach((bar, i) => {
        setTimeout(() => bar.classList.add('in-view'), i * 120);
      });
      fillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsCard = document.querySelector('.skills-card');
if (skillsCard) fillObserver.observe(skillsCard);
