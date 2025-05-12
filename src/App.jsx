import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import TawkToWidget from './utils/tawkit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import DashboardHome from './pages/dashboard/DashboardHome'; // You need to create this component
import Create from './pages/dashboard/createblog';
import Consultation from './pages/consultation';
import Consult from './pages/dashboard/consultation';
import Subscriptions from './pages/dashboard/subscriptions';
import BlogList from './pages/dashboard/bloglist';
import Update from './pages/dashboard/updateblog';
// Admin Pages
import AdminLayout from './pages/dashboard';



// Create a wrapper component to access `useLocation`
const AppLayout = () => {
  const location = useLocation();
  const hideLayoutRoutes = ['/login'];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname.toLowerCase());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        {/* admin panel */}
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} /> {/* Default route for /dashboard */}
          <Route path="updateblog" element={<Update />} />
              <Route path="createblog" element={<Create />} />
          <Route path="consultation" element={<Consult />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="bloglist" element={<BlogList />} />
          {/* <Route path="subscriptions" element={<SubscriptionAdmin />} /> */}

        </Route>


        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/consultation" element={<Consultation />} />

        <Route path="/industries/e-commerce" element={<ECommerce />} />
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/insurance" element={<Insurance />} />
        <Route path="/industries/finance-and-banking" element={<Finance />} />
        <Route path="/industries/technology" element={<Technology />} />
        <Route path="/industries/media" element={<Media />} />

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

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
