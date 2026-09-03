// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Scroll reveal + skill bars
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    entry.target.querySelectorAll('.bar i').forEach(bar => {
      bar.style.width = bar.dataset.w;
    });
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Nav shrink on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 60 ? '12px 6vw' : '18px 6vw';
}, { passive: true });
