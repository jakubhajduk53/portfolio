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
      className="grid content-center gap-5 text-center w-full h-screen max-h-screen"
    >
      <div className="grid justify-items-center">
        <div>
          <p className="text-xl md:text-2xl">Hi, my name is Jacob</p>
        </div>
        <div>
          <img
            src={require("../assets/photo.jpg")}
            alt="My photo"
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
      <PiDiamondsFourBold className="justify-self-center place-self-center" />
    </div>
  );
}

export default About;
