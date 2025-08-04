 // Mobile menu toggle functionality
    document.querySelector('.header__hamburger').addEventListener('click', function() {
      document.querySelector('.header__nav').classList.toggle('active');
      document.querySelector('.header__buttons').classList.toggle('active');
    });