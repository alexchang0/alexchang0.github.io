/* ========== NAV ACTIVE LINK ON SCROLL ========== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});

/* ========== SPARKLE CURSOR EFFECT ========== */

let lastSparkleTime = 0;
const SPARKLE_DELAY = 20; // ms (throttle for performance)

document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastSparkleTime < SPARKLE_DELAY) return;
  lastSparkleTime = now;

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1200);
});