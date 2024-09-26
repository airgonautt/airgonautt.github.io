document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const navbarName = document.getElementById('navbar-name'); 
  const navbarPhoto = document.getElementById('navbar-photo');
  const introSection = document.getElementById('intro'); 
  navbarName.textContent = '';
  navbarPhoto.hidden = true;
  navbar.hidden = true;

  // reveals contents after scrolling past intro section
  window.addEventListener('scroll', function() {
      const introBottom = introSection.getBoundingClientRect().bottom; 

      if (introBottom <= 0) {
          navbarName.textContent = 'Andres Ovalles';
          navbarPhoto.hidden = false;
          navbar.hidden = false;

          // Add bounce class
          navbarName.classList.add('bounce');
          navbarPhoto.classList.add('bounce');
      } else {
          navbarName.textContent = ''; 
          navbarPhoto.hidden = true;
          navbar.hidden = true;

          // Remove bounce class for re-triggering the animation
          navbarName.classList.remove('bounce');
          navbarPhoto.classList.remove('bounce');
      }
  });
});
