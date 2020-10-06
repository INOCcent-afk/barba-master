import gsap from "gsap";

const fadeIn = (container) => {
  const animate = container.querySelectorAll(".a h1");

  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2,
    },
  });

  tl.fromTo(animate, { yPercent: 101 }, { yPercent: 0 });

  return tl;
};

export default fadeIn;
