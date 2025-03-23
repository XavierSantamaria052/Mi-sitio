document.addEventListener("DOMContentLoaded", () => {
    // Manejo del formulario
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Formulario enviado correctamente!");
        form.reset();
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#005bb5"; //Hover
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#d96d56"; // Original
        });
    });
});
    