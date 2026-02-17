const nav = document.getElementById("nav");
const toggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".site-header");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const handleHeaderState = () => {
  if (!header) return;
  if (window.scrollY > 12) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

handleHeaderState();
window.addEventListener("scroll", handleHeaderState);
