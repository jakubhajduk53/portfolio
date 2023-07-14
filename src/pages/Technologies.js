import Technology from "../components/Technology";
import {
  BiLogoRedux,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoAngular,
  BiLogoBootstrap,
  BiLogoGit,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoPhp,
  BiLogoCss3,
  BiLogoJquery,
  BiLogoMongodb,
} from "react-icons/bi";
import { PiFileSqlDuotone } from "react-icons/pi";
import { SiCsharp, SiCplusplus, SiXamarin, SiBulma } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";

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
        <div className="flex gap-5 flex-wrap justify-center items-center">
          <Technology name="HTML" date="2019" icon={BiLogoHtml5} />
          <Technology name="CSS" date="2019" icon={BiLogoCss3} />
          <Technology name="PHP" date="2019" icon={BiLogoPhp} />
          <Technology name="SQL" date="2019" icon={PiFileSqlDuotone} />
          <Technology name="C++" date="2019" icon={SiCplusplus} />
          <Technology name="JavaScript" date="2020" icon={BiLogoJavascript} />
          <Technology name="JQuery" date="2020" icon={BiLogoJquery} />
          <Technology name="C#" date="2020" icon={SiCsharp} />
          <Technology name="WPF Forms" date="2021" icon={FaWpforms} />
          <Technology name="Xamarin" date="2021" icon={SiXamarin} />
          <Technology name="Bootstrap" date="2022" icon={BiLogoBootstrap} />
          <Technology name="Angular" date="2022" icon={BiLogoAngular} />
          <Technology name="MongoDB" date="2022" icon={BiLogoMongodb} />
          <Technology name="Git" date="2022" icon={BiLogoGit} />
          <Technology name="React" date="2023" icon={BiLogoReact} />
          <Technology name="Bulma" date="2023" icon={SiBulma} />
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
