import Navbar from "./Components/Navbar.jsx"
import Home from "./Components/Home.jsx"
import Project from "./Components/Project.jsx"
import Skill from "./Components/Skill.jsx"
import Code from "./Components/Code.jsx"
import Contact from "./Components/Contact.jsx"

export default function App(){
  return(

    <div  className="min-h-screen forum bg-black  flex flex-col items-center space-y-4">
      <Navbar/>
      <Home/>
      <Code/>
      <Project/>
      <Skill/>
      <Contact/>
   
      
  </div>
  )
}