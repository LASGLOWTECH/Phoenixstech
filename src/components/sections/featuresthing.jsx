

const gridFeature = ({ services, sectionTitle, sectionSubtitle }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className=" flex flex-col items-center justify-center mb-10">
        <h2 className="text-4xl  max-w-xl font-semibold text-center mb-2">{sectionTitle}</h2>
        <p className="text-gray-600 text-lg text-center mb-10 max-w-3xl">{sectionSubtitle}</p>
      </div>

      <div className="container mx-auto px-4 text-center">

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow bg-white text-left"
            >
              <span className="flex items-center w-[50px]  h-[50px] rounded-md bg-[#F6F5FA] justify-center p-3 gap-3">{feature.icon}</span>
              <h4 className="font-semibold text-2xl mb-2">{feature.title}</h4>
              <p className=" text-gray-600 leading-relaxed text-base text-left">
                {feature.description}
              </p>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default gridFeature;