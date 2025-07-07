import Linkedin from "./Linkedin_c"
import Github_c from "./Github_c"
import Contact_form from "./Contact_form"
export default function Contact(){
    return (
       <section id="Contact" className="w-full mt-26 flex flex-col justify-center items-center  ">
               <div className="text-7xl mr-auto ml-12 bg-clip-text bg-linear-to-r from-white to-violet-600 text-transparent">Contact <span className="text-violet-600">.jsx</span></div>
               <div className=" mt-16 tracking-tight sm:text-xl text-xl p-4 text-green-500 code">Ping me -&gt; let’s talk code, caffeine, or chaos. </div>
             <div className="flex ">
                  <Linkedin/>
               <Github_c/>
             </div>
             <Contact_form/>
       </section>
    )
}