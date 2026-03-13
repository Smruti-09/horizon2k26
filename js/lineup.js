import gsap from "gsap";
import { EVENTS, EVENT_TYPES } from "./events-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const barrel = document.getElementById("drum-barrel");
  const pills  = document.querySelectorAll(".cat-pill");
  const grid   = document.getElementById("lineup-grid");

  if (!barrel || !grid) return;

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
        renderCards(CATS[currentIndex].key);
        isSpinning = false;
      },
    });
  }

  /* ─── build + animate event cards ─── */
  function renderCards(categoryKey) {
    const events  = EVENTS.filter((e) => e.type === categoryKey);
    const typeObj = EVENT_TYPES.find((t) => t.key === categoryKey);
    const label   = typeObj ? typeObj.label.replace("Events", "Event").trim() : "";

    const existingItems = grid.querySelectorAll(".row");

    if (existingItems.length) {
      gsap.to(Array.from(existingItems), {
        y:        -25,
        opacity:  0,
        scale:    0.94,
        duration: 0.22,
        ease:     "power2.in",
        stagger:  0.03,
        onComplete: () => buildGrid(events, label),
      });
    } else {
      buildGrid(events, label);
    }
  }

  function buildGrid(events, label) {
    grid.innerHTML = "";

    // Two-column rows to match the ticket card grid on events.html
    for (let i = 0; i < events.length; i += 2) {
      const row = document.createElement("div");
      row.className = "row";
      [events[i], events[i + 1]].filter(Boolean).forEach((evt) => {
        row.appendChild(buildCard(evt, label));
      });
      grid.appendChild(row);
    }

    // Animate in with the signature carnival tilt
    gsap.fromTo(
      grid.querySelectorAll(".work-item"),
      { y: 60, opacity: 0, scale: 0.9, rotation: () => Math.random() * 8 - 4 },
      {
        y:        0,
        opacity:  1,
        scale:    1,
        rotation: 0,
        duration: 0.55,
        ease:     "power3.out",
        stagger:  0.07,
      }
    );
  }

  /* ─── single ticket card ─── */
  function buildCard(event, label) {
    const item = document.createElement("div");
    item.className = "work-item";

    const imgWrap = document.createElement("div");
    imgWrap.className = "work-item-img";
    const link = document.createElement("a");
    link.href = "/project";
    const img = document.createElement("img");
    img.src = event.image;
    img.alt = event.name;
    link.appendChild(img);
    imgWrap.appendChild(link);

    const content = document.createElement("div");
    content.className = "work-item-content";

    const h3 = document.createElement("h3");
    h3.textContent = event.name;

    const tag = document.createElement("p");
    tag.className = "mn";
    tag.textContent = label;

    const buttons = document.createElement("div");
    buttons.className = "event-buttons";

    const regBtn = document.createElement("a");
    regBtn.href = event.registerUrl;
    regBtn.className = "event-btn event-btn-register";
    regBtn.textContent = "Register";

    const ruleBtn = document.createElement("a");
    ruleBtn.href = event.rulebookUrl;
    ruleBtn.className = "event-btn event-btn-rulebook";
    ruleBtn.textContent = "Rulebook";

    buttons.appendChild(regBtn);
    buttons.appendChild(ruleBtn);
    content.appendChild(h3);
    content.appendChild(tag);
    content.appendChild(buttons);

    item.appendChild(imgWrap);
    item.appendChild(content);
    return item;
  }

  /* ─── pill click handlers ─── */
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      spinToIndex(parseInt(pill.dataset.index, 10));
    });
  });

  /* ─── initial render (no spin needed) ─── */
  renderCards(CATS[0].key);
});
