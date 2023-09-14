window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");

function myFunction() {
  if (window.pageYOffset>= 150) {
    navbar.style.background="white";
    navbar.style.color="black";
    logo.src=("assets/images/logo-white.png");
  } else {
    navbar.style.background="transparent";
    navbar.style.color="white";
    logo.src=("assets/images/logo.png");
  }
}

AOS.init();