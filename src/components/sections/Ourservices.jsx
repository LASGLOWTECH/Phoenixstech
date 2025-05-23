import React from "react";
import Services from "../../assets/data/serviceslist";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import useAOS from "../../hooks/useAos";

const BusinessSolutions = () => {
  const { t } = useTranslation();

  useAOS()
  return (
    <div className=" py-12">
      {/* Section 1 */}
      <section className=" px-6 flex items-center justify-center flex-col mb-12">
      <div className="flex mb-4 items-center justify-left flex-row ">
                        <div className="rounded-full bg-gradient-to-r from-Secondarycolor to-Secondarycolor1 w-[10px] h-[10px] mr-2"></div>
                    <p className="text-sm text-orange-500 ">{t("Our Services")}</p>
                    </div>
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4 " data-aos="fade-up">
        {t("Transform Your Business")}  <br></br>{t("with Expert Solutions")}
        </h2>
        <p className="mt-4 text-gray-700 text-center max-w-xl leading-relaxed">
          {t("Tailored customer support to boost satisfaction and drive growth.")}
        </p>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 px-6 md:px-20">
        {Services.map((service, index) => (
        < Link to={service.link}
        key={index}
        
        className="block bg-Primarycolor1 hover:bg-white p-5 rounded-lg text-emibold shadow-md shadow-Primarycolor text-left transition-colors duration-300 group" data-aos="fade-in"
      ><h3 className="text-lg  text-white  group-hover:text-gray-600 font-semibold   mb-4">
              {t(service.titleKey)}
            </h3>
            <p className="text-white   text-base   group-hover:text-gray-600  mb-4"> {t(service.descriptionKey)}</p>

            <div className="relative">
              <img
                src={service.Picture}
                alt="service"
                className="object-cover w-full  h-100 rounded-md"
              />
              <BsArrowUpRightCircleFill
                className="absolute bottom-2 right-2 fill-Primarycolor1 group-hover:fill-Secondarycolor   rounded-full p-1 text-5xl shadow-lg cursor-pointer transition-all duration-300"
              />
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default BusinessSolutions;
