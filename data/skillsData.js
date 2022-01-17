import { nanoid } from "nanoid";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";

export const skillsData = [
  {
    id: nanoid(),
    name: "Front End",
    description: "ReactJS, NextJS, GatsbyJS, Angular",
    icon: <FaReact />,
  },
  {
    id: nanoid(),
    name: "Back End",
    description: "NodeJS and MonogoDB, Django",
    icon: <FaNodeJs />,
  },
  {
    id: nanoid(),
    name: "UI/UX",
    description: "Intermediate in designing with Figma",
    icon: <FaFigma />,
  },
];
