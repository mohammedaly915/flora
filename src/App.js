import React from "react";
import {  Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";


function App() {
  const sales = [
    { name: "عرض يوم التأسيس", original: 150, discounted: 120, img: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742336668/0007275_gold-balloons-confetti-cake-topper-birthday-flowers_qel4sh.jpg" },
  ];
  const packages = [
    { name: "مجموعة عيد ميلاد البهجة |ورد و بالون", price: 200, img: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg" },
    { name: "تصميم خلفية", price: 180, img: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg" },
    { name: "تصميم خلفية", price: 180, img: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg" },
  ];
  return (
      <div className="min-h-screen " dir={ "rtl" }>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop sales={sales} packages={packages} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      </div>
  );
}

export default App;