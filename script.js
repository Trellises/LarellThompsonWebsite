//Make the Wbsite More Smoother for transitions

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
//Slowly Loads letters in for "Latrell Thompson" - Asethtically Pleasing fr
const name = "Latrell Thompson";
const nameEl = document.querySelector('.hero-name');
nameEl.textContent = '';
let i = 0;
function typeWriter() {
  if (i < name.length) {
    nameEl.textContent += name.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }


}


typeWriter();
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const id = section.getAttribute('id');
    if (window.scrollY >= top) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`.nav-links a[href="#${id}"]`)?.classList.add('active');
    }
  });
});

// Follow Cursor, might take out
document.addEventListener('mousemove', (e) => {
  const dot = document.createElement('div');
  dot.style.cssText = `position:fixed;width:4px;height:4px;background:#c8b890;border-radius:50%;left:${e.clientX}px;top:${e.clientY}px;pointer-events:none;opacity:0.6;transition:opacity 0.5s;z-index:9999`;
  document.body.appendChild(dot);
  setTimeout(() => { dot.style.opacity = '0'; }, 100);
  setTimeout(() => dot.remove(), 600);
});

function animateCounter(el, target, duration) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = start.toFixed(1);
    }
  }, 16);
}

const gpaEl = document.querySelector('.meta-val');
if (gpaEl) animateCounter(gpaEl, 3.5, 1000);

let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 100) {
    nav.style.transform = 'translateY(-100%)';
    nav.style.transition = 'transform 0.3s ease';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  lastScroll = current;
});


const tags = document.querySelectorAll('.tag');
tags.forEach((tag, i) => {
  tag.style.opacity = '0';
  tag.style.transform = 'translateY(10px)';
  tag.style.transition = `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`;
  setTimeout(() => {
    tag.style.opacity = '1';
    tag.style.transform = 'translateY(0)';
  }, 500 + i * 50);
});