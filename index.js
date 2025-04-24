gsap.registerPlugin(ScrollTrigger);

setTimeout(() => {
  document.getElementById("intro--client-name").classList.add("visible");
  document.querySelector("h1").classList.add("visible");
}, 600);

setTimeout(() => {
  document.getElementById("intro--client-hero-text").classList.add("visible");
}, 1100);

setTimeout(() => {
  document.getElementById("hero-img").classList.add("visible");
}, 1600);

function zoomImageOnScroll() {
  const img = document.getElementById("hero-img");
  const viewportHeight = window.innerHeight;

  const rect = img.getBoundingClientRect();
  const imgCenter = rect.top + rect.height / 2;

  if (imgCenter >= viewportHeight / 2) {
    const distanceFromCenter = Math.abs(viewportHeight / 2 - imgCenter);
    const maxDistance = viewportHeight / 2 + rect.height;

    // Increase the zoom amount, here I've bumped it to 0.2 for a more noticeable effect
    const scale =
      0.862 + (1 - Math.min(distanceFromCenter / maxDistance, 1)) * 0.3;
    img.style.transform = `scale(${scale})`;
  } else {
    img.style.transform = `scale(1.17)`;
  }
}

function revealOnScroll() {
  const element = document.getElementById("animation-section-heading");

  const rect = element.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight - 450;

  if (isVisible) {
    element.classList.add("visible");
  }
}

function scaleCardsOnScroll() {
  const cards = document.querySelectorAll(".dynamic-scale");
  const viewportHeight = window.innerHeight;

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardTop = rect.top;

    const startScalingY = viewportHeight; // Start when top hits bottom
    const fullScaleY = viewportHeight / 2; // Full size when top hits center

    // Calculate progress regardless of position
    const progress = (startScalingY - cardTop) / (startScalingY - fullScaleY);
    const clampedProgress = Math.max(0, Math.min(progress, 1));

    const scale = 0.7 + clampedProgress * 0.3;
    card.style.transform = `scale(${scale})`;
  });
}

gsap.utils.toArray(".dynamic-scale").forEach((card) => {
  gsap.fromTo(
    card,
    { scale: 0.7 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 98%",
        end: "top 60%",
        scrub: true,
      },
    }
  );
});

gsap.utils.toArray(".signature-img").forEach((card) => {
  gsap.fromTo(
    card,
    { scale: 0 },
    {
      scale: 1,
      duration: 0.3,
      ease: "power4.in",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    }
  );
});

window.addEventListener("scroll", zoomImageOnScroll);
window.addEventListener("resize", zoomImageOnScroll);

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("resize", revealOnScroll);

window.addEventListener("scroll", scaleCardsOnScroll);
window.addEventListener("resize", scaleCardsOnScroll);

zoomImageOnScroll();
revealOnScroll();
scaleCardsOnScroll();
