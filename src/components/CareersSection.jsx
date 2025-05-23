import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { Careersimg } from "../components/images";
import { Link } from 'react-router-dom';
import useAOS from '../hooks/useAos';
import { useTranslation } from 'react-i18next';

export default function CareersSection() {
  const { t } = useTranslation();
  useAOS();

  return (
    <section className="bg-[#f9f8fd] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="flex justify-center" data-aos="fade-out">
          <img 
            src={Careersimg} 
            alt={t('careers.imageAlt')} 
            className="w-full max-w-md md:max-w-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className='flex flex-col md:items-start items-center md:text-left'>
          <div className="flex items-center gap-2 text-sm text-orange-500 font-medium mb-2">
            <FaCircle className="text-[6px]" />
            <span>{t('careers.sectionLabel')}</span>
          </div>

          <h2 className="text-3xl text-center md:text-left md:text-4xl font-semibold text-gray-900 leading-tight mb-4">
            {t('careers.heading')}
          </h2>

          <p className="text-gray-600 text-center md:text-left text-base mb-6">
            {t('careers.description')}
          </p>

          <Link to="/Careers" className="inline-block">
            <button className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5 rounded-md transition-all duration-300">
              {t('careers.buttonText')}
            </button>
          </Link>
        </div>
      </div>  
    </section>
  );
}
