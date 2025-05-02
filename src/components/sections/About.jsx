

import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';
import { Lady1 } from '../images';

import Button from '../Button';
const AboutUs = () => {
  return (

    <div className="min-h-screen px-6  grid gap-2 grid grid-cols-1 md:grid-cols-2 grid-flow-reverse items-center justify-center mt-20  md:mt-24 w-full  md:px-20" id="about">

      {/* Main Container */}

      <div className="max-w-7xl mx-auto    ">

        {/* Header */}
        <div className=" flex items-center flex-row mb-5  md:mb-10 ">
          <hr className='border-Secondarycolor w-[50px] md:w-[50px] border-[2px]'></hr>

          <h2 className="text-center text-darkBlue text-2xl md:text-3xl lg:text-4xl font-semibold">
            About  <span className="text-Secondary">Us</span>
          </h2>
        </div>


        {/* Text Content */}
        
          <h3 className=" tracking-wider md:leading-10 bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor max-w-xl  bg-size-200 animate-gradient text-2xl md:text-3xl lg:text-3xl font-bold">
            Excellence in Information, Communication
            and <span className='text-darkBlue'> Technology</span>
          </h3>

          <p className="max-w-md md:max-w-xl    text-slate-500 text-sm md:text-base lg:text-lg mb-5  md:mb-5 lg:mb-5 lg:mt-5 ">
            Established with the goal to lead in the world of Technology, where day to day
            activities strives with ease.
            It is a dream of 10years playing today and with all her well experienced engineers, 
            and System experts, data/records professionals, innovators, passionate partners and entrepreneurs.
            DE-COT Technology and Digital Solutions Ltd was Founded to solve all problems of
            Technology, develop Solutions and build worlds of satisfaction to all her clients.
          </p>

          <Button primary='default' className='flex flex-row ' >Learn More
            <BiArrowToRight className="w-auto h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300" />
          </Button>

        </div>





        {/* Content Grid */}
        <div className="flex flex-col justify-center items-center lg:flex-row  gap-12 ">
          {/* Image Container */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src={Lady1}
              alt="about-picture"
              className="md:w-[560px] md:h-[480px] w-[369px] h-[318px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>


        </div>
      </div>
  
  );
};

export default AboutUs;