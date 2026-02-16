const menuBtn = document.getElementById("toggleMobileMenu");
const mobileMenu = document.getElementById("mobileHeader");
const themeToggleDesktop = document.getElementById("themeToggleDesktop");
const themeToggleMobile = document.getElementById("themeToggleMobile");

/* Mobile Menu */

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

/* Light and Darkmode */

function toggleTheme() {
    document.body.classList.toggle("dark");
}

themeToggleDesktop.addEventListener("click", toggleTheme);
themeToggleMobile.addEventListener("click", toggleTheme);