<<<<<<< HEAD
// Mostrar el header pequeño al hacer scroll
window.addEventListener("scroll", function() {
    const headerPequeño = document.querySelector(".header-pequeño");
    const headerGrande = document.querySelector(".header-grande");

    if (window.scrollY > headerGrande.offsetHeight) {
        headerPequeño.style.display = "flex"; // Mostrar el header reducido
    } else {
        headerPequeño.style.display = "none"; // Ocultar el header reducido
    }
});
=======
// Mostrar el header pequeño al hacer scroll
window.addEventListener("scroll", function() {
    const headerPequeño = document.querySelector(".header-pequeño");
    const headerGrande = document.querySelector(".header-grande");

    if (window.scrollY > headerGrande.offsetHeight) {
        headerPequeño.style.display = "flex"; // Mostrar el header reducido
    } else {
        headerPequeño.style.display = "none"; // Ocultar el header reducido
    }
});
>>>>>>> 7e330e83c26a8fa04f933183efcae5775b0b636d
