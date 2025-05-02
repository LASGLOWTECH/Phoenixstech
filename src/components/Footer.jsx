// import React from 'react'
// import { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import { BsWhatsapp } from 'react-icons/bs';
// import { BiEnvelope } from "react-icons/bi";
// import { BsTelephone, } from "react-icons/bs";
// import { MdLocationOn } from "react-icons/md";

// import { BsTwitter, BsLinkedin } from "react-icons/bs";
// import { FaFacebookF, FaInstagram, } from "react-icons/fa"
// export default function Footer() {



//   const today = new Date().getFullYear();
//   const [newDay] = useState(today)



//   return (
//     <div className='bg-gradient-to-t from-blue-100 px-6 md:px-24 mx-auto to-blue-100 py-12 '>

//       <div className='grid md:grid-cols-3 grid-cols-1'>


//         {/* first grid */}
//         <div className='contact  md:mt-0 mt-6 flex flex-col'>
//           <h3 className='text-darkBlue font-bold text-2xl'>Navigation</h3>

//           <div className='flex-row my-4 '>
//             <p className='text-lg'>Home</p>
//             <p className='text-lg'>Services</p>
//             <p className='text-lg'>About</p>
//             <p className='text-lg'>Training</p>
//            <a href="/https://wa.me/2349031821590" target="_blank" ><button className="text-base   rounded-md px-6  mt-3 py-3  text-white fonr-medium my-3 bg-blue-600 " value="Submit">Contact Us</button></a>


//             <h3 className='text-darkBlue font-bold py-3 text-lg'>Quick Links</h3>
//           </div>
//           <p className='text-lg'>Intership</p>
//           <p className='text-lg'>Opening</p>

//         </div>


//         {/* second grid */}



//         <div className='contact md:mt-0 mt-12 flex flex-col'>

//           <div className='flex flex-row  '>



//               <img src="/jvec_logo.png"
//                 width={60}
//                 height={60}
//                 alt="image" />


//             <h3 className='text-darkBlue font-bold  text-2xl'>JVEC Solutions</h3>



//           </div>

//           <p className='font-thin text-base pt-3 '>At JVEC, we believe that whatever is worth doing, is worth doing well.

//             This mindset is responsible for our conscientious approach to achieving quality service delivery. Over the years, we have built our brand on the foundation of excellence.</p>



//         </div>




//         {/* last contact grid */}







//         <div className='contact md:mt-0 mt-16 flex flex-col'>
//           <h3 className='text-darkBlue font-bold text-2xl'>Contact</h3>

//           <div className="flex flex-row  justify-start items-center">
//             <span className=" rounded-[100%]   my-3   bg-orangeRed  text-3xl">< BsTelephone className="p-1 text-darkBlue" /></span>

//             <p className="text-xl pl-6 text-black"> +234-8100-100-489</p>
//           </div>




//           <div className="flex flex-row justify-start items-center">

//             <span className=" rounded-[100%]   my-3  bg-orangeRed  text-3xl">   < BiEnvelope className="p-1 text-darkBlue" /></span>

//             <p className="text-xl pl-6 text-black">hello@jvecsolutions.com </p>

//           </div>


//           <div className="flex flex-row  items-center">
//             <span className=" rounded-[100%]   my-3  mbg-orangeRed  text-3xl">< BsWhatsapp className="p-1 text-darkBlue" /></span>

//             <p className="text-lg pl-6 text-black"> +234-903-577-8224</p>
//           </div>

//           <div className="flex flex-row justify-left items-center pt-3">

//             <span className=" rounded-[100%]    bg-orangeRed  text-black text-4xl">    <MdLocationOn className=" p-1 fill-darkBlue " /></span>
//             <p className="text-lg pl-6  text-black ">12 Rev. Ogunbiyi Street, Off Oba Akinjobi, Ikeja GRA, Lagos, Nigeria.</p>
//           </div>






//         </div>







//       </div>



//       {/* bottom links */}

//       <div className='flex items-center my-10 md:flex-row md:space-x-36 justify-center flex-col '>

//         <div className="flex flex-col justify-between row  md:flex-row">
//           <p className=" text-center md:text-left font-lighter text-base text-black py-2">  &copy; Copyright <span className="  text-black">{newDay} </span> JVEC Solutions </p>

//         </div>


//         <div className='Email  flex  justify-start'>
//           <span className=" rounded-[100%] my-5 mx-2 text-darkBlue  bg-orangeRed text-3xl"><a href="https://linkedin.com/in/austinosaz"><BsLinkedin className="p-1" /></a></span>

//           <span className=" rounded-[100%]   my-5 me-2 text-darkBlue bg-orangeRed  text-3xl"><a href="https://twitter.com/OmozemojeAugus1" target="_blank"><BsTwitter className="p-1" /></a></span>
//           <span className="rounded-[100%] my-5  mx-2  text-darkBlue  text-3xl"><a href="https://m.facebook.com/omozemoje.augustineoisasoje" target="_blank"><FaFacebookF className="p-1" /></a></span>
//           <span className=" rounded-[100%] my-5 mx-2 text-darkBlue  bg-orangeRed text-3xl"><a href="https://instagram.com/austineosaz/"><FaInstagram className="p-1" /></a></span>

//         </div>







//       </div>
//     </div>
//   )
// // }
// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { FaArrowUp, FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// const FooterWithLinks = () => {
//   return (
//     <footer className="bg-Primarycolor1 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="text-sm">
//               <li className="mb-2"><Link to="/" className="hover:text-primary-orange">Home</Link></li>
//               <li className="mb-2"><Link to="/about" className="hover:text-primary-orange">About Us</Link></li>
//               <li className="mb-2"><Link to="/blog" className="hover:text-primary-orange">Blog</Link></li>
//               <li className="mb-2"><Link to="/careers" className="hover:text-primary-orange">Careers</Link></li>
//               <li><Link to="/contact" className="hover:text-primary-orange">Contact Us</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Outsourcing Services</h4>
//             <ul className="text-sm">
//               <li className="mb-2"><Link to="/services/call-center" className="hover:text-primary-orange">Inbound & Outbound Call Center</Link></li>
//               <li className="mb-2"><Link to="/services/live-chat" className="hover:text-primary-orange">Live Chat & Email Support</Link></li>
//               <li className="mb-2"><Link to="/services/technical-support" className="hover:text-primary-orange">Technical Support & IT Helpdesk</Link></li>
//               <li><Link to="/services/multilingual" className="hover:text-primary-orange">Multilingual Support</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Industries</h4>
//             <ul className="text-sm">
//               <li className="mb-2"><Link to="/industries/automotive" className="hover:text-primary-orange">Automotive</Link></li>
//               <li className="mb-2"><Link to="/industries/healthcare" className="hover:text-primary-orange">Healthcare</Link></li>
//               <li className="mb-2"><Link to="/industries/media" className="hover:text-primary-orange">Media</Link></li>
//               <li className="mb-2"><Link to="/industries/insurance" className="hover:text-primary-orange">Insurance</Link></li>
//               <li className="mb-2"><Link to="/industries/technology" className="hover:text-primary-orange">Technology</Link></li>
//               <li className="mb-2"><Link to="/industries/retail" className="hover:text-primary-orange">Retail and E-Commerce</Link></li>
//               <li><Link to="/industries/banking" className="hover:text-primary-orange">Banking and Financial Service</Link></li>
//             </ul>
//           </div>
//           {/* Optional: Add a fourth column for a logo or other information */}
//           {/* <div>
//             <h4 className="text-lg font-semibold mb-4">Our Company</h4>
//             <p className="text-sm">Some brief information about your company.</p>
//           </div> */}
//         </div>
//         <hr className="border-gray-700 mb-4" />
//         <div className="flex items-center justify-between text-sm">
//           <div className="flex items-center">
//             <button className="bg-primary-orange text-white rounded-full w-8 h-8 flex items-center justify-center mr-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//               <FaArrowUp />
//             </button>
//             <span className="mr-4">Follow us</span>
//             <a href="https://linkedin.com/your-page" target="_blank" rel="noopener noreferrer" className="mr-2 hover:text-primary-orange"><FaLinkedin size={18} /></a>
//             <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="mr-2 hover:text-primary-orange"><FaFacebookF size={18} /></a>
//             <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="mr-2 hover:text-primary-orange"><FaTwitter size={18} /></a>
//             <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange"><FaInstagram size={18} /></a>
//           </div>
//           <div>
//             <Link to="/terms" className="mr-4 hover:text-primary-orange">Terms & Conditions</Link>
//             <span className="text-gray-500">•</span>
//             <Link to="/privacy" className="ml-4 hover:text-primary-orange">Privacy Policy</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterWithLinks;
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Splines } from "../components/images";

export default function Footer() {
  const textStyle = "text-[14px]  hover:text-Secondarycolor1 text-gray-300"
  return (
    <footer className="bg-[#0E0B20] text-white px-6 md:px-20 pt-16 pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take the <br /> <span className="text-white">Next Step?</span>
        </h2>
        <p className="text-lg mb-6 max-w-md">
          Let’s connect and explore how we can help you achieve your goals. Reach out to us today!
        </p>
        <Link to="/contact">
          <button className="border border-white rounded-full px-6 py-2 mb-12 hover:bg-gradient-to-r from-Secondarycolor hover:to-Secondarycolor1 hover:text-[#0E0B20] transition">
            Contact Us 
          </button>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 ">
              <li><Link to="/" className={textStyle}>Home</Link></li>
              <li><Link to="/about" className={textStyle}>About Us</Link></li>
              <li><Link to="/blog" className={textStyle}>Blog</Link></li>
              <li><Link to="/careers" className={textStyle}>Careers</Link></li>
              <li><Link to="/contact" className={textStyle}>Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Outsourcing Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services/call-center" className={textStyle}>Inbound & Outbound Call Center</Link></li>
              <li><Link to="/services/email-support" className={textStyle}>Live Chat & Email Support</Link></li>
              <li><Link to="/services/technical-support" className={textStyle}>Technical Support & IT Helpdesk</Link></li>
              <li><Link to="/services/multilingual" className={textStyle}>Multilingual Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Industries</h3>
            <ul className="space-y-2 text-gray-300" >
              <li><Link to="/industries/automotive" className={textStyle}>Automotive</Link></li>
              <li><Link to="/industries/healthcare" className={textStyle}>Healthcare</Link></li>
              <li><Link to="/industries/media" className={textStyle}>Media</Link></li>
              <li><Link to="/industries/insurance" className={textStyle}>Insurance</Link></li>
              <li><Link to="/industries/technology" className={textStyle}>Technology</Link></li>
              <li><Link to="/industries/ecommerce" className={textStyle}>Retail and E-Commerce</Link></li>
              <li><Link to="/industries/banking" className={textStyle}>Banking and Financial Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="flex items-center gap-2">

              Follow us
            </span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
          <div className="flex gap-6">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Gradient Blob Image */}
      <img
        src={Splines}
        alt="Colorful Gradient Decoration"
        className="absolute right-0 top-0 w-96 md:flex hidden sm:w-[500px] opacity-90 pointer-events-none z-0"
      />
    </footer>
  );
}
