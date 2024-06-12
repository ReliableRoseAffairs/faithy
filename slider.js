document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    // Function to move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 10}%)`;
    }

    // Set interval for auto sliding
    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Handle background music playback
    const backgroundMusic = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');

    // Function to play the music
    function playMusic() {
        backgroundMusic.play().catch(error => {
            console.error('Autoplay prevented:', error);
            playButton.style.display = 'block'; // Show button if autoplay fails
        });
    }

    // Hide button initially
    playButton.style.display = 'none';

    // Add click event to play button to start music
    playButton.addEventListener('click', () => {
        playMusic();
        playButton.style.display = 'none'; // Hide button after music starts
    });

    // Attempt to play music on load (may be blocked by autoplay policies)
    playMusic();
});