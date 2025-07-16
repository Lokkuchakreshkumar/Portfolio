import Navbar from "./Components/Navbar.jsx"
import Home from "./Components/Home.jsx"
import Project from "./Components/Project.jsx"
import Skill from "./Components/Skill.jsx"
import Code from "./Components/Code.jsx"
import Contact from "./Components/Contact.jsx"
import Footer from "./Components/footer.jsx"
import { motion } from "motion/react"

export default function App(){
  return(

    <motion.div  className="min-h-screen forum bg-black   flex flex-col items-center space-y-4">
      <Navbar/>
      <Home/>
      <Code/>
      <Project/>
      <Skill/>
      <Contact/>
      <Footer/>
   
      
  </motion.div>
  )
}