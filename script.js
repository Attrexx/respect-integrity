const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealItems.forEach((item) => observer.observe(item));

const hero = document.querySelector('.parallax');
let ticking = false;

function updateParallax() {
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY * 0.35}px`;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!hero) return;

  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});
