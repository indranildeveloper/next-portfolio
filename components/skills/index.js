import { motion } from "framer-motion";
import { FaTasks } from "react-icons/fa";
import Title from "../title";
import SkillItem from "./SkillItem";
import { skillsData } from "../../data/skillsData";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <Title title="Skills" icon={<FaTasks className="text-blue-500" />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="#"
        className="btn btn-primary mt-8 mx-auto w-64"
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Skills;
