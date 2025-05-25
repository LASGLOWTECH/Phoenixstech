import  { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import useAOS from "../hooks/useAos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Testimony from "../assets/data/Testimonials";

const TestimonialSection = () => {


  const refreshAOS = useAOS();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Testimony.length;
  const swiperRef = useRef(null);

  // Ensure navigation buttons are connected after render
  useEffect(() => {
    if (swiperRef.current?.params) {
      swiperRef.current.params.navigation.prevEl = ".prevBtn";
      swiperRef.current.params.navigation.nextEl = ".nextBtn";
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          See What Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor1">
            Clients
          </span>
          <br />
          Are Saying
        </h2>
      </div>

      {/* Swiper Carousel */}
      <div className="relative mt-14 max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          className="w-full"
        >
          {Testimony.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid md:grid-cols-3 gap-10 md:gap-12 items-center"
              >
                {/* Col 1: Image */}
                <div className="shadow-lg col-span-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
                  />
                </div>

                {/* Col 2: Text */}
                <div className="text-center md:text-left col-span-1">
                  <p className="text-gray-600 text-base leading-relaxed mb-5 max-w-2xl mx-auto md:mx-0">
                    {item.text}
                  </p>
                  <div className="flex flex-col items-center md:items-start gap-2 mt-12">
                    <h4 className="text-3xl font-bold text-gray-900"  data-aos="fade-up" data-aos-duration="1000">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* Col 3: Quote, Previews, Nav */}
                <div className="flex flex-col items-center justify-center col-span-1 space-y-6">
                  {/* Quote */}
                  <RiDoubleQuotesL className="hidden nd:flex text-[100px] text-gray-300" />

                  {/* Preview Images */}
                  <div className="hidden md:flex gap-4">
                    {item.previews.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Preview ${i}`}
                        className="w-[120px] h-[160px] object-cover rounded-lg opacity-90 hover:opacity-100 transition"
                      />
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button className="prevBtn p-3 rounded-full bg-Primarycolor hover:bg-gray-300 text-white hover:text-gray-900 transition">
                      <FaArrowLeft />
                    </button>
                    <span className="text-sm text-gray-600 font-semibold">
                      <span className="text-3xl">{currentIndex + 1}</span>/{totalSlides}
                    </span>
                    <button className="nextBtn p-3 rounded-full bg-gray-900 text-white hover:bg-Secondarycolor transition">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Background Text */}
        <div className=" outline-text  bottom-0 left-0 text-[8rem] font-bold text-gray-300 opacity-10 select-none hidden md:block leading-none pointer-events-none">
          Testimonials
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
