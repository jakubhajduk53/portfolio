import * as Images from "../../assets/images";
import { BsCardHeading } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { AiOutlineProject, AiOutlinePhone } from "react-icons/ai";

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
    href: "#about",
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
