import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".ingamana-projects");
  if (!section) return;

  const PROJECTS_PER_ROW = 5;
  const TOTAL_ROWS = 6;

  const IMAGES = [];
  for (let i = 1; i <= 10; i++) {
    IMAGES.push(`https://res.cloudinary.com/daz9tusly/image/upload/f_auto,q_auto/v1/horizon2026/images/work-items/work-item-${i}.jpg`);
  }

  const EVENTS = [
    { name: "Cosmic Deli", category: "Technical" },
    { name: "Skull Pop 7", category: "Technical" },
    { name: "Room 404", category: "Fun" },
    { name: "Red Dot Mission", category: "Fun" },
    { name: "Sweetbones", category: "Literary" },
    { name: "Carnival Bloom", category: "Literary" },
    { name: "Soft Noise", category: "Cultural" },
    { name: "Cloud Valley", category: "Cultural" },
    { name: "Heartbyte", category: "Technical" },
    { name: "Orbit Quilt", category: "Cultural" },
  ];

  // Build rows
  const rows = [];
  let idx = 0;
  for (let r = 0; r < TOTAL_ROWS; r++) {
    const row = document.createElement("div");
    row.className = "projects-row";
    for (let c = 0; c < PROJECTS_PER_ROW; c++) {
      const event = EVENTS[idx % EVENTS.length];
      const img = IMAGES[idx % IMAGES.length];
      idx++;

      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <div class="project-card-img">
          <img src="${img}" alt="${event.name}" />
        </div>
        <div class="project-card-info">
          <p class="mn">${event.name}</p>
          <p class="mn">${event.category}</p>
        </div>
      `;
      row.appendChild(card);
    }
    section.appendChild(row);
    rows.push(row);
  }

  // Calculate expanded height
  const isMobile = window.innerWidth < 1000;
  let rowStartWidth = isMobile ? 250 : 125;
  let rowEndWidth = isMobile ? 750 : 500;

  const firstRow = rows[0];
  firstRow.style.width = `${rowEndWidth}%`;
  const expandedRowHeight = firstRow.offsetHeight;
  firstRow.style.width = "";

  const sectionGap = parseFloat(getComputedStyle(section).gap) || 0;
  const sectionPadding =
    parseFloat(getComputedStyle(section).paddingTop) || 0;

  const expandedSectionHeight =
    expandedRowHeight * rows.length +
    sectionGap * (rows.length - 1) +
    sectionPadding * 2;

  section.style.height = `${expandedSectionHeight}px`;

  function onScrollUpdate() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    rows.forEach((row) => {
      const rect = row.getBoundingClientRect();
      const rowTop = rect.top + scrollY;
      const rowBottom = rowTop + rect.height;

      const scrollStart = rowTop - viewportHeight;
      const scrollEnd = rowBottom;

      let progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
      progress = Math.max(0, Math.min(1, progress));

      const width = rowStartWidth + (rowEndWidth - rowStartWidth) * progress;
      row.style.width = `${width}%`;
    });
  }

  gsap.ticker.add(onScrollUpdate);

  const handleResize = () => {
    const isMobile = window.innerWidth < 1000;
    rowStartWidth = isMobile ? 250 : 125;
    rowEndWidth = isMobile ? 750 : 500;

    firstRow.style.width = `${rowEndWidth}%`;
    const newRowHeight = firstRow.offsetHeight;
    firstRow.style.width = "";

    const newSectionHeight =
      newRowHeight * rows.length +
      sectionGap * (rows.length - 1) +
      sectionPadding * 2;

    section.style.height = `${newSectionHeight}px`;
  };

  window.addEventListener("resize", handleResize);
});
