import { FaChess } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { BsCodeSquare } from "react-icons/bs";
import { useState } from "react";
import { HobbyDescription, Box } from "../components";
import { MyPhoto } from "../assets/images";
import { PiDiamondsFourBold } from "react-icons/pi";

function About() {
  const [selectedHobby, setSelectedHobby] = useState("Chess");

  const currentYear = new Date().getFullYear();
  const myAge = currentYear - 2003;

  const selectHobby = (hobby) => {
    setSelectedHobby(hobby);
  };

  const checkIsActive = (hobby) => {
    return hobby === selectedHobby ? true : false;
  };

  return (
    <div
      id="about"
      className="grid content-center gap-5 text-center w-full h-screen max-h-screen"
    >
      <div className="grid justify-items-center">
        <div>
          <p className="text-xl md:text-2xl">Hi, my name is Jacob</p>
        </div>
        <div>
          <img
            src={MyPhoto}
            alt="Jakub Hajduk"
            className="w-24 sm:w-32 md:w-36 border rounded-full mt-8 mb-8"
          />
        </div>
        <div>
          <p className="text-xl md:text-2xl">
            I am {myAge} years old Frontend Developer
          </p>
        </div>
      </div>
      <PiDiamondsFourBold className="justify-self-center place-self-center" />
      <div className="grid justify-self-center justify-items-center place-items-center">
        <p className="text-xl md:text-2xl mb-4">My hobbies</p>
        <div className="grid gap-2">
          <div className="grid grid-cols-4 gap-2 justify-items-center">
            <Box
              value="Chess"
              icon={FaChess}
              isActive={checkIsActive("Chess")}
              onClick={() => selectHobby("Chess")}
              boxType="Hobby"
            />
            <Box
              value="Football"
              icon={BiFootball}
              isActive={checkIsActive("Football")}
              onClick={() => selectHobby("Football")}
              boxType="Hobby"
            />
            <Box
              value="Gaming"
              icon={GrGamepad}
              isActive={checkIsActive("Gaming")}
              onClick={() => selectHobby("Gaming")}
              boxType="Hobby"
            />
            <Box
              value="Coding"
              icon={BsCodeSquare}
              isActive={checkIsActive("Coding")}
              onClick={() => selectHobby("Coding")}
              boxType="Hobby"
            />
          </div>
          <HobbyDescription selectedHobby={selectedHobby} />
        </div>
      </div>
      <PiDiamondsFourBold className="justify-self-center place-self-center" />
    </div>
  );
}

export default About;
