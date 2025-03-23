const experienceButtons = document.querySelectorAll(".experience-button");

experienceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const experienceItem = button.parentElement;
        const details = experienceItem.querySelector(".experience-details");

        experienceItem.classList.toggle("active");

        // Alternar visibilidad
        if (experienceItem.classList.contains("active")) {
            details.style.maxHeight = details.scrollHeight + "px";
        } else {
            details.style.maxHeight = "0";
        }
    });
});