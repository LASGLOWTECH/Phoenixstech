
import React from 'react'
import AutomotiveCustomerExperience from '../../components/sections/Automative';

import { Industries3, Industries03 } from '../../components/images'
import ServiceFeatures from '../../components/sections/servicesfeatures'
import SectionWrapper from '../../components/sections/Sectionwrapper'


import { FaArrowsAltH, FaShieldAlt } from 'react-icons/fa';
import { FaRocket, FaUser, FaSyncAlt } from 'react-icons/fa';




import SuccessSnapshot from '../../components/sections/success';
import Smallfeatures from '../../components/sections/smallfeatures';
import JoinUsBanner from '../../components/sections/joinusbanner';

const Technology = () => {


  // gridFeatures is a reusable component that takes in the following props
 

  

  const featureItems = [
    {
      icon: <FaRocket className="text-Primarycolor text-3xl" />,
      title: "Efficient Tech Support",
      description: "Fast, reliable technical support that reduces downtime and improves user satisfaction.",
    },
    {
      icon: <FaUser className="text-Primarycolor text-3xl" />,
      title: "User-Centric Design",
      description: "Ensuring customer success with intuitive support for tech products and services.",
    },
    {
      icon: < FaArrowsAltH className="text-Primarycolor text-3xl" />,
      title: "Agile & Scalable Solutions",
      description: "Offering flexible solutions that evolve as your business and technology needs grow.",
    },
  ];


  const featureItem2 = [
    {
      icon: <FaRocket className="text-Primarycolor text-3xl" />,
      title: "Rapid Technical Support",
      description: "Our team ensures quick, effective troubleshooting and real-time assistance, minimizing system downtime and keeping your operations running smoothly.",
    },
    {
      icon: < FaArrowsAltH  className="text-Primarycolor text-3xl" />,
      title: "Scalable Tech Solutions",
      description: "We offer customizable support solutions that adapt to your growing business, helping you scale efficiently without increasing costs.",
    },
    {
      icon: <FaShieldAlt className="text-Primarycolor text-3xl" />,
      title: "Proactive Monitoring & Maintenance",
      description: "Our regular system checks, software updates, and performance monitoring prevent potential issues, ensuring your technology runs at its best.",
    },
  ];



  const supportServices = [
    {
      icon: <FaRocket className="text-Primarycolor text-3xl" />,
      title: "Fast Tech Support",
      description: "Resolving technical issues quickly to minimize user downtime.",
      features: ["Real-time troubleshooting", "Multichannel tech support", "Reduced wait times"],
    },
    {
      icon: <FaArrowsAltH  className="text-Primarycolor text-3xl" />,
      title: "Scalable Solutions",
      description: "Providing flexible tech support that grows with your business needs.",
      features: ["Adaptable service models", "Scalable support infrastructure", "Cost-effective solutions"],
    },
    {
      icon: <FaUser className="text-Primarycolor text-3xl" />,
      title: "User-Centric Design",
      description: "Ensuring seamless user experiences with intuitive support systems.",
      features: ["Personalized tech assistance", "User-focused design", "Simplified issue resolution"],
    },
    {
      icon: <FaSyncAlt className="text-Primarycolor text-3xl" />,
      title: "Continuous Improvement",
      description: "Helping tech companies innovate and improve support strategies.",
      features: ["Regular system updates", "New feature integrations", "Proactive issue identification"],
    },
  ];
  return (
    <div className='bg-white'>

      <SectionWrapper>
        <AutomotiveCustomerExperience
          title="Empowering Tech Brands with Human-Centered Support"
          highlightedWords="Tech"
          subtitle="We enable technology companies to scale service operations, simplify product support, and delight users with multilingual, cross-platform communication that drives retention."
          imageUrl={Industries3}
        />
      </SectionWrapper>

      <SectionWrapper>

        <Smallfeatures
          services={featureItems}
          sectionTitle="Technology Industry Overview"
          sectionSubtitle="Delivering scalable support solutions to minimize downtime and maximize customer satisfaction."
        />
      </SectionWrapper>




      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle="Industry Expertise"
          sectionSubtitle=" We help technology companies scale their support services to drive innovation, reduce downtime, and enhance user satisfaction."
        />
      </SectionWrapper>




      <SectionWrapper>

        <Smallfeatures
          services={featureItem2}
          sectionTitle="How Our Service Benefits You"
          sectionSubtitle="We provide rapid tech support, reduce downtime, and offer scalable solutions that evolve with your business needs.."
        />
      </SectionWrapper>


      <SectionWrapper>
        <SuccessSnapshot
          title="Success Snapshot: Leron Tech Limited"
          subtitle="A fast-scaling tech company struggled with growing global support needs and technical onboarding issues."
          solutionPoints={["Built a 24/7 global support model with region-specific teams", "Implemented in-app guidance for faster onboarding","Standardized product knowledge to reduce resolution time"]}
          resultPoints={[
            { value: "42", label: "Reduction in response time" },
            { value: "38", label: "Increase in customer satisfaction" },
            { value: "27", label: "Growth in repeat purchases" },
          ]}

          imageUrl={Industries03}
        />
      </SectionWrapper>

      <JoinUsBanner />

    </div>
  )
}

export default Technology
