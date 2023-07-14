import { PiDiamondsFourBold } from "react-icons/pi";
import { FaChess } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { BsCodeSquare } from "react-icons/bs";
import Hobby from "../components/Hobby";
import HobbyDescription from "../components/HobbyDescription";
import { useState } from "react";

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
      className="flex flex-col items-center justify-center text-center gap-10 w-full h-screen "
    >
      <div className="flex flex-col justify-center items-center pt-10 gap-5">
        <div>
          <p className="text-2xl">Hi, my name is Jacob</p>
        </div>
        <div>
          <img
            src={require("../assets/photo.jpg")}
            alt="My photo"
            className="w-36 border rounded-full"
          />
        </div>
        <div>
          <p className="text-2xl">I am {myAge} years old Frontend Developer</p>
        </div>
      </div>
      <PiDiamondsFourBold />
      <div className="flex flex-col gap-5 w-[70ch]">
        <p className="text-2xl">My hobbies</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-center">
            <Hobby
              value="Chess"
              icon={FaChess}
              isActive={checkIsActive("Chess")}
              onClick={() => selectHobby("Chess")}
            />
            <Hobby
              value="Football"
              icon={BiFootball}
              isActive={checkIsActive("Football")}
              onClick={() => selectHobby("Football")}
            />
            <Hobby
              value="Gaming"
              icon={GrGamepad}
              isActive={checkIsActive("Gaming")}
              onClick={() => selectHobby("Gaming")}
            />
            <Hobby
              value="Coding"
              icon={BsCodeSquare}
              isActive={checkIsActive("Coding")}
              onClick={() => selectHobby("Coding")}
            />
          </div>
          <HobbyDescription selectedHobby={selectedHobby} />
        </div>
      </div>
      <PiDiamondsFourBold />
    </div>
  );
}

export default About;
