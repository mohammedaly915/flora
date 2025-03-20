import React from 'react'

const Sale = ({sales}) => {
  return (
<section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">عروض خاصة</h2>
        <div className={`grid ${sales.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-6`}>
          {sales.map((sale) => (
            <SaleCard
              key={sale.name}
              name={sale.name}
              original={sale.original}
              discounted={sale.discounted}
              imgSrc={sale.img}
            />
          ))}
        </div>
      </div>
    </section> )
}


const SaleCard = ({ name, original, discounted, imgSrc }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src={imgSrc} alt={name} className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-xl font-bold text-floraPink mt-4">{name}</h3>
        <p className="text-gray-600 line-through">ر.س {original.toFixed(2)}</p>
        <p className="text-floraPink font-bold">ر.س {discounted.toFixed(2)}</p>
        <button className="mt-4 bg-floraPink text-white px-4 py-2 rounded hover:bg-floraPink/80">
          إضافة إلى السلة
        </button>
      </div>
    );
  };
export default Sale