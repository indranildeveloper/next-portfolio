import { motion } from "framer-motion";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const ProjectItem = ({ project }) => {
  const { name, image, description, tags, githubLink, projectLink } = project;

  return (
    <div className="rounded-md bg-gray-900">
      <Image
        className="rounded-t-md w-full object-cover"
        src={image}
        alt={name}
        width={1366}
        height={666}
        layout="responsive"
      />
      <div className="p-6">
        <h3 className="text-3xl font-bold mb-3 text-gray-200">{name}</h3>
        <p className="text-lg text-gray-200 mb-3">{description}</p>
        <h5 className="text-xl my-2">Technologies</h5>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <div
              key={Math.random()}
              className="border border-blue-500 text-blue-500 bg-blue-700 bg-opacity-10 px-4 py-1 rounded-md my-2"
            >
              {tag}
            </div>
          ))}
        </div>
        <h5 className="text-xl my-2">Links</h5>
        <div className="flex gap-6">
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary"
          >
            <FaGithubSquare /> Github
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
            href={projectLink}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary"
          >
            <FaExternalLinkAlt />
            Live
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
