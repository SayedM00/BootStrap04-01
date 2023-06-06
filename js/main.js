let mySlider = document.querySelector(".slider"),
    upperBar = document.querySelector(".upper-bar"),
    navBar = document.querySelector(".navbar");

window.onload = function () {
    mySlider.style.height = `${window.innerHeight - (upperBar.clientHeight + navBar.clientHeight)}px`;
}
    