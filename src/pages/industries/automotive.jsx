import React from 'react'
import AutomotiveCustomerExperience from '../../components/sections/Automative';
import JoinUsBanner from '../../components/sections/joinusbanner';
import { Industries1 ,Industries01} from '../../components/images'
import ServiceFeatures from '../../components/sections/servicesfeatures'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import { FaSlidersH, FaThumbsUp, FaChartLine, FaShieldAlt, FaChartBar } from 'react-icons/fa';
import {  FaDigitalOcean, FaHeadphones } from 'react-icons/fa';
import { FaStar, FaCogs} from 'react-icons/fa';

import SuccessSnapshot from '../../components/sections/success';
import Smallfeatures from '../../components/sections/smallfeatures';
const Automotive = () => {


// gridFeatures is a reusable component that takes in the following props
const featureItems = [
  {
    icon: <FaChartBar className="text-Primarycolor text-3xl" />,
    title: "Evolving Consumer Expectations",
    description: "Helping brands provide connected experiences, ensuring customer satisfaction throughout buying and ownership process.",
  },
  {
    icon: <FaDigitalOcean className="text-Primarycolor text-3xl" />,
    title: "Digital Transformation",
    description: "Adapting to digital retail models to enhance engagement and streamline customer interactions.",
  },
  {
    icon: <FaHeadphones className="text-Primarycolor text-3xl" />,
    title: "After-Sale Support",
    description: "Offering continuous support, from maintenance reminders to warranty inquiries, to keep customers loyal.",
  },
];

const featureItem2 = [
  {
    icon: <FaStar className="text-Primarycolor text-3xl" />,
    title: "Enhanced Customer Experience",
    description: "We provide real-time support that improves customer satisfaction by addressing inquiries, managing concerns, and offering solutions quickly.",
  },
  {
    icon: <FaCogs className="text-Primarycolor text-3xl" />,
    title: "Streamlined Operations",
    description: "Our services help automotive businesses optimize their workflow, reducing delays in processes like vehicle maintenance, repairs, and customer inquiries.",
  },
  {
    icon: <FaHeadphones className="text-Primarycolor text-3xl" />,
    title: "Improved After-Sales Support",
    description: "We help manage and improve after-sales interactions, ensuring customers remain satisfied and loyal long after their purchase, leading to repeat business.",
  },
];




  const supportServices = [
    {
      icon: <FaSlidersH className="text-Primarycolor text-3xl" />,
      title: "Tailored Support Solutions",
      description: "Custom solutions that cater to specific industry needs, ensuring seamless support.",
      features: ["Industry-specific strategies", "Multilingual support", "Scalable solutions"],
    },
    {
      icon: <FaThumbsUp className="text-Primarycolor text-3xl" />,
      title: "Enhanced Customer Satisfaction",
      description: "Boosting loyalty with proactive support and real-time engagement.",
      features: ["Proactive issue resolution", "Multichannel support", "Improved customer trust"],
    },
    {
      icon: <FaChartLine className="text-Primarycolor text-3xl" />,
      title: "Efficiency & Scalability",
      description: "Flexible, cost-effective solutions that evolve with your business.",
      features: ["Streamlined operations", "Scalable growth", "Reduced costs"],
    },
    {
      icon: <FaShieldAlt className="text-Primarycolor text-3xl" />,
      title: "Compliance Expertise",
      description: "Ensuring all customer interactions are compliant and secure.",
      features: ["Industry regulations adherence", "Data privacy protection", "Risk reduction"],
    },
  ];
  return (
    <div className='bg-white'>

      <SectionWrapper>
        <AutomotiveCustomerExperience
          title="Driving Exceptional Customer Experiences in Automotive"
          highlightedWords="Automotive"
          subtitle="From test-drive inquiries to post-sale support, we help automotive brands deliver seamless service, boost customer satisfaction, and build loyalty through intelligent, multilingual communication solutions."
          imageUrl={Industries1}
        />
      </SectionWrapper>

      <SectionWrapper>

      <Smallfeatures
          services={featureItems}
          sectionTitle="Automotive Industry Overview"
          sectionSubtitle="We help automotive brands meet the rising consumer expectations for seamless, personalized support at every stage of the customer journey.."
        /> 
      </SectionWrapper>




      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle="Industry Expertise"
          sectionSubtitle=" We offer tailored solutions designed to meet the unique needs of each industry, driving growth and enhancing customer experiences."
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
      title="Success Snapshot: National Health Alliance"
   subtitle="A nationwide healthcare provider was overwhelmed by patient inquiries during seasonal health surges."
   solutionPoints= {["Launched a multilingual patient support center to manage volume", "Created a HIPAA-compliant knowledge base for consistent answers", "Delivered training focused on empathy and urgent care scenarios"]}
    resultPoints={[
      { value: "42", label: "Reduction in response time" },
      { value: "38", label: "Increase in customer satisfaction" },
      { value: "27", label: "Growth in repeat purchases" },
    ]}
   
   imageUrl={Industries01}
      />
 </SectionWrapper>

<JoinUsBanner/>
 
    </div>
  )
}

export default Automotive