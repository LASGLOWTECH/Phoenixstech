import React, { useState, useEffect, Suspense } from 'react';
import { PiArrowCircleUpRightFill } from "react-icons/pi";
import { PiArrowCircleRightFill } from "react-icons/pi";


// Mock API function
const fetchCareers = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    {
      id: 1,
      title: 'Customer Support Specialist',
      description:
        'Assist customers by resolving inquiries, providing product information, and ensuring a seamless customer experience.',
    },
    {
      id: 2,
      title: 'Software Developer',
      description:
        'Develop and implement custom software solutions. Collaborate with cross-functional teams to create innovative products.',
    },
    {
      id: 3,
      title: 'Marketing Manager',
      description:
        'Create and execute strategic marketing campaigns to enhance brand awareness and increase sales.',
    },
    {
      id: 4,
      title: 'Technical Support Engineer',
      description:
        'Troubleshoot and resolve software and hardware issues. Assist clients in optimizing their systems.',
    },
    {
      id: 5,
      title: 'Project Manager',
      description:
        'Manage projects from inception to completion. Ensure timely delivery, quality control, and client satisfaction.',
    },
    {
      id: 6,
      title: 'Data Analyst',
      description:
        'Analyze and interpret complex data. Provide insights through reports and visualizations.',
    },
    {
      id: 7,
      title: 'UX/UI Designer',
      description:
        'Design user-friendly interfaces and improve usability. Work with developers to implement your designs.',
    },
    {
      id: 8,
      title: 'Sales Executive',
      description:
        'Identify and develop business opportunities, nurture relationships, and achieve sales targets.',
    },
  ];
};

const CareerCard = ({ title, description }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className="bg-white rounded-lg shadow-md p-6 space-y-4  "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center pt-6 group cursor-pointer transition-all duration-500">
        <span className="transition-transform duration-500 ease-in-out">
          {isHovered ? (
            <  PiArrowCircleRightFill    className="w-8 h-8  fill-Secondarycolor " />
          ) : (
            <PiArrowCircleUpRightFill className="w-8 h-8 fill-Primarycolor" />
          )}
        </span>
        <a
          href="#"
          className={`ml-2 font-medium transition-all duration-500 ${
            isHovered
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-Secondarycolor to-Secondarycolor1'
              : 'text-white'
          }`}
        >
          Learn More
        </a>
      </div>
      </div>
    );
  };
  

const CareerContent = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCareers = async () => {
      try {
        const data = await fetchCareers();
        setCareers(data);
      } catch (err) {
        setError('Failed to fetch career opportunities.');
      } finally {
        setLoading(false);
      }
    };

    getCareers();
  }, []);

  if (loading) {
    return <div className="text-center py-16 text-blue-500">Loading career opportunities...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl  font-semibold text-gray-900 tracking-tight">
            Explore Career Opportunities with <span className="bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor1"><br></br>Phoenix Tech</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8">
          {careers.map(career => (
            <CareerCard key={career.id} title={career.title} description={career.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CareerOpportunities = () => (
  <Suspense fallback={<div className="text-center py-16 text-blue-500">Loading...</div>}>
    <CareerContent />
  </Suspense>
);

export default CareerOpportunities;
