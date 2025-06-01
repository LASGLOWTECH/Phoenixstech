import { useTranslation } from 'react-i18next'

import React from 'react'
import HeroSection from '../../components/sections/herosectionm'
import { Heroimg2 } from '../../components/images'

// reusable components
import ServiceFeatures from '../../components/sections/servicesfeatures'
import BenefitsGrid from '../../components/sections/benefitcard'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import CTASection from '../../components/sections/ctasection'
import Testimonial from '../../components/sections/Testimonials'
// icons
import SEO from '../../utils/seo'
import { AiOutlineMail } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';

import { PiChatBold } from 'react-icons/pi'

function LiveChatSupport() {
  const { t } = useTranslation()

  const supportServices = [
    {
      icon: <PiChatBold className="text-Primarycolor text-3xl" />,
      title: t("Live Chat Assistance"),
      description: t("Offer immediate help through live chat on your website or app, available round-the-clock."),
      features: [t("24/7 Availability"), t("Scripted or Free-Flow"), t("Multilingual Support")]
    },
    {
      icon: <AiOutlineMail className="text-Primarycolor text-3xl" />,
      title: t("Email Response Handling"),
      description: t("Manage high volumes of customer emails with accuracy, empathy, and speed."),
      features: [t("Organized Inbox"), t("Timely Replies"), t("Branded Tone")]
    },
    {
      icon: <FiSettings className="text-Primarycolor text-3xl" />,
      title: t("Technical Troubleshooting"),
      description: t("Provide chat/email-based first-level support for technical issues and inquiries."),
      features: [t("Fast Diagnostics"), t("Escalation Protocol"), t("Knowledge Based Access")]
    },
    {
      icon: <BiShoppingBag className="text-Primarycolor text-3xl" />,
      title: t("Order & Account Queries"),
      description: t("Handle questions related to orders, shipping, billing, and account access with precision."),
      features: [t("Secure Response"), t("Real Time Status Update"), t("Transactional Accuracy")]
    }
  ];

  const benefits = [
    {
      title: t("Higher Satisfaction"),
      description: t("Boosted CSAT scores by 25% through consistent, empathetic email handling."),
      color: "bg-[#F3F3FF]", // Assuming a similar color scheme
    },
    {
      title: t("Lower Cart Abandonment"),
      description: t("Live chat support decreased cart abandonment by 18% during checkout."),
      color: "bg-[#EFF6FF]", // Assuming a similar color scheme
    },
    {
      title: t("Faster Resolutions"),
      description: t("Reduced response times by 40% with real-time chat engagement."),
      color: "bg-[#F0FDF4]",
    },
    {
      title: t("Increased Contact Resolution"),
      description: t("Achieved a 30% improvement in resolving issues during the first interaction."),
      color: "bg-[#FFFBEB]",
    },
    {
      title: t("Streamlined Support Workflow"),
      description: t("Saved 10+ weekly hours using centralized email ticket management."),
      color: "bg-[#FFF1F2]",
    },
    {
      title: t("Better Customer Retention"),
      description: t("Enhanced loyalty by 20% with proactive, friendly post-purchase emails."),
      color: "bg-[#F0FDFA]",
    },
  ];

  return (
    <div className="bg-gray-50">
      <SEO
        title={t("Real-Time Support, Real Customer Satisfaction")}
        description={t("Deliver instant, personalized responses through chat and email—improving customer experience,")}
        keywords="live-chat, contact, instant message,"
        url="https://www.pheonixstech.com/outsourcing-services/live-chat-support"
      />

      <SectionWrapper>
        <HeroSection
          title={t("Real-Time Support, Real Customer Satisfaction")}
          highlightedWords={t("Support")}
          subtitle={t("Deliver instant, personalized responses through chat and email—improving customer experience, retention, and brand trust.")}
          ctaText={t("Get A Free Consultation")}
          ctaLink={"/contact"}
          image={Heroimg2}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle={t("What You Get with Our Chat & Email Support")}
          sectionSubtitle={t("From real-time conversations to follow-up emails, we offer professional support that keeps your customers connected and cared for.")}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsGrid
          benefits={benefits}
          sectionTitle={t("How Our Service Benefits You")}
          highlightedWords={t("Benefits")}
          sectionSubtitle={t("We don’t just answer questions—we build trust, increase customer satisfaction, and drive long-term loyalty through every chat and email.")}
        />
      </SectionWrapper>

      <CTASection
        ctaText={t("Get a Free Consultation ")}
        ctaLink={"/Consultation"}
      />

      <Testimonial />
    </div>
  )
}

export default LiveChatSupport
