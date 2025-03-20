import React from 'react'

const Services = () => {
    const cards = [
        {
          title: 'خدمة توصيل سريعة في الرياض',
          description: 'نوفر خدمات توصيل سريعة وآمنة في جميع أنحاء الرياض بأفضل الأسعار.',
          image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg',
        },
        {
          title: 'تصميم بطاقات بواجهات فاخرة',
          description: 'نصمم بطاقات فاخرة تناسب جميع المناسبات بتصاميم جذابة ومميزة.',
          image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg',
        },
        {
          title: 'تصميمات مخصصة',
          description: 'نوفر تصميمات مخصصة تتماشى مع احتياجاتك بأفضل جودة واحترافية.',
          image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg',
        },
        {
          title: 'إرسال الهدايا المميزة',
          description: 'توصيل الهدايا بتصاميم أنيقة لتترك انطباعًا رائعًا.',
          image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1742336666/20220712030639_file_62cce53f6f29c_62cce547a84c6_vtfuwx.jpg',
        }
      ];

     
  return (
    <section className=" bg-white h-[100vh] py-12">
    {/* <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        ماذا تقدم <span className="text-[#EC4899]">فلورا بوب</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
          </div>
        ))}
      </div>
    </div> */}
    <div className="bg-floraPeach h-[80%] py-16 rounded-[50px]">
      <div className="container mx-auto px-4">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First column: 1 card */}
          <div className="flex flex-col gap-6">
            <Card
              header={cards[0].title}
              description={cards[0].description}
              imgSrc={cards[0].image}
            />
          </div>

          {/* Second column: 2 cards */}
          <div className="flex flex-col gap-6">
            <Card
              header={cards[1].title}
              description={cards[1].description}
              imgSrc={cards[1].image}
            />
            <Card
              header={cards[2].title}
              description={cards[2].description}
              imgSrc={cards[2].image}
            />
          </div>

          {/* Third column: Section header + 1 card */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col  gap[-[2px]">
            <h2 className="text-5xl font-bold text-black  md:text-right">
            ماذا تقدم 
            </h2>
            <span className='font-bold text-7xl text-floraPink'> فلورا</span>
            </div>
            <Card
              header={cards[3].title}
              description={cards[3].description}
              imgSrc={cards[3].image}
            />
          </div>
        </div>
      </div>
    </div>
    </section>
    )
}


export default Services

const Card = ({ header, description, imgSrc }) => {
    return (
        <div className='bg-white rounded-2xl shadow-lg p-4 m-2'>
        <h3 className='text-xl font-bold text-gray-800 mb-2'>{header}</h3>
        <p className='text-gray-600'>{description}</p>
        <img src={imgSrc} alt={header} className='w-full h-32 object-cover rounded-xl mb-4' />
      </div>
    );
  };