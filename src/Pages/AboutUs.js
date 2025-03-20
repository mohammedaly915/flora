import React from "react";

const AboutUs = () => {
  return (
    <div className="pt-20 container mx-auto p-4">
      <h1 className="text-4xl font-bold text-floraPink mb-8 text-center">About Us</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
          Flora Company is dedicated to bringing joy through beautiful flowers and vibrant balloons.
          Our mission is to create memorable experiences with every design, whether it’s a pre-made
          package or a custom creation tailored to your vision.
        </p>
        <p className="text-gray-700">
          Founded with a passion for nature and celebration, we blend creativity and quality to make
          every moment bloom with happiness.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;