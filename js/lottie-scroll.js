import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".lottie-about-section");
  const heroSection = document.querySelector(".lottie-hero-section");
  const lottieContainer = document.querySelector(".lottie-duck");
  const heroImg = document.querySelector(".lottie-hero-img");
  const fixedContainer = document.querySelector(".lottie-fixed-container");

  if (!aboutSection || !heroSection || !lottieContainer || !heroImg || !fixedContainer) return;

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

  // Show fixed container when about section enters, hide after hero section leaves
  ScrollTrigger.create({
    trigger: aboutSection,
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

  // Shrink hero image as hero section scrolls in
  const heroImgInitialWidth = heroImg.offsetWidth;
  const heroImgTargetWidth = 300;

  ScrollTrigger.create({
    trigger: heroSection,
    start: "top bottom",
    end: "top 30%",
    scrub: 1,
    onUpdate: (self) => {
      const currentWidth =
        heroImgInitialWidth -
        self.progress * (heroImgInitialWidth - heroImgTargetWidth);
      gsap.set(heroImg, { width: `${currentWidth}px` });
    },
  });

  let isAnimationPaused = false;

  // Move duck up as hero section scrolls past 30%
  ScrollTrigger.create({
    trigger: heroSection,
    start: "top 30%",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
      const lottieOffset = self.progress * window.innerHeight * 1.1;
      isAnimationPaused = self.progress > 0;

      gsap.set(lottieContainer, {
        y: -lottieOffset,
        rotateY: scrollDirection === "up" ? -180 : 0,
      });
    },
  });

  // Animate duck frames — walk animation driven by scroll through about section
  ScrollTrigger.create({
    trigger: aboutSection,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
      if (!isAnimationPaused) {
        const scrollDistance = self.scroll() - self.start;
        const pixelsPerFrame = 3;
        const frame =
          Math.floor(scrollDistance / pixelsPerFrame) %
          (lottieAnimation.totalFrames || 1);
        lottieAnimation.goToAndStop(frame, true);
      }

      gsap.set(lottieContainer, {
        rotateY: scrollDirection === "up" ? -180 : 0,
      });
    },
  });
});
