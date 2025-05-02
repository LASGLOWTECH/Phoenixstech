import React from 'react';

const OurStorySection = () => {
  const timelineData = [
    { year: '2018', event: 'Founded', description: 'Launched with a vision to transform customer support.' },
    { year: '2019', event: 'First Major Client', description: 'Secured our first global enterprise partnership.' },
    { year: '2021', event: 'Expanded Services', description: 'Introduced multilingual and technical support offerings.' },
    { year: '2023', event: 'Global Reach', description: 'Now serving clients worldwide.' },
  ];

  return (
    <section className="py-16 px-6  md:px-20 bg-white text-center">
      <div className="">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Story</h2>

        {/* Introduction Paragraph */}
        <div className="md:max-w-5xl mx-auto text-gray-600 leading-relaxed mb-10">
          <p className="mb-2 text-base ">
            We started with a simple goal: to help businesses create better connections with their customers. Over time, that vision grew into a global mission—offering multilingual support and tailored service experiences across industries.
  What began as a small, passionate team has grown into a network of professionals dedicated to delivering excellence every day.
         From voice support to live chat, technical help, and beyond, we focus on people, technology, and results.
          
            Our journey is powered by trust, built on expertise, and driven by the belief that every interaction matters.
          </p>
        </div>

        {/* Timeline/Cards Section */}
        <div className="   grid grid-cols-1  md:grid-cols-4 justify-center items-center md:space-x-1 space-y-6 md:space-y-0">
          {timelineData.map((item, index) => (
            <div key={index} className="relative  bg-white border border-grey-600 rounded-md shadow-sm p-6  md:w-[300px] h-[140px] text-center">
              {/* Top Border with Color */}
              <div className={`absolute top-0 left-0 flex mx-auto w-full h-1 ${
                index === 0 ? 'bg-gradient-to-r from-Secondarycolor to-Secondarycolor1' :
                index === 1 ? 'bg-gradient-to-r from-Primarycolor to-Primarycolor1' :
                index === 2 ?'bg-gradient-to-r from-Secondarycolor to-Secondarycolor1' :
                'bg-gradient-to-r from-Primarycolor to-Primarycolor1'
              } rounded-t-md`}></div>

<div className="flex flex-row space-x-1 justify-center items-center"> <h3 className="text-lg font-semibold text-gray-700 mb-1">{item.event} </h3>
 <h3 className="text-lg font-regular text-gray-500 mb-1">| </h3>
<h3 className="text-lg font-semibold text-gray-700 mb-1">{` ${item.year} `}</h3>
</div>
             
              <p className="text-sm text-gray-600">{item.description}</p>



            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;