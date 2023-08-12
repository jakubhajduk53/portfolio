import * as Images from "../../assets/images";
import { BsCardHeading } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { AiOutlineProject, AiOutlinePhone } from "react-icons/ai";
import { FaChess } from "react-icons/fa";
import { BiFootball, BiBookBookmark } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { BsCodeSquare } from "react-icons/bs";

export const projectDescriptions = [
  {
    value: "Cars App - Home",
    imageSrc: Images.CarsApp1,
  },
  {
    value: "Cars App - Cars For Sale",
    imageSrc: Images.CarsApp2,
  },
  {
    value: "Cars App - Sell Your Car",
    imageSrc: Images.CarsApp3,
  },
  {
    value: "Cars App - Menu",
    imageSrc: Images.CarsApp4,
  },
  {
    value: "Meal App - Main Page",
    imageSrc: Images.MealApp1,
  },
  {
    value: "Meal App - Categories",
    imageSrc: Images.MealApp2,
  },
  {
    value: "Meal App - Category Item",
    imageSrc: Images.MealApp3,
  },
  {
    value: "Meal App - Areas",
    imageSrc: Images.MealApp4,
  },
  {
    value: "Meal App - Area Item",
    imageSrc: Images.MealApp5,
  },
];

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
