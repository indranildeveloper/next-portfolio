import { motion } from "framer-motion";
import { FaEnvelopeOpenText, FaWhatsapp } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import Title from "../title";
import SocialLinks from "../social";

const Contact = () => {
  return (
    <section className="section mb-16" id="contact">
      <Title
        title="Get In Touch"
        icon={<FaEnvelopeOpenText className="text-blue-500" />}
      />
      <div className="flex gap-y-8 flex-col md:flex-row justify-between items-start my-8">
        <p className="text-lg text-center md:text-left md:text-xl md:w-1/2">
          I have a predilection for design and enjoy working on projects where
          approaching design and development as co-dependent processes can lead
          to smarter solutions and a better overall product experience for
          fellow humans. If you have an exciting project in mind, or just wanna
          chat, get in touch with me here...
        </p>
        <div className="w-full md:w-auto">
          <h3 className="text-2xl text-center md:text-left">My Contact Info</h3>
          <div className="flex flex-col justify-center items-center md:items-start gap-2 text-lg mt-4 text-blue-500">
            <motion.a
              whileHover={{ x: "10px", color: "#ffffff" }}
              href="tel:+916294716288"
              className="flex items-center gap-2"
            >
              <FaWhatsapp /> +91 6294716288
            </motion.a>
            <motion.a
              whileHover={{ x: "10px", color: "#ffffff" }}
              href="mailto:indranilhalder.dev@gmail.com"
              className="flex items-center gap-2"
            >
              <MdOutgoingMail /> indranilhalder.dev@gmail.com
            </motion.a>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:indranilhalder.dev@gmail.com"
            className="contact-btn"
          >
            Say Hello!
          </motion.a>
        </div>
      </div>
      <div className="mt-8 md:mt-32">
        <h4 className="text-2xl text-center">
          Connect with me on Social Media
        </h4>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Contact;
