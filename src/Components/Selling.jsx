import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Rome from '../imgs/roman-structure-with-sun-setting-it_1199278-33210.avif'
import London from '../imgs/London.jpg'
import Square from '../imgs/hel-square.jpg'

const Selling = () => {
  return (
    <div className=' mx-auto  text-start'>
        <p className='text-lg font-semibold py-4 text-center'>Top selling</p>
        <h1 className='text-2xl md:text-4xl font-bold font-serif py-4 text-center'>Top Destinations</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 mt-10 items-center py-[20px] px-[65px] ml-[80px] '>
            <div className='w-[315px] h-[457px] rounded-3xl border-lg border border-white rounded shadow-lg'>
                <img src= {Rome} alt="/" className='w-[315px] h-[350px] rounded-t-lg'/>
                <div className='flex justify-between items-center py-2 px-6'> 
                    <p>Rome, Italy</p>
                    <p className=''>$5,42k</p>
                </div>
                <p><FontAwesomeIcon icon={faLocationArrow} className='text-gray-500 pl-4 ' />10 Days Trip</p>
            </div>
            <div className='w-[315px] h-[457px] rounded-lg border border-white rounded shadow-lg'>
                <img src={London} alt="/" className='w-[315px] h-[350px] rounded-t-lg'/>
                <div className='flex justify-between items-center py-2 px-4'> 
                    <p>London, UK</p>
                    <p className='text-start'>$5,42k</p>
                </div>

                <p><FontAwesomeIcon icon={faLocationArrow} className='text-gray-500 pl-4 ' />10 Days Trip</p>
            </div>
            <div className='w-[315px] h-[457px] rounded-lg border border-white rounded shadow-lg'>
                <img src={Square} alt="/" className='w-[315px] h-[350px] rounded-t-lg'/>
                <div className='flex justify-between items-center py-2 px-6'> 
                    
                    <p>Full Europe</p>
                    <p className='text-start'>$5,42k</p>
                </div>

                <p><FontAwesomeIcon icon={faLocationArrow} className='text-gray-500 pl-4 ' />10 Days Trip</p>
            </div>
        </div>
    </div>
  ) 
}

export default Selling