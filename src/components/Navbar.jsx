import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { logo } from "./images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [outsourcingOpen, setOutsourcingOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = (type) => {
    setOutsourcingOpen(type === "outsourcing" ? !outsourcingOpen : false);
    setIndustriesOpen(type === "industries" ? !industriesOpen : false);
    setLanguageOpen(type === "language" ? !languageOpen : false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageOpen(false);
  };

  const navLinkClasses = "hover:text-Primarycolor cursor-pointer relative";
  const dropLinks = "absolute w-[350px] bg-white flex justify-center flex-col shadow-md mt-2 space-y-4 p-4 rounded z-20";
  const textStyle = "py-1 px-3 hover:bg-grey text-greyBlack cursor-pointer";

  return (
    <nav className="bg-white shadow-md px-6 md:px-20 py-4 z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to={'/'}><img src={logo} alt="Phoenixs Tech Logo" className="h-20" /></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link to={'/'} className="text-text-gray-600 font-medium">{t("Home")}</Link>
          <Link to={`/About`} className={`${navLinkClasses}`}>{t("About Us")}</Link>

          <div className={`${navLinkClasses}`} onClick={() => toggleDropdown("outsourcing")}>
            <div className="flex items-center space-x-1">
              <span>{t("Outsourcing Services")}</span>
              <FaChevronDown size={12} />
            </div>
            {outsourcingOpen && (
              <div className={dropLinks}>
                <Link to={'/outsourcing-services/inbound-call-center'} className={textStyle}>{t("Inbound & Outbound Call Center")}</Link>
                <Link to={'/outsourcing-services/live-chat-support'} className={textStyle}>{t("Live Chat & Email Support")}</Link>
                <Link to={'/outsourcing-services/technical-support'} className={textStyle}>{t("Technical Support & IT Helpdesk")}</Link>
                <Link to={'/outsourcing-services/multilingual-support'} className={textStyle}>{t("Multilingual Support")}</Link>
              </div>
            )}
          </div>

          <div className={navLinkClasses} onClick={() => toggleDropdown("industries")}>
            <div className="flex items-center space-x-1">
              <span>{t("Industries")}</span>
              <FaChevronDown size={12} />
            </div>
            {industriesOpen && (
              <div className={dropLinks}>
                <Link to="/industries/e-commerce" className={textStyle}>{t("E-commerce & Retail")}</Link>
                <Link to="/industries/healthcare" className={textStyle}>{t("Healthcare & Insurance")}</Link>
                <Link to="/industries/finance-and-banking" className={textStyle}>{t("Finance & Banking")}</Link>
                <Link to="/industries/technology" className={textStyle}>{t("Technology")}</Link>
                <Link to="/industries/media" className={textStyle}>{t("Media")}</Link>
                <Link to="/industries/automotive" className={textStyle}>{t("Automotive")}</Link>
                <Link to="/industries/insurance" className={textStyle}>{t("Insurance")}</Link>
              </div>
            )}
          </div>

          <Link to={'/blog'} className={navLinkClasses}>{t("Blogs")}</Link>
          <Link to={'/Careers'} className={navLinkClasses}>{t("Careers")}</Link>
        </div>

        {/* Language dropdown */}
        <div className={`${navLinkClasses} relative`} onClick={() => toggleDropdown("language")} style={{ cursor: "pointer" }}>
          <div className="flex items-center space-x-1 select-none">
            <span>{i18n.language.toUpperCase()}</span>
            <FaChevronDown size={12} />
          </div>
          {languageOpen && (
            <div className="absolute w-[100px] bg-white flex flex-col justify-center shadow-md mt-2 space-y-2 p-2 rounded z-20">
              {/* Use buttons or div with role=button for language selection */}
              <div className={textStyle} onClick={() => changeLanguage("en")}>English</div>
              <div className={textStyle} onClick={() => changeLanguage("fr")}>French</div>
              <div className={textStyle} onClick={() => changeLanguage("pl")}>Polish</div>
            </div>
          )}
        </div>

        <div className="hidden md:flex justify-between items-center space-x-1">
          <div>
            <Link to={'/Contact'}>
              <button className="bg-gradient-to-r from-Primarycolor to-Primarycolor1 hover:from-Secondarycolor hover:to-Secondarycolor1 shadow-md text-white font-semibold py-3 px-5 rounded-md transition-all duration-300">
                {t("Contact Us")}
              </button>
            </Link>
          </div>
        </div>

        <Link to={'/login'}>
          <FaUserCircle className="px-4" size={60} color="Primarycolor" />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="md:hidden flex flex-col mt-4 p-4 space-y-3 text-gray-700 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClasses}>{t("Home")}</Link>
            <Link to="/About" onClick={() => setMenuOpen(false)} className={navLinkClasses}>{t("About Us")}</Link>

            <div className={navLinkClasses} onClick={() => toggleDropdown("outsourcing")}>
              <div className="flex items-center space-x-1">
                <span>{t("Outsourcing Services")}</span>
                <FaChevronDown size={12} />
              </div>
              {outsourcingOpen && (
                <div className={dropLinks}>
                  <Link to={'/outsourcing-services/inbound-call-center'} onClick={() => setMenuOpen(false)} className={textStyle}>{t("Inbound & Outbound Call Center")}</Link>
                  <Link to={'/outsourcing-services/live-chat-support'} onClick={() => setMenuOpen(false)} className={textStyle}>{t("Live Chat & Email Support")}</Link>
                  <Link to={'/outsourcing-services/technical-support'} onClick={() => setMenuOpen(false)} className={textStyle}>{t("Technical Support & IT Helpdesk")}</Link>
                  <Link to={'/outsourcing-services/multilingual-support'} onClick={() => setMenuOpen(false)} className={textStyle}>{t("Multilingual Support")}</Link>
                </div>
              )}
            </div>

            <div className={navLinkClasses} onClick={() => toggleDropdown("industries")}>
              <div className="flex items-center space-x-1">
                <span>{t("Industries")}</span>
                <FaChevronDown size={12} />
              </div>
              {industriesOpen && (
                <div className={dropLinks}>
                  <Link to="/industries/e-commerce" onClick={() => setMenuOpen(false)} className={textStyle}>{t("E-commerce & Retail")}</Link>
                  <Link to="/industries/healthcare" onClick={() => setMenuOpen(false)} className={textStyle}>{t("Healthcare & Insurance")}</Link>
                  <Link to="/industries/finance-and-banking" onClick={() => setMenuOpen(false)} className={textStyle}>{t("Finance & Banking")}</Link>
                  <Link to="/industries/technology" onClick={() => setMenuOpen(false)} className={textStyle}>{t("Technology")}</Link>
                  <Link to="/industries/media" onClick={() => setMenuOpen(false)} className={textStyle}>{t("Media")}</Link>
                  <Link to="/industries/automotive" onClick={() => setMenuOpen(false)} className={textStyle}>{t("Automotive")}</Link>
                  <Link to="/industries/insurance" onClick={() => setMenuOpen(false)} className={textStyle}>{t("Insurance")}</Link>
                </div>
              )}
            </div>

            <Link to="/blog" onClick={() => setMenuOpen(false)} className={navLinkClasses}>{t("Blogs")}</Link>
            <Link to="/Careers" onClick={() => setMenuOpen(false)} className={navLinkClasses}>{t("Careers")}</Link>
            <Link to="/Contact" onClick={() => setMenuOpen(false)} className={navLinkClasses}>{t("Contact")}</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
