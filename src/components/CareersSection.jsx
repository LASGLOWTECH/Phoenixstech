import React from 'react';
import { FaCircle } from 'react-icons/fa';
import  {Careersimg} from "../components/images";
import { Link } from 'react-router-dom';


export default function CareersSection() {
  return (
    <section className="bg-[#f9f8fd] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
       
        <div className="flex justify-center">
          <img 
            src={Careersimg} 
            alt="career team"
            className="w-full max-w-md md:max-w-lg object-cover"
          />
        </div>

        {/*  Content */}
        <div>
          <div className="flex items-center gap-2 text-sm text-orange-500 font-medium mb-2">
            <FaCircle className="text-[6px]" />
            <span>Careers</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-4">
            Join Our Team and Build the Future
          </h2>

          <p className="text-gray-600 text-base mb-6">
            At our company, we believe in fostering a culture of innovation, collaboration, and continuous growth.
            We offer a dynamic environment where your ideas are valued, and your career can thrive. Join a team of
            passionate professionals dedicated to delivering exceptional results. Whether you're looking to grow
            your skills or make an impact in your field, explore exciting career opportunities and take the next
            step in your professional journey with us.
          </p>
<Link to="/Careers" className="inline-block">
          <button className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5 rounded-md transition-all duration-300">
            Explore Careers
          </button>
          </Link>
        </div>
      </div>  
    </section>
  );
}
