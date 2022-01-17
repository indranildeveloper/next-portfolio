import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaTasks,
  FaLaptopCode,
  FaUserGraduate,
  FaEnvelopeOpenText,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";

import NavLink from "./NavLink";

const navLinks = [
  {
    key: 1,
    id: "#projects",
    text: "Projects",
    icon: <FaLaptopCode className="text-blue-500" />,
  },
  {
    key: 2,
    id: "#skills",
    text: "Skills",
    icon: <FaTasks className="text-blue-500" />,
  },
  {
    key: 3,
    id: "#about",
    text: "About",
    icon: <FaUserGraduate className="text-blue-500" />,
  },
  {
    key: 4,
    id: "#contact",
    text: "Contact",
    icon: <FaEnvelopeOpenText className="text-blue-500" />,
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const handleShowMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
    if (!showMenu) {
      ulRef.current.classList.remove("hidden");
      ulRef.current.classList.add("flex");
      console.log(ulRef.current.props);
    } else {
      ulRef.current.classList.remove("flex");
      ulRef.current.classList.add("hidden");
    }
  };

  return (
    <motion.nav initial={{ y: "-20px" }} animate={{ y: 0 }} className="navbar">
      <div className="navbar-container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="branding">
              <FaAngleLeft className="text-blue-500" />{" "}
              <motion.span whileHover={{ scale: 1.1 }}>
                Indranil Halder
              </motion.span>{" "}
              <FaAngleRight className="text-blue-500" />
            </a>
          </Link>

          <button className="text-2xl md:hidden" onClick={handleShowMenu}>
            {!showMenu ? <FaBars /> : <FaTimes className="text-rose-500" />}
          </button>
        </div>

        <ul ref={ulRef} className="nav-items hidden">
          {navLinks.map((item) => (
            <motion.li key={item.key} whileHover={{ scale: 1.05 }}>
              <NavLink
                id={item.id}
                icon={item.icon}
                text={item.text}
                showMenu={showMenu}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
