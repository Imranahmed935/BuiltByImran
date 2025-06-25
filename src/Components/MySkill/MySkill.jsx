const MySkill = () => {
  const skills = [
    { name: "HTML" },
    { name: "CSS3" },
    { name: "TAILWINDCSS" },
    { name: "JAVASCRIPT" },
    { name: "TYPESCRIPT" },
    { name: "REACT.JS" },
    { name: "NEXT.JS" },
    { name: "EXPRESS.JS" },
    { name: "NODE.JS" },
    { name: "MONGODB" },
    { name: "MONGOOSE" },
    { name: "FIREBASE" },
    { name: "GIT & GITHUB" },
    { name: "POSTMAN" },
    { name: "FIGMA" },
    { name: "VS CODE" },
  ];
  return (
    <div className="mt-14">
      <h1 className="text-left md:text-4xl text-2xl font-semibold">
        My <span className="text-blue-600">Capabilities</span>
      </h1>
      <h3 className="text-left text-lg">
        A Glimpse Into My Technical Toolkit.
      </h3>
      <div className="md:py-14 py-4 flex flex-wrap gap-6  ">
        {skills.map((skill, inx) => (
          <h1
            className="border border-gray-800 hover:border-blue-600 hover:translate-y-2 scale-105 transition-transform duration-300 rounded p-4"
            key={inx}
          >
            {skill.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default MySkill;
