let toggleDarkMode = () => {
    let nvbr = document.getElementById("navbar");
    let nvbritm = document.querySelector(".navbar__logo");
    let links = document.querySelectorAll(".navbar__list a");
    let mobileMenu = document.getElementById("mobileMenu");
    let mobileLinks = document.querySelectorAll(".mobile-menu a");
    let bdy = document.querySelector("body");
    let moon = document.getElementById("moonicon");
    let sun = document.getElementById("sunicon");
    let darkfoot = document.getElementById("darkfoot");
    let whitefoot = document.getElementById("whitefoot");

    if (nvbr.style.backgroundColor === "white") {
        // Desktop mode dark theme
        nvbr.style.backgroundColor = "black";
        nvbritm.style.color = "white";
        darkfoot.style.display = "block";
        whitefoot.style.display = "none";
        bdy.style.backgroundColor = "#0f0f0f";
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }
        mobileMenu.style.backgroundColor = "black";
        for (let i = 0; i < mobileLinks.length; i++) {
            mobileLinks[i].style.color = "white";
        }
        nvbritm.style.textAlign = "center";

        // Show moon icon and hide sun icon
        moon.style.display = "none";
        sun.style.display = "block";
    } else {
        // Desktop mode light theme
        nvbr.style.backgroundColor = "white";
        bdy.style.backgroundColor = "white";
        nvbritm.style.color = "black";
        darkfoot.style.display = "none";
        whitefoot.style.display = "block";
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "black";
        }
        mobileMenu.style.backgroundColor = "white";
        for (let i = 0; i < mobileLinks.length; i++) {
            mobileLinks[i].style.color = "black";
        }
        nvbritm.style.textAlign = "center";

        // Show sun icon and hide moon icon
        moon.style.display = "block";
        sun.style.display = "none";
    }
}

let sun = document.getElementById("sunicon");
sun.addEventListener("click", toggleDarkMode);
let moon = document.getElementById("moonicon");
moon.addEventListener("click", toggleDarkMode);
