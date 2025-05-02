// import React from 'react'

// function TechnicalSupport() {
//   return (
//     <div>
//      <p className="text-2xl font-bold text-center my-8">Technical Support</p>    
//     </div>
//   )
// }

// export default TechnicalSupport

// import React from 'react'

// function LiveChatSupport() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-center my-8">Live Chat Support</h1>
//       <div className="flex justify-center items-center h-screen">
//         <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//           <h2 className="text-xl font-semibold mb-4">Chat with Us</h2>
//           <p className="mb-4">We are here to assist you!</p>
//           <form>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
//             />
//             <textarea
//               placeholder="Your Message"
//               className="border border-gray-300 rounded-lg p-2 mb-4 w-full h-32"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-200"
//             >
//               Start Chat
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LiveChatSupport


import React from 'react'
import HeroSection from '../../components/sections/herosectionm'
import { Heroimg3 } from '../../components/images'

// reusable components
import ServiceFeatures from '../../components/sections/servicesfeatures'
import BenefitsGrid from '../../components/sections/benefitcard'
import SectionWrapper from '../../components/sections/Sectionwrapper'
import CTASection from '../../components/sections/ctasection'
import Testimonial from '../../components/sections/Testimonials'
// icons


import { FaClock } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi'; // Could represent multiple channels
import { AiOutlineExpand } from 'react-icons/ai'

function TechnicalSupport
() {
  const supportServices =
  [
    {
      icon: <FaClock className="text-Primarycolor text-3xl" />,
      title: "24/7 Support Access",
      description: "Round-the-clock availability to assist your team and customers anytime.",
      features: ["Always-on helpdesk coverage", "Fast response time", "Reduced downtime"]
    },
    {
      icon: <FaWrench className="text-Primarycolor text-3xl" />,
      title: "Expert Troubleshooting",
      "description": "Skilled professionals ready to resolve technical issues efficiently.",
      "features": ["Certified IT specialists", "Quick issue resolution", "Friendly, knowledgeable support"]
    },
    {
      icon: <BiTransfer className="text-Primarycolor text-3xl" />,
      title: "Multi-Channel Support",
      "description": "Get help via chat, email, phone, or ticketing systems.",
      "features": ["Seamless communication", "Centralized issue tracking", "Consistent service quality"]
    },
    {
      icon: <AiOutlineExpand className="text-Primarycolor text-3xl" />,
      title: "Scalable Solutions",
      "description": "Support that grows with your business needs.",
      "features": ["Flexible staffing options", "Custom support plans", "Adaptable service levels"]
    }
  ];

  const benefits = [
    {
      title: "24/7 Availability",
      description: "Instant technical assistance, any hour of the day, ensuring uninterrupted business operations and peace of mind.",
      color: "bg-[#F3F3FF]", 
    },
    {
      title: "Cost Efficiency",
      description: "Reduced response times by 40% with real-time tools that quickly resolve technical issues before they escalate.",
      color: "bg-[#EFF6FF]", 
    },
    {
      title: "Faster Resolutions",
      description: "Reduced response times by 40% with real-time support tools.",
      color: "bg-[#F0FDF4]",
    },
    {
      title: "Scalable Support",
      description: "Easily scale up or down with flexible tech support tailored to your business growth and seasonal demands.",
      color: "bg-[#FFFBEB]",
    },
    {
      title: "Proactive Monitoring",
      description: "Prevent problems before they impact your business through automated issue detection and early response systems.",
      color: "bg-[#FFF1F2]",
    },
    {
      title: "Multi-Channel Help",
      description: "Get support across chat, email, phone, and ticket systems—ensuring your users are always connected and supported.",
      color: "bg-[#F0FDFA]",
    },
  ];

  // title, highlightedWords, subtitle, ctaText, ctaLink, image

  return (

    <div className="bg-gray-50">

<SectionWrapper>

      <HeroSection
        title="Reliable Tech Support, Anytime You Need It"
        highlightedWords="Reliable"
        subtitle="We provide expert technical assistance and responsive IT helpdesk solutions to keep your business running smoothly."
        ctaText="Get A Free Consultation"
        ctaLink={"/contact"}
        image={Heroimg3}
      />
</SectionWrapper>
<SectionWrapper>

<ServiceFeatures
        services={supportServices}
        sectionTitle="What You Get with Technical Support & IT Helpdesk"
        sectionSubtitle="Everything you need to deliver fast, efficient, and reliable tech support that keeps your operations running smoothly."
      />
</SectionWrapper>

<SectionWrapper

>

<BenefitsGrid
benefits={benefits}
sectionTitle="How Our Service Benefits You"
highlightedWords="Benefits"
sectionSubtitle="We simplify IT challenges and boost operational performance with responsive, reliable, and scalable tech solutions."


/>
</SectionWrapper>

<CTASection

ctaText="Get a Free Consultation "
ctaLink={"/Contact"}


/>


<Testimonial/>
    </div>

  )
}

export default TechnicalSupport;
