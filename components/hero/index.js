import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Typed from "react-typed";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section flex flex-col justify-center items-center text-center px-0 md:px-16 "
    >
      <h3
        initial={{ y: "20px" }}
        animate={{ y: 0 }}
        className="text-xl text-blue-500 pl-2"
      >
        Hello There! My name is,
      </h3>

      <motion.h1
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-bold mb-4"
      >
        Indranil Halder.
      </motion.h1>
      <Typed
        strings={[
          "I build Single Page Applications",
          "I build Full Stack Applications",
          "I build Awesome Experiences",
        ]}
        typeSpeed={40}
        loop
        className="text-xl md:text-2xl lg:text-4xl font-bold pl-1 opacity-70 mb-4"
      />

      <p className="text-xl opacity-70 mt-5">
        I am a full stack(MERN) software engineer specializing in building (and
        occasionally designing) exceptional web experiences. Currently, I am
        focused on learning new technologies and building awesome web
        applications.
      </p>
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className="btn btn-primary mt-8 mb-8"
        whileHover={{ scale: 1.1 }}
      >
        Download Resume
      </motion.a>
      <motion.div
        initial={{ y: "-10px" }}
        animate={{ y: "20px" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        className="border-2 border-white rounded-full p-3 mt-6"
      >
        <FaArrowDown className="text-xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
