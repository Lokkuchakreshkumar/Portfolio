import Card from "./P_card.jsx"
import todo from "../image/Todo-project-ss.jpg"
import portfolio from "../image/image.png"
import lai from "../image/Screenshot 2025-07-27 000652.png"
import kldesk from "../image/Screenshot 2025-07-16 160358.png"

export default function Project(){
    
    return(
        <section id="project" className="w-full mt-4  flex flex-col items-center justify-center">  
        <div className="text-transparent  text-5xl sm:text-7xl mr-auto ml-12 my-24 bg-clip-text bg-linear-to-r from-white to-yellow-400 ">Projects <span className="text-yellow-400">.jsx</span></div>
          <Card img={lai} matter={"AI-based tool that turns ideas into LinkedIn posts using multi-agent prompts and real-time formatting"} badges={["javascript","react","node","express","mongo","tailwind"]} gi_link={"https://github.com/Lokkuchakreshkumar/lai"} li_link={'https://uselai.vercel.app'}/>
                <Card img={kldesk} matter={"Created an end-end full resources web app for students by understanding their problem"} badges={["javascript","react","node","express","mongo","tailwind"]} gi_link={"https://github.com/Lokkuchakreshkumar/KLU-DESK"} li_link={'https://kludesk.vercel.app'}/>
              
                <Card  img={portfolio} matter={"Crafted a responsive personal portfolio to showcase my projects, skills, and resume."} badges={["javascript","react","tailwind"]} gi_link={"https://github.com/Lokkuchakreshkumar/Portfolio"} li_link={"https://chakresh.vercel.app"}/>
                 <Card  img={todo} matter={"Built a fully functional end-to-end Todo application with complete CRUD capabilities."} badges={["javascript","react","node","express","mongo","tailwind"]} gi_link={"https://github.com/Lokkuchakreshkumar/React-TODO"} li_link={"https://react-todo-1-gkxg.onrender.com"}/>
         </section>
    )
}