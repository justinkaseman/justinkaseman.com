import posed from "react-pose";

const FromRight = posed.div({
  enter: { x: "0%", delay: 0, beforeChildren: 300 },
  exit: { x: "200%", transition: { duration: 300 } },
});

const FromTop = posed.div({
  enter: { y: "0%", delay: 0, beforeChildren: 300 },
  exit: { y: "200%", transition: { duration: 1000 } },
});

const FromLeft = posed.div({
  enter: { x: "0%", delay: 0, beforeChildren: 300 },
  exit: { x: "-200%", transition: { duration: 1000 } },
});

const FromBottom = posed.div({
  enter: {
    y: "0%",
    delay: 0,
    beforeChildren: 300,
    transition: { duration: 500, ease: "easeIn" },
  },
  exit: { y: "-200%", transition: { duration: 3000 } },
});

const Fade = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0, transition: { duration: 3000 } },
});

const DefaultPose = Fade;

export { FromLeft, FromRight, FromTop, FromBottom, Fade, DefaultPose };
