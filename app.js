// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
  // Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

function reveal(){
  var reveals = document.querySelectorAll(".icon");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("inner").style.opacity = "0.2";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("inner").style.opacity = "2";
}