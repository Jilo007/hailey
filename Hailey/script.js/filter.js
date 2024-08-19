// script.js

document.addEventListener("DOMContentLoaded", function() {
    const filterButton = document.getElementById("filter-new-arrivals");
    const products = document.querySelectorAll(".product");

    filterButton.addEventListener("click", function() {
        products.forEach(product => {
            if (!product.classList.contains("new-arrival")) {
                product.style.display = product.style.display === "none" ? "block" : "none";
            }
        });
    });
});
