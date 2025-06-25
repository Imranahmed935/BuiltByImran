import { useEffect, useState } from "react";

import Card from "../Card/Card";

const Project = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/public/Project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log("failed to load projects data", error));
  }, []);

  return (
    <section className="py-20 " id="Projects">
      <h1 className="text-left md:text-4xl text-2xl font-semibold">
        My Projects
      </h1>
      <h3 className="text-left text-lg">
        Real-World Projects that highlight my full stack development skills.
      </h3>
      <div className="md:py-14 py-4 grid md:grid-cols-2 grid-col-1 gap-10 ">
        {projects?.map((project) => (
        <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
