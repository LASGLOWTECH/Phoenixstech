import React from 'react';
import { motion } from 'framer-motion';
import { Homehero } from '../images';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Hero = () => {
  const { t } = useTranslation();


  const intoit='bg-gradient-to-r from-Secondarycolor  to-Secondarycolor2'
  return (
    <section className="bg-white   w-full  pt-16 md:pt-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl mx-auto font-bold text-grey-100 leading-tight">
            {t("Driving Business")} <span className="bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor1 ">Excellence</span><br />
            Through Multilingual Business Support
          </h1>
          <p className="mt-4 text-gray-600 text-sm   md:text-base  mx-auto md:mx-0">
            Empowering businesses across industries with tailored customer service solutions that build stronger relationships,
            boost satisfaction, and scale success globally and efficiently.
          </p>
          <Link to={'/Contact'}><button className="mt-6 px-6 py-3 bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold rounded-md transition-all duration-300">
            Get In Touch
          </button>
          </Link>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative w-full max-w-md mx-auto md:max-w-full"
        >
          
          <img src={Homehero} alt="Customer Support" className="w-full md:w-[670px] h-auto md:h-[550px] lg:h-[650px] xl:h-[700px] object-contain " />

          {/* Floating Tags */}
          
        </motion.div>
      </div>


   
    </section>
  );
};

export default Hero;
