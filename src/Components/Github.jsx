import { FaGithub } from "react-icons/fa";
export default function Github({gi_link}){
    return(
        <div>
       <a href={gi_link} target="_blank" > <button className="sm:p-4 p-2 flex hover:cursor-pointer text-2xl mr-8 items-center justify-center rounded-4xl bg-black text-white"><FaGithub className=" text-2xl inline mr-4  " />Github</button></a>
        </div>
    )
}