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
import Box from "../components/Box";

function Technologies() {
  return (
    <div
      id="technologies"
      className="grid content-center w-full h-screen bg-yellow-50 text-red-600"
    >
      <div className="grid pt-10 gap-5 text-center justify-items-center place-items-center">
        <div>
          <p className="text-xl md:text-2xl mb-5">
            Technologies I have learned
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-5 ">
          <Box
            value="HTML"
            date="2019"
            icon={BiLogoHtml5}
            boxType="Technology"
          />
          <Box value="CSS" date="2019" icon={BiLogoCss3} boxType="Technology" />
          <Box value="PHP" date="2019" icon={BiLogoPhp} boxType="Technology" />
          <Box
            value="SQL"
            date="2019"
            icon={PiFileSqlDuotone}
            boxType="Technology"
          />
          <Box
            value="C++"
            date="2019"
            icon={SiCplusplus}
            boxType="Technology"
          />
          <Box
            value="JavaScript"
            date="2020"
            icon={BiLogoJavascript}
            boxType="Technology"
          />
          <Box
            value="JQuery"
            date="2020"
            icon={BiLogoJquery}
            boxType="Technology"
          />
          <Box value="C#" date="2020" icon={SiCsharp} boxType="Technology" />
          <Box
            value="WPF Forms"
            date="2021"
            icon={FaWpforms}
            boxType="Technology"
          />
          <Box
            value="Xamarin"
            date="2021"
            icon={SiXamarin}
            boxType="Technology"
          />
          <Box
            value="Bootstrap"
            date="2022"
            icon={BiLogoBootstrap}
            boxType="Technology"
          />
          <Box
            value="Angular"
            date="2022"
            icon={BiLogoAngular}
            boxType="Technology"
          />
          <Box
            value="MongoDB"
            date="2022"
            icon={BiLogoMongodb}
            boxType="Technology"
          />
          <Box value="Git" date="2022" icon={BiLogoGit} boxType="Technology" />
          <Box
            value="React"
            date="2023"
            icon={BiLogoReact}
            boxType="Technology"
          />
          <Box value="Bulma" date="2023" icon={SiBulma} boxType="Technology" />
          <Box
            value="Tailwind CSS"
            date="2023"
            icon={BiLogoTailwindCss}
            boxType="Technology"
          />
          <Box
            value="Redux"
            date="2023"
            icon={BiLogoRedux}
            boxType="Technology"
          />
          <Box
            value="Supabase"
            date="2023"
            icon={RiSupabaseFill}
            boxType="Technology"
          />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
