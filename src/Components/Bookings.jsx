import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faHeart, faSquarePlus, faCashRegister, faCar } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Bookings = () => {
  return (
    <div className='mx-auto px-[35px] pb-[40px] flex max-md:flex-col justify-center items-start gap-5 mt-[120px]'>
        <div className='w-[80%] bg-white flex flex-col justify-start items-start gap-4 p-5 '>
            <p className='text-gray-500 font-semibold text-start text-lg'>Easy and Fast</p>
            <h1 className='md:text-6xl text-3xl font-serif text-start font-semibold w-[80%]'>Book Your Next Trip In 3 Easy Steps</h1>
            <div className='flex flex-col justify-start items-start gap-4 mt-5 text-gray-500'>
                <div className='flex justify-start items-start gap-2'>
                    <FontAwesomeIcon icon={faSquarePlus} className='text-yellow-500  w-[50px] h-[50%]' />
                    <div className='w-[65%] ml-2 text-start'>
                        <span className=' font-bold flex items-start text-lg'>Choose Your Destination</span>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur.</p>
                    </div>
                </div>
                <div className='flex justify-start items-start gap-2'>
                    <FontAwesomeIcon icon={faCashRegister} className='text-red-500 w-[50px] h-[50%]' />
                    <div className='w-[65%] ml-2 text-start'>
                        <span className=' font-bold flex items-start text-lg'>Make Payment</span>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur.</p>
                    </div>
                </div>
                <div className='flex justify-start items-start gap-2'>
                    <FontAwesomeIcon icon={faCar} className='text-blue-500 w-[50px] h-[50%]' />
                    <div className='w-[65%] ml-2 text-start'>
                        <span className=' font-bold flex items-start text-lg'>Reach Airport on Selected Date</span>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[550px] h-[400px] border border-gray-200 rounded-3xl p-5 bg-white  items-center gap-4 shadow-lg mt-[110px]'>
            <img className='w-[500px] h-[200px] object-cover rounded-3xl shadow-lg ' src="https://dnjpbxg2wcpr8.cloudfront.net/article_cover/5395de7701704d2bc9000056/5469d6f1daafd0ebb0000001/6836f6081504e8001eeff468/683b9beb48344d3744afe160/1/article_26-1.webp" alt="Booking Steps" />
            <p className='text-start py-1 text-lg font-semibold '>Trip To Greece</p>
            <p className='text-start text-lg font-semibold text-gray-500'>14-29 June | by Robbin john</p>
            <div className='flex gap-5 p-2'>
                <FontAwesomeIcon icon={faLeaf} style={{ color: "gray" }} className='text-gray-500 text-2xl mt-2 border rounded-3xl p-3 bg-gray-transparent shadow-lg' />
                <FontAwesomeIcon icon={faLeaf} style={{ color: "gray" }} className='text-gray-500 text-2xl mt-2 border rounded-3xl p-3 bg-gray-transparent shadow-lg' />
                <FontAwesomeIcon icon={faLeaf} style={{ color: "gray" }} className='text-gray-500 text-2xl mt-2 border rounded-3xl p-3 bg-gray-transparent shadow-lg' />
            </div>
            <div className='flex justify-between items-center'>
                    <span className='text-gray-500 text-lg font-semibold text-gray-500'> <p>24 people going</p></span>
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} className='text-gray-500 text-2xl mt-2' />
            </div>
        </div>
    </div>
  )
}

export default Bookings