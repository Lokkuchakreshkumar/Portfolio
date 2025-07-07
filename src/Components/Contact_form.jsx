import { FaRegEnvelope } from "react-icons/fa6";
export default function Contact_form(){
    return(
        <div className="w-full flex condense flex-col mt-16 items-center  ">
          <div className="condense  text-7xl bg-clip-text text-transparent bg-linear-to-r from-white via-white/50 to-white/20">GET IN TOUCH WITH ME
          </div>
   
              <form action="https://formspree.io/f/mrbkwzbg" method="POST" className='w-140  mt-32 flex flex-col items-center justify-center '>
         
              <label htmlFor="Name" className='text-white mr-auto text-2xl '>Name</label>
         <input type="text" placeholder="Enter your name" id='Name' name="name" className='bg-[#171717] text-xl w-full text-white placeholder:text-2xl mt-1 h-14 px-4 rounded-xl border border-white placeholder:text-white/80' />
        
              <label htmlFor="Name" className='  text-white  mt-4 mr-auto text-2xl'>Email Address</label>
         <input type="email" placeholder="Enter your Email" name="email" id='Email' className='bg-[#171717] text-xl w-full mt-1 h-14 text-white  px-4 placeholder:text-2xl rounded-xl border border-white placeholder:text-white/80' />
          <label htmlFor="Subject" className='  text-white  mt-4 mr-auto text-2xl'>Subject</label>
         <input type="text" placeholder="Enter the Subject" name="subject" id='Subject' className='bg-[#171717] text-xl text-white placeholder:text-2xl w-full mt-1 h-14 px-4 rounded-xl border border-white placeholder:text-white/80' />
            <label htmlFor="msg" className='  text-white  mt-4 mr-auto text-2xl'>Message</label>
         <input type="text" placeholder="Enter your message" name="msg" id='msg' className='bg-[#171717] mb-14 text-xl text-white w-full mt-1 h-36 px-4 rounded-xl border border-white placeholder:text-2xl placeholder:text-white/80' />
         <button type='submit' className="bg-linear-to-r from-[#080B12] to-[#01013b] text-white/80  text-2xl flex px-8 justify-center items-center mb-4 p-4 rounded-3xl"><FaRegEnvelope className="inline mr-2 text-2xl"/>Submit</button>
          </form>
            
        
        </div>
    )
}