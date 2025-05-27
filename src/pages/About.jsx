import { motion } from "framer-motion";
import OurStorySection from "../components/sections/OurStory";
import { Lady1, Woman3 } from "../components/images";
import { Woman1, Woman2 } from "../components/images";
import { Line } from "../components/images";


import ValuesAndTeamSection from "../components/ValuesAndTeam";
import MeetTeam from "../components/sections/MeetTheteam";
import TestimonialSection from "../components/TestimonialSection";
import JoinUs from "../components/Joinus";
import { useTranslation } from "react-i18next";
import SEO from "../utils/seo";
const generateMotionVariants = (index) => ({
  animate: {
    x: ["100%", "-100%"], // Moves continuously across the screen
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 8, // Speed of movement
        ease: "linear",
      },
    },
  },
});

const calculateOpacity = (xPosition, screenWidth) => {
  const fadeStart = 0.1 * screenWidth; // Start fading near the left edge
  const fadeEnd = 0.9 * screenWidth; // Start fading near the right edge

  if (xPosition < fadeStart || xPosition > fadeEnd) {
    return 0; // Fully faded out at edges
  } else {
    return 1 - Math.abs((xPosition - screenWidth / 2) / (screenWidth / 2)); // Gradual fade
  }
};

const AboutUs = () => {
  const { t } = useTranslation();
  const images = [Lady1,Woman1,Woman2, Lady1, Woman3];

  return (
    <section
  className="overflow-hidden py-16  bg-cover bg-center text-center"
  style={{
    backgroundImage: `url(${Line})`,
    backgroundSize: "cover",     // Ensures it covers the whole area
    backgroundPosition: "center", // Keeps the focal point centered
    backgroundRepeat: "no-repeat", // Prevents tiling
  }}
>
  
  <SEO
        title="About Us - Phoenixstech"
        description="Learn more about PheonixStech—our people, our purpose, and how innovation drives our world-class tech solutions."
        keywords="About Phoenixstech, Tech Company, Meet the Team, Company Values"
        url="https://www.pheonixstech.com/About"
  
      />

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 8, ease: "ease" }}
>
  <div className="flex mb-2 items-center justify-center flex-row ">
    <div className="rounded-full bg-gradient-to-r from-Secondarycolor to-Secondarycolor1 w-[10px] h-[10px] mr-2"></div>
    <p className="text-sm text-orange-500">{t('About Us')}</p>
  </div>
  
  <h2 className="text-3xl md:text-5xl pb-12 px-6 font-bold">
    {t('Driven by People, Powered by')}
    <span className="hidden md:inline"><br /></span>
    <span className="bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor1">
      {t('Purpose')}<span className="text-greyBlack"> {t('and')} </span>{t('Innovation')}
    </span>
  </h2>
</motion.div>

      <div className="relative grid grid-cols-2  md:grid-cols-8  gap-5 h-52 mt-12 w-full overflow-hidden">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Team ${index + 1}`}
            className="absolute top-0 object-coverrounded-xl shadow-xl md:w-auto w-full h-full"
            initial={{ x: '100%' }}
            animate={{ x: '-150%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 8, // Faster movement (decrease to increase speed)
              ease: 'linear',
            }}
            style={{
              left: `${index * 320}px`, // Adjust this based on image width + gap
            }}
          />
        ))}
      </div>

      <OurStorySection />
      <ValuesAndTeamSection />
      <MeetTeam/>
<TestimonialSection/>
<JoinUs/>
    </section>


  );
};

export default AboutUs;
