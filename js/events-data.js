/*
 * ─── Horizon 2026 — Event Data ───────────────────────────
 *
 * CMS: Cloudinary (free tier)
 * Replace YOUR_CLOUD_NAME below with your Cloudinary cloud name.
 * Upload images to a folder called "horizon2026" in your Cloudinary dashboard.
 *
 * Image URL pattern:
 *   https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1/horizon2026/filename.jpg
 *
 * Tip: append transforms for auto-optimization:
 *   .../image/upload/f_auto,q_auto/v1/horizon2026/filename.jpg
 */

const CMS_BASE = "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto/v1/horizon2026";

export const EVENTS = [
  {
    name: "Cosmic Deli",
    slug: "cosmic-deli",
    type: "technical",
    image: `${CMS_BASE}/cosmic-deli.jpg`,
    registerUrl: "#",
    rulebookUrl: "#",
    venue: "Innovation Lab",
    time: "9:00 AM",
    day: "Day 1",
    description: "A multi-round technical hackathon pitting your engineering skills against impossible deadlines and surprise constraints.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/cosmic-deli-1.jpg`,
      `${CMS_BASE}/cosmic-deli-2.jpg`,
    ],
  },
  {
    name: "Skull Pop 7",
    slug: "skull-pop-7",
    type: "technical",
    image: `${CMS_BASE}/skull-pop-7.jpg`,
    registerUrl: "#",
    rulebookUrl: "#",
    venue: "Computer Centre",
    time: "11:00 AM",
    day: "Day 1",
    description: "High-intensity coding duels where speed meets precision. Solve DSA problems before your rivals reach 7 pops.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/skull-pop-7-1.jpg`,
      `${CMS_BASE}/skull-pop-7-2.jpg`,
    ],
  },
  {
    name: "Room 404",
    slug: "room-404",
    type: "fun",
    image: `${CMS_BASE}/room-404.jpg`,
    registerUrl: "#",
    rulebookUrl: "#",
    venue: "Open Amphitheatre",
    time: "12:30 PM",
    day: "Day 2",
    description: "Mystery stations, escape-room logic, and team chaos in a fast-paced multi-point challenge.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/room-404-1.jpg`,
      `${CMS_BASE}/room-404-2.jpg`,
    ],
  },
  {
    name: "Red Dot Mission",
    slug: "red-dot-mission",
    type: "fun",
    image: `${CMS_BASE}/red-dot-mission.jpg`,
    registerUrl: "#",
    rulebookUrl: "#",
    venue: "Central Lawn",
    time: "2:00 PM",
    day: "Day 2",
    description: "An outdoor rapid-fire mission event — decode clues, sprint checkpoints, claim the dot.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/red-dot-mission-1.jpg`,
      `${CMS_BASE}/red-dot-mission-2.jpg`,
    ],
  },
  // literary events
  {
    name: "Fate brings your own words",
    slug: "fate-brings-your-own-words",
    type: "literary",
    image: `${CMS_BASE}/fate-brings-your-own-words.jpg`,
    registerUrl: "https://forms.gle/MSXMK9ByxoYvZaXn8",
    rulebookUrl: "#",
    venue: "Seminar Hall A",
    time: "9:00 AM",
    day: "Day 1",
    description: "A creative writing contest where your fate envelope holds the theme — reveal it, write it, own it.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/fate-brings-1.jpg`,
    ],
  },
  {
    name: "Trivia Trek",
    slug: "trivia-trek",
    type: "literary",
    image: `${CMS_BASE}/trivia-trek.jpg`,
    registerUrl: "https://forms.gle/q8L2ua5eW3LepkJi9",
    rulebookUrl: "#",
    venue: "Seminar Hall B",
    time: "10:30 AM",
    day: "Day 1",
    description: "Multi-stage knowledge quest spanning history, pop culture, science and surprise wildcards.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/trivia-trek-1.jpg`,
    ],
  },
  {
    name: "Youth Parliament",
    slug: "youth-parliament",
    type: "literary",
    image: `${CMS_BASE}/youth-parliament.jpg`,
    registerUrl: "https://forms.gle/ko1LGKF87QcHXcUXA",
    rulebookUrl: "#",
    venue: "Main Auditorium",
    time: "11:00 AM",
    day: "Day 2",
    description: "Debate, deliberate and draft resolutions on real-world issues in a model parliament format.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/youth-parliament-1.jpg`,
    ],
  },
  {
    name: "Identity Insights",
    slug: "identity-insights",
    type: "literary",
    image: `${CMS_BASE}/identity-insights.jpg`,
    registerUrl: "https://forms.gle/95i9kfEQe5jTY6WQ8",
    rulebookUrl: "#",
    venue: "Seminar Hall A",
    time: "2:00 PM",
    day: "Day 2",
    description: "Psychological and social scenario analysis — who are you really under pressure?",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/identity-insights-1.jpg`,
    ],
  },
  {
    name: "Brainy Grid",
    slug: "brainy-grid",
    type: "literary",
    image: `${CMS_BASE}/brainy-grid.jpg`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf23Zhn-3_6D1lxYLUi2ZcUXwlZ6H1ZmZay4iIki1q7vDj_Nw/viewform?usp=dialog",
    rulebookUrl: "#",
    venue: "Computer Lab 1",
    time: "10:00 AM",
    day: "Day 1",
    description: "Grid-based wordplay and logic puzzles that stretch both hemispheres simultaneously.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/brainy-grid-1.jpg`,
    ],
  },
  {
    name: "Spell bee",
    slug: "spell-bee",
    type: "literary",
    image: `${CMS_BASE}/spell-bee.jpg`,
    registerUrl: "https://forms.gle/DbsWx74b3efq1jQWA",
    rulebookUrl: "#",
    venue: "Seminar Hall B",
    time: "9:30 AM",
    day: "Day 3",
    description: "The classic spelling challenge, Horizon edition — uncommon words, unusual origins, unforgiving judges.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/spell-bee-1.jpg`,
    ],
  },
  {
    name: "Debate",
    slug: "debate",
    type: "literary",
    image: `${CMS_BASE}/debate.jpg`,
    registerUrl: "https://forms.gle/x23xuTaaVYTKBC4Z7",
    rulebookUrl: "#",
    venue: "Main Auditorium",
    time: "10:00 AM",
    day: "Day 2",
    description: "Parliamentary debate format — sharp arguments, swift rebuttals, and the gavel of justice.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/debate-1.jpg`,
    ],
  },
  {
    name: "Finger Dab",
    slug: "finger-dab",
    type: "literary",
    image: `${CMS_BASE}/finger-dab.jpg`,
    registerUrl: "https://forms.gle/kxgTpkanLaeBe86D6",
    rulebookUrl: "#",
    venue: "Art Block",
    time: "12:00 PM",
    day: "Day 3",
    description: "Finger-painting on a blank canvas — your story told in colour and form with zero digital tools.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/finger-dab-1.jpg`,
    ],
  },
  {
    name: "PPDT",
    slug: "ppdt",
    type: "literary",
    image: `${CMS_BASE}/ppdt.jpg`,
    registerUrl: "https://forms.gle/KdkM5spoVVaQC4Ln8",
    rulebookUrl: "#",
    venue: "Seminar Hall A",
    time: "11:00 AM",
    day: "Day 3",
    description: "Picture Perception and Discussion Test — describe, discuss, unify. Group cohesion under observation.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/ppdt-1.jpg`,
    ],
  },
  {
    name: "Visual Verses",
    slug: "visual-verses",
    type: "literary",
    image: `${CMS_BASE}/visual-verses.jpg`,
    registerUrl: "https://forms.gle/cf7XsTCpfjBv4gpB9",
    rulebookUrl: "#",
    venue: "Art Block",
    time: "2:30 PM",
    day: "Day 3",
    description: "Illustrated poetry slam — pair your words with visuals to create a gallery-worthy spoken art piece.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/visual-verses-1.jpg`,
    ],
  },
  {
    name: "Naqaab",
    slug: "naqaab",
    type: "literary",
    image: `${CMS_BASE}/naqaab.jpg`,
    registerUrl: "https://forms.gle/n6fPLvueHpjH3tyr5",
    rulebookUrl: "#",
    venue: "Open Amphitheatre",
    time: "4:00 PM",
    day: "Day 3",
    description: "Mask-on roleplay where identity is fluid, stories collide and the best actor wins the reveal.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/naqaab-1.jpg`,
    ],
  },
  //literary events end
  {
    name: "Soft Noise",
    slug: "soft-noise",
    type: "cultural",
    image: `${CMS_BASE}/soft-noise.jpg`,
    registerUrl: "#",
    rulebookUrl: "#",
    venue: "Main Stage",
    time: "6:00 PM",
    day: "Day 2",
    description: "An intimate acoustic live performance showcase — unamplified voices, raw instruments, electric atmosphere.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/soft-noise-1.jpg`,
      `${CMS_BASE}/soft-noise-2.jpg`,
    ],
  },
  {
    name: "Cloud Valley Echo",
    slug: "cloud-valley-echo",
    type: "cultural",
    image: `${CMS_BASE}/cloud-valley-echo.jpg`,
    registerUrl: "#",
    rulebookUrl: "#",
    venue: "Open Amphitheatre",
    time: "8:00 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "TBA", phone: "" }
    ],
    facultyCoordinators: [
      { name: "TBA", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/cloud-valley-echo-2.jpg`,
    ],
  },
];

export const EVENT_TYPES = [
  { key: "technical", label: "Technical Events" },
  { key: "fun", label: "Fun Events" },
  { key: "literary", label: "Literary Events" },
  { key: "cultural", label: "Cultural Events" },
];
