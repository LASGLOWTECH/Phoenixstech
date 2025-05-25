import useAOS from '../hooks/useAos';
import { Image3 } from '../components/images';
import FaqSection from '../components/Faq';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Subscription from '../components/subscription';
import instance from '../config/axios.config';
import SEO from '../utils/seo';
import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
  FaLinkedin, FaInstagram, FaFacebookF, FaTwitter
} from 'react-icons/fa';

const ContactSection = () => {
  const refreshAOS = useAOS(); // Initialize AOS on component mount

  // Initialize AOS on component mount  


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      const res = await instance.post('/contacts', formData);
      toast.success('Message sent successfully!');

      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="bg-white">

<SEO
       title="Contact Us | PheonixStech"
        description="Learn more about PheonixStech—our people, our purpose, and how innovation drives our world-class tech solutions."
        keywords="Contact us"
        url="https://www.pheonixstech.com/contact"
    
      />

         
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src={Image3}
          alt="Support team"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <span className="bg-[#F5F7FA] text-Primarycolor text-xs font-semibold px-3 py-3 rounded-md mb-3">
            We Love To Help
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">
            Get in Touch with Us
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-xl" data-aos="fade-down" data-aos-duration="1000">
            Have questions or ready to start a project? Our team is here to assist you.
          </p>
        </div>
      </div>


      {/* Contact Section */}
      <div className="relative z-10 -mt-24 md:-mt-32 px-4 md:px-20">
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="p-8 rounded-lg ">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-greyBlack max-w-xl  mb-6">We’d love to hear from you! Whether you have a question, need support, or want to discuss a new project, our team is here to help.</p>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">

                < div className='flex items-center  rounded-md bg-[#F6F5FA] justify-center p-3 gap-3'>
                  <FaEnvelope className="text-Primarycolor text-lg mt-1" />
                </div>

                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-Primarycolor">info@phoenixstech.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">

                < div className='flex items-center  rounded-md bg-[#F6F5FA] justify-center p-3 gap-3'>
                  <FaPhoneAlt className="text-Primarycolor text-lg mt-1" />
                </div>

                <div>
                  <p className="font-bold">Phone Number</p>
                  <p className="text-Primarycolor">+48579235919</p>
                </div>
              </div>


              <div className="flex items-start gap-3">

                < div className='flex items-center  rounded-md bg-[#F6F5FA] justify-center p-3 gap-3'>
                  <FaMapMarkerAlt className="text-Primarycolor  text-lg mt-1" />
                </div>
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-gray-600">UL Celulozy 107W/1, 04-986, Warszawa, Poland</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <p className="font-bold mb-2">Follow us</p>
              <div className="flex gap-4 text-Secondarycolor text-xl">
                <a href="#"><FaLinkedin className='' /></a>
                <a href="#"><FaInstagram className='' /></a>
                <a href="#"><FaFacebookF className='' /></a>
                <a href="#"><FaTwitter className='' /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 bg-[#F6F5FA] focus:outline-none focus:ring-2   rounded-md"
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 bg-[#F6F5FA] focus:outline-none focus:ring-2   rounded-md"
                required
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Ex JohnDoe214@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3  bg-[#F6F5FA] focus:outline-none focus:ring-2  rounded-md"
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-[#F6F5FA] focus:outline-none focus:ring-2  rounded-md"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Type here your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3  bg-[#F6F5FA] focus:outline-none focus:ring-2   rounded-md"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white px-6 py-3  bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 rounded-md duration-300"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className="mt-2 text-sm text-center text-green-600 font-medium">{status}</p>
            )}
          </form>
        </div>
      </div>



<Subscription/>
      <FaqSection />


      <div className="mt-12">
        <iframe
          title="Map Location"
          className="w-full h-[300px] md:px-20"
          src="https://maps.google.com/maps?q=Minneapolis&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
