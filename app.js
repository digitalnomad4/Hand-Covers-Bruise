const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("active");
});
$(document).ready(function() {
  $("#resizable").resizable({
    containment: [0, 0, 300, 200]
  });
});

