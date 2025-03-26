document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");
    const sidebarLinks = document.querySelectorAll(".sidebar a"); // Sélectionne tous les liens du menu

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

    // Fermer le menu lorsqu'on clique sur un lien du menu
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    });
});
