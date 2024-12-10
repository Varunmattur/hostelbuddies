document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section div");

    // Add animation on hover
    sections.forEach((section) => {
        section.addEventListener("mouseenter", () => {
            section.style.transform = "translateY(-10px)";
        });
        section.addEventListener("mouseleave", () => {
            section.style.transform = "translateY(0)";
        });
    });
});
