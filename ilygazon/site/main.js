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

  // Contact

  document.querySelector(".contact-form").addEventListener("submit", function() {
  document.getElementById("successMessage").textContent =
    "✅ Votre message a été envoyé !";
});