// Simple nav toggle for mobile
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');
const open = nav.classList.toggle('open');
btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});


// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();