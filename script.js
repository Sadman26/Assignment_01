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
    let bag = document.getElementById("bag");
    let titleintro = document.getElementById("titleintro");
    let paraintro = document.getElementById("paraintro");

    if (nvbr.style.backgroundColor === "white") {
        // Desktop mode dark theme
        nvbr.style.backgroundColor = "black";
        nvbritm.style.color = "white";
        bag.style.color = "white";
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
        titleintro.style.color = "white";
        paraintro.style.color = "white";
        moon.style.display = "none";
        sun.style.display = "block";
    } else {
        // Desktop mode light theme
        nvbr.style.backgroundColor = "white";
        bdy.style.backgroundColor = "white";
        nvbritm.style.color = "black";
        bag.style.color = "black";
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
        titleintro.style.color = "black";
        paraintro.style.color = "black";
        moon.style.display = "block";
        sun.style.display = "none";
    }
}

let sun = document.getElementById("sunicon");
sun.addEventListener("click", toggleDarkMode);
let moon = document.getElementById("moonicon");
moon.addEventListener("click", toggleDarkMode);


//random username and pic
function fetchUserData(index) {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userName = `${user.name.first} ${user.name.last}`;
            const userImage = user.picture.large;

            // Update the HTML elements with the fetched data for the specific card
            document.getElementById(`username${index}`).textContent = userName;
            document.getElementById(`userimg${index}`).src = userImage;
        })
        .catch(error => console.error('Error:', error));
}

// Fetch data for three different users and update the corresponding cards
fetchUserData(1);
fetchUserData(2);
fetchUserData(3);


//handing the badge ⚡⚡
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let badge = document.getElementById("badge");
btn1.addEventListener("click", function () {
    if (badge.style.display === "block") {
        alert("One Purchase Running..");
    }
    else {
        badge.style.display = "block";
    }
});
btn2.addEventListener("click", function () {
    if (badge.style.display === "block") {
        alert("One Purchase Running..");
    }
    else {

        badge.style.display = "block";
    }
});
btn3.addEventListener("click", function () {
    alert("Sorry Stock Out 🥹🥹");
});
