// ---- INDEX ----

// Navbar shadow on scroll

//store ref
const navbar = document.querySelector('.navbar');
 
//when scroll down add shadow
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('shadow-sm');
  } else {
    navbar.classList.remove('shadow-sm');
  }
});

// ---- WORK ----
//store ref to all the cards
const workCards = document.querySelectorAll('#work-cards .card');

for (const card of workCards) {
  //if clicked show hidden
  card.addEventListener('click', () => {
    //find card details and hint for the specific card that was clicked
    const details = card.querySelector('.card-details');
    const hint = card.querySelector('.click-hint');
    //is it hidden?
    if (details.style.display === 'none') {
      //show stuff
      details.style.display = 'block';
      hint.style.display = 'none';
    } else {
      //close and bring back hint
      details.style.display = 'none';
      hint.style.display = 'block';
    }
  });
}

