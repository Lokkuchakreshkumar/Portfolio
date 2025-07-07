import Skill_Card from "./Skill_card"
export default function Skill(){
    return (
       <section id="skills" className=" w-full flex flex-col">
        <div className="text-transparent bg-clip-text bg-linear-to-r from-white to-green-700 text-7xl ml-12 mr-auto">Skills<span className="text-green-500">.jsx</span></div>
           <div className="flex mt-24  justify-center flex-wrap">
<Skill_Card name={"JavaScript"}/>
<Skill_Card name={"C"}/>
<Skill_Card name={"React"}/>
<Skill_Card name={"node"}/>
<Skill_Card name={"express"}/>
</div>
 <div className="flex mt-12 justify-center flex-wrap">
<Skill_Card name={"mongodb"}/>
<Skill_Card name={"tailwindcss"}/>
<Skill_Card name={"GeminiAPI"}/>
<Skill_Card name={"Github"}/>
<Skill_Card name={"VsCode"}/>


</div>
       </section>
    )
}