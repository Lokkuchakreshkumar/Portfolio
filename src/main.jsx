import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { motion } from "motion/react"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:3}}
    className='min-h-screen bg-black'
    >
    <App />
    </motion.div>
  </StrictMode>,
)
