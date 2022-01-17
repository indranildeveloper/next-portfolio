import { motion } from "framer-motion";
import { FaBookmark } from "react-icons/fa";
import Title from "../title";
import { achievementsData } from "../../data/achievementsData";

const Achievements = () => {
  return (
    <section className="section">
      <Title
        title="Personal Achievements"
        icon={<FaBookmark className="text-blue-500" />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shadow-md">
        {achievementsData.map((item) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={item.id}
            className="text-2xl border border-blue-700 bg-blue-600 p-4 rounded-md"
          >
            {item.title}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
