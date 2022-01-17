import { motion } from "framer-motion";
import { socialLinksData } from "../../data/socialLinksData";

const SocialLinks = () => {
  return (
    <div className="flex gap-6 items-center justify-center my-6">
      {socialLinksData.map((item) => (
        <motion.div whileHover={{ scale: 1.1 }} key={item.id}>
          <motion.a
            whileHover={{ scale: 1.1, color: "#3b82f6" }}
            href={item.social}
            className="text-4xl"
            target="_blank"
            rel="noreferrer noopener"
          >
            {item.icon}
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;
