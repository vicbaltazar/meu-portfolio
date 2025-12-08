// scripts/script.js

// Exemplo: scroll suave ao clicar no menu
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      event.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
