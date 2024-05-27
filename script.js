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
    window.location.href = "https://wa.me/+917870185071";
});

// Add a click event listener to the menu icon
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
});
