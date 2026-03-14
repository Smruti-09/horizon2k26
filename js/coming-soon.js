// ============================================
// COMING SOON — Carnival Animations & Countdown
// ============================================

import gsap from "gsap";

// ---- Countdown Timer ----
const FEST_DATE = new Date("2026-03-14T22:00:00+05:30").getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = Math.max(0, FEST_DATE - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  setCountdownValue("cs-days", days);
  setCountdownValue("cs-hours", hours);
  setCountdownValue("cs-minutes", minutes);
  setCountdownValue("cs-seconds", seconds);
}

function setCountdownValue(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  const str = String(value).padStart(2, "0");
  if (el.textContent !== str) {
    el.textContent = str;
    // quick flip animation
    gsap.fromTo(
      el,
      { y: -8, opacity: 0.4 },
      { y: 0, opacity: 1, duration: 0.35, ease: "back.out(2)" }
    );
  }
}

// ---- Confetti (Canvas) ----
function initConfetti() {
  const canvas = document.getElementById("cs-confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W, H;
  const COLORS = ["#f5c518", "#e63946", "#ff6b9d", "#2ec4b6", "#6b2fa0", "#fdf0d5"];
  const SHAPES = ["rect", "circle", "triangle"];
  const NUM_PARTICLES = 50;
  const particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * W;
      this.y = initial ? Math.random() * H : -20;
      this.size = Math.random() * 6 + 3;
      this.speed = Math.random() * 1 + 0.3;
      this.drift = (Math.random() - 0.5) * 0.8;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 4;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      this.opacity = Math.random() * 0.6 + 0.3;
    }

    update() {
      this.y += this.speed;
      this.x += this.drift;
      this.rotation += this.rotSpeed;

      if (this.y > H + 20 || this.x < -20 || this.x > W + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;

      if (this.shape === "rect") {
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
      } else if (this.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(0, -this.size / 2);
        ctx.lineTo(this.size / 2, this.size / 2);
        ctx.lineTo(-this.size / 2, this.size / 2);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function init() {
    resize();
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(new Particle());
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  init();
  loop();
}

// ---- Sparkle dots (random position) ----
function initSparkles() {
  const container = document.querySelector(".coming-soon-page");
  if (!container) return;
  const count = 25;

  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.className = "cs-sparkle";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";
    dot.style.animationDelay = Math.random() * 4 + "s";
    dot.style.animationDuration = 3 + Math.random() * 3 + "s";
    container.appendChild(dot);
  }
}

// ---- Light string bulbs ----
function initLights() {
  const strip = document.querySelector(".cs-lights");
  if (!strip) return;
  const count = Math.floor(window.innerWidth / 30);

  for (let i = 0; i < count; i++) {
    const bulb = document.createElement("div");
    bulb.className = "cs-light-bulb";
    strip.appendChild(bulb);
  }
}

// ---- GSAP entrance animations ----
function initEntranceAnimations() {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".cs-badge", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
  })
    .from(
      ".cs-title span",
      {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      },
      "-=0.4"
    )
    .from(
      ".cs-subtitle",
      {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.5"
    )
    .from(
      ".cs-countdown-box",
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      },
      "-=0.4"
    )
    .from(
      ".cs-tagline",
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.3"
    )
    .from(
      ".cs-socials a",
      {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.3"
    )
    .from(
      ".cs-college",
      {
        opacity: 0,
        duration: 0.6,
      },
      "-=0.2"
    );
}

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
  initLights();
  initSparkles();
  initConfetti();
  initEntranceAnimations();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
