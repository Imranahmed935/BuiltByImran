const MySkill = () => {
  const skillCategories = {
    "Frontend": [
      "HTML",
      "CSS3",
      "TAILWINDCSS",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "REACT.JS",
      "NEXT.JS",
      "REDUX TOOLKIT"
    ],
    "Backend": [
      "EXPRESS.JS",
      "NODE.JS",
      "PRISMA",
      "POSTGRESQL",
      "MONGODB",
      "MONGOOSE",
      "FIREBASE",
      "SOCKET.IO"
    ],
    "Tools & Others": [
      "GIT & GITHUB",
      "POSTMAN",
      "FIGMA",
       "VS CODE"
    ]
  };

  return (
    <div id="skill" className="mt-14">
      <h1 className="text-left md:text-4xl text-2xl font-semibold">
        My <span className="text-blue-600">Capabilities</span>
      </h1>
      <h3 className="text-left text-lg">
        A Glimpse Into My Technical Toolkit.
      </h3>

      <div className="md:py-14 py-6 flex flex-col gap-2">
        {Object.keys(skillCategories).map((category) => (
          <div key={category}>
            <h2 className="text-xl font-semibold text-blue-500 mb-4">{category}</h2>
            <div data-aos="zoom-in" className="flex flex-wrap gap-2">
              {skillCategories[category].map((skill, inx) => (
                <div key={inx} className="spin-border">
                  <div className="relative z-10 px-6 py-4 text-white font-medium">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkill;
