import React from 'react';
import { motion } from 'framer-motion';
import { Partnerimg } from "../components/images";
import { IoMdCheckbox } from "react-icons/io";

const WhyUs = () => {
    return (
        <div className="bg-white py-16 px-6  md:px-20   ">


            <div className="flex mb-4 items-center justify-cennter flex-col">
                <div className="flex mb-4 items-center justify-left flex-row ">
                    <div className="rounded-full bg-gradient-to-r from-Secondarycolor to-Secondarycolor1 w-[10px] h-[10px] mr-2"></div>
                    <p className="text-sm text-orange-500 ">Why Work With Us?</p>
                </div>

                <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4 leading-snug">
                    Partner with Us  for <br />
                    Exceptional Results
                </h2>

            </div>    


            <div className='grid grid-cols-1 md:grid-cols-2 md:pt-6 lg:grid-cols-2 '>



                {/* Left Section - Values (Spans 2 columns on larger screens, with z-index) */}
                <div className=' p-6 h-auto flex items-start  pt-6 flex-col rounded-md '>

                    {/* Check boxes */}

                    <div className="mb-4 flex items-start space-x-2">
                        <IoMdCheckbox className="text-green-500 text-2xl md:text-3xl flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 text-left">
                                Expert Teams
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed text-left md:max-w-[522px]">
                                Work with skilled professionals who bring deep industry knowledge and specialized expertise to every project.
                            </p>
                        </div>
                    </div>



                    <div className="mb-4 flex items-start space-x-2">
                        <IoMdCheckbox className='text-green-500 text-2xl md:text-3xl flex-shrink-0' />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 text-left">Tailored Solutions</h3>
                            <p className="text-gray-600  md:max-w-[500px] leading-relaxed text-left text-base">
                                customized solutions crafted to meet your specific business needs, ensuring enhanced efficiency, innovation, and a competitive edge”
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 flex items-start space-x-2">
                        <IoMdCheckbox className='text-green-500 text-2xl md:text-3xl flex-shrink-0' />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 text-left">Proven Track Record</h3>
                            <p className="text-gray-600 leading-relaxed text-left text-base">
                                Work with skilled professionals who bring deep industry knowledge and specialized expertise to every project.                            </p>
                        </div>
                    </div>

                    <div className="mb-4 flex items-start space-x-2">
                        <IoMdCheckbox className='text-green-500 text-2xl md:text-3xl flex-shrink-0 ' />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 text-left">End-to-End Support</h3>
                            <p className="text-gray-600 leading-relaxed text-left text-base">
                                Enjoy seamless support throughout every stage, from project inception to post-implementation, ensuring your long-term success.                          </p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image (Spans 2 columns on larger screens) */}
                
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
                <div className="md:px-6  rounded-lg  overflow-hidden  h-full lg:h-auto">
                    <img src={Partnerimg} alt="Diverse Team" className="w-full h-full object-cover" />
                </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WhyUs;