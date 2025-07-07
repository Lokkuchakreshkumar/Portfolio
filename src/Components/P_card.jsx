import Badge from "./Badge.jsx"
import Github from "./Github.jsx"
import Live from "./Live.jsx"
export default function Card({img,matter,badges,gi_link,li_link}){
    return(
        <div className="w-4/5 mt-12 h-80 	bg-[#23272f]
 rounded-2xl object-cover flex justify-baseline items-center mb-4 ">
      <img src={img}  alt=""  className="w-2/5 h-76 object-cover ml-4 rounded-xl"/>
     <div className="ml-4  w-4/5 h-4/5 flex flex-col  flex-wrap items-center justify-start"><span className="text-white text-3xl leading-relaxed ">{matter}</span>
 <div className="  w-full flex justify-start mt-0" >
     {badges.map((el)=>(
    <Badge className=" inline" tech={el}/>
  ))}
 </div>
    <div className="w-full flex justify-start mt-8">
        <Github gi_link={gi_link}/>
        <Live li_link={li_link} />
    </div>
     </div>
        </div>
    )
}