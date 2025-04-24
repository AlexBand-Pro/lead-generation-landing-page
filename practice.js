gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".dynamic-scale").forEach(card => {
  gsap.fromTo(card,
    { scale: 0.7 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 98%",
        end: "top 40%",
        scrub: true,
      }
    }
  );
});