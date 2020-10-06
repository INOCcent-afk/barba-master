import barba from "@barba/core";
import {
  fadeIn,
  fadeOut,
  loadAni,
  leaveDetail,
  revealProject,
} from "./animations";
import LocomotiveScroll from "locomotive-scroll";

let scroll;

const clecks = (container) => {
  const btn = container.querySelector("button");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("red");
  });
};

barba.hooks.after(() => {
  scroll.update();
});

barba.init({
  transitions: [
    {
      name: "detail",

      to: {
        namespace: ["detail"],
      },
      once({ next }) {
        fadeIn(next.container);
        clecks(next.container);
        revealProject(next.container);
        smooth();
      },
      leave: ({ current }) => fadeOut(current.container),
      enter({ next }) {
        fadeIn(next.container);
        revealProject(next.container);
        clecks(next.container);
      },
    },
    {
      name: "general-transition",
      once: ({ next }) => {
        loadAni(next.container);
        clecks(next.container);
        smooth();
      },
      leave: ({ current }) => fadeOut(current.container),
      enter: ({ next }) => {
        fadeIn(next.container);
        clecks(next.container);
      },
      beforeEnter() {
        scroll.setScroll(0, 0);
      },
    },
    {
      name: "from-detail",
      from: {
        namespace: ["detail"],
      },
      leave: ({ current }) => leaveDetail(current.container),
      enter({ next }) {
        fadeIn(next.container);
        clecks(next.container);
        smooth();
      },
    },
  ],
});

function smooth() {
  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
}
