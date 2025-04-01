document.addEventListener("mousemove", (event) => {
    createSparkle(event.clientX, event.clientY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1500); // Adjust fade duration if needed
}
