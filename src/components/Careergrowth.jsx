import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaUsers, FaChartLine, FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const iconVariants = {
    initial: { y: 0 },
    animate: {
        y: [0, -4, 0],
        transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
    },
    hover: { scale: 1.2 }
};

const CareerGrowth = () => {
    const { t } = useTranslation();
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                        {t("Grow Your Career with Phoenixs Tech")}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t("At Phoenixs Tech, we believe in nurturing talent and providing endless opportunities for growth. Whether you&apos;re looking to enhance your skills, take on new challenges, or")} {t("make a meaningful impact, you&apos;ll find a place to thrive with us.")}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Career Development Card */}
                    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                        <motion.div
                            className="w-10 h-10 mx-auto"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                        >
                            <FaBolt className='fill-Primarycolor' size={40} />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-900">{t("Career Development")}</h3>
                        <p className="text-gray-600">
                            {t("Investing in your growth through training and mentorship.")}
                        </p>
                    </div>

                    {/* Collaborative Environment Card */}
                    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                        <motion.div
                            className="w-10 h-10 mx-auto"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                        >
                            <FaUsers className='fill-Primarycolor' size={40} />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-900">{t("Collaborative Environment")}</h3>
                        <p className="text-gray-600">
                            {t("Work with passionate, innovative professionals.")}
                        </p>
                    </div>

                    {/* Innovative Projects Card */}
                    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                        <motion.div
                            className="w-10 h-10 mx-auto"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                        >
                            <FaChartLine className='fill-Primarycolor' size={40} />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-900">{t("Innovative Projects")}</h3>
                        <p className="text-gray-600">
                            {t("Be part of challenging, boundary-pushing projects.")}
                        </p>
                    </div>

                    {/* Work-Life Balance Card */}
                    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                        <motion.div
                            className="w-10 h-10 mx-auto"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                        >
                            <FaBriefcase className='fill-Primarycolor' size={40} />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-900">{t("Work-Life Balance")}</h3>
                        <p className="text-gray-600">
                            {t("Enjoy flexible schedules and remote work options.")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerGrowth;
