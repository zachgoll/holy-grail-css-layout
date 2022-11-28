function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}

function displayNav() {
  const nav = document.querySelector("nav");
  const outerGrid = document.querySelector(".outer-grid");
  if (window.innerWidth > 575) {
    outerGrid.classList.add("outer-grid-expanded");
    nav.classList.remove("hide-nav");
  }
}

window.addEventListener("load", displayNav);
window.addEventListener("resize", displayNav);
