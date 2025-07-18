import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className=' w-[100%] h-[80px] bg-white flex justify-between items-center px-10 mx-auto hover:cursor-pointer '>

          <div className='pl-0 ml-0'>
              <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="40" fontSize="40" fontWeight="bold" fill="black" >Jad</text>
                  <text x="63" y="40" fontSize="40" fontWeight="bold" fill="black" >o</text>
                  <circle cx="75" cy="30" r="6" fill="orange" />
                  <text x="87" y="40" fontSize="40" fontWeight="bold" fill="black" >o</text>
                  <circle cx="100" cy="30" r="6" fill="orange" />
              </svg>
          </div>
         <div>
              <ul className='flex justify-between items-center gap-10 text-m font-semibold'>
                  <li>Destinations</li>
                  <li>Hotels</li>
                  <li>Flights</li>
                  <li>Bookings</li>
                  <li>Login</li>
                  <li>Sign up</li>
                  <li>EN</li>
              </ul>
          </div>
    </div>
    </>
  )
}

export default Navbar