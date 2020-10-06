import gsap from "gsap";

const loadAni = (container) => {
  return gsap.from(container, { autoAlpha: 0, duration: 2 });
};

export default loadAni;
