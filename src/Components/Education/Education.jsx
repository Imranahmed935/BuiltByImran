import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const educationData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Brindhaban College, Habiganj",
      year: "2022",
      description: "Completed Higher Secondary education with focus on arts."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Borni High School",
      year: "2019",
      description: "Completed Secondary education with excellent academic performance."
    }
  ];

  return (
    <div
      id="education"
      className="mt-14 px-4 md:px-16 max-w-7xl mx-auto bg-gray-50 rounded-xl py-12"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-left mb-2 text-gray-900">
        My <span className="text-blue-600">Education</span>
      </h1>
      <p className="text-left text-gray-500 mb-10">
        A snapshot of my academic journey.
      </p>

      <div className="flex flex-col gap-8">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg 
                       transition-shadow duration-300 border-l-4 border-blue-600"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                {edu.degree}
              </h2>
              <span className="text-gray-500">{edu.year}</span>
            </div>
            <h3 className="text-md text-gray-600 mb-2">{edu.institution}</h3>
            <p className="text-gray-500">{edu.description}</p>

            {/* Glow Dot */}
            <span className="absolute -left-3 top-8 w-3 h-3 bg-blue-600 rounded-full 
                             shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
