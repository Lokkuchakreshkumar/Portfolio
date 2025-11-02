import { Helmet } from "react-helmet-async";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Project from "./Components/Project.jsx";
import Skill from "./Components/Skill.jsx";
import Code from "./Components/Code.jsx";
import Contact from "./Components/Contact.jsx";
import Newfooter from "./Components/Newfooter.jsx";
import './oneko.js'
import Aurora from "./Components/Aurora.jsx";
import LazyLoad from "react-lazyload";

export default function App() {

  return (
    <div className="min-h-screen forum flex-col items-center justify-center ">
      <Helmet>
        <title>Chakresh's Portfolio - Software Developer</title>
        <meta name="description" content="Welcome to the portfolio of Chakresh, a skilled software developer specializing in React and modern web technologies. Explore my projects and skills." />
        <meta name="keywords" content="Chakresh, portfolio, software developer, React developer, web developer, frontend developer, projects, skills" />
      </Helmet>
      <Aurora/>
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
