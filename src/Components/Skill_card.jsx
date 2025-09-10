export default function Skill_Card({name}){

 let shadowMap = {
    React:"drop-shadow-[3px_3px_25px_cyan]",
    JavaScript: "drop-shadow-[3px_3px_25px_yellow]",
    C:"drop-shadow-[3px_3px_25px_blue]",
    node:"drop-shadow-[3px_3px_25px_#4BAE4F]",
    express:"drop-shadow-[3px_3px_25px_red]",
    mongodb:"drop-shadow-[3px_3px_25px_green]",
     tailwindcss:"drop-shadow-[3px_3px_25px_cyan]",
     GeminiAPI:"drop-shadow-[3px_3px_25px_violet]",
     Github:"drop-shadow-[3px_3px_25px_white]",
     VsCode:"drop-shadow-[3px_3px_25px_#28B3F2]"
 }
    return(
        <div className={`mt-24  flex m-4 flex-col p-4 items-center justify-center ${shadowMap[name]} rounded-3xl text-whites backdrop-blur-3xl   bg-white/5`}>
        <p className={`mb-1 text-white text-2xl `}>{name}</p>
        </div>
    )
}