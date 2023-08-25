import { BsCardHeading } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { AiOutlineProject, AiOutlinePhone } from "react-icons/ai";
import { FaChess } from "react-icons/fa";
import { BiFootball, BiBookBookmark } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { BsCodeSquare } from "react-icons/bs";
import * as Images from "../assets/images";
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
  BiLogoTypescript,
} from "react-icons/bi";
import { PiFileSqlDuotone } from "react-icons/pi";
import { SiCsharp, SiCplusplus, SiXamarin } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";

export const technologiesData = [
  {
    value: "HTML",
    date: "2019",
    icon: BiLogoHtml5,
  },
  {
    value: "CSS",
    date: "2019",
    icon: BiLogoCss3,
  },
  {
    value: "PHP",
    date: "2019",
    icon: BiLogoPhp,
  },
  {
    value: "SQL",
    date: "2019",
    icon: PiFileSqlDuotone,
  },
  {
    value: "C++",
    date: "2019",
    icon: SiCplusplus,
  },
  {
    value: "JavaScript",
    date: "2020",
    icon: BiLogoJavascript,
  },
  {
    value: "JQuery",
    date: "2020",
    icon: BiLogoJquery,
  },
  {
    value: "C#",
    date: "2020",
    icon: SiCsharp,
  },
  {
    value: "WPF Forms",
    date: "2021",
    icon: FaWpforms,
  },
  {
    value: "Xamarin",
    date: "2021",
    icon: SiXamarin,
  },
  {
    value: "Bootstrap",
    date: "2022",
    icon: BiLogoBootstrap,
  },
  {
    value: "Angular",
    date: "2022",
    icon: BiLogoAngular,
  },
  {
    value: "TypeScript",
    date: "2022",
    icon: BiLogoTypescript,
  },
  {
    value: "MongoDB",
    date: "2022",
    icon: BiLogoMongodb,
  },
  {
    value: "Git",
    date: "2022",
    icon: BiLogoGit,
  },
  {
    value: "React",
    date: "2023",
    icon: BiLogoReact,
  },
  {
    value: "Tailwind CSS",
    date: "2023",
    icon: BiLogoTailwindCss,
  },
  {
    value: "Redux",
    date: "2023",
    icon: BiLogoRedux,
  },
  {
    value: "Supabase",
    date: "2023",
    icon: RiSupabaseFill,
  },
];

export const headerData = [
  {
    href: "#",
    value: "About",
    icon: BsCardHeading,
  },
  {
    href: "#technologies",
    value: "Technologies",
    icon: FaReact,
  },
  {
    href: "#projects",
    value: "Projects",
    icon: AiOutlineProject,
  },
  {
    href: "#contact",
    value: "Contact",
    icon: AiOutlinePhone,
  },
];

export const hobbyData = [
  {
    value: "Chess",
    icon: FaChess,
    description:
      "I am playing chess since 2021. My favourite opening is Sicilian Defense. I like watching when Hikaru Nakamura or Magnus Carlsen plays in top level tournaments.",
  },
  {
    value: "Football",
    icon: BiFootball,
    description:
      "I grown up playing football with my brother and friends. When we were kids, we used to play everyday on local stadium. Now we are meeting only sometimes at weekend.",
  },
  {
    value: "Gaming",
    icon: GrGamepad,
    description:
      "I like playing strategy games such as Europa Universalis IV or Sid Meier's Civilization V. I also play CS:GO and League of Legends a lot. My biggest achievement is reaching Global Elite rank in CS:GO in 2020.",
  },
  {
    value: "Coding",
    icon: BsCodeSquare,
    description:
      "I started coding in 2019 in school. At start it was basic HTML and CSS, later we had JavaScript. My first framework was Angular which I learned in 2022. My favourite technology is React.",
  },
  {
    value: "Reading",
    icon: BiBookBookmark,
    description:
      "I read books everyday since several years. My favourite author is Stephen King. I am reading various types of books, from horrors to travel books.",
  },
];

export const projectsData = [
  {
    value: "Cars App",
    description: "The project is designed to set up an online car shop.",
    site: "https://cars-app-jakubhajduk53.vercel.app/",
    repository: "https://github.com/jakubhajduk53/cars-app",
    image: Images.CarsApp,
  },
  {
    value: "Meal App",
    description: "The project is designed to display meal descriptions",
    site: "https://meal-app-jakubhajduk53.vercel.app/",
    repository: "https://github.com/jakubhajduk53/meal-app",
    image: Images.MealApp,
  },
  {
    value: "Portfolio",
    description: "This project is my portfolio page.",
    site: "https://portfolio-jakubhajduk53.vercel.app/",
    repository: "https://github.com/jakubhajduk53/portfolio",
    image: Images.Portfolio,
  },
  {
    value: "Exchange Rate App",
    description: "This project is designed for pairing currencies",
    site: "https://exchange-rate-app-jakubhajduk53.vercel.app/",
    repository: "https://github.com/jakubhajduk53/exchange-rate-app",
    image: Images.ExchangeRateApp,
  },
];
