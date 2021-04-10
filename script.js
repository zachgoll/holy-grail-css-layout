function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  const navEl = document.querySelector("nav");

  outerGrid.classList.toggle("outer-grid-expanded");
  navEl.classList.toggle("hide-nav");
}
