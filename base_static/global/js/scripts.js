// Menu mobile toggle
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mainNav.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      menuToggle.classList.remove("active");
      mainNav.classList.remove("active");
    }
  });
});
