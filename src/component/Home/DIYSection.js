import React from 'react'

const DIYSection = () => {
  return (
<section className='h-[50vh] '>
<div
      className=" container  bg-floraPeach p-[20px] rounded-xl shadow-lg relative flex items-center justify-evenly  transition-all duration-300 hover:shadow-xl"
       // Ensures sufficient height for balloons
    >
      {/* Text Section */}
      <div className="text-center flex flex-col justify-evenly gap-[20px] z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
          اصنعها بنفسك
        </h3>
        <h1 className=" text-5xl md:text-6xl font-bold text-floraPink mb-4 animate-fade-in">
          الأن
        </h1>
        <button
          className="bg-floraPink w-[200px] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
        >
          أنشئ
        </button>
      </div>

      {/* Balloons Section */}
      <div className=" h-full flex items-start ">
        {/* Balloon 1 */}
        <div className="relative right-[50px] rotate-[30deg] animate-float">
          <img
            src="https://res.cloudinary.com/dswehdo2v/image/upload/v1742285190/29275_b3mrjy.png" // Placeholder balloon image
            alt="Balloon"
            className="w-[150px] object-cover"
          />
        </div>
        {/* Balloon 2 */}
        <div className="relative animate-float-slow">
          <img
            src="https://res.cloudinary.com/dswehdo2v/image/upload/v1742285190/29275_b3mrjy.png"
            alt="Balloon"
            className=" w-[150px] object-cover"
          />
        </div>
        {/* Balloon 3 */}
        <div className="relative left-[50px] rotate-[-30deg] animate-float">
          <img
            src="https://res.cloudinary.com/dswehdo2v/image/upload/v1742285190/29275_b3mrjy.png"
            alt="Balloon"
            className=" w-[150px] object-cover"
          />
        </div>
      </div>
    </div>
</section>
    
)
}

export default DIYSection