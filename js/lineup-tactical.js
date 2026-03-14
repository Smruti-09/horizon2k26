import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EVENTS, EVENT_TYPES } from "./events-data.js";

gsap.registerPlugin(ScrollTrigger);

/* predefined spread positions for up to 15 pins */
const POSITIONS = [
  { x: 22, y: 20 }, { x: 68, y: 15 }, { x: 45, y: 52 },
  { x: 76, y: 65 }, { x: 18, y: 72 }, { x: 54, y: 34 },
  { x: 84, y: 38 }, { x: 30, y: 82 }, { x: 62, y: 76 },
  { x: 14, y: 46 }, { x: 72, y: 85 }, { x: 48, y: 12 },
  { x: 89, y: 55 }, { x: 36, y: 42 }, { x: 58, y: 88 },
];

let activeST = null;

export function initLineupTactical(categoryKey) {
  const section = document.getElementById("lineup-tactical-section");
  const mapEl   = document.getElementById("lineup-tactical-map");
  const card    = document.getElementById("lineup-tec-card");
  const nameEl  = document.getElementById("ltec-name");
  const venueEl = document.getElementById("ltec-venue");
  const timeEl  = document.getElementById("ltec-time");
  const dayEl   = document.getElementById("ltec-day");
  const typeEl  = document.getElementById("ltec-type");
  const countEl = document.getElementById("ltec-count");
  const linkEl  = document.getElementById("ltec-link");
  const titleEl = document.getElementById("lineup-tactical-title");
  const zones = section.querySelectorAll(".map-zone");

  if (!section || !mapEl) return;

  zones.forEach((zone) => {
    const label = (zone.dataset.label || "").trim();
    if (!label) return;
    zone.style.minWidth = `${Math.ceil(label.length * 7.2) + 20}px`;
  });

  /* kill existing scroll trigger */
  if (activeST) { activeST.kill(); activeST = null; }

  /* remove old pins */
  mapEl.querySelectorAll(".map-pin").forEach((p) => p.remove());

  const events  = EVENTS.filter((e) => e.type === categoryKey);
  const typeObj = EVENT_TYPES.find((t) => t.key === categoryKey);
  if (titleEl) titleEl.textContent = `${typeObj?.label || "Events"} — Venues`;

  if (events.length === 0) return;

  /* reset card state */
  if (card)    gsap.set(card, { opacity: 0.45, y: 0 });
  if (nameEl)  nameEl.textContent  = "Scroll to explore";
  if (venueEl) venueEl.textContent = "Venue";
  if (timeEl)  timeEl.textContent  = "Time";
  if (dayEl)   dayEl.textContent   = "Day";
  if (typeEl)  typeEl.textContent  = "—";
  if (countEl) countEl.textContent = `— / ${String(events.length).padStart(2, "0")}`;
  if (linkEl) {
    linkEl.href = "#";
    linkEl.style.opacity = "0.35";
    linkEl.style.pointerEvents = "none";
  }

  /* build pins */
  const pins = events.map((evt, i) => {
    const pos = POSITIONS[i % POSITIONS.length];
    const pin = document.createElement("div");
    pin.className = "map-pin";
    pin.style.cssText = `left:${pos.x}%;top:${pos.y}%;`;
    pin.innerHTML = `
      <div class="map-pin-dot"></div>
      <div class="map-pin-ring"></div>
      <div class="map-pin-label">${evt.name}</div>
    `;
    gsap.set(pin, { scale: 0, opacity: 0 });
    mapEl.appendChild(pin);
    return pin;
  });

  let currentActive = -1;
  const step = 1 / events.length;

  const activatePin = (index) => {
    if (index === currentActive || index < 0 || index >= events.length) return;
    if (currentActive >= 0) pins[currentActive].classList.remove("active");
    currentActive = index;
    pins[index].classList.add("active");

    const evt = events[index];
    const shortLabel = typeObj
      ? typeObj.label.replace("Events", "Event").trim()
      : "Event";

    if (nameEl)  nameEl.textContent  = evt.name;
    if (venueEl) venueEl.textContent = evt.venue || "TBA";
    if (timeEl)  timeEl.textContent  = evt.time  || "TBA";
    if (dayEl)   dayEl.textContent   = evt.day   || "TBA";
    if (typeEl)  typeEl.textContent  = shortLabel;
    if (countEl) countEl.textContent =
      `${String(index + 1).padStart(2, "0")} / ${String(events.length).padStart(2, "0")}`;

    if (linkEl) {
      linkEl.href = `/event-info?slug=${evt.slug}`;
      linkEl.style.opacity = "1";
      linkEl.style.pointerEvents = "auto";
    }
    if (card) {
      gsap.fromTo(card,
        { y: 8, opacity: 0.4 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
      );
    }
  };

  /* small delay so ScrollTrigger has correct measurements after DOM rebuild */
  setTimeout(() => {
    ScrollTrigger.refresh();
    activeST = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: true,
      scrub: 1.2,
      onUpdate: (self) => {
        events.forEach((_, i) => {
          if (self.progress >= i * step && gsap.getProperty(pins[i], "opacity") < 0.9) {
            gsap.to(pins[i], { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
          }
        });
        activatePin(Math.min(Math.floor(self.progress / step), events.length - 1));
      },
      onLeaveBack: () => {
        currentActive = -1;
        gsap.set(pins, { scale: 0, opacity: 0 });
        pins.forEach((p) => p.classList.remove("active"));
        if (nameEl)  nameEl.textContent  = "Scroll to explore";
        if (venueEl) venueEl.textContent = "Venue";
        if (timeEl)  timeEl.textContent  = "Time";
        if (dayEl)   dayEl.textContent   = "Day";
        if (typeEl)  typeEl.textContent  = "—";
        if (countEl) countEl.textContent = `— / ${String(events.length).padStart(2, "0")}`;
        if (linkEl) {
          linkEl.href = "#";
          linkEl.style.opacity = "0.35";
          linkEl.style.pointerEvents = "none";
        }
        if (card) gsap.set(card, { opacity: 0.45, y: 0 });
      },
    });
  }, 50);
}
