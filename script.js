document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});
