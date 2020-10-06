import gsap from "gsap";

const leaveDetail = (container) => {
  const img = container.querySelector(".img");
  const animate = container.querySelectorAll(".a h1");

  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: "power4.out",
    },
  });

  tl.fromTo(img, { scale: 1 }, { scale: 0 }).fromTo(
    animate,
    { yPercent: 0 },
    { yPercent: 101 },
    "-=1"
  );

  return tl;
};

export default leaveDetail;
