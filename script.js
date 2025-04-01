document.addEventListener('mousemove', function(e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);

    const x = e.pageX;
    const y = e.pageY;

    sparkle.style.left = `${x - 3}px`; // Offset to center the sparkle
    sparkle.style.top = `${y - 3}px`; // Offset to center the sparkle

    setTimeout(() => {
        sparkle.remove(); // Remove the sparkle after animation
    }, 500); // Match the fadeOut duration
});
