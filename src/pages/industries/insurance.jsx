
import React from 'react'
import AutomotiveCustomerExperience from '../../components/sections/Automative';
import JoinUsBanner from '../../components/sections/joinusbanner';
import { Industries5, Industries05 } from '../../components/images'
import ServiceFeatures from '../../components/sections/servicesfeatures'
import SectionWrapper from '../../components/sections/Sectionwrapper'



import { FaFileContract, FaCheckCircle,FaUserShield, FaShieldAlt, FaUsers,  FaThumbsUp, } from 'react-icons/fa';




import SuccessSnapshot from '../../components/sections/success';
import Smallfeatures from '../../components/sections/smallfeatures';
const Insurance = () => {


  // gridFeatures is a reusable component that takes in the following props


  const featureItems = [
    {
      icon: <FaFileContract className="text-Primarycolor text-3xl" />,
      title: "Seamless Claims Process",
      description: "Simplifying claims filing and tracking to increase efficiency and customer satisfaction.",
    },
    {
      icon: <FaUserShield className="text-Primarycolor text-3xl" />,
      title: "Personalized Policy Support",
      description: "Tailored support that helps policyholders navigate coverage and reduce confusion.",
    },
    {
      icon: <FaCheckCircle className="text-Primarycolor text-3xl" />,
      title: "Efficiency & Accuracy",
      description: "Reducing response times and errors through technology-driven insurance solutions.",
    },
  ];


  const featureItem2 = [
    {
      icon: <FaFileContract className="text-Primarycolor text-3xl" />,
      title: "Faster Claims Processing",
      description: "Our team helps streamline the claims process, ensuring quicker resolutions and efficient document handling that reduces delays.",
    },
    {
      icon: <FaThumbsUp className="text-Primarycolor text-3xl" />,
      title: "Enhanced Customer Experience",
      description: "We provide round-the-clock support, resolving customer inquiries quickly and offering real-time updates to improve overall satisfaction.",
    },
    {
      icon: <FaShieldAlt className="text-Primarycolor text-3xl" />,
      title: "Risk Management & Compliance",
      description: "Our services ensure your operations comply with industry regulations, providing secure data handling and effective fraud prevention.",
    },
  ];


  const supportServices = [
    {
      icon: <FaFileContract className="text-Primarycolor text-3xl" />,
      title: "Seamless Claims Support",
      description: "Simplified claims processing for faster resolutions.",
      features: ["Real-time claim tracking", "Efficient document management", "Reduced processing time"],
    },
    {
      icon: <FaUserShield className="text-Primarycolor text-3xl" />,
      title: "Personalized Policy Assistance",
      description: "Providing tailored support for a better customer experience.",
      features: ["Customized policy guidance", "Multilingual support", "Easy claims filing"],
    },
    {
      icon: <FaShieldAlt className="text-Primarycolor text-3xl" />,
      title: "Data Security",
      description: "Protecting sensitive financial information while maintaining compliance.",
      features: ["Secure data handling", "Fraud prevention", "Privacy adherence"],
    },
    {
      icon: <FaUsers className="text-Primarycolor text-3xl" />,
      title: "Proactive Customer Care",
      description: "Engaging customers before, during, and after claims.",
      features: ["Preemptive issue resolution", "Ongoing customer engagement", "Timely follow-ups"],
    },
  ];

  return (
    <div className='bg-white'>

      <SectionWrapper>
        <AutomotiveCustomerExperience
          title="Strengthening Customer Trust in Insurance"
          highlightedWords="Insurance"
          subtitle="We support insurance providers with responsive, policy-specific assistance—boosting claims satisfaction, building long-term relationships, and streamlining the customer journey from quote to renewal."
          imageUrl={Industries5}
        />
      </SectionWrapper>

      <SectionWrapper>

        <Smallfeatures
          services={featureItems}
          sectionTitle="Insurance Industry Overview"
          sectionSubtitle="Streamlining claims and enhancing policyholder interactions to improve satisfaction and trust."
        />
      </SectionWrapper>




      <SectionWrapper>
        <ServiceFeatures
          services={supportServices}
          sectionTitle="Industry Expertise"
          sectionSubtitle="We help insurance companies streamline claims, enhance customer service, and improve policyholder engagement."
        />
      </SectionWrapper>




      <SectionWrapper>

        <Smallfeatures
          services={featureItem2}
          sectionTitle="How Our Service Benefits You"
          sectionSubtitle="We deliver faster claims processing, reduce operational costs, and enhance customer satisfaction for insurance providers."
        />
      </SectionWrapper>


      <SectionWrapper>
        <SuccessSnapshot
          title="Success Snapshot:Shield Insurance Co."
          subtitle="A leading insurance provider struggled to keep up with policyholder inquiries and claim-related confusion."
          solutionPoints={["Deployed automated claim triaging to route tickets faster", "Built an internal resource hub for complex insurance products", "Trained agents on compliance and customer empathy"]}
          resultPoints={[
            { value: "42%", label: "Reduction in response time" },
            { value: "38%", label: "Increase in customer satisfaction" },
            { value: "27%", label: "Growth in repeat purchases" },
          ]}
          imageUrl={Industries05}
        />
      </SectionWrapper>

      <JoinUsBanner/>

    </div>
  )
}



export default Insurance;
