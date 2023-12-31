import { useState } from "react";
import { HobbyDescription, Box } from "../components";
import { MyPhoto } from "../assets/images";
import { hobbyData } from "../data";

function About() {
  const [selectedHobby, setSelectedHobby] = useState(hobbyData[0]);

  const currentYear = new Date().getFullYear();
  const myAge = currentYear - 2003;

  const selectHobby = (value, description) => {
    setSelectedHobby({ value, description });
  };

  const checkIsActive = (hobbyValue) => {
    return hobbyValue === selectedHobby.value;
  };

  return (
    <div
      id="about"
      className="grid w-full h-project-screen text-center overflow-y-scroll md:overflow-auto"
    >
      <div className="grid justify-items-center">
        <p className="text-2xl md:text-3xl sm:mt-5">Hi! I'm Jacob</p>
        <img
          src={MyPhoto}
          alt="Jakub Hajduk"
          className="w-36 sm:w-32 md:w-48 rounded-md border-2 border-cornsilk shadow-md"
        />
        <p className="text-xl md:text-2xl">
          I'm {myAge} years old Frontend Developer
        </p>
      </div>
      <div className="grid justify-items-center place-content-center">
        <p className="text-2xl md:text-3xl mb-5">My hobbies</p>
        <div className="grid gap-2 md:w-[50rem]">
          <div className="grid grid-cols-5 gap-2 place-items-center">
            {hobbyData.map((hobby) => {
              return (
                <Box
                  key={hobby.value}
                  value={hobby.value}
                  icon={hobby.icon}
                  isActive={checkIsActive(hobby.value)}
                  onClick={() => selectHobby(hobby.value, hobby.description)}
                  boxType="Hobby"
                />
              );
            })}
          </div>
          <HobbyDescription description={selectedHobby.description} />
        </div>
      </div>
    </div>
  );
}

export default About;
