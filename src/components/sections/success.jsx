import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IoMdCheckbox } from "react-icons/io";
import useAOS from "../../hooks/useAos";

const SuccessSnapshot = ({ title, subtitle, solutionPoints, resultPoints, imageUrl }) => {
const refreshAOS = useAOS();
  // Initialize the Intersection Observer to track when the component is in view
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
    <div className="bg-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Text Content */}

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
             


        <div className="px-4 md:px-0" ref={ref}>
          {title && <h2 className="text-4xl font-bold max-w-2xl text-gray-900 mb-4">{title}</h2>}
          {subtitle && <p className="text-gray-700 mb-6">{subtitle}</p>}

          {solutionPoints && solutionPoints.length > 0 && (
            <div className="mb-6"  >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">The Solution:</h3>

              {solutionPoints.map((point, index) => (
                <div className="text-gray-700 text-sm  flex items-start pt-3  pe-4" key={index}>  <IoMdCheckbox className="text-green-500 text-3xl flex-shrink-0" />


                  <p className="
                                       text-gray-600 text-[14px} leading-relaxed text-left">{point}</p></div>

              ))}

            </div>
          )}

          {resultPoints && resultPoints.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">The Result:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {resultPoints.map((result, index) => (
                  <div key={index} className="text-center">


                    {result.value && (
                      <div className="text-4xl font-bold text-Primarycolor1 mb-2">
                        <CountUp key={`${countKey}-3`}
                          end={parseFloat(result.value)}
                          duration={2} // Adjust the duration as needed (in seconds)
                          suffix={result.value.includes('%') ? '%' : ''} //
                        
                        />
                      </div>
                    )}
                    {result.label && <div className="text-gray-600">{result.label}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
</motion.div>

        {/* Right Column: Image */}
        <div className="relative overflow-hidden rounded-lg ">
          {imageUrl && (
            <img
              className="w-full h-auto object-cover" data-aos="fade-down" data-aos-duration="1000" onLoad={refreshAOS}
              ref={ref}
              src={imageUrl}
              alt="Success Snapshot Illustration"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessSnapshot;