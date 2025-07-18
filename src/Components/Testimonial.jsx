import React from 'react'
import UserImg from '../Components/id photo.jpg'

const Testimonial = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex">
        {/* Heading */}
        <div className="mb-10 w-full md:w-[50%] text-start">
          <h5 className="text-lg font-semibold text-gray-600 uppercase">Testimonials</h5>
          <h2 className="text-5xl font-bold text-gray-900 mt-2 font-serif">What People Say <br /> About Us.</h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start w-[65%]">
          <img
            src={UserImg}
            alt="User"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-md"
          />

          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              “On the Windows talking painted pasture yet its express parties use. Sure last upon he
              same as knew next. Of believed or diverted no.”
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Mike Taylor</h4>
              <p className="text-sm text-gray-500">Lahore, Pakistan</p>
            </div>
          </div>

          {/* Next Card Preview (behind current) */}
          <div className="hidden md:block absolute top-1/2 right-0 translate-y-[-50%] translate-x-[30%] bg-white rounded-xl shadow-lg p-6 opacity-30 w-64">
            <p className="text-sm text-gray-500">Chris Thomas</p>
            <p className="text-xs text-gray-400">CEO of Red Button</p>
          </div>
        </div>

        {/* Slider dots */}
        <div className="flex justify-start items-center space-x-2 mt-6">
          <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>

      </div>
    </section>
  )
}

export default Testimonial
