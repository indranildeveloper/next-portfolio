import { nanoid } from "nanoid";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

export const socialLinksData = [
  {
    id: nanoid(),
    social: "https://www.linkedin.com/in/indranildeveloper/",
    icon: <FaLinkedin />,
  },
  {
    id: nanoid(),
    social: "https://github.com/indranildeveloper",
    icon: <FaGithubSquare />,
  },
  {
    id: nanoid(),
    social: "https://twitter.com/indranilcoder",
    icon: <FaTwitterSquare />,
  },
  {
    id: nanoid(),
    social: "https://www.instagram.com/indranil__halder/",
    icon: <FaInstagramSquare />,
  },
];
