import Technology from "../components/Technology";
import { FaReact } from "react-icons/fa";
import {
  BiLogoRedux,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { RiSupabaseFill } from "react-icons/ri";
import { BsGit } from "react-icons/bs";

function Technologies() {
  return (
    <div
      id="technologies"
      className="flex flex-col items-center justify-center text-center gap-10 w-full h-screen  bg-red-50"
    >
      <div className="flex flex-col justify-center items-center pt-10 gap-5">
        <div>
          <p className="text-2xl">Technologies I have learned</p>
        </div>
        <div className="flex gap-5">
          <Technology name="HTML" date="2019" icon={AiFillHtml5} />
          <Technology name="JavaScript" date="2020" icon={BiLogoJavascript} />
          <Technology name="Git" date="2022" icon={BsGit} />
          <Technology name="React" date="2023" icon={FaReact} />
          <Technology
            name="Tailwind CSS"
            date="2023"
            icon={BiLogoTailwindCss}
          />
          <Technology name="Redux" date="2023" icon={BiLogoRedux} />
          <Technology name="Supabase" date="2023" icon={RiSupabaseFill} />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
