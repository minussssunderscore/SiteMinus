document.addEventListener("scroll", () => {
    document.querySelectorAll(".fade").forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});