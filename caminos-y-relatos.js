document.addEventListener("DOMContentLoaded", () => {
    const relatos = document.querySelectorAll(".relato");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    relatos.forEach(relato => observer.observe(relato));
});