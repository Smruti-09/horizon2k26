import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const currentPath = window.location.pathname;
  const isIndexPage = currentPath === "/" || currentPath.endsWith("index.html");

  if (isIndexPage) {
    const preloader = document.createElement("div");
    preloader.className = "carnival-preloader";
    preloader.innerHTML = `
      <div class="jackpot-machine">
        <div class="jackpot-window">
          <div class="jackpot-reel reel-1">
            <div>🍒</div><div>🍋</div><div>⭐</div><div>7️⃣</div><div>🍒</div><div>🍋</div><div>⭐</div><div>7️⃣</div>
          </div>
        </div>
        <div class="jackpot-window">
          <div class="jackpot-reel reel-2 line-offset">
            <div>⭐</div><div>🍒</div><div>🍋</div><div>7️⃣</div><div>⭐</div><div>🍒</div><div>🍋</div><div>7️⃣</div>
          </div>
        </div>
        <div class="jackpot-window">
          <div class="jackpot-reel reel-3">
            <div>🍋</div><div>⭐</div><div>🍒</div><div>7️⃣</div><div>🍋</div><div>⭐</div><div>🍒</div><div>7️⃣</div>
          </div>
        </div>
      </div>
      <div class="preloader-text">Loading Magic...</div>
      <div class="jackpot-text">JACKPOT!!</div>
    `;
    document.body.appendChild(preloader);

    const runInitialTransition = () => {
      // animate spinning and stopping on the 4th item (7️⃣) which is at position -240px
      const reelSpin = gsap.timeline();
      reelSpin.to(".reel-1", { y: -240, duration: 1.2, ease: "back.out(1)" }, 0);
      reelSpin.to(".reel-2", { y: -240, duration: 1.5, ease: "back.out(1)" }, 0.2);
      reelSpin.to(".reel-3", { y: -240, duration: 1.8, ease: "back.out(1)" }, 0.4);

      reelSpin.to(".preloader-text", { autoAlpha: 0, duration: 0.2 }, 1.8);
      reelSpin.to(".jackpot-text", { autoAlpha: 1, scale: 1.2, duration: 0.5, ease: "elastic.out(1, 0.3)" }, 1.8);

      reelSpin.to(preloader, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
        delay: 0.8,
        onComplete: () => {
          preloader.remove();
          revealTransition();
        }
      });
    };

    if (document.readyState === "complete") {
      runInitialTransition();
    } else {
      window.addEventListener("load", runInitialTransition);
    }
  } else {
    // Other pages just reveal normally without the slot machine preloader
    revealTransition();
  }

  function revealTransition() {
    return new Promise((resolve) => {
      gsap.set(".transition-overlay", { scaleY: 1, transformOrigin: "top" });
      gsap.to(".transition-overlay", {
        scaleY: 0,
        duration: 0.6,
        stagger: -0.1,
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });
  }

  function animateTransition() {
    return new Promise((resolve) => {
      gsap.set(".transition-overlay", { scaleY: 0, transformOrigin: "bottom" });
      gsap.to(".transition-overlay", {
        scaleY: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });
  }

  function closeMenuIfOpen() {
    const menuToggleBtn = document.querySelector(".menu-toggle-btn");
    if (menuToggleBtn && menuToggleBtn.classList.contains("menu-open")) {
      menuToggleBtn.click();
    }
  }

  function isSamePage(href) {
    if (!href || href === "#" || href === "") return true;

    const currentPath = window.location.pathname;

    if (href === currentPath) return true;

    if (
      (currentPath === "/" || currentPath === "/index.html") &&
      (href === "/" ||
        href === "/index.html" ||
        href === "index.html" ||
        href === "./index.html")
    ) {
      return true;
    }

    const currentFileName = currentPath.split("/").pop() || "index.html";
    const hrefFileName = href.split("/").pop();

    if (currentFileName === hrefFileName) return true;

    return false;
  }

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      console.log("Link clicked:", href);
      console.log("Current path:", window.location.pathname);

      if (
        href &&
        (href.startsWith("http") ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:"))
      ) {
        console.log("External link - allowing default");
        return;
      }

      if (isSamePage(href)) {
        console.log("Same page detected - preventing navigation");
        event.preventDefault();
        closeMenuIfOpen();
        return;
      }

      console.log("Different page - doing transition");
      event.preventDefault();

      animateTransition().then(() => {
        window.location.href = href;
      });
    });
  });
});
