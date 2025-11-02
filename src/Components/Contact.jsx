import { Helmet } from "react-helmet-async";
import Linkedin from "./Linkedin_c"
import Github_c from "./Github_c"
import Contact_form from "./Contact_form"
export default function Contact(){
    return (
       <section id="Contact" className="w-full mt-26 flex flex-col justify-center items-center  ">
        <Helmet>
            <title>Contact Chakresh - LinkedIn and X</title>
            <meta name="description" content="Connect with Chakresh on LinkedIn and X. Let's talk about code, collaboration, or new opportunities." />
        </Helmet>
               <div className="sm:text-7xl text-5xl mr-auto ml-12 bg-clip-text bg-linear-to-r from-white to-violet-600 text-transparent">Contact <span className="text-violet-600">.jsx</span></div>
               <div className=" mt-16 text-center tracking-tight sm:text-xl text-xl p-4 text-green-500 code">Ping me -&gt; let’s talk code, caffeine, or chaos. </div>
             <div className="flex w-[90%] justify-center items-center flex-wrap ">
                  <Linkedin/>
               <Github_c/>
             </div>
             <Contact_form/>
       </section>
    )
}