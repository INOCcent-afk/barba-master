import gsap from "gsap";

const fadeOut = (container) => {
  const animate = container.querySelectorAll(".a h1");

  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2,
    },
  });

  tl.fromTo(animate, { yPercent: 0 }, { yPercent: 101 });

  return tl;
};

export default fadeOut;
