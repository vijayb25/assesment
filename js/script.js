// Modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.preventDefault();

        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });

        dropdown.classList.toggle('active');
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Burger
document.getElementById('burger').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    const burger = document.getElementById('burger');

   
    if (window.innerWidth <= 1024) {
        navMenu.classList.toggle('nav-open');
        navMenu.classList.toggle('nav-closed');
        
        // burger.classList.toggle('active');
    }
});

// Close button
document.getElementById('closeNav').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    // const burger = document.getElementById('burger');

    if (window.innerWidth <= 1024) {
        navMenu.classList.add('nav-closed');
        navMenu.classList.remove('nav-open');

        // burger.classList.remove('active');
    }
});


document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const burger = document.getElementById('burger');


    if (window.innerWidth <= 1024 && navMenu.classList.contains('nav-open')) {
        if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
            navMenu.classList.add('nav-closed');
            navMenu.classList.remove('nav-open');
            
            // burger.classList.remove('active');
        }
    }
});