import { motion } from "framer-motion";
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";
import Title from "../title";
import ProjectItem from "./ProjectItem";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <Title
        title="Some things I have built"
        icon={<FaLaptopCode className="text-blue-500" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      <div className="flex">
        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
          href="https://github.com/indranildeveloper"
          target="_blank"
          rel="noreferrer noopener"
          className="btn-secondary px-10 py-5 rounded-md mt-12 mx-auto"
        >
          See All Projects <FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
