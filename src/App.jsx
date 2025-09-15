import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Project from "./Components/Project.jsx";
import Skill from "./Components/Skill.jsx";
import Code from "./Components/Code.jsx";
import Contact from "./Components/Contact.jsx";
import Newfooter from "./Components/Newfooter.jsx";

// footer changed
import LazyLoad from "react-lazyload";

export default function App() {
  return (
    <div className="min-h-screen forum bg-black flex flex-col items-center space-y-4">
      <Navbar />

      <LazyLoad height={400} offset={100} once>
        <Home />
      </LazyLoad>

      <LazyLoad height={400} offset={100} once>
        <Code />
      </LazyLoad>

      <LazyLoad height={400} offset={100} once>
        <Project />
      </LazyLoad>

      <LazyLoad height={400} offset={100} once>
        <Skill />
      </LazyLoad>

      <LazyLoad height={400} offset={100} once>
        <Contact />
      </LazyLoad>

      <Newfooter />
    </div>
  );
}
