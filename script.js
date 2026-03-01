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
const SPARKLE_DELAY = 10; // ms (throttle for performance)

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

const canvas = document.getElementById("orb-canvas");
const ctx = canvas.getContext("2d");

let orbs = [];
const ORB_COUNT = 10;

// resize canvas
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// orb class
class Orb {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 12 + 6; // small
    this.speedX = (Math.random() - 0.5) * 12.2; // fast
    this.speedY = (Math.random() - 0.5) * 12.2;
    this.alpha = Math.random() * 0.25 + 0.1;

    const colors = [
      "56,189,248",  // blue
      "167,139,250", // purple
      "34,211,238",  // cyan
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // wrap around screen
    if (this.x < -50) this.x = canvas.width + 50;
    if (this.x > canvas.width + 50) this.x = -50;
    if (this.y < -50) this.y = canvas.height + 50;
    if (this.y > canvas.height + 50) this.y = -50;
  }

  draw() {
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius * 4
    );

    gradient.addColorStop(0, `rgba(${this.color}, ${this.alpha})`);
    gradient.addColorStop(1, `rgba(${this.color}, 0)`);

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

// create orbs
for (let i = 0; i < ORB_COUNT; i++) {
  orbs.push(new Orb());
}

// animate
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const orb of orbs) {
    orb.update();
    orb.draw();
  }

  requestAnimationFrame(animate);
}

animate();