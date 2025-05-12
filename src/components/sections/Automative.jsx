import React from 'react';
import Line2 from "../../assets/images/Line2.png"

const AutomotiveCustomerExperience = ({ title, subtitle, highlightedWords, imageUrl }) => {


    

    
  // Safely split the title based on the highlighted words
  const [before = "", highlight = "", after = ""] = title.split(
    new RegExp(`(${highlightedWords})`, "i")
  );
  return (
    <div className="bg-white   py-16 "
    
    style={{
        backgroundImage: `url(${Line2})`,
        backgroundSize: "cover",     // Ensures it covers the whole area
        backgroundPosition: "center", // Keeps the focal point centered
        backgroundRepeat: "no-repeat", // Prevents tiling
      }}>
      <div className=" flex justify-center items-center flex-col text-center px-4 md:px-20">
        {title && <h2 className="text-4xl md:text-5xl pb-6   text-center md:max-w-4xl font-bold">
            
            {before}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor1">
              {highlight}
            </span>
            {after}
           </h2>}
        {subtitle && <p className="text-gray-600 text-base text-center md:max-w-4xl mb-8">{subtitle}</p>}
        {imageUrl && (
          <div className="relative overflow-hidden rounded-lg  mx-auto md:max-w-4xl">
            <img
              className="w-full h-auto object-cover"
              src={imageUrl}
              alt="Automotive Customer Experience"
            />
            {/* Optional: You could add an overlay or other elements here */}
          </div>
        )}
        {/* You can add more sections or content below the image if needed */}
      </div>
    </div>
  );
};

export default AutomotiveCustomerExperience;