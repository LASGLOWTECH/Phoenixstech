import React from "react";


import useAOS from "../../hooks/useAos";


const HeroSection = ({ title, highlightedWords, subtitle, ctaText, ctaLink, image }) => {
  const refreshAOS = useAOS();

  
  // Safely split the title based on the highlighted words
  const [before = "", highlight = "", after = ""] = title.split(
    new RegExp(`(${highlightedWords})`, "i")
  );

  return (
    <section className="py-12 md:py-16">
      <div className=" px-4 grid md:grid-cols-2 gap-10 items-center justify-center">
        <div className="flex flex-col md:items-start items-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mx-auto font-bold text-gray-800 leading-tight">
            {before}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor1">
              {highlight}
            </span>
            {after}
          </h1>
          <p className="text-gray-600 mt-4 text-lg">{subtitle}</p>
          <a
            href={ctaLink}
            className="inline-block mt-6 px-4  py-3 bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold rounded-md transition-all duration-300 "
          >
            {ctaText}
          </a>
        </div>
        {image && (
          
          <div className="md:block flex justify-center items-center mt-6 md:mt-0" data-aos="fade-left" data-aos-duration="1000" onLoad={refreshAOS}>
            <img src={image} alt="Hero" className=" w-100  h-fit rounded-lg" />
          </div>
          
        )}
      </div>
    </section>
  );
};

export default HeroSection;
