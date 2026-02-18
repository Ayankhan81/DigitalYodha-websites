// Fade-in Animation on Load

window.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 200);
    });
});
// No special JS needed for this layout
console.log("Page Loaded Successfully");

