import React from 'react';
import { Image4 } from "../components/images";
import { IoMdCheckbox } from "react-icons/io";
import useAOS from '../hooks/useAos';
import { useTranslation } from 'react-i18next';

const ValuesAndTeamSection = () => {
  const refreshAOS = useAOS(); // Initialize AOS on component mount
  const { t } = useTranslation();

  return (
    <div className="bg-white py-16 6 px-6 md:px-20 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24">
      <div className='grid grid-cols-1 lg:grid-cols-4 relative items-start gap-8'>
        {/* Left Section - Values */}
        <div className='bg-white md:mt-[30px] p-6 h-[450px] -full rounded-md shadow-md z-10 lg:col-span-2'>
          <div className="flex mb-4 items-center justify-left flex-row ">
            <div className="rounded-full bg-gradient-to-r from-Secondarycolor to-Secondarycolor1 w-[10px] h-[10px] mr-2"></div>
            <p className="text-sm text-orange-500">{t('Values')}</p>
          </div>
          <h2 className="text-3xl lg:text-4xl text-left font-bold text-gray-800 mb-8">
            {t('Built on Values That Drive Results')}
          </h2>

          {/* Checkboxes */}
          <div className="space-y-4">
            {/* Client-Centered Approach */}
            <div className="flex items-start space-x-3">
              <IoMdCheckbox className="text-green-500 text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700 text-left">
                  {t('Client-Centered Approach')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-left">
                  {t('We tailor every solution to fit your unique needs and long-term goals.')}
                </p>
              </div>
            </div>

            {/* Consistent Quality */}
            <div className="flex items-start space-x-3">
              <IoMdCheckbox className="text-green-500 text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700 text-left">
                  {t('Consistent Quality')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-left">
                  {t('Reliable, high-standard service delivery—every time, across all project touchpoints.')}
                </p>
              </div>
            </div>

            {/* Lasting Partnerships */}
            <div className="flex items-start space-x-3">
              <IoMdCheckbox className="text-green-500 text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700 text-left">
                  {t('Lasting Partnerships')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-left">
                  {t('We focus on building strong, lasting relationships, not just completing tasks.')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div
          className="md:ml-[-100px] mt-[60px] md:mt-[-60px] rounded-lg shadow-xl overflow-hidden lg:col-span-2 h-full lg:h-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={Image4} alt={t("Diverse Team")} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ValuesAndTeamSection;
