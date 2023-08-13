import { BsCardHeading } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { AiOutlineProject, AiOutlinePhone } from "react-icons/ai";
import { FaChess } from "react-icons/fa";
import { BiFootball, BiBookBookmark } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { BsCodeSquare } from "react-icons/bs";
import * as Images from "../../assets/images";

export const headerDescriptions = [
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

export const hobbyDescriptions = [
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

export const projectsDescriptions = [
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
    image: Images.MyPhoto,
  },
];
