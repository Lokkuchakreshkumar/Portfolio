import { useState } from "react"
import { FaCode } from "react-icons/fa";

export default function Navbar(){
    let [click,setClick] = useState("")
    let handleClick = (option)=>{
       
     let  putclass = `hover:cursor-pointer hidden md:flex lg:flex sm:flex mr-8 text-2xl  ${option===click?"p-2 rounded-xl  drop-shadow-red backdrop-blur-2px bg-white/5 drop-shadow-[0_0_5px_white]":""}
        `
        return putclass
    }
    return (
        <div className="w-[90%]  md:w-2/3 mt-12 rounded-3xl text-white bg-white/10 backdrop-blur-[12px] h-16 fixed flex items-center z-10"> 
       <div className="flex justify-start mr-2">
         <span style={{fontFamily:'Libertinus Mono, monospace'}} className="  ml-2 text-lg font-[Libertinus Mono]">&lt;/&nbsp;<span className="text-gray-400">Chakresh</span>&gt;</span>
        </div>   
     <div className="flex ml-auto  items-center">
         <a className={`${handleClick('home')}`} onClick={()=>setClick('home')}  href="#home">Home</a>
         <a href="#project" className="sm:hidden flex p-2 pr-3   border border-white bg-transparent text-whtie mr-4  rounded-3xl justify-center items-center"><FaCode className="inline mr-1 "/>See my work</a>
               <a className={`${handleClick('about')}`} onClick={()=>setClick('about')}  href="#about" >About</a>
            <a className={`${handleClick('projects')}`} onClick={()=>setClick('projects')} href="#project">Projects</a>
            <a className={`${handleClick('skills')}`} onClick={()=>setClick('skills')}  href="#skills" >Skills</a>
 <a className={`${handleClick('Contact')}`} onClick={()=>setClick('Contact')}  href="#Contact" >Contact</a>
    
     </div>
        </div>
    )
}