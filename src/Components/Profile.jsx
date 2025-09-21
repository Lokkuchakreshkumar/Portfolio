
import { FaReact } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { FaJsSquare } from "react-icons/fa";
import pfp from "../image/5fdb0f568f5c418dfdf9e82935b46bce.jpg"
import BlurText from "./BlurText";
export default function Profile(){
   const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
 return(
    <div className="w-full flex flex-col items-center h-120">
      
   <div className="sm:mt-20 mt-4 flex flex-wrap justify-center items-center sm:items-center   mb-15">
       <BlurText
  text="Hello, I am Chakresh"
  delay={400}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="m-2 sm:text-7xl text-white text-5xl"
/>
        <span className="text-white flex justify-center flex-wrap text-3xl sm:text-5xl"><span className="  inline-block w-46 ml-4 h-46   bg-linear-to-r from-blue-500 to-cyan-200  text-center rounded-full mt-10 sm:m-0"> <img src={pfp} alt="image" className="w-44 object-cover h-44 rounded-full inline mt-1 sm:mt-1" /></span> </span> 
   </div>

  
   <a href="#Contact"><button className="p-4 text-white bg-black border border-white rounded-lg hover:border hover:border-black hover:text-black hover:bg-white hover:cursor-pointer flex justify-center items-center"><AiOutlineSend className="inline mr-2"/>Let's Connect</button></a>

        <div className="text-center text-white text-2xl sm:text-4xl p-4 mt-8">As a <span className="bg-linear-to-r from-blue-600 p-1 rounded-xl to-cyan-600 bg-clip-text font-bold text-transparent ">Full Stack Developer</span>&nbsp;, I turn ideas into fully functional apps -&gt; frontend, backend, and beyond.</div>
        <span className="text-white text-center p-8 sm:text-2xl text-lg tracking-wider mt-8 leading-relaxed ">I code&nbsp;<FaJsSquare className="inline text-3xl hover:drop-shadow-[0px_0px_2px_yellow] text-yellow-300"/>(JavaScript) in my sleep <br></br>and debug &nbsp;<FaReact className="inline text-3xl text-cyan-300 hover:drop-shadow-[0px_0px_10px_cyan]"/>(React) with my coffee.</span>
   
    </div>
 )
}
