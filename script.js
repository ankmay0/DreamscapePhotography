let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 4000); // Change image every 4 seconds

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = "https://wa.me/917870185071?text=Hello";
});

// Add a click event listener to the menu icon
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
});



// Optional: Close the dropdown menu when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.floating-button.quote')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}