import { Carousel } from "flowbite-react";
import { useState } from "react";
import * as Images from "../assets/images/index.js";

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

  const projectDescriptions = [
    {
      value: "Cars App - Home",
      imageSrc: Images.CarsApp1,
    },
    {
      value: "Cars App - Cars For Sale",
      imageSrc: Images.CarsApp2,
    },
    {
      value: "Cars App - Sell Your Car",
      imageSrc: Images.CarsApp3,
    },
    {
      value: "Cars App - Menu",
      imageSrc: Images.CarsApp4,
    },
    {
      value: "Meal App - Main Page",
      imageSrc: Images.MealApp1,
    },
    {
      value: "Meal App - Categories",
      imageSrc: Images.MealApp2,
    },
    {
      value: "Meal App - Category Item",
      imageSrc: Images.MealApp3,
    },
    {
      value: "Meal App - Areas",
      imageSrc: Images.MealApp4,
    },
    {
      value: "Meal App - Area Item",
      imageSrc: Images.MealApp5,
    },
  ];

  const showSlideDescription = (slideId) => {
    return projectDescriptions[slideId]?.value;
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
        {projectDescriptions.map((project) => {
          return (
            <img
              key={project.value}
              src={`${project.imageSrc}`}
              className="w-full h-full object-fill"
              alt={project.value}
            />
          );
        })}
      </Carousel>
      <div className="self-start mb-5 text-lg md:text-xl row-span-1">
        {showSlideDescription(currentSlide)}
      </div>
    </div>
  );
}

export default Projects;
