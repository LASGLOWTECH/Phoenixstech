import { useState, useEffect } from 'react';
import { PiArrowCircleUpRightFill, PiArrowCircleRightFill } from "react-icons/pi";
import instance from '../config/axios.config';
import moment from 'moment';
import { PacmanLoader } from "react-spinners";

// Individual Career Card
const CareerCard = ({ title, description, url, location, date }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 space-y-4 border border-gray-200 transition-transform hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="text-sm text-gray-500 pt-2">
        <p><strong>Location:</strong> {location || 'Remote'}</p>
        <p><strong>Date:</strong> {moment(date).format('MMM DD, YYYY')}</p>
      </div>
      <div className="flex items-center pt-4 group cursor-pointer transition-all duration-500">
        <span className="transition-transform duration-500 ease-in-out">
          {isHovered ? (
            <PiArrowCircleRightFill className="w-8 h-8 fill-Secondarycolor" />
          ) : (
            <PiArrowCircleUpRightFill className="w-8 h-8 fill-Primarycolor" />
          )}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`ml-2 font-medium transition-all duration-500 ${
            isHovered
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-Secondarycolor to-Secondarycolor1'
              : 'text-Primarycolor'
          }`}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

// Skeleton Loader Component
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 border border-gray-200 animate-pulse">
    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    <div className="h-6 bg-gray-300 rounded w-24 mt-4"></div>
  </div>
);

// Career Content Logic
const CareerContent = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await instance.get(`/jobs?limit=1000`);
        setAllJobs(res.data.jobs || []);
      } catch (err) {
        setError('Failed to fetch career opportunities.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const totalPages = Math.ceil(allJobs.length / jobsPerPage);
  const currentJobs = allJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center py-8">
          <PacmanLoader color="#321C94" size={50} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </>
    );
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentJobs.map((career) => (
          <CareerCard
            key={career.id}
            title={career.title}
            description={career.description}
            url={career.url}
            location={career.candidate_required_location}
            date={career.publication_date}
          />
        ))}
      </div>

      <div className="mt-8 py-5 flex justify-center items-center space-x-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-Primarycolor text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600 text-sm">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-Primarycolor text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

// Main Export Component
const CareerOpportunities = () => <CareerContent />;

export default CareerOpportunities;
