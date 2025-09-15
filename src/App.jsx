import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Project from "./Components/Project.jsx";
import Skill from "./Components/Skill.jsx";
import Code from "./Components/Code.jsx";
import Contact from "./Components/Contact.jsx";
import Newfooter from "./Components/Newfooter.jsx";

import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen forum bg-black flex flex-col items-center space-y-4">
      <Navbar />

      <LazyLoad height={400} offset={100} once>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Home />
        </motion.div>
      </LazyLoad>

      <LazyLoad height={400} offset={100} once>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Code />
        </motion.div>
      </LazyLoad>

      <LazyLoad height={400} offset={100} once>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Project />
        </motion.div>
      </LazyLoad>

      <LazyLoad height={400} offset={100} once>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Skill />
        </motion.div>
      </LazyLoad>

      <LazyLoad height={400} offset={100} once>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>
      </LazyLoad>

      <Newfooter />
    </div>
  );
}
