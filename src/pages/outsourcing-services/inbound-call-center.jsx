import React from 'react'
import HeroSection from '../../components/sections/herosectionm'
import { Heroimg1 } from '../../components/images'
// reusable components
import ServiceFeatures from '../../components/sections/servicesfeatures'
import BenefitsGrid from '../../components/sections/benefitcard'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import CTASection from '../../components/sections/ctasection'
import Testimonial from '../../components/sections/Testimonials'
// icons
import { PiPhoneCallFill } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";

import { FaCalendar } from "react-icons/fa";



function InboundCallCenter() {
  const supportServices = [
    {
      icon: <PiPhoneCallFill className="text-Primarycolor text-3xl" />,
      title: "Inbound Call Handling",
      description:
        "We manage incoming calls with professionalism and speed, ensuring every customer feels heard and supported.",
      features: ["24/7 Availability", "First-Call Resolution", "Professional Support"],
    },
    {
      icon: <FaRankingStar className= "text-Primarycolor text-3xl" />,
      title: "Outbound Campaigns",
      description:
        "Reach your customers proactively with outbound calls designed to generate leads, collect feedback, or promote services.",
      features: ["Targeted Outreach", "Scripted Engagement", "Campaign Reporting"],
    },
    {
      icon: <FaCalendar  className="text-Primarycolor text-3xl" />, 
      title: "Appointment Scheduling",
      description:
        "We assist in booking, confirming, and managing appointments to keep your operations smooth and organized.",
      features: ["Calendar Integration", "Automated Reminders", "Real-Time Updates"],
    },
    {
      icon: <FaTasks  className="text-Primarycolor text-3xl" />,
      title: "Customer Surveys & Follow-Ups",
      description:
        "Gather feedback and maintain engagement through structured surveys and personalized follow-up calls.",
      features: ["Insightful Analytics", "High Response Rates", "Customer Retention Boost"],
    },
  ];
  
  const benefits = [
    {
      title: "Higher Engagement",
      description: "Achieved a 25% increase in customer response rates through personalized inbound call handling.",
      color: "bg-[#F3F3FF]",
    },
    {
      title: "Improved Conversion",
      description: "Generated a 20% boost in lead-to-sale conversions via strategic outbound campaigns.",
      color: "bg-[#EFF6FF]",
    },
    {
      title: "Faster Resolutions",
      description: "Reduced customer wait time by 35%, leading to quicker problem-solving and higher satisfaction.",
      color: "bg-[#F0FDF4]",

    },
    {
      title: "Better Retention",
      description: "Contributed to a 15% improvement in customer loyalty through consistent follow-ups.",
      color: "bg-[#FFFBEB]",
    },
    {
      title: "Increased Efficiency",
      description: "Streamlined appointment scheduling processes, saving clients an average of 12 hours per week.",
      color: "bg-[#FFF1F2",
    },
    {
      title: "Data-Driven Insights",
      description: "Enabled smarter decisions with call data that improved sales strategies by 18%.",
      color: "bg-[#F0FDFA]",
    },
  ];
  


  // title, highlightedWords, subtitle, ctaText, ctaLink, image

  return (

    <div className="bg-gray-50">

<SectionWrapper>

      <HeroSection
        title="Professional Call Center Solutions That Connect and Convert"
        highlightedWords="Call Center Solutions"
        subtitle="Delivering seamless inbound and outbound call experiences to support your customers, boost engagement, and drive results."
        ctaText="Get A Free Consultation"
        ctaLink={"/contact"}
        image={Heroimg1}
      />
</SectionWrapper>
<SectionWrapper>

<ServiceFeatures
        services={supportServices}
        sectionTitle="What You Get with Our Call Center Service"
        sectionSubtitle=" Our comprehensive call center solutions are built to streamline communication,
          improve customer experience, and deliver measurable business impact."
      />
</SectionWrapper>

<SectionWrapper

>

<BenefitsGrid
benefits={benefits}
sectionTitle="How Our Service Benefits You"
highlightedWords="Benefits"
sectionSubtitle=" Our comprehensive call center solutions are built to streamline communication, improve customer experience, and deliver measurable business impact."


/>
</SectionWrapper>

<CTASection

ctaText="Get a Free Consultation "
ctaLink={"/Contact"}


/>


<Testimonial/>
    </div>

  )
}

export default InboundCallCenter

