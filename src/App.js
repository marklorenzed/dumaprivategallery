import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Transition } from "react-transition-group";
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  coverDefaultStyle,
  coverDefaultTransitionStyles,
  contentDefaultStyle,
  contentTransitionStyles,
  buttonDefaultStyles,
  buttonTransitionStyles,
  mainDefaultStyle,
  mainTransitionStyles,
} from "./constants";
import Main from "./pages/Main";
import AnchorLink from "react-anchor-link-smooth-scroll";

library.add(fab, faLongArrowAltRight, faLongArrowAltLeft);

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [coverTransitionStyles, setCoverTransitionStyle] = React.useState(
    coverDefaultTransitionStyles
  );
  const [visible, setVisible] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setVisible(!isOpen);
    }, 1000);
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setCoverTransitionStyle({
          entering: { width: "100vw" },
          entered: { width: "100vw" },
          exiting: { width: "0" },
          exited: { width: "0" },
        });
      } else {
        setCoverTransitionStyle(coverTransitionStyles);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const [activeYear, setActiveYear] = React.useState(2011);

  const handleClickYear = (year) => {
    console.log(year);
    setActiveYear(year);
  };
  return (
    <div className="">
      <Transition in={!isOpen} timeout={500}>
        {(state) => {
          return (
            <div className="">
              <div
                style={{
                  ...coverDefaultStyle,
                  ...coverTransitionStyles[state],
                }}
                className="header w-screen flex items-center justify-center"
              >
                <div
                  className="m-6 md:m-12 flex flex-col items-center"
                  style={{
                    ...contentDefaultStyle,
                    ...contentTransitionStyles[state],
                  }}
                >
                  <h1 className="text-6xl md:text-8xl lg:text-12xl text-center leading-none">
                    Duma & Dona
                  </h1>
                  <h2 className="text-xl lg:text-4xl text-gray-500 text-center">
                    through the years
                  </h2>
                  <button
                    onClick={handleClick}
                    className="nav-button lg:text-3xl text-center mt-4 p-2 pr-4 text-sm flex items-center justify-center"
                  >
                    <FontAwesomeIcon icon="long-arrow-alt-left" />
                    {/* <span className="leading-none">enter</span> */}
                  </button>
                </div>
              </div>

              <div
                style={{
                  ...mainDefaultStyle,
                  ...mainTransitionStyles[state],
                }}
                className="w-full flex justify-center py-40"
              >
                <div className="year-nav fixed top-0 left-0 flex flex-col p-16 text-gray-600 z-10">
                  <div
                    className={`p-5 ${
                      activeYear === "2012" ? "active" : "inactive"
                    }`}
                  >
                    <AnchorLink href="#2012">2012</AnchorLink>
                  </div>
                  <div
                    className={`p-5 ${
                      activeYear === "2013" ? "active" : "inactive"
                    }`}
                  >
                    <AnchorLink href="#2013">2013</AnchorLink>
                  </div>
                  <div
                    className={`p-5 ${
                      activeYear === "2014" ? "active" : "inactive"
                    }`}
                  >
                    <AnchorLink href="#2014">2014</AnchorLink>
                  </div>
                  <div
                    className={`p-5 ${
                      activeYear === "2015" ? "active" : "inactive"
                    }`}
                  >
                    <AnchorLink href="#2015">2015</AnchorLink>
                  </div>
                  <div
                    className={`p-5 ${
                      activeYear === "2016" ? "active" : "inactive"
                    }`}
                  >
                    <AnchorLink href="#2016">2016</AnchorLink>
                  </div>
                  <div
                    className={`p-5 ${
                      activeYear === "2017" ? "active" : "inactive"
                    }`}
                  >
                    <AnchorLink href="#2017">2017</AnchorLink>
                  </div>
                  <div
                    className={`p-5 ${
                      activeYear === "2018" ? "active" : "inactive"
                    }`}
                  >
                    <AnchorLink href="#2018">2018</AnchorLink>
                  </div>
                  <div
                    className={`p-5 ${
                      activeYear === "2019" ? "active" : "inactive"
                    }`}
                  >
                    <AnchorLink href="#2019">2019</AnchorLink>
                  </div>
                  <div
                    className={`p-5 ${
                      activeYear === "2020" ? "active" : "inactive"
                    }`}
                  >
                    <AnchorLink href="#2020">2020</AnchorLink>
                  </div>
                </div>
                <button
                  style={{
                    ...buttonDefaultStyles,
                    ...buttonTransitionStyles[state],
                  }}
                  onClick={handleClick}
                  className="fixed left-0 top-0 lg:text-3xl text-center mt-4 p-16 pt-4 text-sm text-gray-700 z-20"
                >
                  <FontAwesomeIcon icon="long-arrow-alt-right" />
                </button>
                {visible ? (
                  <Main handleYear={handleClickYear} activeYear={activeYear} />
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        }}
      </Transition>
    </div>
  );
}

export default App;
