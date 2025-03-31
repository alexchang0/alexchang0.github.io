document.body.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);
    sparkle.style.left = `${e.pageX - 3}px`; // Adjust for center of sparkle
    sparkle.style.top = `${e.pageY - 3}px`; // Adjust for center of sparkle

    // Remove the sparkle after the animation is done
    setTimeout(() => {
        sparkle.remove();
    }, 500); // Duration of the animation
});
