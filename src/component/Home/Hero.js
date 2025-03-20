import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[150vh]  bg-floraPink">
        
        <div className="absolute h-[] top-[10px] left-[50px] opacity-50">
          <img
            src="https://res.cloudinary.com/dswehdo2v/image/upload/v1742285190/29275_b3mrjy.png"
            alt="Flowers and Balloons"
            className="w-[500px] object-cover"
          />
        </div>
        <div className="h-[70vh] flex flex-col items-center justify-center relative text-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-floraPeach mb-4">
            احتفل بأسلوب مميز مع فلورا بوب
          </h1>
          <p className="text-bold md:text-2xl text-floraPeach">
            أضف طابعًا مميزًا لكل مناسبة
          </p>
          <button className="mt-6 bg-floraPeach text-floraPink px-6 py-3 rounded-lg hover:bg-floraPeach/80 hover:text-white transition-all">
            اطلب الآن
          </button>
        </div>

        <div className="h-[80vh] w-[100vw] flex items-center justify-center  opacity-80">
        <video
            muted
            className="w-[90vw]  h-[90%] rounded-[50px] object-cover"
            src="https://res.cloudinary.com/dswehdo2v/video/upload/v1736824649/WhatsApp_Video_2025-01-14_at_05.10.55_84c3cd94_ryeqw8.mp4" // Sample video (replace with your own)
          />
        </div>
       
      </section>
  )
}

export default Hero