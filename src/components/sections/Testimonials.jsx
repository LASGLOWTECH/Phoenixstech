// components/Testimonials.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Daniel Mensah",
    position: "Operations Manager, BrightEdge Logistics",
    message:
      "Phoenix Tech has completely transformed how we handle customer interactions. Our response time is faster, and our clients are noticeably happier.",
  },
  {
    name: "Alicia Raymond",
    position: "Customer Experience Lead, NovaRetail",
    message:
      "Their team feels like an extension of ours. We've seen real growth in customer satisfaction and call efficiency since we partnered with them.",
  },
  {
    name: "Tolu Adebayo",
    position: "Head of Sales, FinPlus Finance",
    message:
      "Professional, reliable, and results-driven. Their outbound campaigns alone helped us increase lead conversions by over 20%.",
  },
];

const TestimonialCard = ({ name, position, message }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm">
    <div className="flex mb-2 text-yellow-400">
      {[...Array(4)].map((_, i) => (
        <FaStar key={i} />
      ))}
      <FaStar className="text-gray-300" />
    </div>
    <h4 className="font-bold text-lg text-neutral-900">{name}</h4>
    <p className="text-gray-500 text-sm mb-3">{position}</p>
    <p className="text-neutral-700 text-base leading-relaxed">"{message}"</p>
  </div>
);

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-neutral-900 mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
