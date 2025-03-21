import React, { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa';

const Hero = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  // Ref to control the video element
  const videoRef = useRef(null);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
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

        <div className="h-[80vh] w-[100vw] flex items-center justify-center opacity-80 relative">
      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop // Optional: Remove if you don't want the video to loop
        className="w-[90vw] h-[90%] rounded-[20px] object-cover"
        src="https://res.cloudinary.com/dswehdo2v/video/upload/v1742515979/WhatsApp_Video_2025-03-21_at_01.52.11_e6c1c29c_vwe59v.mp4"
      />

      {/* Custom Play/Pause Icon */}
      <button
        onClick={togglePlayPause}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-floraPink/70 rounded-full p-4 text-white hover:bg-floraPink hover:scale-110 transition-all duration-300"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
      </button>
    </div>
       
      </section>
  )
}

export default Hero