export default function Badge({tech}){
    let colorMap = {
       javascript:"bg-yellow-500",
        react:"bg-cyan-500",
        node:"bg-green-600",
        express:"bg-red-500",
        mongo:"bg-green-400",
        tailwind:"bg-blue-500"
    }
       let shadowMap = {
       javascript:"drop-shadow-[0px_0px_6px_yellow]",
       react:"drop-shadow-[0px_0px_6px_cyan]",
       node:"drop-shadow-[0px_0px_6px_green]",
       express:"drop-shadow-[0px_0px_6px_red]",
      mongo:"drop-shadow-[0px_0px_6px_green]",
      tailwind:"drop-shadow-[0px_0px_6px_aquamarine]"
    }
    
    return(
        <div className={`sm:p-4 p-3 sm:mr-4 m-1 font-semibold flex flex-wrap text-black rounded-3xl  ${colorMap[tech]}`}>{tech}</div>
    )
}