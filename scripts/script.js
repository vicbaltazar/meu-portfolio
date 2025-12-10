// Scroll suave ao clicar nos links do menu
const navLinks = document.querySelectorAll(".navbar-links a, .hero-buttons a");

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    const href = link.getAttribute("href");

    // só trata âncoras internas (#inicio, #sobre, etc.)
    if (href && href.startsWith("#")) {
      event.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Destacar link ativo conforme o scroll
const sections = document.querySelectorAll("main, section");

window.addEventListener("scroll", () => {
  let currentId = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom > 120) {
      currentId = section.id;
    }
  });

  document.querySelectorAll(".navbar-links a").forEach(link => {
    link.classList.remove("active-link");
    const href = link.getAttribute("href");
    if (href === `#${currentId}`) {
      link.classList.add("active-link");
    }
  });
});
