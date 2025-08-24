import React from 'react'

const ImgButton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Top Images */}
      <div className="flex justify-between items-center gap-6 mb-10">
        <img src="/b1.png" alt="Banner 1" className="w-1/2 h-[30vh] object-cover rounded-2xl shadow-lg" />
        <img src="/b2.png" alt="Banner 2" className="w-1/2 h-[30vh] object-cover rounded-2xl shadow-lg" />
      </div>

      {/* Buttons Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <button className="bg-pink-500 text-white text-lg font-semibold py-6 rounded-2xl shadow-lg hover:bg-pink-600 transition">
          Return
        </button>
        <button className="bg-green-500 text-white text-lg font-semibold py-6 rounded-2xl shadow-lg hover:bg-green-600 transition">
          Free Home Delivery
        </button>
        <button className="bg-yellow-500 text-white text-lg font-semibold py-6 rounded-2xl shadow-lg hover:bg-yellow-600 transition">
          Gift
        </button>
        <button className="bg-blue-500 text-white text-lg font-semibold py-6 rounded-2xl shadow-lg hover:bg-blue-600 transition">
          Delivery Charge Only 40tk
        </button>
      </div>
    </div>
  )
}

export default ImgButton
