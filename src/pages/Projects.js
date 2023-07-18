import { Carousel } from "flowbite-react";
import { useState } from "react";

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(null);

  const customTheme = {
    root: {
      leftControl:
        "absolute bg-green-300/50 top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute bg-green-300/50 top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-green-400/50 hover:bg-green-400",
        on: "bg-green-400",
      },
    },
  };

  const showSlideDescription = (slideId) => {
    switch (slideId) {
      case 0:
        return "Cars App - Home";
      case 1:
        return "Cars App - Cars For Sale";
      case 2:
        return "Cars App - Sell Your Car";
      case 3:
        return "Cars App - Menu";
      default:
        return;
    }
  };

  return (
    <div
      id="projects"
      className="grid grid-rows-6 content-center justify-center place-items-center w-full h-screen bg-green-100"
    >
      <div className="self-end mb-5 text-xl md:text-2xl row-span-1">
        My projects
      </div>
      <Carousel
        theme={customTheme}
        slideInterval={5000}
        onSlideChange={(slideId) => setCurrentSlide(slideId)}
        className="row-span-2 md:row-span-4 w-[90vw] md:w-[70vw]"
      >
        <img
          src={require("../assets/cars-app1.png")}
          className="w-full h-full object-fill"
          alt="Cars Project 1"
          name="Cars App"
        />
        <img
          src={require("../assets/cars-app2.png")}
          className="w-full h-full"
          alt="Cars Project 2"
        />
        <img
          src={require("../assets/cars-app3.png")}
          className="w-full h-full"
          alt="Cars Project 3"
        />
        <img
          src={require("../assets/cars-app4.png")}
          className="w-full h-full"
          alt="Cars Project 4"
        />
      </Carousel>
      <div className="self-start mb-5 text-lg md:text-xl row-span-1">
        {showSlideDescription(currentSlide)}
      </div>
    </div>
  );
}

export default Projects;
