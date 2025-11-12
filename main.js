// Suaviza a rolagem da navbar ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Efeito de navbar ao rolar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    navbar.style.padding = '15px 0';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.7)';
    navbar.style.padding = '20px 0';
  }
});