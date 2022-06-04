import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'calendarapi',
      description: 'MERN Stack',
      link: "https://github.com/keneversley/calendarapi#calender-api",
      repo: "https://keneversley.github.io/calendarapi/"
    },
   
    {
      name: 'tech-blog',
      description: 'HTML/CSS',
      link: "https://github.com/keneversley/MVC-Tech-Blog",
      repo: "https://keneversley.github.io/MVC-Tech-Blog/"
    },
    {
      name: 'budget-tracker',
      description: 'Node/IoT',
      link: "https://github.com/keneversley/Budget-Tracker",
      repo: "https://keneversley.github.io/Budget-Tracker"
      
    },
 
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
