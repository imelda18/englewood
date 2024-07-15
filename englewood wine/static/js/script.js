
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuToggle.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const searchToggle = document.getElementById('search-toggle');
    const mobileSearch = document.getElementById('mobile-search');

    searchToggle.addEventListener('click', function() {
        if (mobileSearch.style.display === 'flex') {
            mobileSearch.style.display = 'none';
        } else {
            mobileSearch.style.display = 'flex';
        }
    });

    // Optional: Close search bar if menu is opened
    menuToggle.addEventListener('click', function() {
        mobileSearch.style.display = 'none';
    });
});





new Glide('.glide', {
    type: 'carousel',
    perView: 2,
    breakpoints: {
        1200: {
            perView: 2
        },
        940: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
}).mount();




document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            const target = document.querySelector(button.getAttribute("data-target"));
            if (target.style.display === "block") {
                target.style.display = "none";

            } else {
                target.style.display = "block";

            }
        });
    });
});