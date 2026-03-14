import { EVENTS, EVENT_TYPES } from "./events-data.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("gallery-grid-section");
  if (!section) return;

  let currentFilter = "all";

  /* ── build gallery ── */
  function renderGallery(filter) {
    section.innerHTML = "";
    const eventsToShow = filter === "all"
      ? EVENTS.filter((e) => e.gallery && e.gallery.length)
      : EVENTS.filter((e) => e.type === filter && e.gallery && e.gallery.length);

    if (!eventsToShow.length) {
      section.innerHTML = `<div class="gallery-empty"><p>No gallery images yet for this category.</p></div>`;
      return;
    }

    eventsToShow.forEach((event) => {
      const typeObj = EVENT_TYPES.find((t) => t.key === event.type);
      const typeLabel = typeObj ? typeObj.label.replace("Events", "").trim() : event.type;

      const group = document.createElement("div");
      group.className = "gallery-event-group";

      const header = document.createElement("div");
      header.className = "gallery-event-header";
      header.innerHTML = `
        <h3>${event.name}</h3>
        <span class="gallery-event-type-badge">${typeLabel}</span>
      `;
      group.appendChild(header);

      const grid = document.createElement("div");
      grid.className = "gallery-images-grid";

      event.gallery.forEach((imgUrl, idx) => {
        const card = document.createElement("div");
        card.className = "gallery-img-card";
        card.innerHTML = `
          <img src="${imgUrl}" alt="${event.name} — Photo ${idx + 1}" loading="lazy" />
          <div class="gallery-img-card-info">
            <p class="mn">${event.name} — ${idx + 1}/${event.gallery.length}</p>
          </div>
        `;
        card.addEventListener("click", () => openLightbox(imgUrl, `${event.name} — Photo ${idx + 1}`));
        grid.appendChild(card);
      });

      group.appendChild(grid);
      section.appendChild(group);
    });

    /* animate cards in */
    requestAnimationFrame(() => {
      const cards = section.querySelectorAll(".gallery-img-card");
      gsap.set(cards, { opacity: 0, y: 40, scale: 0.92 });
      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(card, {
              opacity: 1, y: 0, scale: 1,
              duration: 0.6, ease: "power3.out",
            });
          },
        });
      });
      ScrollTrigger.refresh();
    });
  }

  /* ── filter chips ── */
  const chips = document.querySelectorAll("#gallery-filter-gate .carnival-filter-chip");
  const selectedLabel = document.getElementById("gallery-selected-label");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const type = chip.dataset.type;
      if (type === currentFilter) return;
      currentFilter = type;

      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      if (selectedLabel) {
        if (type === "all") {
          selectedLabel.textContent = "All Events";
        } else {
          const tObj = EVENT_TYPES.find((t) => t.key === type);
          selectedLabel.textContent = tObj ? tObj.label : type;
        }
      }

      renderGallery(type);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ── lightbox ── */
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(src, caption) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /* initial render */
  renderGallery("all");
});
