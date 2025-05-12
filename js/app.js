  const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });




