import React from "react";
import { data } from "../data/data";
import Fade from "react-reveal/Fade";
import FadeInSection from "../FadeInSection";
import VizSensor from "react-visibility-sensor";
import handleViewport from "react-in-viewport";

const Section = (props) => {
  const { inViewport, forwardedRef, item } = props;
  const color = inViewport ? "#217ac0" : "#ff9800";
  const text = inViewport ? "In viewport" : "Not in viewport";

  return (
    <section
      id={item.year}
      key={item.year}
      className="year justify-center flex flex-col my-16"
      ref={forwardedRef}
    >
      {/* <div className="border border-solid py-16"></div> */}
      {item.images.length &&
        item.images.map((image) => (
          <div
            key={image}
            className="inline-block flex items-center justify-center"
          >
            <FadeInSection key={image}>
              <img
                src={`/img/${image}.jpg`}
                alt={`${image}`}
                className="card rounded shadow-2xl my-16"
              />
            </FadeInSection>
          </div>
        ))}
    </section>
  );
};

const ViewportBlock = handleViewport(Section /** options: {}, config: {} **/);

const Main = ({ handleYear }) => {
  return (
    <div className="main-content mx-auto flex-col w-2/3">
      <h3 className="text-center text-7xl text-gray-700">Always</h3>
      {data.map((item) => {
        return (
          <ViewportBlock
            onEnterViewport={() => handleYear(item.year + "")}
            onLeaveViewport={() => console.log("leave", item.year)}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default Main;
