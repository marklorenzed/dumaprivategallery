export const coverDefaultStyle = {
  transition: `opacity ${500}ms ease-in-out`,
  transitionTimingFunction: "cubic-bezier(1,.33,.11,.92)",
  position: "absolute",
};

export const coverDefaultTransitionStyles = {
  entering: { opacity: "1" },
  entered: { opacity: "1", display: "true" },
  exiting: { opacity: "0" },
  exited: { opacity: "0", display: "none" },
};

export const mainDefaultStyle = {
  transition: `opacity ${500}ms ease-in-out`,
  transitionTimingFunction: "cubic-bezier(1,.33,.11,.92)",
  position: "absolute",
};

export const mainTransitionStyles = {
  entering: { opacity: "0" },
  entered: { opacity: "0", display: "none" },
  exiting: { opacity: "1" },
  exited: { opacity: "1", display: "true" },
};

export const contentDefaultStyle = {
  transition: `opacity 100ms ease-in-out`,
  opacity: 0,
};

export const contentTransitionStyles = {
  entering: { opacity: 1, transitionDelay: "400ms" },
  entered: { opacity: 1, transitionDelay: "400ms" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const buttonDefaultStyles = {
  transition: `opacity 500ms ease-in-out`,
  transitionDelay: "300ms",
  opacity: 1,
};

export const buttonTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0, display: "none" },
  exiting: { opacity: 1 },
  exited: { opacity: 1, display: "true" },
};
