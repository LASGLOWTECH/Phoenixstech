import { BiSolidCheckShield } from "react-icons/bi";
import {
    FaChartBar,
    FaUserTie,
    FaTasks,
    FaLaptopCode,

    FaDatabase,
    FaLock,
    FaUniversity,
    FaCogs,
    FaLightbulb,
  } from "react-icons/fa";


const Servicet = [
    {
        title: "Data Analytics Excellence",
        icon: <FaChartBar className="w-6 h-6 text-blue-600" />,
        description:
          "We assemble a team of specialists to conduct thorough analysis and deliver customized data-driven solutions tailored to your needs.",
      },
      {
        title: "UX & Business Analysis",
        icon: <FaUserTie className="w-6 h-6 text-pink-600" />,
        description:
          "Expert services in UX design, UI/Usability, graphics, and advanced business systems analysis to align with your goals.",
      },
      {
        title: "Project Management",
        icon: <FaTasks className="w-6 h-6 text-green-600" />,
        description:
          "Experienced team handles complex projects and delivers seamless solutions across various project models.",
      },
      {
        title: "Software Development",
        icon: <FaLaptopCode className="w-6 h-6 text-yellow-600" />,
        description:
          "Specialists in advanced IT solutions for web, desktop, and mobile platforms with a focus on performance and innovation.",
      },
      {
        title: "Quality Assurance",
        icon: <BiSolidCheckShield  className="w-6 h-6 text-indigo-600" />,
        description:
          "Skilled consultants manage testing and QA processes across technologies to ensure reliable solutions.",
      },
      {
        title: "Admin & Security",
        icon: <FaLock className="w-6 h-6 text-red-500" />,
        description:
          "We execute Microsoft Technologies projects focusing on optimization, automation, and security.",
      },
      {
        title: "Banking IT Solutions",
        icon: <FaUniversity className="w-6 h-6 text-cyan-500" />,
        description:
          "We support IT projects in the banking sector, offering both on-site and remote system support.",
      },
      {
        title: "IT Engineering Solutions",
        icon: <FaCogs className="w-6 h-6 text-orange-500" />,
        description:
          "We deliver IT solutions for industries like automotive, rail, and oil & gas, with training programs.",
      },
      {
        title: "ERP Implementation",
        icon: <FaDatabase className="w-6 h-6 text-violet-500" />,
        description:
          "Optimize business operations through ERP, supporting owners with project workflow and data security.",
      },
      {
        title: "Innovation & R&D",
        icon: <FaLightbulb className="w-6 h-6 text-teal-500" />,
        description:
          "We build innovative IT solutions and develop tools that improve the efficiency of daily operations.",
      },
  ];
  
  export default Servicet;