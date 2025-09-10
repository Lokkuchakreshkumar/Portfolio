import { FaExternalLinkAlt } from "react-icons/fa";

export default function Live({li_link}){
         return(
          li_link &&  <div>
                 <a href={li_link} target="_blank" className="sm:p-4 p-2 flex  hover:cursor-pointer text-xl items-center justify-center rounded-xl border border-blue-500 bg-linear-to-r from-blue-800 to-cyan-800 text-white"> <FaExternalLinkAlt className=" text-xl inline mr-4  " />Try Now</a>
            </div>
         )
}