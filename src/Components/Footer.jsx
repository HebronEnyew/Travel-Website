import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faInstagram, faTwitter } from '@fortawesome/free-solid-svg-icons/faAddressBook'
import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-col-2 sm:grid-col-3 md:grid-cols-5 gap-4 px-[35px] py-8 text-start'>
        <div className='text-start pr-10 text-md '>
            <h3 className='text-start uppercase text-3xl font-bold pb-8'>Jadoo.</h3>
            <p className='text-start text-gray-500'>Book your trip in minute, get full control for much longer
            </p>
        </div>
        <div className='text-gray-500 text-lg font-semibold'>
            <h3 className='text-lg font-bold pb-6'>Company</h3>
            <ul>
                <li className='py-1'>About</li>
                <li className='py-1'>Careers</li>
                <li className='py-1'>Mobile</li>
            </ul>
        </div>
        <div className='text-gray-500 text-lg font-semibold'>
            <h3 className='text-lg font-bold pb-6'>Contact</h3>
            <ul>
                <li className='py-1'>Help/FAQ</li>
                <li className='py-1'>Press</li>
                <li className='py-1'>Affilates</li>
            </ul>
        </div>
        <div className='text-gray-500 text-lg font-semibold'>
            <h3 className='text-lg font-bold pb-6'>More</h3>
            <ul>
                <li className='py-1'>Airlinesfees</li>
                <li className='py-1'>Airline</li>
                <li className='py-1'>Low fare tips</li>
            </ul>
        </div>
        <div>
            <div className='text-gray-500 text-lg font-semibold'>
                <FontAwesomeIcon icon={faAddressBook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>
            <p>Discover our app</p>
        </div>
    </div>
  )
}

export default Footer