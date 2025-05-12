
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Plines } from "../components/images";

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
              <li><Link to="/industries/e-commerce" className={textStyle}>Retail and E-Commerce</Link></li>
              <li><Link to="/industries/finance-and-banking" className={textStyle}>Banking and Financial Service</Link></li>
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
        src={Plines}
        alt="Colorful Gradient Decoration"
        className="absolute right-0 top-0 w-96 md:flex hidden sm:w-[500px] opacity-90 pointer-events-none z-0"
      />
    </footer>
  );
}
