// Reset form after submission
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

// Scroll to top button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollToTop").style.display = "flex";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
}

document.getElementById("scrollToTop").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Open and close menu
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const sideMenu = document.querySelector("#sideMenu");

openMenu.addEventListener("click", () => {
    openMenu.style.display = 'none';
    closeMenu.style.display = "block";
    sideMenu.style.right = "0";
})

function hidemenu() {
    sideMenu.style.right = "-70%"
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
}

closeMenu.addEventListener("click", hidemenu);

document.addEventListener("click", (event) => {
    if (window.innerWidth < 685 && !sideMenu.contains(event.target) && event.target != openMenu) {
        hidemenu();
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 685) {
        openMenu.style.display = 'none';
    } else { openMenu.style.display = 'block' }
});

window.addEventListener("scroll", (event) => {
    if (window.innerWidth < 685) {
        hidemenu();
    }
})

// Fonction  pour réinitialier l'URL de la page
function resetURL() {
    const currentURL = window.location.href;
    const currentPath = window.location.pathname;
    window.history.pushState({}, "", currentPath);
}
// Ecouter les clics sur #scrollToTop pour appliquer la fonction resetURL()
document.querySelector("#scrollToTop").addEventListener("click", resetURL)

// AOS INITIALIZATION
AOS.init();