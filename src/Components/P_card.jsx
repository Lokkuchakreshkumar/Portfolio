import Badge from "./Badge.jsx"
import Github from "./Github.jsx"
import Live from "./Live.jsx"
export default function Card({img,matter,badges,gi_link,li_link}){
    return(
        <div className="sm:w-4/5 mt-12 w-[95%] p-4 sm:h-80 	bg-[#23272f]
 rounded-2xl  sm:flex sm:justify-baseline  items-center mb-4 object-cover ">
      <img src={img}  alt=""  className="sm:w-2/5 w-[100%]  h-72 object-cover rounded-xl"/>
     <div className="ml-4  sm:w-4/5 lg:w-4/5 sm:h-[90%] flex flex-col flex-wrap items-center justify-center sm:mb-12">
     <span className="text-white text-lg sm:text-3xl leading-relaxed ">{matter}</span>
 <div className="  w-full flex flex-wrap sm:flex sm:flex-wrap justify-start mt-0" >
     {badges.map((el)=>(
    <Badge className=" inline" tech={el}/>
  ))}
 </div>
    <div className="sm:w-[60%] flex sm:flex sm:flex-wrap sm:mr-auto sm:mt-2 mt-4">
        <Github gi_link={gi_link}/>
        <Live li_link={li_link} />
    </div>
     </div>
        </div>
    )
}