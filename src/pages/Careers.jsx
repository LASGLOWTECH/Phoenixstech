import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import CareerGrowth from '../components/Careergrowth';
import CareerOpportunities from '../components/Job';
import CareersContact from '../components/Careercontact';
import { CareerHero } from '../components/images';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../utils/seo';
export default function Careers() {

  const { t } = useTranslation();
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">



      <SEO
        title={t("Grow Your Career with Phoenixs Tech")}
        description={t("Join a team that values innovation, collaboration, and personal growth")}
        keywords={t("Careers,innovation, collaboration,job opportunities")}
        url="https://www.pheonixstech.com/Careers"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
          {t("Embark on a Rewarding")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor1">
              {t("Career")}
            </span>{" "}
            {t("with Us and Make a Difference")}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            {t("Join a team that values innovation, collaboration, and personal growth. Explore opportunities to grow your career while making a real impact.")}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 pt-2">
            <FaCircleUser className="w-8 h-8 text-Primarycolor" />
            <FaCircleUser className="w-8 h-8 text-Primarycolor" />
            <span className="text-sm font-medium text-gray-700">{t("300+ Talents")}</span>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}

        >

          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden ">
              <img
                src={CareerHero}
                className="w-full  shadow-md h-auto object-cover"
              />
            </div>

          </div>
        </motion.div>
      </div>


      <CareerGrowth />
      <CareerOpportunities />
      <CareersContact />
    </div>
  );
}
