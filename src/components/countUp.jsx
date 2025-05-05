import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Whoweare } from './images';
import { motion } from 'framer-motion';

export default function MultilingualSupportSection() {
    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: false, // allow re-trigger
    });

    const [countKey, setCountKey] = useState(0);

    // Regenerate countKey whenever inView becomes true (to restart CountUp)
    useEffect(() => {
        if (inView) {
            setCountKey(prev => prev + 1);
        }
    }, [inView]);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="px-6 md:px-20  py-16 bg-white text-[#0E0B20]">
            <div className=" items-center  relative grid  grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left: Image Collage */}

                <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative gap-4"
        >
                <div className=' h-350px'>
                    <img src={Whoweare} alt="Agent 1" className="rounded-tl-[40px] w-full h-auto object-cover" />


                </div>
                </motion.div>

                {/* Right: Content */}

                <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
                <div ref={ref}>
                <div className="flex items-center  justify-center m:mb-2 md:justify-left   md:items-left flex-row ">
          <div className="rounded-full bg-gradient-to-r from-Secondarycolor to-Secondarycolor1  w-[10px] h-[10px]  mr-2"></div>
          <p className="text-sm text-orange-500 py-6 ">Who are We</p>
        </div>
                    <h2 className=" text-center md:text-left text-3xl md:max-w-lg md:text-4xl font-bold mb-4 leading-snug">
                        Your <span className="text-orange-400">Trusted Partner</span> for 
                        Multilingual Business Support
                    </h2>
                    <p className="text-gray-600 text-base mb-6 max-w-xl">
                        Phoenixs Tech provides multilingual customer service support across various industries,
                        including finance, retail, e-commerce, and more. We enhance business–customer relationships.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row gap-8 text-center mt-8">
                        <div>
                            <p className="text-3xl font-bold">
                                <CountUp key={`${countKey}-1`} end={7} duration={2} />+ Years
                            </p>
                            <p className="text-gray-600">Experience</p>
                        </div>
                        <div className="border-l border-gray-300 h-10 hidden sm:block" />
                        <div>
                            <p className="text-3xl font-bold">
                                <CountUp key={`${countKey}-2`} end={200} duration={2} /> +
                            </p>
                            <p className="text-gray-600">Experts</p>
                        </div>
                        <div className="border-l border-gray-300 h-10 hidden sm:block" />
                        <div>
                            <p className="text-3xl font-bold">
                                <CountUp key={`${countKey}-3`} end={450} duration={2} />+
                            </p>
                            <p className="text-gray-600">Satisfied Clients</p>
                        </div>
                    </div>
                </div>
                </motion.div>
            </div>
        </section>
    );
}
