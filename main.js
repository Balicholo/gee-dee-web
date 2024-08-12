// NAV DROP DOWN
document.getElementById('nav-toggle').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-menu');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = 'none';
    }
});

// TEXT CHANGING ANIMATION
let textIndex = 0;
const texts = ["2","4", "6", "8", "10+"];

setInterval(() => {
    const ratesElement = document.querySelector(".rates");
    ratesElement.textContent = texts[textIndex];

    textIndex = (textIndex + 1) % texts.length;
}, 2000); // 200ms = 2s

// TEAM PICTURES CAROUSEL
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.pic');
const imageWidth = 200; // Width of each image
const totalImages = images.length / 2; // Original image count
let currentIndex = 0;

setInterval(() => {
  // Calculate the new transform value
  const newTransformValue = -currentIndex * imageWidth;

  // Apply the transform to slide the images
  track.style.transform = `translateX(${newTransformValue}px)`;

  // Move to the next image
  currentIndex++;

  // Loop back to start seamlessly
  if (currentIndex === totalImages) {
    setTimeout(() => {
      track.style.transition = 'none'; // Disable transition for instant jump
      currentIndex = 0; // Reset index
      track.style.transform = `translateX(0px)`; // Reset position
      // Force reflow to restart transition
      track.offsetHeight; // Trigger a reflow
      track.style.transition = 'transform 1s linear'; // Re-enable transition
    }, 1000); // Wait for the current transition to finish
  }
}, 2000); // Change image every 2 seconds

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true 
    // animations repeat
})

sr.reveal(`.content-wrapper`)
sr.reveal(`.team-images`, {origin: 'bottom'})
sr.reveal(`.mission-content, .cleaning-pic, .content`, {origin: 'left'})
sr.reveal(`.portfolio-grid, .logo, .read-more-btn`, {origin: 'right'})
sr.reveal(`.icon-set, .testimony-1`, {interval: 200})