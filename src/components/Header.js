import Anchor from "./Anchor";
import { BsCardHeading } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { AiOutlineProject, AiOutlinePhone } from "react-icons/ai";

function Header() {
  return (
    <div className="flex justify-between w-full h-32 pb-3 sm:pb-0 sm:h-16 pr-3 z-10 bg-orange-50 sticky top-0">
      <div className="ml-5 text-2xl italic self-center">Jakub Hajduk</div>
      <div className="flex flex-col justify-between sm:flex-row gap-1 sm:gap-5">
        <Anchor href="#about" value="About" icon={BsCardHeading} />
        <Anchor href="#technologies" value="Technologies" icon={FaReact} />
        <Anchor href="#projects" value="Projects" icon={AiOutlineProject} />
        <Anchor href="#contact" value="Contact" icon={AiOutlinePhone} />
      </div>
    </div>
  );
}

export default Header;
