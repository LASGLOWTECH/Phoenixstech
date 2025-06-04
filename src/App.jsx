import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';

import TawkToWidget from './utils/tawkit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SiteLoader from './components/loader';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home } from "./pages/Home";
import AboutUs from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import InboundCallCenter from './pages/outsourcing-services/inbound-call-center';
import LiveChatSupport from './pages/outsourcing-services/live-chat-support';
import MultilingualSupport from './pages/outsourcing-services/multilingual-support';
import TechnicalSupport from './pages/outsourcing-services/technical-support';

import Automotive from './pages/industries/automotive';
import ECommerce from './pages/industries/e-commerce';
import Healthcare from './pages/industries/healthcare';
import Insurance from './pages/industries/insurance';
import Media from './pages/industries/media';
import Technology from './pages/industries/technology';
import Finance from './pages/industries/finance-and-banking';

import Blogs from './pages/blogs';
import BlogDetails from './pages/blog-details';
import ScrollTop from "./components/scroll";
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/not-found';
import DashboardHome from './pages/dashboard/DashboardHome';
import Create from './pages/dashboard/createblog';
import Consultation from './pages/consultation';
import Consult from './pages/dashboard/consultation';
import Subscriptions from './pages/dashboard/subscriptions';
import BlogList from './pages/dashboard/bloglist';
import Update from './pages/dashboard/updateblog';
import AdminLayout from './pages/dashboard';

import { Routes, Route, useLocation } from 'react-router-dom';

// Layout wrapper to use `useLocation`
const AppLayout = () => {
  const location = useLocation();
  const hideLayoutRoutes = ['/Login', ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname.toLowerCase());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        {/* Admin Panel */}
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="updateblog" element={<Update />} />
          <Route path="createblog" element={<Create />} />
          <Route path="consultation" element={<Consult />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="bloglist" element={<BlogList />} />
        </Route>

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/consultation" element={<Consultation />} />

        {/* Industries */}
        <Route path="/industries/e-commerce" element={<ECommerce />} />
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/insurance" element={<Insurance />} />
        <Route path="/industries/finance-and-banking" element={<Finance />} />
        <Route path="/industries/technology" element={<Technology />} />
        <Route path="/industries/media" element={<Media />} />

        {/* Services */}
        <Route path="/outsourcing-services/inbound-call-center" element={<InboundCallCenter />} />
        <Route path="/outsourcing-services/live-chat-support" element={<LiveChatSupport />} />
        <Route path="/outsourcing-services/technical-support" element={<TechnicalSupport />} />
        <Route path="/outsourcing-services/multilingual-support" element={<MultilingualSupport />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
      <ScrollTop />
      <TawkToWidget />
      <ToastContainer />
    </>
  );
};

// Main App Component with SiteLoader
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Router>
      {loading ? <SiteLoader /> : <AppLayout />}
    </Router>
  );
};

export default App;
