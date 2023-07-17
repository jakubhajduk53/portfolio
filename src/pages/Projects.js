import { Carousel } from "flowbite-react";

function Projects() {
  return (
    <div
      id="projects"
      className="grid grid-rows-6 content-center justify-center place-items-center w-full h-screen bg-green-100"
    >
      <div className="text-xl md:text-2xl mb-5 row-span-1">My projects</div>
      <Carousel
        slideInterval={5000}
        className="row-span-2 md:row-span-2 w-[30vw]"
      >
        <img
          src={require("../assets/cars-app1.png")}
          className="w-full h-full object-fill"
          alt="Cars Project 1"
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
    </div>
  );
}

export default Projects;
