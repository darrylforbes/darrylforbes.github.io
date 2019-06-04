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

