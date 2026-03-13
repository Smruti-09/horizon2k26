import { EVENTS, EVENT_TYPES } from "./events-data.js";

function renderEvents() {
  const container = document.getElementById("events-container");
  if (!container) return;

  EVENT_TYPES.forEach((type, i) => {
    const eventsOfType = EVENTS.filter((e) => e.type === type.key);
    if (eventsOfType.length === 0) return;

    // Category header
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "event-category";
    const h2 = document.createElement("h2");
    h2.style.cssText = i === 0 ? "margin-bottom:1em;" : "margin:2em 0 1em;";
    h2.textContent = type.label;
    categoryDiv.appendChild(h2);
    container.appendChild(categoryDiv);

    // Row of cards
    const row = document.createElement("div");
    row.className = "row";

    eventsOfType.forEach((event) => {
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
      const p = document.createElement("p");
      p.className = "mn";
      p.textContent =
        type.label.replace("Events", "Event").trim();

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
      row.appendChild(item);
    });

    container.appendChild(row);
  });
}

renderEvents();
