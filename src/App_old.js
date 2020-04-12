import React from "react";
import {
  CSSTransition,
  TransitionGroup,
  Transition,
} from "react-transition-group";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NavItems from "./NavItems";

function App() {
  const [showMain, setShowMain] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);

  const toggleNav = () => setShowMain(!showMain);

  const containerStyles = {
    height: showMain ? "100vh" : "100px",
    fontSize: "20px",
    position: !showMain ? "fixed" : "relative",
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div
        className={`bg-blue-800 transition-all duration-700 w-full flex items-center z-10`}
        style={containerStyles}
      >
        <CSSTransition
          in={showMain}
          timeout={700}
          classNames="fade"
          onEnter={() => setIsOpen(false)}
          onExited={() => setIsOpen(true)}
        >
          <div className="bg-img w-full p-3 h-full flex items-center justify-center">
            <div className="flex flex-col items-center p-5 w-1/3 h-auto z-10">
              <h1 className=" text-center text-white transition-all duration-1000 text-5xl">
                Mark Lorenze Dumalaon
              </h1>

              <span>software engineer</span>
              <button
                className="bg-blue-800 border-solid border-2 border-gray-600  text-white font-bold py-2 px-4"
                onClick={toggleNav}
              >
                <NavLink exact to={`/`}>
                  Learn more about me
                </NavLink>
              </button>
            </div>
          </div>
        </CSSTransition>

        {isOpen && (
          <div className="flex flex-row justify-between w-full nav px-6">
            <div onClick={toggleNav} className="text-white cursor-pointer">
              close
            </div>
            <NavItems />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="main w-full overflow-auto">
          <div className="router-wrapper">
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route path="/experience" component={Experience} />
                      <Route path="/skills" component={Skills} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/" component={About} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
