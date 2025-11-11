const navbar = document.querySelector(".nav-hero");
const aboutSection = document.querySelector(".about-hero");
const infoSection = document.querySelector(".info-hero");

function handleNavbarColor() {
  const navbarHeight = navbar.offsetHeight;
  const scrollY = window.scrollY;
  const aboutTop = aboutSection.offsetTop - navbarHeight;
  const aboutBottom = aboutTop + aboutSection.offsetHeight;
  const infoTop = infoSection.offsetTop - navbarHeight;
  const infoBottom = infoTop + infoSection.offsetHeight;

  // Check if the current scroll position is within the about section
  if (scrollY >= aboutTop && scrollY < aboutBottom) {
    navbar.classList.add("about-active");
    navbar.classList.remove("info-active");
  }
  // Check if the current scroll position is within the info section
  else if (scrollY >= infoTop && scrollY < infoBottom) {
    navbar.classList.add("info-active");
    navbar.classList.remove("about-active");
  }
  // Otherwise, reset to default
  else {
    navbar.classList.remove("about-active", "info-active");
  }
}

window.addEventListener("scroll", handleNavbarColor);
window.addEventListener("load", handleNavbarColor);