

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
  const supportServices =
    [
      {
        icon: <PiChatBold className="text-Primarycolor text-3xl" />,
        title: "Live Chat Assistance",
        description: "Offer immediate help through live chat on your website or app, available round-the-clock.",
        features: ["24/7 Availability", "Scripted or Free-Flow", "Multilingual Support"]
      },
      {
        icon: <AiOutlineMail className="text-Primarycolor text-3xl" />,
        title: "Email Response Handling",
        description: "Manage high volumes of customer emails with accuracy, empathy, and speed.",
        features: ["Organized Inbox", "Timely Replies", "Branded Tone"]
      },
      {
        icon: <FiSettings className="text-Primarycolor text-3xl" />,
        title: "Technical Troubleshooting",
        description: "Provide chat/email-based first-level support for technical issues and inquiries.",
        features: ["Fast Diagnostics", "Escalation Protocol", "Knowledge Based Access"]
      },
      {
        icon: <BiShoppingBag className="text-Primarycolor text-3xl" />,
        title: "Order & Account Queries",
        description: "Handle questions related to orders, shipping, billing, and account access with precision.",
        features: ["Secure Response", "Real Time Status Update", "Transactional Accuracy"]
      }
    ];


  const benefits = [
    {
      title: "Higher Satisfaction",
      description: "Boosted CSAT scores by 25% through consistent, empathetic email handling.",
      color: "bg-[#F3F3FF]", // Assuming a similar color scheme
    },
    {
      title: "Lower Cart Abandonment",
      description: "Live chat support decreased cart abandonment by 18% during checkout.",
      color: "bg-[#EFF6FF]", // Assuming a similar color scheme
    },
    {
      title: "Faster Resolutions",
      description: "Reduced response times by 40% with real-time chat engagement.",
      color: "bg-[#F0FDF4]",
    },
    {
      title: "Increased Contact Resolution",
      description: "Achieved a 30% improvement in resolving issues during the first interaction.",
      color: "bg-[#FFFBEB]",
    },
    {
      title: "Streamlined Support Workflow",
      description: "Saved 10+ weekly hours using centralized email ticket management.",
      color: "bg-[#FFF1F2]",
    },
    {
      title: "Better Customer Retention",
      description: "Enhanced loyalty by 20% with proactive, friendly post-purchase emails.",
      color: "bg-[#F0FDFA]",
    },
  ];

  // title, highlightedWords, subtitle, ctaText, ctaLink, image

  return (

    <div className="bg-gray-50">
      <SEO
        title="Real-Time Support, Real Customer Satisfaction"
        description="Deliver instant, personalized responses through chat and email—improving customer experience,
             "
        keywords="live-chat, contact, instant message,"
        url="https://www.pheonixstech.com/outsourcing-services/live-chat-support" />

      <SectionWrapper>

        <HeroSection
          title="Real-Time Support, Real Customer Satisfaction"
          highlightedWords="Support"
          subtitle="Deliver instant, personalized responses through chat and email—improving customer experience, retention, and brand trust."
          ctaText="Get A Free Consultation"
          ctaLink={"/contact"}
          image={Heroimg2}
        />
      </SectionWrapper>
      <SectionWrapper>

        <ServiceFeatures
          services={supportServices}
          sectionTitle="What You Get with Our Chat & Email Support"
          sectionSubtitle=" From real-time conversations to follow-up emails, we offer professional support that keeps your customers connected and cared for."
        />
      </SectionWrapper>

      <SectionWrapper

      >

        <BenefitsGrid
          benefits={benefits}
          sectionTitle="How Our Service Benefits You"
          highlightedWords="Benefits"
          sectionSubtitle="We don’t just answer questions—we build trust, increase customer satisfaction, and drive long-term loyalty through every chat and email."


        />
      </SectionWrapper>

      <CTASection

        ctaText="Get a Free Consultation "
        ctaLink={"/Contact"}


      />


      <Testimonial />
    </div>

  )
}

export default LiveChatSupport

