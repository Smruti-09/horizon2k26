import { EVENTS, EVENT_TYPES } from "./events-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug   = params.get("slug");
  const backLink = document.getElementById("ei-back-link");

  /* smart back link — detect referrer */
  if (backLink) {
    const ref = document.referrer;
    if (ref.includes("/events")) {
      backLink.href = "/events";
      backLink.innerHTML = "&#8592; Back to Events";
    }
    backLink.addEventListener("click", (event) => {
      if (document.referrer && (document.referrer.includes("/lineup") || document.referrer.includes("/events"))) {
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

  /* ── coordinators ── */
  const coordSection = document.getElementById("ei-coordinators");
  if (coordSection) {
    let html = "";

    if (event.studentCoordinators && event.studentCoordinators.length) {
      html += `<div class="ei-coord-group">
        <p class="mn ei-coord-label">Student Coordinators</p>
        <div class="ei-coord-list">`;
      event.studentCoordinators.forEach((c) => {
        html += `<div class="ei-coord-card">
          <span class="ei-coord-name">${c.name}</span>
          ${c.phone ? `<a href="tel:${c.phone}" class="ei-coord-phone">${c.phone}</a>` : ""}
        </div>`;
      });
      html += `</div></div>`;
    }

    if (event.facultyCoordinators && event.facultyCoordinators.length) {
      html += `<div class="ei-coord-group">
        <p class="mn ei-coord-label">Faculty Coordinators</p>
        <div class="ei-coord-list">`;
      event.facultyCoordinators.forEach((c) => {
        html += `<div class="ei-coord-card">
          <span class="ei-coord-name">${c.name}</span>
          ${c.phone ? `<a href="tel:${c.phone}" class="ei-coord-phone">${c.phone}</a>` : ""}
        </div>`;
      });
      html += `</div></div>`;
    }

    coordSection.innerHTML = html;
  }
});

function showNotFound() {
  const hero = document.querySelector(".ei-hero");
  const body = document.querySelector(".ei-body");
  if (hero) {
    hero.innerHTML = `
      <a href="/events" class="ei-back">&#8592; Back to Events</a>
      <p class="mn ei-type">—</p>
      <div class="ei-hero-title"><h1 style="color:#fff;">Event Not Found</h1></div>
    `;
  }
  if (body) {
    body.innerHTML = `
      <p style="grid-column:1/-1;padding:1em 0;opacity:0.65;">
        No event matched that slug.
        <a href="/events" style="text-decoration:underline;">Explore all events &rarr;</a>
      </p>
    `;
  }
}
