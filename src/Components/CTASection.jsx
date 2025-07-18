import React from 'react';

const CTASection = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-pink-50 rounded-t-3xl text-gray-500 overflow-hidden mx-4 md:mx-24 mt-20 mb-10">
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-lg font-serif">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>
        <form className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 w-full md:w-[60%] rounded-2xl text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Decorative blur shape (optional) */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-white opacity-10 rounded-full blur-3xl z-0" />
    </section>
  );
};

export default CTASection;
