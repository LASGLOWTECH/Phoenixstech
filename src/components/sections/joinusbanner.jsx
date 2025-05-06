import React from 'react';
import { Image7 } from '../images';
import { Link } from 'react-router-dom';

const   JoinUsBanner= () => {
  return (
    <div className="bg-Primarycolor relative md:rounded-xl px-5 md:mx-20 md:px-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Image7})`
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> 
        {/* Dark overlay */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-4xl font-medium text-white tracking-tight">
        Ready to Transform Your E-commerce Experience?
        </h2>
        <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
       Let's discuss how our specialized retail solutions can help you improve customer satisfaction and drive business growth.
        </p>
        <div className="mt-8">
          
         <Link to={"/consultation" }className="inline-block">
          <button
            className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5 rounded-md transition-all duration-300"
          >
            Get A Free Consultation
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUsBanner;
