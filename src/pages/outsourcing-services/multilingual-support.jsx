import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/sections/herosectionm';
import { Heroimg4 } from '../../components/images';

// reusable components
import ServiceFeatures from '../../components/sections/servicesfeatures';
import BenefitsGrid from '../../components/sections/benefitcard';
import SectionWrapper from '../../components/sections/Sectionwrapper';
import CTASection from '../../components/sections/ctasection';
import Testimonial from '../../components/sections/Testimonials';

// icons
import { FaGlobeAmericas, FaLanguage, FaRegCheckSquare } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';

function MultilingualSupport() {
  const { t } = useTranslation();

  const supportServices = [
    {
      icon: <FaLanguage className="text-Primarycolor text-3xl" />,
      title: t("Native-Language Agents"),
      description: t("Support delivered by fluent speakers for natural, accurate communication."),
      features: [
        t("Clear, local-language responses"),
        t("Cultural understanding"),
        t("Consistent brand voice"),
      ],
    },
    {
      icon: <FaGlobeAmericas className="text-Primarycolor text-3xl" />,
      title: t("Global Customer Reach"),
      description: t("Expand your support to customers across regions and time zones."),
      features: [
        t("Multi-regional coverage"),
        t("Seamless onboarding"),
        t("Scalable support options"),
      ],
    },
    {
      icon: <BiTransfer className="text-Primarycolor text-3xl" />,
      title: t("Omnichannel Communication"),
      description: t("Multilingual service across chat, email, and voice channels."),
      features: [
        t("Language support across platforms"),
        t("Real-time interpretation"),
        t("Unified service experience"),
      ],
    },
    {
      icon: <FaRegCheckSquare className="text-Primarycolor text-3xl" />,
      title: t("Quality & Consistency"),
      description: t("Maintain service standards in every language and region."),
      features: [
        t("Trained bilingual teams"),
        t("Consistent CX metrics"),
        t("Continuous performance review"),
      ],
    },
  ];

  const benefits = [
    {
      title: t("Wider Reach"),
      description: t("Engage customers in their native language and expand your global presence with confidence and ease."),
      color: "bg-[#F3F3FF]",
    },
    {
      title: t("Improved Loyalty"),
      description: t("Create more meaningful relationships by offering personalized support that makes customers feel valued and understood."),
      color: "bg-[#EFF6FF]",
    },
    {
      title: t("Cultural Fit"),
      description: t("Communicate with cultural awareness that resonates, reducing misunderstandings and increasing customer satisfaction."),
      color: "bg-[#F0FDF4]",
    },
    {
      title: t("Stronger Brand Image"),
      description: t("Showcase your brand as global, inclusive, and customer-first by offering high-quality multilingual interactions."),
      color: "bg-[#FFFBEB]",
    },
    {
      title: t("Flexible Coverage"),
      description: t("Provide multilingual support across various time zones with regional teams and around-the-clock availability."),
      color: "bg-[#FFF1F2]",
    },
    {
      title: t("Customer Confidence"),
      description: t("Deliver accurate, empathetic responses that instill trust and ensure customers always feel heard and supported."),
      color: "bg-[#F0FDFA]",
    },
  ];

  return (
    <div className="bg-gray-50">
      <SectionWrapper>
        <HeroSection
          title={t("Global Support in Every Language")}
          highlightedWords={t("Language")}
          subtitle={t("Deliver seamless customer service across borders with native-level support in multiple languages.")}
          ctaText={t("Get A Free Consultation")}
          ctaLink={"/contact"}
          image={Heroimg4}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle={t("What You Get with Multilingual Support")}
          sectionSubtitle={t("Deliver exceptional service in any language with culturally aware, native-level support that builds global trust.")}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsGrid
          benefits={benefits}
          sectionTitle={t("How Our Service Benefits You")}
          highlightedWords={t("Benefits")}
          sectionSubtitle={t("Deliver seamless, native-level customer support that builds global trust and improves satisfaction across markets.")}
        />
      </SectionWrapper>

      <CTASection
        ctaText={t("Get a Free Consultation ")}
        ctaLink={"/consultation"}
      />

      <Testimonial />
    </div>
  );
}

export default MultilingualSupport;
