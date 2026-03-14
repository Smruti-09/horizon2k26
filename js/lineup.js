import gsap from "gsap";
import { initLineupTactical } from "./lineup-tactical.js";

document.addEventListener("DOMContentLoaded", () => {
  const barrel = document.getElementById("drum-barrel");
  const pills  = document.querySelectorAll(".cat-pill");

  if (!barrel || !pills.length) return;

  // Maps pill index → events-data category key
  const CATS = [
    { key: "technical" },
    { key: "fun"       },
    { key: "literary"  },
    { key: "cultural"  },
  ];

  let currentAngle = 0;
  let currentIndex = 0;
  let isSpinning   = false;

  /* ─── spin the 3-D drum to targetIndex ─── */
  function spinToIndex(targetIndex) {
    if (isSpinning || targetIndex === currentIndex) return;
    isSpinning = true;

    // Always spin forward (more negative rotateX) = slot-machine reel feel
    const stepsForward = ((targetIndex - currentIndex) % 4 + 4) % 4;
    currentAngle      -= stepsForward * 90 + 360; // +1 full extra spin for drama
    currentIndex       = targetIndex;

    // Update active pill immediately
    pills.forEach((p, i) => p.classList.toggle("active", i === targetIndex));

    gsap.to(barrel, {
      rotateX:    currentAngle,
      duration:   1.15,
      ease:       "power4.out",
      onComplete: () => {
        initLineupTactical(CATS[currentIndex].key);
        isSpinning = false;
      },
    });
  }

  /* ─── pill click handlers ─── */
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      spinToIndex(parseInt(pill.dataset.index, 10));
    });
  });

  /* ─── initial render (no spin needed) ─── */
  initLineupTactical(CATS[0].key);
});
