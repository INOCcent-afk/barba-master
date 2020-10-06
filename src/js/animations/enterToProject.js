import gsap from "gsap";

const enterToProject = (container) => {
  return gsap.to(container, { autoAlpha: 0, duration: 2 });
};

export default enterToProject;
