
import React from 'react'
import AutomotiveCustomerExperience from '../../components/sections/Automative';

import { Industries7, Industries07 } from '../../components/images'
import ServiceFeatures from '../../components/sections/servicesfeatures'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import {  FaFileAlt, FaHeartbeat } from 'react-icons/fa';
import {FaLock, FaHospitalSymbol } from 'react-icons/fa';
import {  FaShieldAlt,  } from 'react-icons/fa';

import { FaUserPlus } from 'react-icons/fa6';
import { FaCogs } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';
import SuccessSnapshot from '../../components/sections/success';
import Smallfeatures from '../../components/sections/smallfeatures';
import JoinUsBanner from '../../components/sections/joinusbanner';

const Healthcare = () => {


  // gridFeatures is a reusable component that takes in the following props
 

const featureItems = [
  {
    icon: <FaUserPlus className="text-Primarycolor text-3xl" />,
    title: "Patient-Centered Support",
    description: "Providing compassionate, multilingual support to improve patient satisfaction and outcomes.",
  },
  {
    icon: <FaFileAlt className="text-Primarycolor text-3xl" />,
    title: "Regulatory Compliance",
    description: "Ensuring all interactions comply with healthcare regulations, safeguarding patient privacy.",
  },
  {
    icon: <FaHeartbeat className="text-Primarycolor text-3xl" />,
    title: "Continuous Care",
    description: "Supporting patients throughout their healthcare journey, from scheduling to follow-up care.",
  },
];


const featureItem2 = [
  {
    icon: <FaRegThumbsUp className="text-Primarycolor text-3xl" />,
    title: "Improved Patient Satisfaction",
    description: "Our services provide quick, effective support tailored to patient needs, leading to faster resolutions and a more personalized care experience.",
  },
  {
    icon: <FaLock className="text-Primarycolor text-3xl" />,
    title: "Enhanced Data Security",
    description: "We prioritize HIPAA-compliant security measures, safeguarding patient data while ensuring secure and encrypted communication throughout the process.",
  },
  {
    icon: <FaHospitalSymbol className="text-Primarycolor text-3xl" />,
    title: "Efficient Healthcare Operations",
    description: "By streamlining scheduling, triage, and follow-up, we reduce wait times and optimize healthcare workflows, leading to smoother operations.",
  },
];



  const supportServices = [
    {
      icon: <FaUserPlus className="text-Primarycolor text-3xl" />,
      title: "Patient-Centered Support",
      description: "Compassionate, efficient service tailored to improve patient experiences.",
      features: ["Multilingual support", "Accessible care options", "Real-time updates"],
    },
    {
      icon: <FaShieldAlt className="text-Primarycolor text-3xl" />,
      title: "Compliance & Security",
      description: "Ensuring strict adherence to healthcare regulations and data protection.",
      features: ["HIPAA compliance", "Secure patient data", "Risk management"],
    },
    {
      icon: <FaCogs className="text-Primarycolor text-3xl" />,
      title: "Streamlined Processes",
      description: "Optimizing healthcare workflows for better operational efficiency.",
      features: ["Faster patient triage", "Simplified scheduling", "Efficient follow-ups"],
    },
    {
      icon: <FaHeartbeat className="text-Primarycolor text-3xl" />,
      title: "Continuous Care",
      description: "Supporting patients throughout their healthcare journey.",
      features: ["24/7 availability", "Personalized care", "Post-treatment support"],
    },
  ];
  return (
    <div className='bg-white'>

      <SectionWrapper>
        <AutomotiveCustomerExperience
          title="Transforming Patient Support in Healthcare"
          highlightedWords=" Healthcare"
          subtitle="From appointment scheduling to post-care assistance, we help healthcare providers deliver compassionate, multilingual support that enhances trust, improves outcomes, and puts patients first.."
          imageUrl={Industries7}
        />
      </SectionWrapper>

      <SectionWrapper>

        <Smallfeatures
          services={featureItems}
          sectionTitle="Healthcare Industry Overview"
          sectionSubtitle="Delivering patient-centered support with a focus on improving communication, care outcomes, and compliance."
        />
      </SectionWrapper>




      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle="Industry Expertise"
          sectionSubtitle=" We provide healthcare organizations with customized support to improve patient satisfaction, care outcomes, and regulatory compliance."
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
          solutionPoints={["Launched a multilingual patient support center to manage volume", "Created a HIPAA-compliant knowledge base for consistent answers","Delivered training focused on empathy and urgent care scenarios"]}
          resultPoints={[
            { value: "42", label: "Reduction in response time" },
            { value: "38", label: "Increase in customer satisfaction" },
            { value: "27", label: "Growth in repeat purchases" },
          ]}

          imageUrl={Industries07}
        />
      </SectionWrapper>

      <JoinUsBanner />

    </div>
  )
}

export default Healthcare