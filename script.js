const animatedBlocks = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px',
  }
);

animatedBlocks.forEach((block) => fadeObserver.observe(block));

document.getElementById('year').textContent = new Date().getFullYear();
