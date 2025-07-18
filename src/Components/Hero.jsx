import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../imgs/hero-img.png'
const Hero = () => {
  return (
    
    <div className='w-full bg-center md:flex justify-between items-center text-start mx-auto pt-[10px] pb-[50px] px-[35px]'>
         <div className='absolute -left-[100px] top-1/9 w-[300px] h-[200px] rounded-full bg-purple-500 opacity-20 blur-[80px] z-0'></div>
         <svg 
            className='absolute top-0 right-0 z-0 h-full w-1/3'
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 800 320"
            preserveAspectRatio="none"
            >
            <path 
                fill="#F1A501" 
                fillOpacity="0.1" 
                d="M0,60 
                C300,350 350,0 300,160
                C600,420 1200,0 1000,260
                L800,0
                L0,0
                Z"
            ></path>
            </svg>
            

      <svg 
        className='absolute z-20 airplane-animation'
        style={{
          width: '50px',
          height: '50px',
          top: '25%',
          left: '60%',
        }}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
      >
       
        <path 
          fill="#3B82F6" 
          d="M22,16.21V14l-8-5V3.5A1.5,1.5,0,0,0,12.5,2h-1A1.5,1.5,0,0,0,10,3.5V9l-8,5v2.21L10,14.94V19l-2,1.33V22l3.5-2,3.5,2V20.33L14,19V14.94Z"
        />

        <path 
          fill="#FFFFFF" 
          d="M12,14.94l-2-1.25v-2.5l2,1.25V14.94z M14,14.94v-2.5l2-1.25v2.5L14,14.94z"
        />
      </svg>
      <svg 
        className='absolute z-20 airplane-animation-delay'
        style={{
          width: '45px',
          height: '45px',
          top: '35%',
          left: '50%',
        }}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
      >
        <path 
          fill="#3B82F6" 
          d="M22,16.21V14l-8-5V3.5A1.5,1.5,0,0,0,12.5,2h-1A1.5,1.5,0,0,0,10,3.5V9l-8,5v2.21L10,14.94V19l-2,1.33V22l3.5-2,3.5,2V20.33L14,19V14.94Z"
        />
        <path 
          fill="#FFFFFF" 
          d="M12,3.5V9l-8,5v2.21L12,14.94V19l-2,1.33V22l3.5-2,3.5,2V20.33L14,19V14.94L22,16.21V14l-8-5V3.5z"
        />
      </svg>
        <div className='w-[60%]  flex flex-col justify-center items-start gap-5'>
            <p className='uppercase text-1xl font-bold text-orange-500 pt-[10px]'>best destinations around the world</p>
            <h1 className='md:text-7xl font-bold w-[85%] py-[10px] font-serif'>Travel, enjoy and live a new and full life</h1>
            <p className='text-gray-600 w-[59%]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <div className='flex justify-between items-center gap-10 mt-[10px]'>
                <button className='bg-yellow-400 text-white font-semibold py-3 px-4 rounded'>Find out more</button>
                <div className='bg-transparent text-gray-500 border border-none py-2 px-4 rounded flex justify-between items-center gap-2 hover:bg-orange-500 hover:text-white transition-all duration-300'>
                    <FontAwesomeIcon icon={faPlay} className="text-orange-500 text-2xl" />
                   <button className=''>Play Demo</button>
                </div>
            </div>
        </div>

        <div className='ml-0'>
            <img className=' object-cover h-[100%] ' src={HeroImg} alt="Travel" />
        </div>
    </div>
  )
}

export default Hero