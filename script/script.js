// Ativando o js
function ativoJs() {
  const body = document.querySelector("body");
  body.classList.add("js");
}
ativoJs();

// BTN MOBILE
function initMenuMobile() {
  const btnMobile = document.getElementById("btn-mobile");
  const nav = document.getElementById("nav");
  const Linksinternos = document.querySelectorAll('[href^="#"]');

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefaut();
    nav.classList.toggle("active");
    event.currentTarget.setAttribute("aria-expanded", "true");
  }

  function clickLink() {
    nav.classList.remove("active");
  }

  Linksinternos.forEach((item) => {
    item.addEventListener("click", clickLink);
  });

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
// End
initMenuMobile();

// Accordion List

function initiAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion h3");
  const ativoClass = "ativo";
  accordionList[0].classList.add(ativoClass);
  accordionList[0].nextElementSibling.classList.add(ativoClass);
  if (accordionList.length) {
    function activeAccordion(event) {
      this.classList.toggle(ativoClass);
      const itemClicado = event.target;
      itemClicado.nextElementSibling.classList.toggle(ativoClass);
    }

    accordionList.forEach((item) =>
      item.addEventListener("click", activeAccordion)
    );
  }
}
initiAccordion();
