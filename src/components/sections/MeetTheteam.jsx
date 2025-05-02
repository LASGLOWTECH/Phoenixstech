import React from "react";
import Team from "../../assets/data/Team";
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MeetTeam = () => {
    return (
        <div className=" md:px-20 py-12">
            {/* Section 1 */}
            <section className="  flex items-center justify-center flex-col mb-12">
                <div className="flex mb-4 items-center justify-left flex-row ">
                    <div className="rounded-full bg-gradient-to-r from-Secondarycolor to-Secondarycolor1 w-[10px] h-[10px] mr-2"></div>
                    <p className="text-sm text-orange-500 ">Our Team</p>
                </div>
                <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4 ">
                    Meet the Experts  <br></br>Behind Our Success
                </h2>
                <p className="mt-4 text-gray-700 text-center max-w-xl leading-relaxed">
                    Our diverse team of professionals brings a wealth of knowledge and experience to every project, working together to create impactful solutions for your business.
                </p>
            </section>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20">
  {Team.map((team, index) => (
    <Link
      to={team.link}
      key={index}
      className="bg-Primarycolor1 hover:bg-white rounded-lg shadow-md shadow-Primarycolor overflow-hidden transform transition-all duration-300 hover:scale-[1.02] group"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={team.Picture}
          alt={team.title}
          className="object-cover w-full h-56 md:h-64 lg:h-60 xl:h-64 rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center md:text-left">
     < p className="text-lg text-gray-200 group-hover:text-gray-600 transition-colors duration-300">
          {team.name}
        </p>
        <h3 className="text-xl font-semibold text-white group-hover:text-Primarycolor mb-2">
          {team.title}
        </h3>

        <p className="text-sm text-gray-200 group-hover:text-gray-600 transition-colors duration-300">
          {team.description}
        </p>

        {/* Social Icons */}
        <div className="flex justify-centerbottom-2 md:justify-start space-x-4 mt-4">
          <FaFacebookF className="text-white group-hover:text-Secondarycolor text-xl transition-colors duration-300 cursor-pointer" />
          <FaTwitter className="text-white group-hover:text-Secondarycolor text-xl transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </Link>
  ))}
</div>

        </div>
    );
};

export default MeetTeam;
