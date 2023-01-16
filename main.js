const navbarEl = document.querySelector(".navbar_list");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", toggleNavbarList);

function toggleNavbarList() {
  navbarEl.classList.toggle("active_navbar");
}
