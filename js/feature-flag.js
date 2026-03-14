// ============================================
// FEATURE FLAG — Coming Soon Mode
// ============================================
// Set to true  → all pages redirect to /coming-soon
// Set to false → full website, /coming-soon redirects to /
// ============================================

const COMING_SOON_MODE = false;

(function () {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const isComingSoonPage =
    path === "/coming-soon" || path === "/coming-soon.html";

  if (COMING_SOON_MODE && !isComingSoonPage) {
    // Redirect every page to the coming soon page
    window.location.replace("/coming-soon");
  } else if (!COMING_SOON_MODE && isComingSoonPage) {
    // Coming soon is off — bounce back to home
    window.location.replace("/");
  }
})();

import { inject } from '@vercel/analytics';
inject();
