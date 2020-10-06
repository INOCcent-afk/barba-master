import gsap from "gsap";

const revealProject = (container) => {
  const img = container.querySelector(".img");
  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: "power4.out",
    },
  });

  tl.fromTo(img, { scale: 0 }, { scale: 1 });

  return tl;
};

export default revealProject;
