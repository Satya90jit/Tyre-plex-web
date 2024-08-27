import React from "react";

const services = [
  {
    id: "1",
    title: "Wheel Balancing",
    description:
      "Ensure smooth driving and extended tire life with our precise wheel balancing services.",
  },
  {
    id: "2",
    title: "Wheel Alignment",
    description:
      "Improve vehicle handling and tire wear with our expert wheel alignment services.",
  },
  {
    id: "3",
    title: "Tire Rotation",
    description:
      "Optimize tire performance and longevity with our comprehensive tire rotation services.",
  },
  {
    id: "4",
    title: "Brake Inspection",
    description:
      "Ensure your safety with our thorough brake inspection and maintenance services.",
  },
];

export const ServiceSection = () => {
  return (
    <section className="lg:mt-12 mt-8 flex flex-col">
      <div className="flex flex-col items-start gap-4 text-start">
        <p className="uppercase text-gray-400 font-medium">
          Services offered by this dealer
        </p>
        <h2 className="text-2xl font-semibold">Explore Our Services</h2>
      </div>
      <aside className="w-full flex flex-wrap justify-center gap-4 lg:gap-6 pt-5 lg:pt-8 px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-80 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden flex flex-col"
          >
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <button
              className="bg-teal-500 text-white py-2 rounded-b-md hover:bg-teal-600 transition-colors"
              onClick={() => alert(`Booking for ${service.title}`)}
            >
              Book Now
            </button>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default ServiceSection;
