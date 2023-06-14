let mySlider = document.querySelector(".slider"),
    upperBar = document.querySelector(".upper-bar"),
    navBar = document.querySelector(".navbar");
    imgs = document.querySelectorAll(".carousel-item"),
    links = Array.from(document.querySelectorAll(".work ul li")),
    boxes = Array.from(document.querySelectorAll(".work .row .box"));

window.onload = function () {
    mySlider.style.height = `${window.innerHeight - (upperBar.clientHeight + navBar.clientHeight)}px`;
    imgs.forEach(img => {
        img.style.height = `${window.innerHeight - (upperBar.clientHeight + navBar.clientHeight)}px`;
    });
}

function showAndHide() { 
    links.forEach((link) => {
        link.onclick = function() {
            // Add and Remove Active Class Depends on Clicking
            links.forEach((li) =>li.classList.remove("active"))
            link.classList.add("active")
            
            // Hide And Show Boxes Depends on Data-section
            boxes.forEach((box) => { !box.classList.contains(link.getAttribute("data-section")) ? box.style.opacity = "0.2" : box.style.opacity = "1"  })  
        }
    })
}
showAndHide()  