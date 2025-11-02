import { Helmet } from "react-helmet-async";
import Skill_Card from "./Skill_card"
export default function Skill(){
    return (
       <section id="skills" className=" w-full mt-24 flex flex-col">
        <Helmet>
            <title>Chakresh's Skills - React, Node.js, and More</title>
            <meta name="description" content="Explore the technical skills of Chakresh, a software developer proficient in React, Node.js, MongoDB, and other modern web technologies." />
        </Helmet>
        <div className="text-transparent bg-clip-text bg-linear-to-r from-white to-green-700 sm:text-7xl text-5xl ml-12 mr-auto">Skills<span className="text-green-500">.jsx</span></div>
           <div className="flex mt-4 font-serif  justify-center items-center flex-wrap">
<Skill_Card name={"React"}/>
<Skill_Card name={"node"}/>
<Skill_Card name={"JavaScript"}/>
<Skill_Card name={"C"}/>
<Skill_Card name={"express"}/>
<Skill_Card name={"mongodb"}/>
<Skill_Card name={"tailwindcss"}/>
<Skill_Card name={"GeminiAPI"}/>
<Skill_Card name={"Github"}/>
<Skill_Card name={"VsCode"}/>
</div>

       </section>
    )
}