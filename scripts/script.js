function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expended");
  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
