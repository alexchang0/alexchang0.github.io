document.addEventListener("mousemove", (e) => {
    let sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    document.body.appendChild(sparkle);

    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;

    setTimeout(() => {
        sparkle.remove();
    }, 500); // Remove after animation
});
