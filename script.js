const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

// Check if a theme is saved in localStorage, else set to light theme by default
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');  // Remove dark theme
        localStorage.setItem('theme', 'light');  // Save theme in localStorage
    } else {
        body.setAttribute('data-theme', 'dark');  // Apply dark theme
        localStorage.setItem('theme', 'dark');  // Save theme in localStorage
    }
});

// Create a sparkle effect when the mouse moves
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);

    // Position the sparkle based on the mouse's position
    sparkle.style.left = `${e.pageX - 3}px`; // Center the sparkle on the cursor
    sparkle.style.top = `${e.pageY - 3}px`;

    // Remove the sparkle after animation ends
    setTimeout(() => {
        sparkle.remove();
    }, 1500); // Matches the animation duration
});
