function toggleMobileMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    let nvbr = document.getElementById("navbar");
    let mblitm = document.getElementsByClassName("navbar__item");
    let logo = document.querySelector(".navbar__logo");

    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        nvbr.style.boxShadow = "none"; // Remove box shadow
        mblitm.style.padding = "0"; // Reset padding
        logo.style.textAlign = "left"; // Align the logo to the left
    } else {
        mobileMenu.style.display = "block";
        nvbr.style.boxShadow = "0 0 0 1000px rgba(0, 0, 0, 0.5)";
        mblitm.style.padding = "15px 10px";
        logo.style.textAlign = "center"; // Center align the logo
    }
}
