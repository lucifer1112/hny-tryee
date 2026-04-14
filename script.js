document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    
    // Create 40 floating sparkles
    for (let i = 0; i < 40; i++) {
        createSparkle();
    }

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Randomize starting positions, speeds, and delays
        const x = Math.random() * window.innerWidth;
        const duration = Math.random() * 4 + 4; // Between 4s and 8s
        const delay = Math.random() * 5; // Start at different times
        
        sparkle.style.left = `${x}px`;
        sparkle.style.animationDuration = `${duration}s`;
        sparkle.style.animationDelay = `${delay}s`;
        
        body.appendChild(sparkle);
    }
});
