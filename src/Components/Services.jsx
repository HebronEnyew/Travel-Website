import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish, faPlane, faMicrophoneLines, faGear } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className='mx-auto px-[35px] pb-[40px]'>
        <p className='uppercase items-center py-2 font-semibold'>catagory</p>
        <h1 className='md:text-6xl text-3xl font-serif' >We Offer Best Services</h1>
        <div className='absolute hidden md:block w-[80px] h-[80px] bg-orange-300 rounded-t-3xl rounded-br-2xl -z-10 top-[130%] left-1/3 transform -translate-x-1/2 -translate-y-1/2'></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-gray-600'>
            <div className='w-[70%] h-[220px] bg-white flex flex-col justify-center items-center gap-4 p-5  rounded-lg '>
                <FontAwesomeIcon icon={faSatelliteDish} style={{ color: "#74C0FC" }} className='w-12 h-12'/>
                <h2 className='font-semibold text-lg text-gray-700'>Calculated Weather</h2>
                <p>Build Eicket longer admire do bartan vanity itself do in it.</p>
            </div>
            <div className='relative w-[80%] h-[250px] bg-white flex flex-col justify-center items-center gap-4 p-5 border rounded-lg shadow-lg'>
                <FontAwesomeIcon icon={faPlane} style={{ color: "#74C0FC" }} className='w-12 h-12'/>
                <h2 className='font-semibold text-lg text-gray-700'>Best Flights</h2>
                <p>Engrossed listening. park gate sell they west hard for the.</p>
            </div>
            <div className='w-[70%] h-[220px] bg-white flex flex-col justify-center items-center gap-4 p-5  rounded-lg'>
                <FontAwesomeIcon icon={faMicrophoneLines} style={{ color: "#74C0FC" }} className='w-12 h-12'/>
                <h2 className='font-semibold text-lg text-gray-700'>Local Events</h2>
                <p>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
            </div>
            <div className='w-[70%] h-[220px] bg-white flex flex-col justify-center items-center gap-4 p-5  rounded-lg'>
                <FontAwesomeIcon icon={faGear} style={{ color: "#74C0FC" }} className='w-12 h-12'/>
                <h2 className='font-semibold text-lg text-gray-700'>Customization</h2>
                <p>We deliver outsourced aviation services for military customers.</p>
            </div>
        </div>
    </div>
  )
}

export default Services