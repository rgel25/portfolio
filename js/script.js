const nav = document.getElementById("nav");
const navButtonExpand = document.getElementById("nav-expand");
const navMenu = document.getElementsByClassName("nav-menu")[0];
const navLinks = document.querySelectorAll(".nav-menu>ul>li");
const navLinksA = document.querySelectorAll(".nav-menu>ul>li>a");
const section = document.querySelectorAll("section");

window.onscroll = function () {
  if (window.scrollY >= window.innerHeight) {
    nav.classList.add("show-nav");
  } else {
    nav.classList.remove("show-nav");
    minimize();
  }
};

navButtonExpand.addEventListener("click", expand);

function expand() {
  navMenu.classList.toggle("show-nav-menu");
  navButtonExpand.classList.toggle("btn-clicked");
}

function minimize() {
  navMenu.classList.remove("show-nav-menu");
  navButtonExpand.classList.remove("btn-clicked");
}

navLinks.forEach((link) => {
  link.addEventListener("click", minimize);
});

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  navLinksA.forEach((link) => link.classList.remove("active"));
  navLinksA[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
