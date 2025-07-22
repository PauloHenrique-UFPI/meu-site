const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-links a")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});

function copiarTexto() {
  const texto = document.getElementById("texto").innerText;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado!");
    })
    .catch((err) => {
      console.error("Erro ao copiar: ", err);
    });
}
