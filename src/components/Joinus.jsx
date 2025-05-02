import React from 'react';
import { Image7 } from "../components/images";
import { Link } from 'react-router-dom';

const JoinUs = () => {
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
          Join Our Team and Build the Future
        </h2>
        <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
          We offer a dynamic environment where your ideas are valued and your career can thrive.
          Join a team of passionate professionals dedicated to delivering exceptional results.
        </p>
        <div className="mt-8">
          
         <Link to="/Careers" className="inline-block">
          <button
            className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5 rounded-md transition-all duration-300"
          >
            Explore Careers
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
