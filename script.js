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

// ---- WORK ----
const workCards = document.querySelectorAll('#work-cards .card');

for (const card of workCards) {
  card.addEventListener('click', () => {
    const details = card.querySelector('.card-details');
    const hint = card.querySelector('.click-hint');
    if (details.style.display === 'none') {
      details.style.display = 'block';
      hint.style.display = 'none';
    } else {
      details.style.display = 'none';
      hint.style.display = 'block';
    }
  });
}

