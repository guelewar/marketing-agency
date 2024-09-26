// Sélection des éléments
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

// Événement pour ouvrir/fermer le menu
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
