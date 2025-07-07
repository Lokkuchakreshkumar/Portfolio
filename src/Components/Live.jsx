import { FaExternalLinkAlt } from "react-icons/fa";

export default function Live({li_link}){
         return(
            <div>
                 <a href={li_link} target="_blank" className="p-4 flex hover:cursor-pointer text-2xl items-center justify-center rounded-4xl bg-sky-600 text-white"> <FaExternalLinkAlt className=" text-2xl inline mr-4  " />Try Now</a>
            </div>
         )
}