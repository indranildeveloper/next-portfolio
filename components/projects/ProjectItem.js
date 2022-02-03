import { motion } from "framer-motion";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const ProjectItem = ({ project }) => {
  const { name, image, description, tags, githubLink, projectLink } = project;

  return (
    <div className="project-card">
      <Image
        className="rounded-t-md w-full object-cover"
        src={image}
        alt={name}
        width={1366}
        height={666}
        layout="responsive"
      />
      <div className="p-6 flex flex-col items-center">
        <div>
          <h3 className="text-3xl font-bold mb-3">{name}</h3>
          <p className="text-lg mb-3">{description}</p>
          <div className="flex gap-2 flex-wrap items-center justify-center">
            {tags.map((tag) => (
              <div
                key={Math.random()}
                className="border border-blue-500 text-blue-500 bg-blue-700 bg-opacity-10 px-4 py-1 rounded-md my-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="project-btn-container">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={githubLink}
          target="_blank"
          rel="noreferrer noopener"
          className="project-btn"
        >
          <FaGithubSquare />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={projectLink}
          target="_blank"
          rel="noreferrer noopener"
          className="project-btn"
        >
          <FaExternalLinkAlt />
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectItem;
