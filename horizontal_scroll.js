const scrollContainer = document.querySelector('.horizontal-scroll-container');
let isScrollEnabled = false;
let enterTimeout;

// Lorsque la souris entre dans le conteneur
scrollContainer.addEventListener('mouseenter', function () {
  // Démarre le compte à rebours pour activer le scroll horizontal
  enterTimeout = setTimeout(() => {
    isScrollEnabled = true;
    document.body.style.overflow = 'hidden'; // Bloque le scroll vertical seulement après 1s
  }, 1000); // 1000 ms = 1 seconde
});

// Lorsque la souris quitte le conteneur
scrollContainer.addEventListener('mouseleave', function () {
  clearTimeout(enterTimeout); // Annule si la souris part avant 1s
  isScrollEnabled = false;
  document.body.style.overflow = 'auto'; // Réactive le scroll vertical
});

// Défilement horizontal simulé après 1s dans la zone
scrollContainer.addEventListener('wheel', function (event) {
  if (isScrollEnabled && event.deltaY !== 0) {
    event.preventDefault(); // Interrompt le scroll vertical
    scrollContainer.scrollLeft += event.deltaY * 0.3; // Ralentit un peu le scroll horizontal
  }
});
