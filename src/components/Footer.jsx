import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF, FaInstagram} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Plines } from "../components/images";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const textStyle = "text-[14px]  hover:text-Secondarycolor1 text-gray-300";

  return (
    <footer className="bg-[#0E0B20] text-white px-6 md:px-20 pt-16 pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('Ready to Take the')} <br /> <span className="text-white">{t('Next Step?')}</span>
        </h2>
        <p className="text-lg mb-6 max-w-md">
          {t('Let’s connect and explore how we can help you achieve your goals. Reach out to us today!')}
        </p>
        <Link to="/contact">
          <button className="border border-white rounded-full px-6 py-2 mb-12 hover:bg-gradient-to-r from-Secondarycolor hover:to-Secondarycolor1 hover:text-[#0E0B20] transition">
            {t('Contact Us')}
          </button>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          <div>
            <h3 className="font-semibold text-lg mb-3">{t('Quick Links')}</h3>
            <ul className="space-y-2 ">
              <li><Link to="/" className={textStyle}>{t('Home')}</Link></li>
              <li><Link to="/About" className={textStyle}>{t('About Us')}</Link></li>
              <li><Link to="/blogs" className={textStyle}>{t('Blog')}</Link></li>
              <li><Link to="/Careers" className={textStyle}>{t('Careers')}</Link></li>
              <li><Link to="/Contact" className={textStyle}>{t('Contact Us')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">{t('Outsourcing Services')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/outsourcing-services/inbound-call-center" className={textStyle}>{t('Inbound & Outbound Call Center')}</Link></li>
              <li><Link to="/outsourcing-services/live-chat-support" className={textStyle}>{t('Live Chat & Email Support')}</Link></li>
              <li><Link to="/outsourcing-services/technical-support" className={textStyle}>{t('Technical Support & IT Helpdesk')}</Link></li>
              <li><Link to="/multilingual-support" className={textStyle}>{t('Multilingual Support')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">{t('Industries')}</h3>
            <ul className="space-y-2 text-gray-300" >
              <li><Link to="/industries/automotive" className={textStyle}>{t('Automotive')}</Link></li>
              <li><Link to="/industries/healthcare" className={textStyle}>{t('Healthcare')}</Link></li>
              <li><Link to="/industries/media" className={textStyle}>{t('Media')}</Link></li>
              <li><Link to="/industries/insurance" className={textStyle}>{t('Insurance')}</Link></li>
              <li><Link to="/industries/technology" className={textStyle}>{t('Technology')}</Link></li>
              <li><Link to="/industries/e-commerce" className={textStyle}>{t('Retail and E-Commerce')}</Link></li>
              <li><Link to="/industries/finance-and-banking" className={textStyle}>{t('Banking and Financial Service')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="flex items-center gap-2">
              {t('Follow us')}
            </span>
            <a href="https://www.linkedin.com/company/phoenixs-tech/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-2xl'/></a>
            <a href="https://www.facebook.com/profile.php?id=61576601565478" target="_blank" rel="noopener noreferrer"><FaFacebookF className='text-2xl'/></a>
            <a href="https://www.instagram.com/phoenixstech" target="_blank" rel="noopener noreferrer"><FaInstagram className='text-2xl'/></a>
            <a href="https://x.com/Phoenixstech0?s=08" target="_blank" rel="noopener noreferrer"><FaXTwitter className='text-2xl'/></a>
          </div>
          <div className="flex gap-6">
            <Link to="/terms">{t('Terms & Conditions')}</Link>
            <Link to="/privacy">{t('Privacy Policy')}</Link>
          </div>
        </div>
      </div>

      {/* Gradient Blob Image */}
      <img
        src={Plines}
        alt={t('Colorful Gradient Decoration')}
        className="absolute right-0 top-0 w-96 md:flex hidden sm:w-[500px] opacity-90 pointer-events-none z-0"
      />
    </footer>
  );
}
