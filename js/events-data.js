/*
 * ─── Horizon 2026 — Event Data ───────────────────────────
 *
 * CMS: Cloudinary (free tier)
 * Cloud name is configured in CMS_BASE below.
 * Upload poster images to: horizon2026/posters/ in your Cloudinary dashboard.
 *
 * Image URL pattern (with auto-optimization):
 *   ${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/<slug>.png
 */

const CMS_BASE = "https://res.cloudinary.com/daz9tusly/image/upload";

export const EVENTS = [
  // literary events
  {
    name: "Fate brings your own words",
    slug: "fate-brings-your-own-words",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/fate-brings-your-own-words.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/trivia-trek.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/youth-parliament.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/identity-insights.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/brainy-grid.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/spell-bee.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/debate.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/finger-dab.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/ppdt.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/visual-verses.png`,
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
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/naqaab.png`,
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

  //technical events
  {
    name: "Steel Sprint",
    slug: "steel-sprint",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/steel-sprint.png`,
    registerUrl: "https://forms.gle/A37ZwgVdA9nee5pY6",
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
    name: "Steel Push",
    slug: "steel-push",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/steel-push.png`,
    registerUrl: "https://forms.gle/8BwpAQe2156evdch7",
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
  {
    name: "Robo Striker",
    slug: "robo-striker",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/robo-striker.png`,
    registerUrl: "https://forms.gle/k1FUBpQh39dz3bwF9",
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
  {
    name: "Drona Master",
    slug: "drona-master",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/drona-master.png`,
    registerUrl: "https://forms.gle/RNhkdoZMkPTENb646",
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
  {
    name: "Line Rush",
    slug: "line-rush",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/line-rush.png`,
    registerUrl: "https://forms.gle/dMU6Lw7hQEjZKqQT9",
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
  {
    name: "Plasma Pull",
    slug: "plasma-pull",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/plasma-pull.png`,
    registerUrl: "https://forms.gle/mFRTDM1Q8juXa77t7",
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

  //IIEC 
  {
    name: "Hackathon",
    slug: "hackathon",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/hackathon.png`,
    registerUrl: "https://forms.gle/TizQTn28NnqddjPq9",
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
  {
    name: "SparkTank",
    slug: "sparktank",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/sparktank.png`,
    registerUrl: "https://forms.gle/tPRe13JYGGMokGLs9",
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
  {
    name: "IPL Auction",
    slug: "ipl-auction",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/ipl-auction.png`,
    registerUrl: "https://forms.gle/t7J2EGmRw88mzYnS8",
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
  {
    name: "The Logo League",
    slug: "the-logo-league",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/the-logo-league.png`,
    registerUrl: "https://forms.gle/7VMPWXA4FPdSfjuN9",
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
  {
    name: "BuzzBrain",
    slug: "buzzbrain",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/buzz-brain.png`,
    registerUrl: "https://forms.gle/HP6mSHsEyYjDPw7FA",
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
  {
    name: "Dalal Street",
    slug: "dalal-street",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/dalal-street.png`,
    registerUrl: "https://forms.gle/njwbk3KYsqTk1r4A7",
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
  {
    name: "Code Craft",
    slug: "code-craft",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/code-craft.png`,
    registerUrl: "https://forms.gle/jgcwzegKP7apFhkQ7",
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
  {
    name: "Blind Code",
    slug: "blind-code",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/blind-code.png`,
    registerUrl: "https://forms.gle/PaCk6cpS43R4djYL8",
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
  {
    name: "CodeVerse",
    slug: "code-verse",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/code-verse.png`,
    registerUrl: "https://forms.gle/kwd7rxY91nyceJs79",
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
  {
    name: "Sherlock Holmes",
    slug: "sherlock-holmes",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/sherlock-holmes.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfBb87GVaBtUEAgUwfZKtZWaB6lkUvXaKvxNAgqRaCGCQmO4w/viewform?usp=publish-editor",
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
  {
    name: "Tech Quiz",
    slug: "tech-quiz",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/tech-quiz.png`,
    registerUrl: "https://forms.gle/sirmYeYARQ8RJkWr6",
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
  {
    name: "Circuit Crafter",
    slug: "circuit-crafter",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/circuit-crafter.png`,
    registerUrl: "https://forms.gle/KRaZtXHgYWgtvjDs8",
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
  {
    name: "Matlab Mayhem",
    slug: "matlab-mayhem",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/matlab-mayhem.png`,
    registerUrl: "https://forms.gle/P99adYzpvWKrunFK8",
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
  {
    name: "CAD Clash",
    slug: "cad-clash",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/cad-clash.png`,
    registerUrl: "https://forms.gle/qYDar2DgE6oiEUS76",
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
  {
    name: "Build Your Own City",
    slug: "build-your-own-city",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/build-your-own-city.png`,
    registerUrl: "https://forms.gle/oqEyVgt2UV9vV1zS7",
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
  {
    name: "Guess the Chemical",
    slug: "guess-the-chemical",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/guess-the-chemical.png`,
    registerUrl: "https://forms.gle/aAwxCghGmC1keNYC6",
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
  // {
  //   name: "Rapid Reagent Run",
  //   slug: "rapid-reagent-run",
  //   type: "technical",
  //   image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/rapid-reagent-run.png`,
  //   registerUrl: "https://forms.gle/qPS1ZLvMPdx4dvgc6",
  //   rulebookUrl: "#",
  //   venue: "Open Amphitheatre",
  //   time: "8:00 PM",
  //   day: "Day 3",
  //   description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
  //   studentCoordinators: [
  //     { name: "TBA", phone: "" }
  //   ],
  //   facultyCoordinators: [
  //     { name: "TBA", phone: "" }
  //   ],
  //   gallery: [
  //     `${CMS_BASE}/cloud-valley-echo-1.jpg`,
  //     `${CMS_BASE}/cloud-valley-echo-2.jpg`,
  //   ],
  // },
  {
    name: "Material Mystery",
    slug: "material-mystery",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/material-mystery.png`,
    registerUrl: "https://forms.gle/mXdvmjDhvxfRiDzX7",
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
  // Tech events end

  // Cultural Events
  {
    name: "Swaraagini",
    slug: "swaraagini",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/swaraagini.png`,
    registerUrl: "https://forms.gle/Djps8bJGjGdsqpN78",
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
  {
    name: "AI Art Competition",
    slug: "ai-art-competition",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/ai-art-competition.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfqih0lFd0hEjm6FdIQ0uEcQ74IjejBL5yHObTS00VYWHYVrA/viewform?usp=dialog",
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
  {
    name: "FusionX",
    slug: "fusionx",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/fusionx.png`,
    registerUrl: "https://docs.google.com/forms/d/1Sa7nwnm09jLDuLHnoYsgM3QUGwGQP3SRTTyiDLy8Uro/edit",
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
  {
    name: "Nach Baliye",
    slug: "nach-baliye",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/nach-baliye.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScxkpPG8CgChW78WWd5B2aEvSAR4HPys82vCM7KnpboBJo71g/viewform?usp=send_form",
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
  {
    name: "Logo Design",
    slug: "logo-design",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/logo-design.png`,
    registerUrl: "https://forms.gle/7hSrgKGzXY4oksBZ8",
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
  {
    name: "Choreo Clash",
    slug: "choreo-clash",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/choreo-clash.png`,
    registerUrl: "https://forms.gle/sKaVF3C2b3y3PTSx9",
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
  {
    name: "Debonair",
    slug: "debonair",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/debonair.png`,
    registerUrl: "https://forms.gle/squp8Nt7NZHnByfS6",
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
  {
    name: "Guess the Tune",
    slug: "guess-the-tune",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/guess-the-tune.png`,
    registerUrl: "https://forms.gle/XYFZP4ZayGC26AS46",
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
  {
    name: "Poster Design",
    slug: "poster-design",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/poster-design.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScdONT8BvEQeIq-Csxn4Y-OSxX1K-f8W8ZE_zgH9MGe1cYRwA/viewform",
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
  {
    name: "Mic Drop",
    slug: "mic-drop",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/mic-drop.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe9bEsV7erck7CUEBoZBvJZzD1AkkPredpZBchzA7Vb4r6f9w/viewform?usp=publish-editor",
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
  {
    name: "Short Film",
    slug: "short-film",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/short-film.png`,
    registerUrl: "https://forms.gle/vrHwRxkjLw7Pm8GM9",
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
  {
    name: "Photo of The Day-1",
    slug: "photo-of-the-day-1",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/photo-of-the-day-1.png`,
    registerUrl: "https://forms.gle/3Rf8yc1LFsoroTkb7",
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
  {
    name: "Photo of The Day-2",
    slug: "photo-of-the-day-2",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/photo-of-the-day-2.png`,
    registerUrl: "https://forms.gle/ofLQHXqHUYfiZVcN7",
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
  {
    name: "Photo of The Day-3",
    slug: "photo-of-the-day-3",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/photo-of-the-day-3.png`,
    registerUrl: "https://forms.gle/4vjmqBncmAno7At4A",
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
  // fun events
  {
    name: "Digital Duel",
    slug: "digital-duel",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/digital-duel.png`,
    registerUrl: "https://forms.gle/JhvZtgXnRkWDiFKa9",
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
  {
    name: "Destiny Duo",
    slug: "destiny-duo",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/destiny-duo.png`,
    registerUrl: "https://forms.gle/hXcQeGeeSD2QWUJX7",
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
  {
    name: "Paper Dance",
    slug: "paper-dance",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/paper-dance.png`,
    registerUrl: "https://forms.gle/x77S8ZLPGnrieukB6",
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
  {
    name: "Burst the Balloon",
    slug: "burst-the-balloon",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/burst-the-balloon.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdF0ozTdr2gEAXxknTFAROBDPGGPWWFihzoOqT8ja38w1nF4A/viewform?usp=dialog",
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
  {
    name: "Mystery Room",
    slug: "mystery-room",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/mystery-room.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSevBL5-5s5uisLBTZr0x6E60-Xt3syJzjoOseYp0u5mL2GBtg/viewform?usp=publish-editor",
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
  {
    name: "Step-it Up",
    slug: "step-it-up",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/step-it-up.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSepldUbZQhgQgIGIqbuYuSj3MstknXxAuzZx7w-fv5wBHu5jQ/viewform?usp=dialog",
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
  {
    name: "Scavenger Hunt",
    slug: "scavenger-hunt",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/scavenger-hunt.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdEDBxiZjl2Rl4LCTpgLJ1bBfbpSLtmDMwL4xSka9NpMhWckg/viewform?usp=dialog",
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
  {
    name: "Gully Cricket",
    slug: "gully-cricket",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/gully-cricket.png`,
    registerUrl: "https://forms.gle/cvz4JPKAArUQhtqf7",
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
  {
    name: "Dicey Dare",
    slug: "dicey-dare",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/dicey-dare.png`,
    registerUrl: "https://forms.gle/rCwA8HzrxLhdSmpE7",
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
  {
    name: "BlindFold",
    slug: "blindfold",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/blindfold.png`,
    registerUrl: "https://forms.gle/WsVtnaKLPJcFtHVW7",
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
  {
    name: "Squid Game",
    slug: "squid-game",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/squid-game.png`,
    registerUrl: "https://forms.gle/mHoML9FFwoWjMTBu6",
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
  {
    name: "Guesstimate",
    slug: "guesstimate",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/guesstimate.png`,
    registerUrl: "https://forms.gle/aqQ2sF2D86MUXpV59",
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
