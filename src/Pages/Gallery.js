import React from "react";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/400?text=Flower+1",
    "https://via.placeholder.com/400?text=Balloon+1",
    "https://via.placeholder.com/400?text=Flower+2",
  ];

  return (
    <div className="pt-20 container mx-auto p-4">
      <h1 className="text-4xl font-bold text-floraPink mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;