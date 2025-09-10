import { FaGithub } from "react-icons/fa";
export default function Github({gi_link}){
    return(
        <div>
       <a href={gi_link} target="_blank" > <button className="sm:p-4 font-sans border border-white/50 p-2 flex hover:cursor-pointer text-xl mr-8 items-center justify-center rounded-xl bg-black text-white"><FaGithub className=" text-2xl inline mr-4  " />Github</button></a>
        </div>
    )
}