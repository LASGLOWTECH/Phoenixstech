
import React from 'react'
import AutomotiveCustomerExperience from '../../components/sections/Automative';

import { Industries6, Industries06 } from '../../components/images'
import ServiceFeatures from '../../components/sections/servicesfeatures'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import {  FaFileAlt, FaLock, FaExchangeAlt, FaUserCircle } from 'react-icons/fa';


import { FaFileContract } from 'react-icons/fa';
import {} from 'react-icons/fa';
import { } from 'react-icons/fa';

import { FaBolt } from 'react-icons/fa';
import SuccessSnapshot from '../../components/sections/success';
import Smallfeatures from '../../components/sections/smallfeatures';
import JoinUsBanner from '../../components/sections/joinusbanner';

const Finance = () => {


  // gridFeatures is a reusable component that takes in the following props
 


  const featureItems = [
    {
      icon: <FaLock className="text-Primarycolor text-3xl" />,
      title: "Secure Financial Transactions",
      description: "We protect sensitive financial data with encryption and fraud detection systems, ensuring all transactions are secure and private.",
    },
    {
      icon: <FaBolt className="text-Primarycolor text-3xl" />,
      title: "Fast Transaction Support",
      description: "Our team delivers timely support for transaction issues, providing quick resolutions and real-time updates on the status of transactions.",
    },
    {
      icon: <FaFileAlt className="text-Primarycolor text-3xl" />,
      title: "Regulatory Compliance",
      description: "We ensure that your financial operations meet all regulatory standards, maintaining data privacy and minimizing risk.",
    },
  ];

  const featureItem2 = [
    {
      icon: <FaLock className="text-Primarycolor text-3xl" />,
      title: "Secure Financial Transactions",
      description: "We protect sensitive financial data with encryption and fraud detection systems, ensuring all transactions are secure and private.",
    },
    {
      icon: <FaBolt className="text-Primarycolor text-3xl" />,
      title: "Fast Transaction Support",
      description: "Our team delivers timely support for transaction issues, providing quick resolutions and real-time updates on the status of transactions.",
    },
    {
      icon: <FaFileAlt className="text-Primarycolor text-3xl" />,
      title: "Regulatory Compliance",
      description: "We ensure that your financial operations meet all regulatory standards, maintaining data privacy and minimizing risk.",
    },
  ];



const supportServices = [
  {
    icon: <FaLock className="text-Primarycolor text-3xl" />,
    title: "Secure Financial Support",
    description: "Protecting sensitive customer information while offering seamless support.",
    features: ["Secure communication channels", "Data protection compliance", "Fraud detection measures"],
  },
  {
    icon: <FaExchangeAlt className="text-Primarycolor text-3xl" />,
    title: "Transaction Assistance",
    description: "Helping customers navigate banking services and transactions effortlessly.",
    features: ["Real-time support", "Easy transaction tracking", "Instant issue resolution"],
  },
  {
    icon: <FaFileContract className="text-Primarycolor text-3xl" />,
    title: "Regulatory Compliance",
    description: "Ensuring all interactions comply with financial industry regulations.",
    features: ["Regulatory adherence", "Secure customer data", "Risk management solutions"],
  },
  {
    icon: <FaUserCircle className="text-Primarycolor text-3xl" />,
    title: "Personalized Financial Care",
    description: "Delivering tailored services for optimal customer satisfaction and loyalty.",
    features: ["Customized financial guidance", "Multilingual support", "Proactive customer engagement"],
  },
];
  return (
    <div className='bg-white'>

      <SectionWrapper>
        <AutomotiveCustomerExperience
          title="Building Smarter Service in Banking & Financial Services"
          highlightedWords="Banking & Financial Services"
          subtitle="We help financial institutions deliver secure, multilingual customer support—enhancing client trust, reducing friction, and improving satisfaction across every touchpoint."
          imageUrl={Industries6}
        />
      </SectionWrapper>

      <SectionWrapper>

        <Smallfeatures
          services={featureItems}
          sectionTitle="Banking & Financial Services Industry Overview"
          sectionSubtitle="Ensuring secure, efficient support for customers while adhering to financial regulations."
        />
      </SectionWrapper>




      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle="Industry Expertise"
          sectionSubtitle=" We provide banking and financial services firms with secure, efficient solutions to enhance customer satisfaction and ensure regulatory compliance."
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
          title="Success Snapshot: CapitalEdge Bank"
          subtitle="A regional bank was facing rising support calls and inconsistent answers during digital migration."
          solutionPoints={["Introduced secure chat for digital banking queries", "Consolidated product knowledge for frontline agents","Delivered training focused on digital fluency and compliance"]}
          resultPoints={[
            { value: "42", label: "Reduction in response time" },
            { value: "38", label: "Increase in customer satisfaction" },
            { value: "27", label: "Growth in repeat purchases" },
          ]}

          imageUrl={Industries06}
        />
      </SectionWrapper>

      <JoinUsBanner />

    </div>
  )
}

export default Finance;