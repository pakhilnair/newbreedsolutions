// Toggle mobile menu
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// ---------------------------------------------------
// Infinite-loop for Recent Orders carousel
// ---------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.orders-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const count = slides.length;

  // 1) clone every original slide
  slides.forEach(slide => track.appendChild(slide.cloneNode(true)));

  // 2) measure one slide + gap to know how far to scroll
  const style = getComputedStyle(track);
  const gap = parseFloat(style.gap) || 0;
  const slideWidth = slides[0].getBoundingClientRect().width;
  const step = slideWidth + gap;

  let px = 0;
  let reqId = null;
  const speed = 0.5; // px per frame tweak to slow/faster

  function animate() {
    px += speed;
    // once we've scrolled one full set of originals, jump back
    if (px >= step * count) {
      px = 0;
    }
    track.style.transform = `translateX(-${px}px)`;
    reqId = requestAnimationFrame(animate);
  }

  // pause on hover
  carousel.addEventListener('mouseenter', () => {
    if (reqId) cancelAnimationFrame(reqId);
  });
  carousel.addEventListener('mouseleave', () => {
    animate();
  });

  // kick it off
  animate();
});