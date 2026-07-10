  // mobile nav toggle
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  }));

  // typewriter effect
  const roles = ["I'm a Software Engineer.", "I'm a UI/UX Designer.", "I'm a Problem Solver."];
  const target = document.getElementById('typeTarget');
  let ri = 0, ci = 0, deleting = false;

  function tick(){
    const word = roles[ri];
    if(!deleting){
      ci++;
      target.textContent = word.slice(0, ci);
      if(ci === word.length){
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      ci--;
      target.textContent = word.slice(0, ci);
      if(ci === 0){
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // copy email
  const copyBtn = document.getElementById('copyBtn');
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('mullagamer3@gmail.com').then(() => {
      const original = copyBtn.textContent;
      copyBtn.textContent = 'Copied ✓';
      setTimeout(() => copyBtn.textContent = original, 1800);
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();