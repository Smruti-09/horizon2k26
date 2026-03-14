import { EVENTS, EVENT_TYPES } from "./events-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug   = params.get("slug");
  const backLink = document.getElementById("ei-back-link");

  if (backLink) {
    backLink.addEventListener("click", (event) => {
      if (document.referrer.includes("/lineup")) {
        event.preventDefault();
        window.history.back();
      }
    });
  }

  if (!slug) { showNotFound(); return; }

  const event = EVENTS.find((e) => e.slug === slug);
  if (!event) { showNotFound(); return; }

  const typeObj   = EVENT_TYPES.find((t) => t.key === event.type);
  const fullLabel = typeObj ? typeObj.label : event.type;
  const shortLabel = fullLabel.replace("Events", "Event").trim();

  document.title = `${event.name} | Horizon 2026`;

  document.getElementById("ei-name").textContent       = event.name;
  document.getElementById("ei-type").textContent       = fullLabel;
  document.getElementById("ei-type-tag").textContent   = shortLabel;
  document.getElementById("ei-img").src                = event.image;
  document.getElementById("ei-img").alt                = event.name;
  document.getElementById("ei-venue").textContent      = event.venue       || "TBA";
  document.getElementById("ei-time").textContent       = event.time        || "TBA";
  document.getElementById("ei-day").textContent        = event.day         || "TBA";
  document.getElementById("ei-description").textContent = event.description || "More details coming soon. Check back closer to the event.";
  document.getElementById("ei-register").href          = event.registerUrl || "#";
  document.getElementById("ei-rulebook").href          = event.rulebookUrl || "#";
});

function showNotFound() {
  const hero = document.querySelector(".ei-hero");
  const body = document.querySelector(".ei-body");
  if (hero) {
    hero.innerHTML = `
      <a href="/lineup" class="ei-back">&#8592; Back to Lineup</a>
      <p class="mn ei-type">—</p>
      <div class="ei-hero-title"><h1 style="color:#fff;">Event Not Found</h1></div>
    `;
  }
  if (body) {
    body.innerHTML = `
      <p style="grid-column:1/-1;padding:1em 0;opacity:0.65;">
        No event matched that slug.
        <a href="/lineup" style="text-decoration:underline;">Explore all events &rarr;</a>
      </p>
    `;
  }
}
