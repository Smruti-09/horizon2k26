import { EVENTS, EVENT_TYPES } from "./events-data.js";

function createEventCard(event, type) {
  const item = document.createElement("div");
  item.className = "work-item";

  const imgWrap = document.createElement("div");
  imgWrap.className = "work-item-img";
  const link = document.createElement("a");
  link.href = `/event-info?slug=${event.slug}`;
  const img = document.createElement("img");
  img.src = event.image;
  img.alt = event.name;
  link.appendChild(img);
  imgWrap.appendChild(link);

  const content = document.createElement("div");
  content.className = "work-item-content";
  const h3 = document.createElement("h3");
  h3.textContent = event.name;
  const p = document.createElement("p");
  p.className = "mn";
  p.textContent = type.label.replace("Events", "Event").trim();

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
  content.appendChild(p);
  content.appendChild(buttons);

  item.appendChild(imgWrap);
  item.appendChild(content);
  return item;
}

function renderEventsByCategory(typeKey) {
  const container = document.getElementById("events-container");
  if (!container) return;

  const type = EVENT_TYPES.find((t) => t.key === typeKey);
  if (!type) return;

  const eventsOfType = EVENTS.filter((e) => e.type === type.key);
  container.innerHTML = "";

  const selectedLabel = document.getElementById("selected-events-label");
  if (selectedLabel) selectedLabel.textContent = type.label;

  const categoryDiv = document.createElement("div");
  categoryDiv.className = "event-category";
  const h2 = document.createElement("h2");
  h2.style.cssText = "margin-bottom:1em;";
  h2.textContent = type.label;
  categoryDiv.appendChild(h2);
  container.appendChild(categoryDiv);

  const row = document.createElement("div");
  row.className = "row";

  eventsOfType.forEach((event) => {
    row.appendChild(createEventCard(event, type));
  });

  container.appendChild(row);
  container.hidden = false;
}

function initEventFilter() {
  const container = document.getElementById("events-container");
  if (!container) return;

  const chips = document.querySelectorAll(".carnival-filter-chip");
  if (!chips.length) {
    renderEventsByCategory(EVENT_TYPES[0].key);
    return;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const typeKey = chip.dataset.type;
      if (!typeKey) return;

      chips.forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");

      renderEventsByCategory(typeKey);
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

initEventFilter();
