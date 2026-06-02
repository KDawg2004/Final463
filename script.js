// ---- INDEX ----

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
 
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('shadow-sm');
  } else {
    navbar.classList.remove('shadow-sm');
  }
});