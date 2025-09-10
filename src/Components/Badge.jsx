export default function Badge({tech}){
    let colorMap = {
       javascript:"bg-yellow-500",
        react:"bg-cyan-500",
        node:"bg-green-600",
        express:"bg-red-500",
        mongo:"bg-green-400",
        tailwind:"bg-blue-500"
    }
      
    
    return(
        <div className={`sm:p-4 p-3 sm:mr-4 m-1  flex flex-wrap  rounded-xl  border border-white/10 shadow  bg-linear-to-b from-black to-[#151515] text-white`}>{tech}</div>
    )
}