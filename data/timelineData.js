import { nanoid } from "nanoid";
import {
  FaGraduationCap,
  FaChartLine,
  FaCode,
  FaBookReader,
} from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

export const timelineData = [
  {
    id: nanoid(),
    date: "2021 - Current",
    icon: <FaChartLine />,
    title: "Going On",
    location: "University of Gour Banga, Malda",
    description:
      "Started Master's Degree in Physics, learning everyday new things and finding an exciting opportunity.",
  },
  {
    id: nanoid(),
    date: "2020",
    icon: <FaGraduationCap />,
    title: "Graduation",
    location: "Balurghat College, Balurghat",
    description: "Completed my Bachelor's Degree(Hons.) in Physics.",
  },
  {
    id: nanoid(),
    date: 2019,
    icon: <FaCode />,
    title: "Working On",
    location: "Balurghat,IN",
    description:
      "Working in various Projects with different web development technologies.",
  },
  {
    id: nanoid(),
    date: 2018,
    icon: <SiVisualstudiocode />,
    title: "Started Programming",
    location: "Balurghat, IN",
    description:
      "Started My Programming Journey in a local programming bootcamp.",
  },
  {
    id: nanoid(),
    date: 2017,
    icon: <FaBookReader />,
    title: "Started Graduation",
    location: "Balurghat College",
    description: "Started my Bachelor's Degree(Hons.) in Physics",
  },
];
