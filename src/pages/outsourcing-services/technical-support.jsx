import React from 'react'
import { useTranslation } from 'react-i18next'
import HeroSection from '../../components/sections/herosectionm'
import { Heroimg3 } from '../../components/images'

// reusable components
import ServiceFeatures from '../../components/sections/servicesfeatures'
import BenefitsGrid from '../../components/sections/benefitcard'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import CTASection from '../../components/sections/ctasection'
import Testimonial from '../../components/sections/Testimonials'
// icons

import { FaClock } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi'; // Could represent multiple channels
import { AiOutlineExpand } from 'react-icons/ai'

function TechnicalSupport() {
  const { t } = useTranslation()

  const supportServices = [
    {
      icon: <FaClock className="text-Primarycolor text-3xl" />,
      title: t("24/7 Support Access"),
      description: t("Round-the-clock availability to assist your team and customers anytime."),
      features: [t("Always-on helpdesk coverage"), t("Fast response time"), t("Reduced downtime")]
    },
    {
      icon: <FaWrench className="text-Primarycolor text-3xl" />,
      title: t("Expert Troubleshooting"),
      description: t("Skilled professionals ready to resolve technical issues efficiently."),
      features: [t("Certified IT specialists"), t("Quick issue resolution"), t("Friendly, knowledgeable support")]
    },
    {
      icon: <BiTransfer className="text-Primarycolor text-3xl" />,
      title: t("Multi-Channel Support"),
      description: t("Get help via chat, email, phone, or ticketing systems."),
      features: [t("Seamless communication"), t("Centralized issue tracking"), t("Consistent service quality")]
    },
    {
      icon: <AiOutlineExpand className="text-Primarycolor text-3xl" />,
      title: t("Scalable Solutions"),
      description: t("Support that grows with your business needs."),
      features: [t("Flexible staffing options"), t("Custom support plans"), t("Adaptable service levels")]
    }
  ];

  const benefits = [
    {
      title: t("24/7 Availability"),
      description: t("Instant technical assistance, any hour of the day, ensuring uninterrupted business operations and peace of mind."),
      color: "bg-[#F3F3FF]", 
    },
    {
      title: t("Cost Efficiency"),
      description: t("Reduced response times by 40% with real-time tools that quickly resolve technical issues before they escalate."),
      color: "bg-[#EFF6FF]", 
    },
    {
      title: t("Faster Resolutions"),
      description: t("Reduced response times by 40% with real-time support tools."),
      color: "bg-[#F0FDF4]",
    },
    {
      title: t("Scalable Support"),
      description: t("Easily scale up or down with flexible tech support tailored to your business growth and seasonal demands."),
      color: "bg-[#FFFBEB]",
    },
    {
      title: t("Proactive Monitoring"),
      description: t("Prevent problems before they impact your business through automated issue detection and early response systems."),
      color: "bg-[#FFF1F2]",
    },
    {
      title: t("Multi-Channel Help"),
      description: t("Get support across chat, email, phone, and ticket systems—ensuring your users are always connected and supported."),
      color: "bg-[#F0FDFA]",
    },
  ];

  return (
    <div className="bg-gray-50">
      <SectionWrapper>
        <HeroSection
          title={t("Reliable Tech Support, Anytime You Need It")}
          highlightedWords={t("Reliable")}
          subtitle={t("We provide expert technical assistance and responsive IT helpdesk solutions to keep your business running smoothly.")}
          ctaText={t("Get A Free Consultation")}
          ctaLink={"/contact"}
          image={Heroimg3}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle={t("What You Get with Technical Support & IT Helpdesk")}
          sectionSubtitle={t("Everything you need to deliver fast, efficient, and reliable tech support that keeps your operations running smoothly.")}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsGrid
          benefits={benefits}
          sectionTitle={t("How Our Service Benefits You")}
          highlightedWords={t("Benefits")}
          sectionSubtitle={t("We simplify IT challenges and boost operational performance with responsive, reliable, and scalable tech solutions.")}
        />
      </SectionWrapper>

      <CTASection
        ctaText={t("Get a Free Consultation ")}
        ctaLink={"/Contact"}
      />

      <Testimonial />
    </div>
  )
}

export default TechnicalSupport;
