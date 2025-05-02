
import React from 'react'
import AutomotiveCustomerExperience from '../../components/sections/Automative';
import JoinUsBanner from '../../components/sections/joinusbanner';
import { Industries4, Industries04 } from '../../components/images'
import ServiceFeatures from '../../components/sections/servicesfeatures'
import SectionWrapper from '../../components/sections/Sectionwrapper'

import { FaCommentDots, FaUniversalAccess, FaChartLine } from 'react-icons/fa';

import { FaClock, FaCloudUploadAlt, FaUserCheck } from 'react-icons/fa';





import SuccessSnapshot from '../../components/sections/success';
import Smallfeatures from '../../components/sections/smallfeatures';
const Media = () => {


  // gridFeatures is a reusable component that takes in the following props


  const featureItems = [
    {
      icon: <FaCommentDots className="text-Primarycolor text-3xl" />,
      title: "Audience Engagement",
      description: "Providing real-time, omnichannel support to boost audience satisfaction and retention.",
    },
    {
      icon: <FaUniversalAccess className="text-Primarycolor text-3xl" />,
      title: "Content Accessibility",
      description: "Simplifying content access for users to enhance their entertainment experience.",
    },
    {
      icon: <FaUserCheck className="text-Primarycolor text-3xl" />,
      title: "Subscriber Retention",
      description: "Building long-term subscriber relationships with proactive, personalized support.",
    },
  ];


  const featureItem2 = [
    {
      icon: <FaClock className="text-Primarycolor text-3xl" />,
      title: "24/7 Audience Engagement",
      description: "We offer continuous, real-time support across all channels, ensuring a responsive experience that keeps your audience engaged.",
    },
    {
      icon: <FaCloudUploadAlt className="text-Primarycolor text-3xl" />,
      title: "Seamless Content Delivery",
      description: "Our service ensures efficient content access, improving distribution speed and allowing users to navigate content effortlessly.",
    },
    {
      icon: <FaUserCheck className="text-Primarycolor text-3xl" />,
      title: "Increased Subscriber Retention",
      description: "By providing proactive and personalized support, we help build long-term subscriber loyalty and reduce churn.",
    },
  ];

  const supportServices = [
    {
      icon: <FaCommentDots className="text-Primarycolor text-3xl" />,
      title: "Audience Engagement",
      description: "Connecting with audiences through seamless, real-time support.",
      features: ["24/7 Availability", "Omnichannel support", "Audience satisfaction"],
    },
    {
      icon: <FaUniversalAccess className="text-Primarycolor text-3xl" />,
      title: "Content Accessibility",
      description: "Improving access to content while maintaining high-quality service.",
      features: ["Easy content navigation", "Quick content resolution", "Personalized recommendations"],
    },
    {
      icon: <FaUserCheck className="text-Primarycolor text-3xl" />,
      title: "Subscriber Retention",
      description: "Building long-term relationships with subscribers through proactive support.",
      features: ["Timely issue resolution", "Subscriber-focused engagement", "Subscription renewal assistance"],
    },
    {
      icon: <FaChartLine className="text-Primarycolor text-3xl" />,
      title: "Operational Efficiency",
      description: "Streamlining media workflows for faster content delivery.",
      features: ["Faster content updates", "Simplified distribution processes", "Scalable support solutions"],
    },
  ];

  return (
    <div className='bg-white'>

      <SectionWrapper>
        <AutomotiveCustomerExperience
          title="Creating Impactful Engagement in Media & Entertainment"
          highlightedWords="Media & Entertainment"
          subtitle="From subscriber support to content access, we help media brands deliver real-time, multilingual assistance that boosts audience satisfaction and enhances the digital entertainment experience."
          imageUrl={Industries4}
        />
      </SectionWrapper>

      <SectionWrapper>

        <Smallfeatures
          services={featureItems}
          sectionTitle="Media & Entertainment Industry Overview"
          sectionSubtitle="Optimizing customer support to enhance loyalty, engagement, and content accessibility."
        />
      </SectionWrapper>




      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle="Industry Expertise"
          sectionSubtitle="We support media and entertainment companies in delivering exceptional experiences, boosting audience loyalty, and managing content access.."
        />
      </SectionWrapper>




      <SectionWrapper>

        <Smallfeatures
          services={featureItem2}
          sectionTitle="How Our Service Benefits You"
          sectionSubtitle="We provide seamless support that enhances audience engagement, content delivery, and subscriber retention for media companies."
        />
      </SectionWrapper>


      <SectionWrapper>
        <SuccessSnapshot
          title="Success Snapshot: Streaming Nova"
          subtitle="A major media platform was hit with high support demand during new content drops and user account issues."
          solutionPoints={["Launched a surge support model for release windows", "Created a rich self-service hub for subscriptions and tech issues", "Integrated analytics to monitor and respond to trending problems"]}
          resultPoints={[
            { value: "42%", label: "Reduction in response time" },
            { value: "38%", label: "Increase in customer satisfaction" },
            { value: "27%", label: "Growth in repeat purchases" },
          ]}
          imageUrl={Industries04}
        />
      </SectionWrapper>

      <JoinUsBanner/>

    </div>
  )
}

export default Media;