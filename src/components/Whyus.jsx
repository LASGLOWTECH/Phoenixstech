import React from 'react';
import { motion } from 'framer-motion';
import { Partnerimg } from "../components/images";
import { IoMdCheckbox } from "react-icons/io";
import useAOS from '../hooks/useAos';
import { useTranslation } from 'react-i18next';

const WhyUs = () => {
    const { t } = useTranslation();
    useAOS();

    return (
        <div className="bg-white py-16 px-6 md:px-20">
            <div className="flex mb-4 items-center justify-center flex-col">
                <div className="flex mb-4 items-center justify-left flex-row">
                    <div className="rounded-full bg-gradient-to-r from-Secondarycolor to-Secondarycolor1 w-[10px] h-[10px] mr-2"></div>
                    <p className="text-sm text-orange-500">{t("Why Work With Us?")}</p>
                </div>

                <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4 leading-snug" data-aos="fade-up">
                    {t("Partner with Us")} <br />
                    {t("for Exceptional Results")}
                </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 md:pt-6 lg:grid-cols-2'>
                <div className='p-6 h-auto flex items-start pt-6 flex-col rounded-md'>
                    {[{
                        title: t("Expert Teams"),
                        desc: t("Work with skilled professionals who bring deep industry knowledge and specialized expertise to every project.")
                    },
                    {
                        title: t("Tailored Solutions"),
                        desc: t("Customized solutions crafted to meet your specific business needs, ensuring enhanced efficiency, innovation, and a competitive edge.")
                    },
                    {
                        title: t("Proven Track Record"),
                        desc: t("Work with skilled professionals who bring deep industry knowledge and specialized expertise to every project.")
                    },
                    {
                        title: t("End-to-End Support"),
                        desc: t("Enjoy seamless support throughout every stage, from project inception to post-implementation, ensuring your long-term success.")
                    }].map(({title, desc}, i) => (
                        <div key={i} className="mb-4 flex items-start space-x-2">
                            <IoMdCheckbox className='text-green-500 text-2xl md:text-3xl flex-shrink-0' />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 text-left">{title}</h3>
                                <p className="text-gray-600 leading-relaxed text-left text-base">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6 }}
                    className="relative gap-4"
                >
                    <div className="md:px-6 rounded-lg overflow-hidden h-full lg:h-auto">
                        <img src={Partnerimg} alt={t("Diverse Team")} className="w-full h-full object-cover" data-aos="zoom-up" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WhyUs;
