// Sélectionner les éléments du DOM
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

// Ajouter un écouteur d'événements sur le bouton hamburger
menuToggle.addEventListener('click', () => {
  // Ajouter ou supprimer la classe 'open' sur le menu et le bouton
  menu.classList.toggle('open');
  nav.classList.toggle('open');
});


function flipCard(button) {
  // Récupérer la carte parent
  const card = button.closest('.blog-card');
  
  // Ajouter ou retirer la classe "flipped" pour déclencher la rotation
  card.classList.toggle('flipped');
}
