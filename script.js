// Enable scroll-reveal animations for elements with class "reveal".
// Adds "in" class when the element enters the viewport.

(function () {
  const supportsIO = typeof IntersectionObserver !== 'undefined';

  function init() {
    const items = Array.from(document.querySelectorAll('.reveal'));
    if (!items.length) return;

    if (!supportsIO) {
      // Fallback: reveal everything immediately.
      items.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        }
      },
      {
        root: null,
        threshold: 0.15,
      }
    );

    items.forEach((el) => io.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

