/* Mobile Menu */

const menuBtn = document.getElementById("toggleMobileMenu");
const mobileMenu = document.getElementById("mobileHeader");
const menuBtnAbout = document.getElementById("mobileMenuBtnAbout");
const menuBtnWork = document.getElementById("mobileMenuBtnWork");
const menuBtnContact = document.getElementById("mobileMenuBtnContact");

/*  themeToggle */
const themeToggleDesktop = document.getElementById("themeToggleDesktop");
const themeToggleMobile = document.getElementById("themeToggleMobile");

/* Mobile Menu */

function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMobileMenu);
menuBtnAbout.addEventListener("click", toggleMobileMenu);
menuBtnWork.addEventListener("click", toggleMobileMenu);
menuBtnContact.addEventListener("click", toggleMobileMenu);

/* Light and Darkmode */

function toggleTheme() {
    document.body.classList.toggle("dark");
}

themeToggleDesktop.addEventListener("click", toggleTheme);
themeToggleMobile.addEventListener("click", toggleTheme);