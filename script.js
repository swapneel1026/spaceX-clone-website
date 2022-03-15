let hamburgerOption = document.getElementsByClassName("hamburger-option");
let ulHamburgerOption = document.getElementsByClassName("ul-hamburger-option");

function openOptionBox() {
  if (hamburgerOption[0].style.width !== "25vw") {
    hamburgerOption[0].style.width = "25vw";
    ulHamburgerOption[0].style.visibility = "inherit";
    ulHamburgerOption[0].style.opacity = "1";
    ulHamburgerOption[0].style.transition = " all 1s";
    hamburgerOption[0].style.transition = " all 1s";
  }
}
function closeOptionBox() {
  if (hamburgerOption[0].style.width !== "") {
    hamburgerOption[0].style.width = "0vw";
    ulHamburgerOption[0].style.visibility = "hidden";
    ulHamburgerOption[0].style.opacity = "0";
  }
}
function myFunction() {
  if (window.scrollY > "0" && window.scrollY < "1924") {
    hamburgerOption[0].style.width = "0vw";
    ulHamburgerOption[0].style.visibility = "hidden";
    ulHamburgerOption[0].style.opacity = "0";
  }
}
