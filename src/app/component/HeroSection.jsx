import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-rose-50 to-pink-100 py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Discover Your <span className="text-rose-600">Next Chapter</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          From timeless classics to modern bestsellers, explore our handpicked
          collection and dive into a world of knowledge, stories, and
          inspiration.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="px-7 py-3 rounded-2xl bg-rose-600 text-white font-semibold shadow-lg hover:bg-rose-700 hover:scale-105 transform transition">
            Shop Now
          </button>
          <button className="px-7 py-3 rounded-2xl border border-rose-600 text-rose-600 font-semibold hover:bg-rose-50 hover:scale-105 transform transition">
            Browse Categories
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-16 md:mt-0 flex justify-center md:justify-end w-full md:w-[50%]">
        {/* Back Image */}
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Books"
          className="w-[250px] md:w-[500px] rounded-2xl shadow-xl transform rotate-[-6deg] absolute top-6 left-10 opacity-90"
        />
        {/* Middle Image */}
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="Books"
          className="w-[250px] md:w-[350px] rounded-2xl shadow-xl relative z-10 transform rotate-[-6deg]"
        />
        {/* Front Image */}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Books"
          className="w-[250px] md:w-[400px] rounded-2xl shadow-xl transform rotate-[6deg] absolute top-10 right-20 opacity-95"
        />
      </div>
    </section>
  )
}

export default HeroSection