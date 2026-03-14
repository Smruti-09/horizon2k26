import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("schedule-section");
  if (!section) return;

  const cards = gsap.utils.toArray(".schedule-day-card");

  // Animate the cards from a hidden, slightly rotated state
  ScrollTrigger.create({
    trigger: section,
    start: "top 80%",
    onEnter: () => {
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        rotation: (i) => i % 2 === 0 ? -2 : 2,
        duration: 0.8,
        stagger: 0.25,
        ease: "back.out(1.2)"
      });
    }
  });
});
