const toggle = document.querySelector("#pricing-type-switcher");
const cards = document.querySelectorAll(".cards");

toggle.addEventListener("change", () => {
  cards.forEach((card) => {
    card.classList.toggle("show-monthly");
  });
});
