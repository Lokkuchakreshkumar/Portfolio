import Card from "./P_card.jsx"
import todo from "../image/Todo-project-ss.jpg"
import portfolio from "../image/image.png"

export default function Project(){
    
    return(
        <section id="project" className="w-full mt-24  flex flex-col items-center justify-center">  
        <div className="text-transparent  text-7xl mr-auto ml-12 my-24 bg-clip-text bg-linear-to-r from-white to-yellow-400 ">Projects <span className="text-yellow-400">.jsx</span></div>
       
               <Card  img={todo} matter={"Built a fully functional end-to-end Todo application with complete CRUD capabilities."} badges={["javascript","react","node","express","mongo","tailwind"]} gi_link={"https://github.com/Lokkuchakreshkumar/React-TODO"} li_link={"https://react-todo-1-gkxg.onrender.com"}/>
                <Card  img={portfolio} matter={"Crafted a responsive personal portfolio to showcase my projects, skills, and resume."} badges={["javascript","react","tailwind"]}/>
         </section>
    )
}