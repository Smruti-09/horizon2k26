import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const isSuryaPage = document.querySelector(".surya-page");
  if (!isSuryaPage) return;

  /* ─── FAHH preloader on page load ─── */
  const fahh = document.createElement("div");
  fahh.className = "fahh-preloader";
  fahh.innerHTML = `
    <div class="fahh-text">FAHHHHHHHH!!</div>
    <p class="fahh-sub">entering the backstage...</p>
  `;
  document.body.appendChild(fahh);

  const sfx = new Audio("/audio/faah-sfx.mpeg");
  sfx.volume = 0.5;
  sfx.play().catch(() => { });

  const fahhTl = gsap.timeline();
  fahhTl.fromTo(".fahh-text",
    { scale: 0, rotation: -15 },
    { scale: 1, rotation: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" }
  );
  fahhTl.to(".fahh-sub", { opacity: 1, duration: 0.3 }, "-=0.2");
  fahhTl.to({}, { duration: 0.6 });
  fahhTl.to(fahh, {
    yPercent: -100,
    duration: 0.7,
    ease: "power3.inOut",
    onComplete: () => {
      fahh.remove();
      initSuryaPage();
    },
  });

  function initSuryaPage() {
    /* ─── jackpot slot machine ─── */
    const reels = ["jr-1", "jr-2", "jr-3", "jr-4", "jr-5"];
    const resultEl = document.getElementById("jackpot-result");

    function getReelHeight(reelId) {
      const reel = document.getElementById(reelId);
      if (!reel) return 80;
      const firstDiv = reel.querySelector("div");
      return firstDiv ? firstDiv.offsetHeight : 80;
    }

    function spinReels() {
      reels.forEach((reelId, i) => {
        const reel = document.getElementById(reelId);
        if (!reel) return;

        const itemH = getReelHeight(reelId);
        const totalItems = reel.children.length;
        const fullSpins = 2 + i;
        const targetIndex = 0;
        const targetY = -(fullSpins * totalItems * itemH + targetIndex * itemH);

        gsap.set(reel, { y: 0 });
        gsap.to(reel, {
          y: targetY,
          duration: 1.2 + i * 0.35,
          ease: "power3.out",
          delay: i * 0.15,
          modifiers: {
            y: (y) => {
              const val = parseFloat(y);
              const total = totalItems * itemH;
              return (val % total) + "px";
            },
          },
          onComplete: () => {
            gsap.set(reel, { y: 0 });
            if (i === reels.length - 1) {
              showResult();
            }
          },
        });
      });
    }

    function showResult() {
      if (resultEl) {
        resultEl.textContent = "Member of D clan!";
        gsap.fromTo(resultEl,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.4)" }
        );
      }
      burstConfetti();
    }

    // Auto-spin after a short delay
    setTimeout(spinReels, 400);

    /* ─── confetti ─── */
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas ? canvas.getContext("2d") : null;
    let confettiParticles = [];
    let confettiAnimId = null;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const confettiColors = ["#ed6a5a", "#f5d743", "#9bc1bc", "#5d576b", "#f4f1bb", "#fff"];

    function burstConfetti() {
      if (!ctx) return;
      confettiParticles = [];
      for (let i = 0; i < 120; i++) {
        confettiParticles.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * 200,
          y: canvas.height * 0.3,
          vx: (Math.random() - 0.5) * 14,
          vy: -Math.random() * 12 - 4,
          w: Math.random() * 10 + 4,
          h: Math.random() * 6 + 3,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          gravity: 0.18,
          friction: 0.99,
          opacity: 1,
        });
      }
      if (!confettiAnimId) animateConfetti();
    }

    function animateConfetti() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confettiParticles.forEach((p) => {
        p.vy += p.gravity;
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20) {
          p.opacity = 0;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      confettiParticles = confettiParticles.filter((p) => p.opacity > 0);

      if (confettiParticles.length > 0) {
        confettiAnimId = requestAnimationFrame(animateConfetti);
      } else {
        confettiAnimId = null;
      }
    }

    /* ─── music toggle ─── */
    const musicToggle = document.getElementById("music-toggle");
    const bgMusic = document.getElementById("bg-music");
    const musicLabel = musicToggle ? musicToggle.querySelector(".music-label") : null;
    let isPlaying = false;

    if (musicToggle && bgMusic) {
      musicToggle.addEventListener("click", () => {
        if (isPlaying) {
          bgMusic.pause();
          musicToggle.classList.remove("playing");
          if (musicLabel) musicLabel.textContent = "Music Off";
          isPlaying = false;
        } else {
          bgMusic.volume = 0.3;
          bgMusic.play().catch(() => { });
          musicToggle.classList.add("playing");
          if (musicLabel) musicLabel.textContent = "Music On";
          isPlaying = true;
        }
      });
    }

    /* ─── timeline scroll animations ─── */
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
          });
        },
      });
    });

    /* ─── dev card entrance ─── */
    const devCard = document.querySelector(".surya-dev-card");
    if (devCard) {
      gsap.set(devCard, { opacity: 0, y: 60, scale: 0.9 });
      ScrollTrigger.create({
        trigger: devCard,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(devCard, {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8, ease: "power3.out",
          });
        },
      });
    }

    /* ─── about section entrance ─── */
    const aboutSection = document.querySelector(".surya-about");
    if (aboutSection) {
      gsap.set(aboutSection, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: aboutSection,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(aboutSection, {
            opacity: 1, y: 0,
            duration: 0.7, ease: "power3.out",
          });
        },
      });
    }
  } // end initSuryaPage
});
