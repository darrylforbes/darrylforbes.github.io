function transformMenuButton(x) {
    x.classList.toggle("change");
}

function showMenuLinks() {
    document.getElementById("menu-links").classList.toggle("show");
}

function menuButtonClick(x) {
    transformMenuButton(x);
    showMenuLinks();
}

function menuButtonHover(x) {
     x.classList.toggle("color-swap");
}

// Close navigation menu if user clicks away
window.onclick = function(event) {
    if (!document.getElementById("menu-button").contains(event.target)) {
        document.getElementById("menu-links").classList.remove("show");
        document.getElementById("menu-button").classList.remove("change");
    }
}
