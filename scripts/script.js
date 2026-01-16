// BOTÃO HAMBÚRGUER
const navbarInner = document.querySelector(".navbar-inner");
const toggleBtn = document.querySelector(".navbar-toggle");
const navLinks = document.querySelectorAll(".navbar-links a, .hero-buttons a");

if (toggleBtn && navbarInner) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navbarInner.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Fecha o menu ao clicar em um link + scroll suave
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    const href = link.getAttribute("href");

    if (href && href.startsWith("#")) {
      event.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (navbarInner && toggleBtn && navbarInner.classList.contains("is-open")) {
      navbarInner.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
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
