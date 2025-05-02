// 1. HeroSection.jsx



// 2. ServiceFeatures.jsx



// 3. BenefitsGrid.jsx





// 4. CTASection.jsx
import React from "react";
import { Link } from "react-router-dom";

const CTASection = ({  ctaText, ctaLink}) => {
  return (
    <section className="   py-3 text-white text-center">
      
        <Link
        to={ctaLink}
          className="inline-block bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 text-white px-6 py-3 rounded shadow"
        >
          {ctaText}
        </Link>
    
    </section>
  );
};

export default CTASection;


// 5. SectionWrapper.jsx (optional wrapper for padding, spacing)


