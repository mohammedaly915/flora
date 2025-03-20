import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Testimonial Component
const Testimonial = ({ message, name, job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-floraPeach/20 hover:shadow-lg transition-all text-center mx-2">
      <div className="flex justify-center mb-4">
        <FaQuoteLeft className="text-floraPink text-3xl" />
      </div>
      <p className="text-gray-600 italic mb-4">"{message}"</p>
      <div className="text-gray-800 flex justify-center gap-[6px]">
        <p className="font-semibold">
          {name} - <span className="text-gray-400">{job}</span>
        </p>
      </div>
    </div>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      message: "فلورا بوب أضافت لمسة سحرية لحفل تخرجي، شكرًا!",
      name: "سارة",
      job: "طالبة",
    },
    {
      message: "التوصيل كان سريعًا والباقة رائعة جدًا.",
      name: "أحمد",
      job: "مهندس",
    },
    {
      message: "التوصيل كان سريعًا والباقة رائعة جدًا.",
      name: "أحمد",
      job: "مهندس",
    },
    {
      message: "التوصيل كان سريعًا والباقة رائعة جدًا.",
      name: "أحمد",
      job: "مهندس",
    },
    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Number of slides to show
  const slidesToShow = window.innerWidth >= 768 ? 2 : 1;
  const totalSlides = Math.ceil(testimonials.length / slidesToShow);

  // Go to previous slide
  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  };

  // Go to next slide
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  };

  // Get visible testimonials based on current index and slidesToShow
  const visibleTestimonials = () => {
    const startIdx = currentIndex * slidesToShow;
    return testimonials.slice(startIdx, startIdx + slidesToShow);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-floraPink mb-8 text-center">آراء العملاء</h2>
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              width: `${(testimonials.length / slidesToShow) * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 flex-shrink-0"
                style={{ minWidth: `${100 / slidesToShow}%` }}
              >
                <Testimonial
                  message={testimonial.message}
                  name={testimonial.name}
                  job={testimonial.job}
                />
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-floraPink text-white p-2 rounded-full hover:bg-floraPink/80 transition-all z-10"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-floraPink text-white p-2 rounded-full hover:bg-floraPink/80 transition-all z-10"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;