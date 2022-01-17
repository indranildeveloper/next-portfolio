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
      <div className="text-center">
        <p className="text-xl opacity-70 mt-5">
          I have a predilection for design and enjoy working on projects where
          approaching design and development as co-dependent processes can lead
          to smarter solutions and a better overall product experience for
          fellow humans. If you have an exciting project in mind, or just wanna
          chat, get in touch with me here
        </p>
        <h3 className="mt-6 text-2xl opacity-70">My Contact Info</h3>
        <div className="flex flex-col justify-center items-center gap-2 text-2xl mt-6 text-blue-500">
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
          className="btn btn-primary mx-auto my-8 w-64"
        >
          Say Hello!
        </motion.a>
      </div>
      <h4 className="text-2xl text-center">Connect with me on Social Media</h4>
      <SocialLinks />
    </section>
  );
};

export default Contact;
