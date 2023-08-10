import { useState } from "react";
import { HobbyDescription, Box } from "../components";
import { MyPhoto } from "../assets/images";
import { hobbyDescriptions } from "../data/descriptions";

function About() {
  const [selectedHobby, setSelectedHobby] = useState("Chess");

  const currentYear = new Date().getFullYear();
  const myAge = currentYear - 2003;

  const selectHobby = (hobby) => {
    setSelectedHobby(hobby);
  };

  const checkIsActive = (hobby) => {
    return hobby === selectedHobby;
  };

  return (
    <div id="about" className="grid w-full h-project-screen text-center">
      <div className="grid justify-items-center">
        <div>
          <p className="text-xl md:text-3xl mt-5">Hi! I'm Jacob</p>
        </div>
        <div>
          <img
            src={MyPhoto}
            alt="Jakub Hajduk"
            className="w-24 sm:w-32 md:w-48 rounded-md border-2 border-cornsilk shadow-md"
          />
        </div>
        <div>
          <p className="text-xl md:text-2xl">
            I am {myAge} years old Frontend Developer
          </p>
        </div>
      </div>
      <div className="grid justify-items-center place-content-center">
        <p className="text-xl md:text-3xl mb-5">My hobbies</p>
        <div className="grid gap-2">
          <div className="grid grid-cols-4 gap-2">
            {hobbyDescriptions.map((hobby) => {
              return (
                <Box
                  key={hobby.value}
                  value={hobby.value}
                  icon={hobby.icon}
                  isActive={checkIsActive(hobby.value)}
                  onClick={() => selectHobby(hobby.value)}
                  boxType="Hobby"
                />
              );
            })}
          </div>
          <HobbyDescription selectedHobby={selectedHobby} />
        </div>
      </div>
    </div>
  );
}

export default About;
