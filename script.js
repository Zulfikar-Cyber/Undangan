// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Ambil elemen-elemen yang akan dianimasikan
    const container = document.querySelector(".container");
    const header = document.querySelector("header h1");
    const mainElements = document.querySelectorAll(".fade-in");
    const sectionHeader = document.querySelector("main h2");
    const footerElements = document.querySelectorAll("footer p");

    // Animasi untuk container
    setTimeout(() => {
        container.style.opacity = "1";
        container.style.transform = "scale(1)";
    }, 200);

    // Animasi untuk header (bergerak dari kiri)
    setTimeout(() => {
        header.style.opacity = "1";
        header.style.transform = "translateX(0)";
    }, 500);

    // Animasi untuk elemen di bagian utama (bergerak dari bawah, satu per satu)
    mainElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, 700 + index * 300); // Tambahkan jeda untuk efek berurutan
    });

    // Animasi untuk judul bagian utama (bergerak dari kanan)
    setTimeout(() => {
        sectionHeader.style.opacity = "1";
        sectionHeader.style.transform = "translateX(0)";
    }, 1000);

    // Animasi untuk elemen footer (fade-in, satu per satu)
    footerElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, 2000 + index * 300); // Tambahkan jeda untuk efek berurutan
    });
});
