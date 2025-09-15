import { FaHeart } from 'react-icons/fa'

const Newfooter = () => {
  return (
    <div className="mt-8 sm:mt-16 flex flex-col sm:text-2xl text-lg mb-8 items-center text-white">
      <div>
        made with 
        <span className='inline-block'>
          <FaHeart className='text-cyan-500 drop-shadow-[0px_0px_15px_cyan] mx-2 inline-block' />
        </span> 
        by chakresh
      </div>
      <div className='flex flex-col items-center'>
        &copy;2025 All rights reserved
        <div className='text-sm'>(if you use my template, a dm makes me happy)</div>
      </div>
    </div>
  )
}

export default Newfooter
