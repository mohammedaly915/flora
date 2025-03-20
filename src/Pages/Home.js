import React from "react";
import Hero from "../component/Home/Hero";
import Sale from "../component/Home/Sale";
import Services from "../component/Home/Services";
import Packages from "../component/Home/Packages";
import DIYSection from "../component/Home/DIYSection";
import Testomential from "../component/Home/Testomential";

const Home = () => {
  // Sample data (replace with real data or fetch from backend)
  const sales = [
    { name: "عرض يوم التأسيس", original: 150, discounted: 120, img: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742336668/0007275_gold-balloons-confetti-cake-topper-birthday-flowers_qel4sh.jpg" },
  ];
  const packages = [
    { name: "مجموعة عيد ميلاد البهجة |ورد و بالون", price: 200, img: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg" },
    { name: "تصميم خلفية", price: 180, img: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg" },
    { name: "تصميم خلفية", price: 180, img: "https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg" },
  ];
  const testimonials = [
    { name: "سارة", text: "فلورا بوب أضافت لمسة سحرية لحفل تخرجي، شكرًا!" },
    { name: "أحمد", text: "التوصيل كان سريعًا والباقة رائعة جدًا." },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Video */}
      <Hero />

      {/* Sale Section */}
      <Sale sales={sales}/>

      {/* Services Section (ماذا تقدم فلورا) */}
      <Services />


      {/* Packages Section */}
      <Packages packages={packages}/>

      {/* DIY Section (اصنعها بنفسك) */}
      <DIYSection/>

      {/* Testimonials Section */}
      <Testomential />      
    </div>
  );
};

export default Home;