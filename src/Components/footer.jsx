import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons' // this is RIGHT
import { motion } from "motion/react"



export default function Footer(){
    return(
        <div className="mt-8 sm:mt-16 flex flex-col sm:text-2xl text-lg   mb-8 items-center  text-white">
            <div>
               made with <motion.div
               animate={{
                scale:[1,1.2,1]
               }}
               transition={{
                repeat:Infinity,
                duration:3
                
               }}
               className='inline-block'
               ><FontAwesomeIcon icon={faHeart} className='text-cyan-500 drop-shadow-[0px_0px_15px_cyan] mx-2' /></motion.div> by chakresh
            </div>
            <div className='flex flex-col items-center'>
                &copy;2025 All rights reserved<div className='text-sm'>(if you use my template, a dm makes me happy)</div>
            </div>
        </div>
    )
}