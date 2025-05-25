

import React from 'react'
import HeroSection from '../../components/sections/herosectionm'
import { Heroimg4 } from '../../components/images'

// reusable components
import ServiceFeatures from '../../components/sections/servicesfeatures'
import BenefitsGrid from '../../components/sections/benefitcard'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import CTASection from '../../components/sections/ctasection'
import Testimonial from '../../components/sections/Testimonials'
// icons

import { FaGlobeAmericas, FaLanguage, FaRegCheckSquare } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
function  MultilingualSupport
() {
  const supportServices = [
    {
      icon: <FaLanguage className="text-Primarycolor text-3xl" />,
      title: "Native-Language Agents",
      description: "Support delivered by fluent speakers for natural, accurate communication.",
      features: ["Clear, local-language responses", "Cultural understanding", "Consistent brand voice"],
    },
    {
      icon: <FaGlobeAmericas className="text-Primarycolor text-3xl" />,
      title: "Global Customer Reach",
      description: "Expand your support to customers across regions and time zones.",
      features: ["Multi-regional coverage", "Seamless onboarding", "Scalable support options"],
    },
    {
      icon: <BiTransfer className="text-Primarycolor text-3xl" />,
      title: "Omnichannel Communication",
      description: "Multilingual service across chat, email, and voice channels.",
      features: ["Language support across platforms", "Real-time interpretation", "Unified service experience"],
    },
    {
      icon: <FaRegCheckSquare className="text-Primarycolor text-3xl" />,
      title: "Quality & Consistency",
      description: "Maintain service standards in every language and region.",
      features: ["Trained bilingual teams", "Consistent CX metrics", "Continuous performance review"],
    },
  ];

  const benefits = [
    {
      title: "Wider Reach",
      description: "Engage customers in their native language and expand your global presence with confidence and ease.",
      color: "bg-[#F3F3FF]", // Assuming a similar color scheme
    },
    {
      title: "Improved Loyalty",
      description: "Create more meaningful relationships by offering personalized support that makes customers feel valued and understood.",
      color: "bg-[#EFF6FF]", // Assuming a similar color scheme
    },
    {
      title: "Cultural Fit",
      description: "Communicate with cultural awareness that resonates, reducing misunderstandings and increasing customer satisfaction.",
      color: "bg-[#F0FDF4]",
    },
    {
      title: "Stronger Brand Image",
      description: "Showcase your brand as global, inclusive, and customer-first by offering high-quality multilingual interactions.",
      color: "bg-[#FFFBEB]",
    },
    {
      title: "Flexible Coverage",
      description: "Provide multilingual support across various time zones with regional teams and around-the-clock availability.",
      color: "bg-[#FFF1F2]",
    },
    {
      title: "Customer Confidence",
      description: "Deliver accurate, empathetic responses that instill trust and ensure customers always feel heard and supported.",
      color: "bg-[#F0FDFA]",
    },
  ];

  // title, highlightedWords, subtitle, ctaText, ctaLink, image

  return (

    <div className="bg-gray-50">

<SectionWrapper>

      <HeroSection
        title="Global Support in Every Language"
        highlightedWords="Language"
        subtitle="Deliver seamless customer service across borders with native-level support in multiple languages."
        ctaText="Get A Free Consultation"
        ctaLink={"/contact"}
        image={Heroimg4}
      />
</SectionWrapper>
<SectionWrapper>

<ServiceFeatures
        services={supportServices}
        sectionTitle="What You Get with Multilingual Support"
        sectionSubtitle="Deliver exceptional service in any language with culturally aware, native-level support that builds global trust."
      />
</SectionWrapper>

<SectionWrapper

>

<BenefitsGrid
benefits={benefits}
sectionTitle="How Our Service Benefits You"
highlightedWords="Benefits"
sectionSubtitle="Deliver seamless, native-level customer support that builds global trust and improves satisfaction across markets."


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

export default  MultilingualSupport;
