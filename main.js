// NAVBAR
fetch("navbar.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;

    const btn = document.querySelector(".menu-button");
    const menu = document.querySelector(".button-menu");
    const icon = document.querySelector(".menu-button i");

    btn.onclick = () => {
      menu.classList.toggle("open");
      icon.className = menu.classList.contains("open")
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    };
  });

// FOOTER
fetch("footer.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  });

// ANIMATION SCROLL
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

// FORMULAIRE (safe)
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("successMessage").textContent =
      "✅ Message envoyé !";

    form.reset();
  });
}