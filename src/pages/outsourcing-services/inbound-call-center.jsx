import React from 'react'
import { useTranslation } from 'react-i18next'
import HeroSection from '../../components/sections/herosectionm'
import { Heroimg1 } from '../../components/images'
// reusable components
import ServiceFeatures from '../../components/sections/servicesfeatures'
import BenefitsGrid from '../../components/sections/benefitcard'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import CTASection from '../../components/sections/ctasection'
import Testimonial from '../../components/sections/Testimonials'
import SEO from '../../utils/seo'
// icons
import { PiPhoneCallFill } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

function InboundCallCenter() {
  const { t } = useTranslation()

  const supportServices = [
    {
      icon: <PiPhoneCallFill className="text-Primarycolor text-3xl" />,
      title: t("Inbound Call Handling"),
      description: t(
        "We manage incoming calls with professionalism and speed, ensuring every customer feels heard and supported."
      ),
      features: [
        t("24/7 Availability"),
        t("First-Call Resolution"),
        t("Professional Support"),
      ],
    },
    {
      icon: <FaRankingStar className="text-Primarycolor text-3xl" />,
      title: t("Outbound Campaigns"),
      description: t(
        "Reach your customers proactively with outbound calls designed to generate leads, collect feedback, or promote services."
      ),
      features: [
        t("Targeted Outreach"),
        t("Scripted Engagement"),
        t("Campaign Reporting"),
      ],
    },
    {
      icon: <FaCalendar className="text-Primarycolor text-3xl" />,
      title: t("Appointment Scheduling"),
      description: t(
        "We assist in booking, confirming, and managing appointments to keep your operations smooth and organized."
      ),
      features: [
        t("Calendar Integration"),
        t("Automated Reminders"),
        t("Real-Time Updates"),
      ],
    },
    {
      icon: <FaTasks className="text-Primarycolor text-3xl" />,
      title: t("Customer Surveys & Follow-Ups"),
      description: t(
        "Gather feedback and maintain engagement through structured surveys and personalized follow-up calls."
      ),
      features: [
        t("Insightful Analytics"),
        t("High Response Rates"),
        t("Customer Retention Boost"),
      ],
    },
  ]

  const benefits = [
    {
      title: t("Higher Engagement"),
      description: t(
        "Achieved a 25% increase in customer response rates through personalized inbound call handling."
      ),
      color: "bg-[#F3F3FF]",
    },
    {
      title: t("Improved Conversion"),
      description: t(
        "Generated a 20% boost in lead-to-sale conversions via strategic outbound campaigns."
      ),
      color: "bg-[#EFF6FF]",
    },
    {
      title: t("Faster Resolutions"),
      description: t(
        "Reduced customer wait time by 35%, leading to quicker problem-solving and higher satisfaction."
      ),
      color: "bg-[#F0FDF4]",
    },
    {
      title: t("Better Retention"),
      description: t(
        "Contributed to a 15% improvement in customer loyalty through consistent follow-ups."
      ),
      color: "bg-[#FFFBEB]",
    },
    {
      title: t("Increased Efficiency"),
      description: t(
        "Streamlined appointment scheduling processes, saving clients an average of 12 hours per week."
      ),
      color: "bg-[#FFF1F2]",
    },
    {
      title: t("Data-Driven Insights"),
      description: t(
        "Enabled smarter decisions with call data that improved sales strategies by 18%."
      ),
      color: "bg-[#F0FDFA]",
    },
  ]

  return (
    <div className="bg-gray-50">
      <SEO
        title={t("Professional Call Center Solutions That Connect and Convert")}
        description={t(
          "Our comprehensive call center solutions are built to streamline communication, improve customer experience, and deliver measurable business impact."
        )}
        keywords={t("Careers,innovation, collaboration,")}
        url="https://www.pheonixstech.com/outsourcing-services/inbound-call-center"
      />

      <SectionWrapper>
        <HeroSection
          title={t("Professional Call Center Solutions That Connect and Convert")}
          highlightedWords={t("Call Center Solutions")}
          subtitle={t(
            "Delivering seamless inbound and outbound call experiences to support your customers, boost engagement, and drive results."
          )}
          ctaText={t("Get A Free Consultation")}
          ctaLink={"/contact"}
          image={Heroimg1}
        />
      </SectionWrapper>

      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle={t("What You Get with Our Call Center Service")}
          sectionSubtitle={t(
            "Our comprehensive call center solutions are built to streamline communication, improve customer experience, and deliver measurable business impact."
          )}
        />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsGrid
          benefits={benefits}
          sectionTitle={t("How Our Service Benefits You")}
          highlightedWords={t("Benefits")}
          sectionSubtitle={t(
            "Our comprehensive call center solutions are built to streamline communication, improve customer experience, and deliver measurable business impact."
          )}
        />
      </SectionWrapper>

      <CTASection ctaText={t("Get a Free Consultation")} ctaLink={"/Contact"} />

      <Testimonial />
    </div>
  )
}

export default InboundCallCenter
