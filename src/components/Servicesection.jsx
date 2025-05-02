
import { motion } from "framer-motion";
import Servicest from "../assets/data/Servicesdata";
const ServicesSection = () => {
    return (
      <section className="py-20 bg-white">  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="  text-3xl sm:text-4xl font-semibold text-gray-900">
            Empowering Your Business with <br />

         

            <span className="bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor1">Advanced Technologies</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide tailored solutions across data analytics, software development, UX design, and more to drive innovation and success.
          </p>
  
          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-4">
            {Servicest.map((service, index) => (
               <motion.div
               key={index}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.4 }}
               className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 text-left border border-gray-100"
             >
            

            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="ml-3 text-lg font-semibold text-gray-800">{service.title}</h3>
            </div>

                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              
            </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;