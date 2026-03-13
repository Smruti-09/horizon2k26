import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".lottie-hero-section");
  const lottieContainer = document.querySelector(".lottie-duck");
  const heroImg = document.querySelector(".lottie-hero-img");
  const fixedContainer = document.querySelector(".lottie-fixed-container");

  if (!heroSection || !lottieContainer || !heroImg || !fixedContainer) return;

  const lottieAnimation = lottie.loadAnimation({
    container: lottieContainer,
    path: "/duck.json",
    renderer: "svg",
    autoplay: false,
  });

  let scrollDirection = "down";
  let lastScrollY = 0;

  window.addEventListener("scroll", () => {
    scrollDirection = window.scrollY > lastScrollY ? "down" : "up";
    lastScrollY = window.scrollY;
  });

  ScrollTrigger.create({
    trigger: heroSection,
    start: "top 80%",
    onEnter: () => gsap.to(fixedContainer, { opacity: 1, duration: 0.3 }),
    onLeaveBack: () => gsap.to(fixedContainer, { opacity: 0, duration: 0.3 }),
  });

  ScrollTrigger.create({
    trigger: heroSection,
    start: "bottom top",
    onEnter: () => gsap.to(fixedContainer, { opacity: 0, duration: 0.3 }),
    onLeaveBack: () => gsap.to(fixedContainer, { opacity: 1, duration: 0.3 }),
  });

  ScrollTrigger.create({
    trigger: heroSection,
    start: "top bottom",
    end: "top 25%",
    scrub: 1,
    onUpdate: (self) => {
      const isMobile = window.innerWidth <= 1000;
      const heroImgInitialWidth = isMobile
        ? window.innerWidth * 0.92
        : window.innerWidth * 0.65;
      const heroImgTargetWidth = isMobile
        ? Math.max(window.innerWidth * 0.52, 170)
        : 300;
      const pushDistance = isMobile
        ? window.innerWidth * 0.2
        : window.innerWidth * 0.12;
      const duckPushDistance = isMobile
        ? -window.innerWidth * 0.12
        : -window.innerWidth * 0.08;

      const currentWidth =
        heroImgInitialWidth -
        self.progress * (heroImgInitialWidth - heroImgTargetWidth);

      gsap.set(heroImg, {
        width: `${currentWidth}px`,
        x: -pushDistance * self.progress,
      });

      gsap.set(lottieContainer, {
        x: duckPushDistance * self.progress,
      });
    },
  });

  // Move duck up as hero section scrolls past 30%
  ScrollTrigger.create({
    trigger: heroSection,
    start: "top 30%",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
      const isMobile = window.innerWidth <= 1000;
      const lottieOffset =
        self.progress * window.innerHeight * (isMobile ? 0.78 : 1.1);

      gsap.set(lottieContainer, {
        y: -lottieOffset,
        rotateY: scrollDirection === "up" ? -180 : 0,
      });
    },
  });

  // Animate duck frames across the full animation section.
  ScrollTrigger.create({
    trigger: heroSection,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
      const scrollDistance = self.scroll() - self.start;
      const pixelsPerFrame = window.innerWidth <= 1000 ? 2.5 : 3;
      const frame =
        Math.floor(scrollDistance / pixelsPerFrame) %
        (lottieAnimation.totalFrames || 1);
      lottieAnimation.goToAndStop(frame, true);

      gsap.set(lottieContainer, {
        rotateY: scrollDirection === "up" ? -180 : 0,
      });
    },
  });
});
