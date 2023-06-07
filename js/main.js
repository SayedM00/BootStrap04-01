let mySlider = document.querySelector(".slider"),
    upperBar = document.querySelector(".upper-bar"),
    navBar = document.querySelector(".navbar");
    imgs = document.querySelectorAll(".carousel-item");

window.onload = function () {
    mySlider.style.height = `${window.innerHeight - (upperBar.clientHeight + navBar.clientHeight)}px`;
    imgs.forEach(img => {
        img.style.height = `${window.innerHeight - (upperBar.clientHeight + navBar.clientHeight)}px`;
    });
}
    