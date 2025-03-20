import React from 'react'

const Packages = ({packages}) => {
  return (
<section className="py-16">
        <div className="container mx-auto px-4">
            <div className='flex justify-between'>
            <h2 className="text-3xl font-bold mb-8 text-center">اكتشف الباقات  </h2>
            <button className='w-[100px] h-[50px] bg-floraPeach/50 rounded-[10px] hover:bg-floraPeach text-floraPink '>
                المتجر
            </button>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                imgSrc={pkg.img}
              />
            ))}
          </div>
        </div>
      </section>
       )
}

export default Packages

const PackageCard = ({ name, price, imgSrc }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src={imgSrc} alt={name} className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-xl font-bold text-floraPink mt-4">{name}</h3>
        <p className="text-gray-600">ر.س {price.toFixed(2)}</p>
        <button className="mt-4 bg-floraPink text-white px-4 py-2 rounded hover:bg-floraPink/80">
          أضف إلى السلة
        </button>
      </div>
    );
  };
