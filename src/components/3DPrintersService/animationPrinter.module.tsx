export const GridPrinterAnimation = {
  transition: { duration: 0.1 },
  whileHover: { scale: 1.02, transition: { duration: 0.1 } },
  whileTap: { scale: 0.9 },
};

export const BackgroundAnimation1 = {
  animate: {
    width: ["100%", "0%"],
    transitionEnd: {
      display: "none",
    },
  },
  transition: {
    duration: 2,
    ease: "easeInOut",
    delay: 0.4,
  },
};

export const BackgroundAnimation2 = {
  animate: {
    width: ["90%", "0%"],
    transitionEnd: {
      display: "none",
    },
  },
  transition: {
    duration: 2,
    ease: "easeInOut",
    delay: 0.2,
  },
};

export const BackgroundAnimation3 = {
  animate: {
    width: ["80%", "0%"],
    transitionEnd: {
      display: "none",
    },
  },
  transition: {
    duration: 2,
    ease: "easeInOut",
  },
};

export const test = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
  },
  transition: {
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1,
  },
};
