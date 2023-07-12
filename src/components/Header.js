import Anchor from "./Anchor";
import { BsCardHeading } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { AiOutlineProject, AiOutlinePhone } from "react-icons/ai";

function Header() {
  return (
    <div className="flex justify-between w-full p-5 bg-orange-50 sticky top-0 border">
      <div className="ml-5 text-xl md:text-2xl italic">Jakub Hajduk</div>
      <div className="flex gap-5 mr-5">
        <Anchor href="#about" value="About" icon={BsCardHeading} />
        <Anchor href="#technologies" value="Technologies" icon={FaReact} />
        <Anchor href="#projects" value="Projects" icon={AiOutlineProject} />
        <Anchor href="#contact" value="Contact" icon={AiOutlinePhone} />
      </div>
    </div>
  );
}

export default Header;
