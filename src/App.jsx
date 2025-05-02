

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TawkToWidget from './utils/tawkit';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home } from "./pages/Home";
import AboutUs from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import InboundCallCenter from './pages/outsourcing-services/inbound-call-center'
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

// blogs

import Blogs from './pages/blogs';
import BlogDetails from './pages/blog-details';
import ScrollTop from "./components/scroll";
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/not-found';
import Create from './pages/createblog';

function App() {


  return (
    <>
      <Router>
        <Navbar />

        <div className="">


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            {/* BLOGS */}
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path='/createblog' element={<Create/>}/>

            {/* INDUSTRIES */}

            <Route path="/industries/e-commerce" element={<ECommerce />} />
            <Route path="/industries/automotive" element={<Automotive />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/insurance" element={<Insurance />} />
            <Route path="/industries/finance-and-banking" element={<Finance />} />
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/media" element={<Media />} />
            {/* OUTSOURCING SERVICES */}


            <Route path="/outsourcing-services/inbound-call-center" element={<InboundCallCenter />} />
            <Route path="/outsourcing-services/live-chat-support" element={<LiveChatSupport />} />
            <Route path="/outsourcing-services/technical-support" element={<TechnicalSupport />} />
            <Route path="/outsourcing-services/multilingual-support" element={<MultilingualSupport />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
        <ScrollTop />
        <TawkToWidget />
        <Footer />


      </Router>









    </>
  )
}

export default App
