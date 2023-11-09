function toggleDarkMode() {
    let nvbr = document.getElementById("navbar");
    let nvbritm = document.querySelector(".navbar__logo");
    let links = document.querySelectorAll(".navbar__list a");
    let mobileMenu = document.getElementById("mobileMenu");
    let mobileLinks = document.querySelectorAll(".mobile-menu a");
    if (nvbr.style.backgroundColor === "white") {
        nvbr.style.backgroundColor = "black";
        nvbritm.style.color = "white";
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }
        mobileMenu.style.backgroundColor = "black";
        for (let i = 0; i < mobileLinks.length; i++) {
            mobileLinks[i].style.color = "white";
        }
    } else {
        nvbr.style.backgroundColor = "white";
        nvbritm.style.color = "black";
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "black";
        }
        mobileMenu.style.backgroundColor = "white";
        for (let i = 0; i < mobileLinks.length; i++) {
            mobileLinks[i].style.color = "black";
        }
    }
}
let sun = document.getElementById("sunicon");
sun.addEventListener("click", toggleDarkMode);
