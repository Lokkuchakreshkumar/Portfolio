import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { motion } from "framer-motion"
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2}}
      className='min-h-screen bg-black'
      >
      <App />
      </motion.div>
    </HelmetProvider>
  </StrictMode>,
)
