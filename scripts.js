window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'green';
  } else {
      navbar.style.backgroundColor = 'Black';
  }
});
