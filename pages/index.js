import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import About from "../components/about";
import Achievements from "../components/achievements";
import Contact from "../components/contact";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Achievements />
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
