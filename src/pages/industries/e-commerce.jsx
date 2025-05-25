
import React from 'react'
import AutomotiveCustomerExperience from '../../components/sections/Automative';
import JoinUsBanner from '../../components/sections/joinusbanner';
import { Industries2, Industries02 } from '../../components/images'
import ServiceFeatures from '../../components/sections/servicesfeatures'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import {
  FaHandshake, FaShoppingCart, FaTachometerAlt, FaReplyAll, FaExpandArrowsAlt,
  FaHeart, FaChartLine, FaGlobe
} from 'react-icons/fa';

import { FaArrowRight } from "react-icons/fa6";
import { BiTransfer } from 'react-icons/bi';




import SuccessSnapshot from '../../components/sections/success';
import Smallfeatures from '../../components/sections/smallfeatures';
const Ecommerce = () => {


  // gridFeatures is a reusable component that takes in the following props
  const featureItems = [
    {
      icon: <BiTransfer className="text-Primarycolor text-3xl" />,
      title: "Omnichannel Support",
      description: "Deliver consistent customer service across chat, email, and phone—no matter where your customers connect.",
    },
    {
      icon: <FaExpandArrowsAlt className="text-Primarycolor text-3xl" />,
      title: "Scalable Solutions",
      description: "Handle seasonal spikes and high-volume queries effortlessly with flexible support that grows with your business.",
    },
    {
      icon: <FaReplyAll className="text-Primarycolor text-3xl" />,
      title: "Post-Sale Engagement",
      description: "Enhance retention through thoughtful follow-ups, order updates, and return support that keeps customers coming back.",
    },
  ];


  const featureItem2 = [
    {
      icon: <FaHeart className="text-Primarycolor text-3xl" />,
      title: "Enhanced Customer Loyalty",
      description: "Increase customer retention through consistent, high-quality service experiences that build trust and encourage repeat business.",
    },
    {
      icon: <FaChartLine className="text-Primarycolor text-3xl" />,
      title: "Operational Efficiency",
      description: "Reduce operational costs while improving service quality through our optimized processes and expert staff.",
    },
    {
      icon: <FaGlobe className="text-Primarycolor text-3xl" />,
      title: "Global Market Reach",
      description: "Expand into new markets confidently with multilingual support that respects cultural nuances and local expectations.",
    },
  ];

  const supportServices = [
    {
      icon: <FaHandshake className="text-Primarycolor text-3xl" />,
      title: "Conversion Support",
      description: "We deliver timely and personalized support that guides customers from product interest to purchase.",
      features: ["24/7 Availability", "Real-time live chat", "Multilingual assistance"],
    },
    {
      icon: <FaShoppingCart className="text-Primarycolor text-3xl" />,
      title: "Order Help",
      description: "From tracking updates to return management, we ensure smooth order-related communication at every step.",
      features: ["Shipment status alerts", "Return/exchange handling", "Secure data handling"],
    },
    {
      icon: <FaArrowRight className="text-Primarycolor text-3xl" />,
      title: "Upsell & Cross-sell Support",
      description: "Maximize every interaction by recommending relevant products based on customer behavior.",
      features: ["Smart product suggestions", "Sales-driven scripting", "Customer journey mapping"],
    },
    {
      icon: <FaTachometerAlt className="text-Primarycolor text-3xl" />,
      title: "Peak Season Readiness",
      description: "We scale support operations to handle increased traffic and queries during sales, holidays, and promotions.",
      features: ["On-demand agent scaling", "Fast onboarding", "Performance tracking"],
    },
  ];


  return (
    <div className='bg-white'>

      <SectionWrapper>
        <AutomotiveCustomerExperience
          title="Powering Exceptional Customer Experiences in Ecommerce & Retail"
          highlightedWords="Ecommerce & Retail"
          subtitle="From real-time support to post-purchase care, we help ecommerce and retail brands connect with customers, build loyalty, and scale faster through tailored communication solutions."
          imageUrl={Industries2}
        />
      </SectionWrapper>

      <SectionWrapper>

        <Smallfeatures
          services={featureItems}
          sectionTitle="E-commerce & Retail Industry Overview"
          sectionSubtitle="We help ecommerce and retail businesses stay competitive with seamless support that adapts to customer behavior across channels—from browsing to checkout and beyond."
        />
      </SectionWrapper>




      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle="Industry Expertise"
          sectionSubtitle="Phoenixs Tech brings specialized knowledge and proven methodologies to help retail businesses elevate their customer service and operational efficiency."
        />
      </SectionWrapper>




      <SectionWrapper>

        <Smallfeatures
          services={featureItem2}
          sectionTitle="How Our Service Benefits You"
          sectionSubtitle="We offer tailored solutions to improve customer engagement, streamline operations, and support automotive businesses with efficient services."
        />
      </SectionWrapper>


      <SectionWrapper>
        <SuccessSnapshot
          title="Success Snapshot:  Global Fashion Retailer"
          subtitle="A leading fashion e-commerce platform was struggling with customer service during seasonal peaks, leading to increased response times and customer dissatisfaction."
          solutionPoints={["Implemented a flexible multilingual support team that could scale rapidly during peak seasons", "Developed specialized training for handling fashion-specific inquiries", "Created a unified knowledge base to ensure consistent responses across all channels"]}
          resultPoints={[
            { value: "42%", label: "Reduction in response time" },
            { value: "35%", label: "Increase in customer satisfaction" },
            { value: "20%", label: "Growth in repeat purchases" },
          ]}
          imageUrl={Industries02}
        />
      </SectionWrapper>

      <JoinUsBanner/>

    </div>
  )
}

export default Ecommerce