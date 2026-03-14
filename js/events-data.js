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
    name: "Fate Brings Your Own Words",
    slug: "fate-brings-your-own-words",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/fate-brings-your-own-words.png`,
    registerUrl: "https://forms.gle/MSXMK9ByxoYvZaXn8",
    rulebookUrl: "#",
    venue: "Production Seminar Hall",
    time: "10:00 AM – 11:00 AM",
    day: "Day 3",
    description: "A creative writing contest where your fate envelope holds the theme — reveal it, write it, own it.",
    studentCoordinators: [
      { name: "Sneha Sahu", phone: "" },
      { name: "Dibya Darshan Senapati", phone: "" },
      { name: "Priyambada Sahoo", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Krushnashree Sahoo", phone: "" },
      { name: "Prof. Sushree Sangita Sahoo", phone: "" },
      { name: "Prof. Jayashree Nayak", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/fate-brings-1.jpg`,
    ],
  },
  {
    name: "Trivia Trek",
    slug: "trivia-trek",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/trivia-trek.png`,
    registerUrl: "https://forms.gle/q8L2ua5eW3LepkJi9",
    rulebookUrl: "#",
    venue: "Production Seminar Hall",
    time: "2:00 PM – 4:00 PM",
    day: "Day 3",
    description: "Multi-stage knowledge quest spanning history, pop culture, science and surprise wildcards.",
    studentCoordinators: [
      { name: "Sanjib Baral", phone: "" },
      { name: "Aum Prasad Sahu", phone: "" },
      { name: "Jatin Prasad Nayak", phone: "" },
      { name: "Saismita Nayak", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. Satya Ranjan Pal", phone: "" },
      { name: "Prof. Chandrasekhar Otta", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/trivia-trek-1.jpg`,
    ],
  },
  {
    name: "Youth Parliament",
    slug: "youth-parliament",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/youth-parliament.png`,
    registerUrl: "https://forms.gle/ko1LGKF87QcHXcUXA",
    rulebookUrl: "#",
    venue: "Production Seminar Hall",
    time: "9:00 AM – 12:30 PM",
    day: "Day 1",
    description: "Debate, deliberate and draft resolutions on real-world issues in a model parliament format.",
    studentCoordinators: [
      { name: "Tapti Tanaya Rout", phone: "" },
      { name: "Nikhil Kumar Rai", phone: "" },
      { name: "Jangyaseni Paikaray", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Amulya Bihari Pattnaik", phone: "" },
      { name: "Prof. July Randhari", phone: "" },
      { name: "Prof. Chandra Sekhar Otta", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/youth-parliament-1.jpg`,
    ],
  },
  {
    name: "Identity Insights",
    slug: "identity-insights",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/identity-insights.png`,
    registerUrl: "https://forms.gle/95i9kfEQe5jTY6WQ8",
    rulebookUrl: "#",
    venue: "Room 101, New Building",
    time: "3:00 PM – 4:30 PM",
    day: "Day 2",
    description: "Psychological and social scenario analysis — who are you really under pressure?",
    studentCoordinators: [
      { name: "Ankita Routray", phone: "" },
      { name: "Sanjit Kumar Behera", phone: "" },
      { name: "Banani Sahoo", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Dipak Kumar Mishra", phone: "" },
      { name: "Prof. Dipak Kumar Mishra", phone: "" },
      { name: "Prof. Satyajit Das", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/identity-insights-1.jpg`,
    ],
  },
  {
    name: "Brainy Grid",
    slug: "brainy-grid",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/brainy-grid.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf23Zhn-3_6D1lxYLUi2ZcUXwlZ6H1ZmZay4iIki1q7vDj_Nw/viewform?usp=dialog",
    rulebookUrl: "#",
    venue: "Room 101, New Building",
    time: "9:00 AM – 10:00 AM",
    day: "Day 3",
    description: "Grid-based wordplay and logic puzzles that stretch both hemispheres simultaneously.",
    studentCoordinators: [
      { name: "Yangyaseni Biswal", phone: "" },
      { name: "Sibtar Zayeem", phone: "" },
      { name: "Pratikhya Satapathy", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. Sankar Moharan", phone: "" },
      { name: "Prof. Ansuman Padhi", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/brainy-grid-1.jpg`,
    ],
  },
  {
    name: "Spell bee",
    slug: "spell-bee",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/spell-bee.png`,
    registerUrl: "https://forms.gle/DbsWx74b3efq1jQWA",
    rulebookUrl: "#",
    venue: "Room 101, New Building",
    time: "2:00 PM – 3:00 PM",
    day: "Day 1",
    description: "The classic spelling challenge, Horizon edition — uncommon words, unusual origins, unforgiving judges.",
    studentCoordinators: [
      { name: "SR Arpita, Bhenkateswar Sahoo", phone: "" },
      { name: "Smrutisikha Nayak", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. Bhagirathi Tripathy", phone: "" },
      { name: "Prof. Niroj Kumar Pani", phone: "" },
      { name: "Prof. Janmejaya Rout", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/spell-bee-1.jpg`,
    ],
  },
  {
    name: "Debate",
    slug: "debate",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/debate.png`,
    registerUrl: "https://forms.gle/x23xuTaaVYTKBC4Z7",
    rulebookUrl: "#",
    venue: "Room 101, New Building",
    time: "9:00 AM – 10:00 AM",
    day: "Day 2",
    description: "Parliamentary debate format — sharp arguments, swift rebuttals, and the gavel of justice.",
    studentCoordinators: [
      { name: "Anwesh Kumar Biswal", phone: "" },
      { name: "Shruti Shreeyam", phone: "" },
      { name: "Aditya Kumar Behera", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Abinash Kumar Pujari", phone: "" },
      { name: "Prof. Jyotirekha Das", phone: "" },
      { name: "Prof. Madhuswapna Pattnaik", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/debate-1.jpg`,
    ],
  },
  {
    name: "Finger Dab",
    slug: "finger-dab",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/finger-dab.png`,
    registerUrl: "https://forms.gle/kxgTpkanLaeBe86D6",
    rulebookUrl: "#",
    venue: "Room 102, New Building",
    time: "3:00 PM – 3:45 PM",
    day: "Day 1",
    description: "Finger-painting on a blank canvas — your story told in colour and form with zero digital tools.",
    studentCoordinators: [
      { name: "Rahul Senapati", phone: "" },
      { name: "Sumeet Kumar Rout", phone: "" },
      { name: "Swayamsh Dash", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Suraj Kumar Sahu", phone: "" },
      { name: "Prof. Supriya Lenka", phone: "" },
      { name: "Prof. Dipanjali Behera", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/finger-dab-1.jpg`,
    ],
  },
  {
    name: "PPDT",
    slug: "ppdt",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/ppdt.png`,
    registerUrl: "https://forms.gle/KdkM5spoVVaQC4Ln8",
    rulebookUrl: "#",
    venue: "Room 102, New Building",
    time: "10:00 AM – 11:00 AM",
    day: "Day 2",
    description: "Picture Perception and Discussion Test — describe, discuss, unify. Group cohesion under observation.",
    studentCoordinators: [
      { name: "P. Likhita Reddy", phone: "" },
      { name: "Ramit Naik", phone: "" },
      { name: "Anshika Garnaik", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Meghamala Samant", phone: "" },
      { name: "Prof. Dillip Dash", phone: "" },
      { name: "Prof. Rajib Lochan Sahoo", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/ppdt-1.jpg`,
    ],
  },
  {
    name: "Visual Verses",
    slug: "visual-verses",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/visual-verses.png`,
    registerUrl: "https://forms.gle/cf7XsTCpfjBv4gpB9",
    rulebookUrl: "#",
    venue: "Room 101, New Building",
    time: "3:30 PM – 4:30 PM",
    day: "Day 1",
    description: "Illustrated poetry slam — pair your words with visuals to create a gallery-worthy spoken art piece.",
    studentCoordinators: [
      { name: "Rajeswari Moharana", phone: "" },
      { name: "Animesh Tripathy", phone: "" },
      { name: "Lipsa Rani Panda", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Jemimah Digal", phone: "" },
      { name: "Prof. Monalisa Nayak", phone: "" },
      { name: "Prof. Sunil Kumar Sahu", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/visual-verses-1.jpg`,
    ],
  },
  {
    name: "Naqaab",
    slug: "naqaab",
    type: "literary",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/naqaab.png`,
    registerUrl: "https://forms.gle/n6fPLvueHpjH3tyr5",
    rulebookUrl: "#",
    venue: "Room 102, New Building",
    time: "2:00 PM – 3:00 PM",
    day: "Day 2",
    description: "Mask-on roleplay where identity is fluid, stories collide and the best actor wins the reveal.",
    studentCoordinators: [
      { name: "Ananya Anaswini", phone: "" },
      { name: "Kartick Parida", phone: "" },
      { name: "Ruchismita Dhandi", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Debapriya Parida", phone: "" },
      { name: "Prof. Itirekha Prusty", phone: "" },
      { name: "Prof. Bikash Ch. Parida", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/naqaab-1.jpg`,
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
    venue: "New Building",
    time: "6:00 AM – 12:00 PM",
    day: "Day 1",
    description: "An intimate acoustic live performance showcase — unamplified voices, raw instruments, electric atmosphere.",
    studentCoordinators: [
      { name: "Amar Prasad Dhal", phone: "" },
      { name: "Prayash Agarwalla", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Bhagirathi Tripathy", phone: "" },
      { name: "Prof. Ansuman Padhi", phone: "" },
      { name: "Prof. Kumudini Behera", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/soft-noise-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/soft-noise-2.jpg`,
    ],
  },
  {
    name: "Steel Push",
    slug: "steel-push",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/steel-push.png`,
    registerUrl: "https://forms.gle/8BwpAQe2156evdch7",
    rulebookUrl: "#",
    venue: "New Building",
    time: "8:00 AM – 11:00 AM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Rudra Pratap Nayak", phone: "" },
      { name: "Jogesh Dash", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Priyadarshini Das", phone: "" },
      { name: "Prof. Jyotsna Mundary", phone: "" },
      { name: "Prof. Bibhu Prasad Ganthia", phone: "" }

    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Robo Striker",
    slug: "robo-striker",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/robo-striker.png`,
    registerUrl: "https://forms.gle/k1FUBpQh39dz3bwF9",
    rulebookUrl: "#",
    venue: "New Building",
    time: "3:30 PM – 6:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Himanshu Pattnaik", phone: "" },
      { name: "Abhipsa Khatua", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Pragyandipti Dash", phone: "" },
      { name: "Prof. Babita Singh", phone: "" },
      { name: "Prof. Gaurab Kumar Ghosh", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Drona Master",
    slug: "drona-master",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/drona-master.png`,
    registerUrl: "https://forms.gle/RNhkdoZMkPTENb646",
    rulebookUrl: "#",
    venue: "MP Memorial Stadium",
    time: "3:30 PM – 5:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Debasish Mallick", phone: "" },
      { name: "Raseswaree Mishra", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Aditya Kumar Bhoi", phone: "" },
      { name: "Prof. Rosalin Pradhan", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Line Rush",
    slug: "line-rush",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/line-rush.png`,
    registerUrl: "https://forms.gle/dMU6Lw7hQEjZKqQT9",
    rulebookUrl: "#",
    venue: "New Building, Hall 3",
    time: "8:00 AM – 9:00 AM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Priyanshu Roy", phone: "" },
      { name: "Pritiparna Nayak", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Anup Kumar Swain, ", phone: "" },
      { name: "Prof. Sushree Sangita", phone: "" },
      { name: "Prof. Chinmaya Kumar Nayak", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Plasma Pull",
    slug: "plasma-pull",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/plasma-pull.png`,
    registerUrl: "https://forms.gle/mFRTDM1Q8juXa77t7",
    rulebookUrl: "#",
    venue: "New Building, Hall 3",
    time: "5:30 PM – 6:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Saswat Swarup Sahu", phone: "" },
      { name: "Pinaki Mohanty", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. Kashinath Barik", phone: "" },
      { name: "Prof. Sushismita Tripathy", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
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
    venue: "New Building, Hall 3",
    time: "6:00 PM – 12:00 AM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Bijay Nayak", phone: "" },
      { name: "Sukanya Parida", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. S. Brahmotri Sahoo", phone: "" },
      { name: "Prof. Chandwaj Nayak", phone: "" },
      { name: "Prof. Gaurav Kumar Ghosh", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "SparkTank",
    slug: "sparktank",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/sparktank.png`,
    registerUrl: "https://forms.gle/tPRe13JYGGMokGLs9",
    rulebookUrl: "#",
    venue: "New Building, Hall 3",
    time: "1:30 PM – 3:30 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Debasish Behera", phone: "" },
      { name: "Smrutirekha Moharana", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. Kodanda Dhar", phone: "" },
      { name: "Prof. Ananda Kumar Sahoo", phone: "" },
      { name: "Prof. Sudip Banerjee", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "IPL Auction",
    slug: "ipl-auction",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/ipl-auction.png`,
    registerUrl: "https://forms.gle/t7J2EGmRw88mzYnS8",
    rulebookUrl: "#",
    venue: "New Building, Room 401 & 402",
    time: "1:30 PM – 3:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Biswaranjan Pani", phone: "" },
      { name: "Smrutiprava Das", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Chinmay Kumar Nayak", phone: "" },
      { name: "Prof. Sagar Dash", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "The Logo League",
    slug: "the-logo-league",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/the-logo-league.png`,
    registerUrl: "https://forms.gle/7VMPWXA4FPdSfjuN9",
    rulebookUrl: "#",
    venue: "New Building, Hall 3",
    time: "11:00 AM – 12:00 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Suman Kumar Maharana", phone: "" },
      { name: "Suchismita Sahoo", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. Priyabrata Sahu", phone: "" },
      { name: "Prof. Asutosh Biswal", phone: "" },
      { name: "Prof. Aitihyajet Mohapatra", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "BuzzBrain",
    slug: "buzzbrain",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/buzz-brain.png`,
    registerUrl: "https://forms.gle/HP6mSHsEyYjDPw7FA",
    rulebookUrl: "#",
    venue: "New Building, Room 401 & 402",
    time: "9:00 AM – 10:00 AM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Suman Kumar Ghosh", phone: "" },
      { name: "Banani Sahoo", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. Rabiranjan Murmu", phone: "" },
      { name: "Prof. Sudip Banerjee", phone: "" },
      { name: "Prof. Sidhartha Kumar Samal", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Dalal Street",
    slug: "dalal-street",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/dalal-street.png`,
    registerUrl: "https://forms.gle/njwbk3KYsqTk1r4A7",
    rulebookUrl: "#",
    venue: "New Building, Room 401 & 402",
    time: "3:30 PM – 4:30 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Harmohan Panda", phone: "" },
      { name: "Chinmay Chiranjeeb Seth", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Anup Kumar Bairagi", phone: "" },
      { name: "Prof. Subrat Kumar Nayak", phone: "" },
      { name: "Prof. Ritambhara Pradhan", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Code Craft",
    slug: "code-craft",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/code-craft.png`,
    registerUrl: "https://forms.gle/jgcwzegKP7apFhkQ7",
    rulebookUrl: "#",
    venue: "New Building, Room 401 & 402",
    time: "6:00 AM – 8:00 AM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Suchismita Sahoo", phone: "" },
      { name: "Smrutirekha Moharana", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Biswanath Sethi", phone: "" },
      { name: "Prof. Kajal Sharma", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Blind Code",
    slug: "blind-code",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/blind-code.png`,
    registerUrl: "https://forms.gle/PaCk6cpS43R4djYL8",
    rulebookUrl: "#",
    venue: "New Building, Room 401 & 402",
    time: "5:30 PM - 6:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Suman Kumar Ghosh", phone: "" },
      { name: "Shakti Swarup Sahoo", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Sanjay Kumar Patra", phone: "" },
      { name: "Prof. Sasmita Jena", phone: "" },
      { name: "Prof. Somashree Pathy", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "CodeVerse",
    slug: "code-verse",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/code-verse.png`,
    registerUrl: "https://forms.gle/kwd7rxY91nyceJs79",
    rulebookUrl: "#",
    venue: "New Building, Room 401 & 402",
    time: "8:00 AM - 11:00 AM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Suman Kumar Ghosh", phone: "" },
      { name: "Debasis Behera", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Pragyan Paramita Mohapatra", phone: "" },
      { name: "Prof. Suvendu Kumar Jena", phone: "" },
      { name: "Prof. Dipak Kumar Mishra", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Sherlock Holmes",
    slug: "sherlock-holmes",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/sherlock-holmes.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfBb87GVaBtUEAgUwfZKtZWaB6lkUvXaKvxNAgqRaCGCQmO4w/viewform?usp=publish-editor",
    rulebookUrl: "#",
    venue: "New Building, Room 103",
    time: "6:00 AM – 10:00 AM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Anwesh Pattanaik", phone: "" },
      { name: "Monalisha Tripathy", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. Bidyadhar Biswal", phone: "" },
      { name: "Prof. Binay Kumar Nayak", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Tech Quiz",
    slug: "tech-quiz",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/tech-quiz.png`,
    registerUrl: "https://forms.gle/sirmYeYARQ8RJkWr6",
    rulebookUrl: "#",
    venue: "New Building, Room 401 & 402",
    time: "10:00 AM – 12:00 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Saswat Swarup Sahoo", phone: "" },
      { name: "Preeti Parichita Das", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Kasinath Barik", phone: "" },
      { name: "Prof. Utkalika Pradhan", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Circuit Crafter",
    slug: "circuit-crafter",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/circuit-crafter.png`,
    registerUrl: "https://forms.gle/KRaZtXHgYWgtvjDs8",
    rulebookUrl: "#",
    venue: "New Building, Room 101",
    time: "6:00 AM – 8:00 AM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Smruti Ranjan Dash", phone: "" },
      { name: "Sudeshna Shubhadarshinee", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Subrat Kumar Biswal", phone: "" },
      { name: "Prof. Kajal Sharma", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Matlab Mayhem",
    slug: "matlab-mayhem",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/matlab-mayhem.png`,
    registerUrl: "https://forms.gle/P99adYzpvWKrunFK8",
    rulebookUrl: "#",
    venue: "New Building, Room 101",
    time: "1:30 PM – 3:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Barsha P. Parida", phone: "" },
      { name: "Srinibash Mohapatra", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. Chinmay Kumar Nayak", phone: "" },
      { name: "Prof. Bibhu Prasad Ganthia", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "CAD Clash",
    slug: "cad-clash",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/cad-clash.png`,
    registerUrl: "https://forms.gle/qYDar2DgE6oiEUS76",
    rulebookUrl: "#",
    venue: "New Building, Room 102",
    time: "3:30 PM – 5:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Nandakishore Mahato", phone: "" },
      { name: "Vishwa Ranjan Sahu", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Anand Gupta", phone: "" },
      { name: "Prof. Gaurab Kumar Ghosh", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Build Your Own City",
    slug: "build-your-own-city",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/build-your-own-city.png`,
    registerUrl: "https://forms.gle/oqEyVgt2UV9vV1zS7",
    rulebookUrl: "#",
    venue: "New Building, Hall 3",
    time: "3:30 PM – 6:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Sarmista Nayak", phone: "" },
      { name: "Kamal Lochan Sahu", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Subrat Kumar Nayak", phone: "" },
      { name: "Prof. Pragyan Paramita Mohapatra", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Guess the Chemical",
    slug: "guess-the-chemical",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/guess-the-chemical.png`,
    registerUrl: "https://forms.gle/aAwxCghGmC1keNYC6",
    rulebookUrl: "#",
    venue: "New Building, Room 401 & 402",
    time: "10:00 AM – 12:00 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Saiman Pati", phone: "" },
      { name: "Bandana Tripathy", phone: "" },
      { name: "Soumya Sulaghna Rout", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Rabiranjan Murmu", phone: "" },
      { name: "Prof. Anup Kumar Bairagi", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
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
  //     `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
  //     `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
  //   ],
  // },
  {
    name: "Material Mystery",
    slug: "material-mystery",
    type: "technical",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/material-mystery.png`,
    registerUrl: "https://forms.gle/mXdvmjDhvxfRiDzX7",
    rulebookUrl: "#",
    venue: "Metallurgy Seminar Hall",
    time: "1:30 PM – 3:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Prakash Kumar Behera", phone: "" },
      { name: "Swadesh Kumar Dash", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Bhabani Prasad Sahoo", phone: "" },
      { name: "Prof. Ipsa Tripathy", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
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
    venue: "Edusat Centre",
    time: "4:30 PM – 5:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Suryasnata Mohanty", phone: "" },
      { name: "Jagyanseni Dhal", phone: "" },
      { name: "Chandan Panda", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Rajib Lochan Sahoo", phone: "" },
      { name: "Prof. Bikash Chandra Sahoo", phone: "" },
      { name: "Prof. Rosalin Pradhan", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "AI Art Competition",
    slug: "ai-art-competition",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/ai-art-competition.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfqih0lFd0hEjm6FdIQ0uEcQ74IjejBL5yHObTS00VYWHYVrA/viewform?usp=dialog",
    rulebookUrl: "#",
    venue: "Online",
    time: "2:00 PM – 4:00 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Suchismita Sahoo", phone: "" },
      { name: "Animesh Tripathy", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Jayashree Nayak", phone: "" },
      { name: "Prof. Susanta Kumar Sahoo", phone: "" },
      { name: "Prof. Bibhu Prasad Panda", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "FusionX",
    slug: "fusionx",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/fusionx.png`,
    registerUrl: "https://docs.google.com/forms/d/1Sa7nwnm09jLDuLHnoYsgM3QUGwGQP3SRTTyiDLy8Uro/edit",
    rulebookUrl: "#",
    venue: "SBI Front",
    time: "5:50 PM – 6:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Prakash Hembram", phone: "" },
      { name: "Subhangi Pradhan", phone: "" },
      { name: "Arghyarupa Nayak", phone: "" },
      { name: "Tushar Kant Mohanty", phone: "" },
    ],
    facultyCoordinators: [
      { name: "Prof. July Randhari", phone: "" },
      { name: "Prof. Anand Gupta", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Nach Baliye",
    slug: "nach-baliye",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/nach-baliye.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScxkpPG8CgChW78WWd5B2aEvSAR4HPys82vCM7KnpboBJo71g/viewform?usp=send_form",
    rulebookUrl: "#",
    venue: "Stage",
    time: "8:30 PM - 10:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Snigdha Dash", phone: "" },
      { name: "Ashit Kumar Jena", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Maheswar Pr Behera", phone: "" },
      { name: "Prof. Archana Pattnayak", phone: "" },
      { name: "Prof. Subrat Kumar Biswal", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Logo Design",
    slug: "logo-design",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/logo-design.png`,
    registerUrl: "https://forms.gle/7hSrgKGzXY4oksBZ8",
    rulebookUrl: "#",
    venue: "Online",
    time: "10:00 AM – 12:00 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Rahul Senapti", phone: "" },
      { name: "Sibani Sahoo", phone: "" },
      { name: "Bhupesh Kumar Pradhan", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Sudhansu Bhusan Panda", phone: "" },
      { name: "Prof. Debapriya Parida", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Choreo Clash",
    slug: "choreo-clash",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/choreo-clash.png`,
    registerUrl: "https://forms.gle/sKaVF3C2b3y3PTSx9",
    rulebookUrl: "#",
    venue: "Stage",
    time: "6:30 PM – 8:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Sidhanth Sendriya", phone: "" },
      { name: "shita Nayak", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. July Randhari", phone: "" },
      { name: "Prof. Debasis Nayak", phone: "" },
      { name: "Prof. Smrutiranjan Nayak", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Debonair",
    slug: "debonair",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/debonair.png`,
    registerUrl: "https://forms.gle/squp8Nt7NZHnByfS6",
    rulebookUrl: "#",
    venue: "Stage",
    time: "8:30 PM – 10:30 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Itishree Dash Adhikari", phone: "" },
      { name: "Sheetal Meher", phone: "" },
      { name: "Sinu Reddy", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Sasmita Jena", phone: "" },
      { name: "Prof. Priyadarshini Das", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Guess the Tune",
    slug: "guess-the-tune",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/guess-the-tune.png`,
    registerUrl: "https://forms.gle/XYFZP4ZayGC26AS46",
    rulebookUrl: "#",
    venue: "New Building, Room 103",
    time: "1:30 PM – 2:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Swayamprava Samal", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Sushismita Tripathy", phone: "" },
      { name: "Prof. Dipesh Kumar Nayak", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Poster Design",
    slug: "poster-design",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/poster-design.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScdONT8BvEQeIq-Csxn4Y-OSxX1K-f8W8ZE_zgH9MGe1cYRwA/viewform",
    rulebookUrl: "#",
    venue: "Online",
    time: "2:00 PM – 4:00 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Paranubhav Das", phone: "" },
      { name: "Raseswaree Mishra", phone: "" },
      { name: "Kumar Pratik Behura", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Paresh Kumar Pasayat", phone: "" },
      { name: "Prof. Supriya Priyadarshini", phone: "" },
      { name: "Prof. Dipesh Kumar Nayak", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Mic Drop",
    slug: "mic-drop",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/mic-drop.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe9bEsV7erck7CUEBoZBvJZzD1AkkPredpZBchzA7Vb4r6f9w/viewform?usp=publish-editor",
    rulebookUrl: "#",
    venue: "Edusat Centre",
    time: "9:00 AM – 10:00 AM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Rudra Pratap Behera", phone: "" },
      { name: "Madhusmita Behera", phone: "" },
      { name: "Biranjeet", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Sabyasachi Aich", phone: "" },
      { name: "Prof. Rakesh Mohanty", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Short Film",
    slug: "short-film",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/short-film.png`,
    registerUrl: "https://forms.gle/vrHwRxkjLw7Pm8GM9",
    rulebookUrl: "#",
    venue: "New Building, Room 104",
    time: "3:00 PM – 4:00 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Mohan Pranit Mahali", phone: "" },
      { name: "Suhani Hota", phone: "" },
      { name: "Priyansu Swain", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Brijesh Kumar", phone: "" },
      { name: "Prof. Ipsita Dhara", phone: "" },
      { name: "Prof. Jayashree Nayak", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Photo of The Day-1",
    slug: "photo-of-the-day-1",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/photo-of-the-day-1.png`,
    registerUrl: "https://forms.gle/3Rf8yc1LFsoroTkb7",
    rulebookUrl: "#",
    venue: "Online",
    time: "4:30 PM – 5:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Rahul Mahanta", phone: "" },
      { name: "Priyanshika Singh", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Supriya Sahu", phone: "" },
      { name: "Prof. Sangram Keshari Nayak", phone: "" },
      { name: "Prof. Sudhansu Bhusan Panda", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Photo of The Day-2",
    slug: "photo-of-the-day-2",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/photo-of-the-day-2.png`,
    registerUrl: "https://forms.gle/ofLQHXqHUYfiZVcN7",
    rulebookUrl: "#",
    venue: "Online",
    time: "4:30 PM – 5:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Rahul Mahanta", phone: "" },
      { name: "Priyanshika Singh", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Supriya Sahu", phone: "" },
      { name: "Prof. Sangram Keshari Nayak", phone: "" },
      { name: "Prof. Sudhansu Bhusan Panda", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Photo of The Day-3",
    slug: "photo-of-the-day-3",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/photo-of-the-day-3.png`,
    registerUrl: "https://forms.gle/4vjmqBncmAno7At4A",
    rulebookUrl: "#",
    venue: "Online",
    time: "4:30 PM – 5:30 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Rahul Mahanta", phone: "" },
      { name: "Priyanshika Singh", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Supriya Sahu", phone: "" },
      { name: "Prof. Sangram Keshari Nayak", phone: "" },
      { name: "Prof. Sudhansu Bhusan Panda", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
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
    venue: "Online",
    time: "2:30 PM – 3:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Kirti Swaroop Dash", phone: "" },
      { name: "Shradhanjali Sahoo", phone: "" },
      { name: "Sahil Kumar Giri", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Krushnashree Sahoo", phone: "" },
      { name: "Prof. Sushanta Kumar Samal", phone: "" },
      { name: "Prof. Ajit Kumar Panda ", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Destiny Duo",
    slug: "destiny-duo",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/destiny-duo.png`,
    registerUrl: "https://forms.gle/hXcQeGeeSD2QWUJX7",
    rulebookUrl: "#",
    venue: "New Building, Room 103",
    time: "3:30 PM – 6:30 PM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Pratyush Nayak", phone: "" },
      { name: "Dibyasa Senapati", phone: "" },
      { name: "Aum Pratik Dhal", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Bibhupra Hota", phone: "" },
      { name: "Prof. Bibhu Prasad Ganthia", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Paper Dance",
    slug: "paper-dance",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/paper-dance.png`,
    registerUrl: "https://forms.gle/x77S8ZLPGnrieukB6",
    rulebookUrl: "#",
    venue: "Dome",
    time: "2:30 PM – 6:30 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Deepak Kumar Behera", phone: "" },
      { name: "Monalisa Nayak", phone: "" },
      { name: "Sumeet Rout", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Sasmita Jena", phone: "" },
      { name: "Prof. Lakhmikanta Mishra", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Burst the Balloon",
    slug: "burst-the-balloon",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/burst-the-balloon.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdF0ozTdr2gEAXxknTFAROBDPGGPWWFihzoOqT8ja38w1nF4A/viewform?usp=dialog",
    rulebookUrl: "#",
    venue: "Dome",
    time: "8:00 AM – 10:00 AM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Piyush Parida", phone: "" },
      { name: "Sohel Priyadarsini Rout", phone: "" },
      { name: "Saurav Singh", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Gourab Kumar Ghosh", phone: "" },
      { name: "Prof. Soumya Ranjan Mishra", phone: "" },
      { name: "Prof. Bhabani Prasad Sahoo ", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Mystery Room",
    slug: "mystery-room",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/mystery-room.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSevBL5-5s5uisLBTZr0x6E60-Xt3syJzjoOseYp0u5mL2GBtg/viewform?usp=publish-editor",
    rulebookUrl: "#",
    venue: "Old Building",
    time: "6:00 AM – 10:00 AM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Yangyaseni Biswal", phone: "" },
      { name: "Dibyasmita Nayak", phone: "" },
      { name: "Abhisek Swain", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Soumyaranjan Pradhan", phone: "" },
      { name: "Prof. Gyanabrata Sahoo", phone: "" },
      { name: "Prof. Sunil Kumar Sahoo ", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Step-it Up",
    slug: "step-it-up",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/step-it-up.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSepldUbZQhgQgIGIqbuYuSj3MstknXxAuzZx7w-fv5wBHu5jQ/viewform?usp=dialog",
    rulebookUrl: "#",
    venue: "OC",
    time: "10:00 AM – 11:00 AM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Rohan Boidar", phone: "" },
      { name: "Monalisa Nayak", phone: "" },
      { name: "Ipsita Kar", phone: "" },
      { name: "Omkarnath Sahoo", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Jogendra Majhi", phone: "" },
      { name: "Prof. Bikash Chandra Sahoo", phone: "" },
      { name: "Prof. Anup Pattnaik", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Scavenger Hunt",
    slug: "scavenger-hunt",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/scavenger-hunt.png`,
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdEDBxiZjl2Rl4LCTpgLJ1bBfbpSLtmDMwL4xSka9NpMhWckg/viewform?usp=dialog",
    rulebookUrl: "#",
    venue: "New Building",
    time: "1:30 PM – 3:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Debashish Sahoo", phone: "" },
      { name: "Madhusmita Behera", phone: "" },
      { name: "Jogesh Dash", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Aditya Kumar Bhoi", phone: "" },
      { name: "Prof. Sushanta Kumar Sahoo", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Gully Cricket",
    slug: "gully-cricket",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/gully-cricket.png`,
    registerUrl: "https://forms.gle/cvz4JPKAArUQhtqf7",
    rulebookUrl: "#",
    venue: "MP Memorial Stadium",
    time: "6:00 AM – 10:00 AM",
    day: "Day 1",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Pranati Behera", phone: "" },
      { name: "Sushree A. Nayak", phone: "" },
      { name: "Saijyoti Rout", phone: "" },
      { name: "Hitesh Mohanty", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Kajal Sharma", phone: "" },
      { name: "Prof. Sasmita Jena", phone: "" },
      { name: "Prof. Swagatika Nayak", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Dicey Dare",
    slug: "dicey-dare",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/dicey-dare.png`,
    registerUrl: "https://forms.gle/rCwA8HzrxLhdSmpE7",
    rulebookUrl: "#",
    venue: "Dome",
    time: "11:00 AM – 2:30 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Tulsi Hansda", phone: "" },
      { name: "Sibani Tripathy", phone: "" },
      { name: "Sidharth Bisoi", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Anukul Prasad Parhi", phone: "" },
      { name: "Prof. Sangita Pal", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "BlindFold",
    slug: "blindfold",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/blindfold.png`,
    registerUrl: "https://forms.gle/WsVtnaKLPJcFtHVW7",
    rulebookUrl: "#",
    venue: "OC",
    time: "3:30 PM – 4:30 PM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Ipsita Utkalika Nayak", phone: "" },
      { name: "Ankita Bej", phone: "" },
      { name: "Dhananjay Pattanayak", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Dipanjali Behera", phone: "" },
      { name: "Prof. Bhagirathi Tripathy", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Squid Game",
    slug: "squid-game",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/squid-game.png`,
    registerUrl: "https://forms.gle/mHoML9FFwoWjMTBu6",
    rulebookUrl: "#",
    venue: "MP Memorial Stadium",
    time: "10:00 AM – 11:00 AM",
    day: "Day 2",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Smrutisikha Baral", phone: "" },
      { name: "Barsha Das", phone: "" },
      { name: "Biranjeet Mohanty", phone: "" },

    ],
    facultyCoordinators: [
      { name: "Prof. Sandeep Kumar Sahoo", phone: "" },
      { name: "Prof. Biranchi Narayan Behera", phone: "" },
      { name: "Prof. Kailash Chandra Paul", phone: "" }
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },
  {
    name: "Guesstimate",
    slug: "guesstimate",
    type: "cultural",
    image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/guesstimate.png`,
    registerUrl: "https://forms.gle/aqQ2sF2D86MUXpV59",
    rulebookUrl: "#",
    venue: "New Building, Room 102",
    time: "4:30 PM – 6:30 PM",
    day: "Day 3",
    description: "The closing night mega concert — bands, DJs, dancers, and the entire Horizon community united.",
    studentCoordinators: [
      { name: "Saswat Mallick", phone: "" },
      { name: "Jeetu Barik", phone: "" },
      { name: "Sonali Patra", phone: "" }
    ],
    facultyCoordinators: [
      { name: "Prof. Anshuman Padhi", phone: "" },
      { name: "Prof. July Randhari", phone: "" },
    ],
    gallery: [
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-1.jpg`,
      `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/cloud-valley-echo-2.jpg`,
    ],
  },


];

export const EVENT_TYPES = [
  { key: "technical", label: "Technical Events" },
  { key: "fun", label: "Fun Events" },
  { key: "literary", label: "Literary Events" },
  { key: "cultural", label: "Cultural Events" },
];
