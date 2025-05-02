import React from 'react';
import { Image7 } from "../components/images";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const CareersContact = () => {
    return (
        <div className="bg-Primarycolor relative md:rounded-xl px-5 md:mx-20 md:px-20 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Image7})`
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                {/* Dark overlay */}
            </div>

            {/* Content Container */}
            <div className=" flex items-center flex-col relative z-10 text-center py-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white tracking-tight">
                    Have any questions?
                </h2>
                <p className="mt-4 text-base sm:text-base text-gray-300 max-w-3xl mx-auto">
                    We're here to help! Reach out to us with any inquiries or concerns, and our team will
                    provide the answers you need. Feel free to get in touch—we’d love to assist you!
                </p>



                <div className="flex   text-white pt-6 items-center gap-2 mt-4 md:mb-0">
                    <span className="flex items-center gap-2">

                        Follow us
                    </span>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
                <div className="mt-8">

                    <Link to="/Contact" className="inline-block">
                        <button
                            className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5 rounded-md transition-all duration-300"
                        >
                       Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CareersContact;
