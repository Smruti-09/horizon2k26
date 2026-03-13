import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TACTICAL_EVENTS = [
  { name: "Cosmic Deli",      venue: "Innovation Lab",    time: "9:00 AM",  type: "Technical", x: 19, y: 24 },
  { name: "Skull Pop 7",      venue: "Computer Centre",   time: "11:00 AM", type: "Technical", x: 68, y: 20 },
  { name: "Room 404",         venue: "Open Amphitheatre", time: "12:30 PM", type: "Fun",       x: 45, y: 59 },
  { name: "Bollywood Night",  venue: "Main Stage",        time: "7:00 PM",  type: "Cultural",  x: 74, y: 70 },
  { name: "Youth Parliament", venue: "Seminar Hall",      time: "10:00 AM", type: "Literary",  x: 18, y: 74 },
  { name: "Flashmobs",        venue: "Central Lawn",      time: "5:00 PM",  type: "Fun",       x: 50, y: 44 },
];

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".tactical-map-section");
  if (!section) return;

  const mapEl    = document.getElementById("tactical-map");
  const card     = document.getElementById("tactical-event-card");
  const cardName  = document.getElementById("tec-name");
  const cardVenue = document.getElementById("tec-venue");
  const cardTime  = document.getElementById("tec-time");
  const cardType  = document.getElementById("tec-type");
  const cardCount = document.getElementById("tec-count");

  // Build and inject pins
  const pins = TACTICAL_EVENTS.map((evt) => {
    const pin = document.createElement("div");
    pin.className = "map-pin";
    pin.style.cssText = `left:${evt.x}%;top:${evt.y}%;`;
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

  const activatePin = (index) => {
    if (index === currentActive || index < 0 || index >= TACTICAL_EVENTS.length) return;
    if (currentActive >= 0) pins[currentActive].classList.remove("active");
    currentActive = index;
    pins[index].classList.add("active");

    const evt = TACTICAL_EVENTS[index];
    cardName.textContent  = evt.name;
    cardVenue.textContent = evt.venue;
    cardTime.textContent  = evt.time;
    cardType.textContent  = evt.type;
    cardCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(TACTICAL_EVENTS.length).padStart(2, "0")}`;

    gsap.fromTo(card,
      { y: 8, opacity: 0.4 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
    );
  };

  const step = 1 / TACTICAL_EVENTS.length;

  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: `+=${window.innerHeight * (TACTICAL_EVENTS.length + 1)}px`,
    pin: true,
    scrub: 0.6,
    onUpdate: (self) => {
      TACTICAL_EVENTS.forEach((_, i) => {
        if (self.progress >= i * step && gsap.getProperty(pins[i], "opacity") < 0.9) {
          gsap.to(pins[i], { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
        }
      });

      activatePin(Math.min(Math.floor(self.progress / step), TACTICAL_EVENTS.length - 1));
    },
    onLeaveBack: () => {
      currentActive = -1;
      gsap.set(pins, { scale: 0, opacity: 0 });
      pins.forEach((p) => p.classList.remove("active"));
    },
  });
});
