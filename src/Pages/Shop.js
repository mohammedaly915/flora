import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Shop = ({ packages, sales }) => {
  const [view, setView] = useState("packages"); // Default to "packages"

  // State for multi-select filter in Packages
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Categories for multi-select filter
  const categories = ["الورود", "الشوكلاتة", "البالون"];

  // Handle category selection (multi-select)
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filter packages based on selected categories
  const filteredPackages = selectedCategories.length
    ? packages.filter((pkg) =>
        selectedCategories.every((category) => pkg.categories.includes(category))
      )
    : packages;
  return (
    <div className="pt-20  mx-auto">
 <section className="relative h-[50vh] bg-floraPink">
      <div className="h-full flex flex-col items-center justify-center relative text-center z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-floraPeach mb-4">
          اكتشف الباقات
        </h1>

        {/* Search Input */}
        <div className="relative w-full max-w-md mt-6">
          <input
            type="text"
            placeholder="ابحث عن باقة..."
            className="w-full py-3 pl-12 pr-4 text-gray-800 bg-white rounded shadow-md focus:outline-none focus:ring-2 focus:ring-floraPink focus:shadow-lg transition-all duration-300 placeholder-gray-400"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-floraPink text-lg" />
        </div>
      </div>
    </section>
    <div className="py-12">
      {/* Toggle Filter for Packages and Sales */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setView("packages")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              view === "packages"
                ? "bg-floraPink text-white shadow-md"
                : "bg-floraPeach text-floraPink hover:bg-floraPink hover:text-white"
            }`}
          >
            الباقات
          </button>
          <button
            onClick={() => setView("sales")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              view === "sales"
                ? "bg-floraPink text-white shadow-md"
                : "bg-floraPeach text-floraPink hover:bg-floraPink hover:text-white"
            }`}
          >
            العروض
          </button>
        </div>

        {/* Multi-Select Filter for Packages */}
        {view === "packages" && (
          <div className="flex justify-center gap-4 mb-6">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="form-checkbox h-5 w-5 text-floraPink rounded focus:ring-floraPink"
                />
                <span className="text-gray-800 font-medium">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Packages Section */}
      {view === "packages" && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">الباقات</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredPackages.length ? (
                filteredPackages.map((pkg) => (
                  <div key={pkg.name} className="bg-white rounded-lg shadow-md p-4">
                    <img src={pkg.img} alt={pkg.name} className="w-full h-48 object-cover rounded-md" />
                    <h3 className="text-xl font-bold text-floraPink mt-4">{pkg.name}</h3>
                    <p className="text-gray-600">ر.س {pkg.price.toFixed(2)}</p>
                    <button className="mt-4 bg-floraPink text-white px-4 py-2 rounded hover:bg-floraPink/80">
                      أضف إلى السلة
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600 col-span-2">لا توجد باقات تطابق الفلتر</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Sales Section */}
      {view === "sales" && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">العروض</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sales.map((sale) => (
                <div key={sale.name} className="bg-white rounded-lg shadow-md p-4">
                  <img src={sale.img} alt={sale.name} className="w-full h-48 object-cover rounded-md" />
                  <h3 className="text-xl font-bold text-floraPink mt-4">{sale.name}</h3>
                  <p className="text-gray-600 line-through">ر.س {sale.original.toFixed(2)}</p>
                  <p className="text-floraPink font-bold">ر.س {sale.discounted.toFixed(2)}</p>
                  <button className="mt-4 bg-floraPink text-white px-4 py-2 rounded hover:bg-floraPink/80">
                    احجز العرض
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>

      {/* Custom Design */}
      {/* <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create Your Custom Design</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-floraPink">Choose a Flower</h3>
              {flowers.map((flower) => (
                <button
                  key={flower}
                  onClick={() => setCustomDesign({ ...customDesign, flower })}
                  className={`block w-full text-left p-2 my-1 rounded ${
                    customDesign.flower === flower ? "bg-floraPink text-white" : "bg-floraPeach"
                  }`}
                >
                  {flower}
                </button>
              ))}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-floraPink">Choose a Balloon</h3>
              {balloons.map((balloon) => (
                <button
                  key={balloon}
                  onClick={() => setCustomDesign({ ...customDesign, balloon })}
                  className={`block w-full text-left p-2 my-1 rounded ${
                    customDesign.balloon === balloon ? "bg-floraPink text-white" : "bg-floraPeach"
                  }`}
                >
                  {balloon}
                </button>
              ))}
            </div>
          </div>
          <button className="mt-6 bg-floraPink text-white px-6 py-3 rounded hover:bg-floraPink/80 w-full">
            Add Custom Design to Cart
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default Shop;