// import s from './Projects.module.scss';
// import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
// import { PROJECTS } from '../../constants/projects';
// import ProjectCard from './ProjectCard/ProjectCard';

// const Projects = () => {
//   return (
//     <BaseLayout>
//       <div className={s.content}>
//         <h1 className={s.title}>
//           My Recent <strong className={s.purple}>Works</strong>
//         </h1>
//         {/* <p className={s.subtitle}>
//           Here are a few projects I've worked on recently.
//         </p>

//         <ul className={s.projects}>
//           {PROJECTS.map((props) => (
//             <ProjectCard key={props.id} {...props} />
//           ))}
//         </ul> */}
//       </div>
//     </BaseLayout>
//   );
// };

// export default Projects;
// import React from 'react';
// import s from './Projects.module.scss';
// import BaseLayout from '../../layouts/BaseLayout/BaseLayout';

// const projects = [
//   {
//     id: 1,
//     title: "Full Stack E-Commerce Website",
//     description: "This project serves as a testament to my proficiency in utilizing modern web development technologies like Next.js 13, Tailwind CSS, Strapi CMS, and Redux to create high-performance, feature-rich e-commerce applications that meet the demands of today's digital landscape.",
//     technologies: ["nextjs 13", "react", "tailwindcss", "TypeScript", "Strapi Cms", "Html", "Javascript", "mongodb"],
//     link: "https://nike-clone-frontend-seven.vercel.app/"
//   },
//   {
//     id: 2,
//     title: "Music Streaming Application",
//     description: "The Musica Application is a sleek, high-performance music streaming app built using the latest web technologies: React.js for the frontend framework, Vite for blazing-fast build tool and development environment, and Tailwind CSS for modern, utility-first styling.",
//     technologies: ["nextjs 13", "react", "tailwindcss", "TypeScript", "framer-motion", "prisma", "drizzle", "mantine", "radix UI", "MySQL"],
//     link: "https://music-app-eta-five.vercel.app/"
//   },
//   {
//     id: 3,
//     title: "Moviex",
//     description: "Moviex - It is froentend application which makes user to select movie.",
//     technologies: ["nextjs 13", "react", "tailwindcss", "TypeScript", "framer-motion", "prisma", "mantine", "Scss"],
//     link: "https://moviex-gilt-chi.vercel.app/"
//   },
//   {
//     id: 4,
//     title: "Christmas-Wishes",
//     description: "Christmas Wishes - It helps user to create a christmas wishing card of their like and share it to their friends and family",
//     technologies: ["nextjs 13", "react", "tailwindcss", "TypeScript", "shadcn/ui", "prisma", "mongodb"],
//     link: "#" // Placeholder link, update when available
//   }
// ];

// const ProjectCard = ({ project }) => (
//   <div className={`${s.projectCard} bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-1`}>
//     <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//     <p className="mb-4">{project.description}</p>
//     <div className="flex flex-wrap gap-2 mb-4">
//       {project.technologies.map((tech, index) => (
//         <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//           {tech}
//         </span>
//       ))}
//     </div>
//     <a 
//       href={project.link} 
//       target="_blank" 
//       rel="noopener noreferrer" 
//       className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
//     >
//       View Project
//     </a>
//   </div>
// );

// const ProjectsSection = () => (
//   <section className={`${s.projectsSection} container mx-auto px-6 py-8`}>
//     <h1 className={`${s.title} text-4xl font-bold mb-2`}>
//       My Recent <strong className={s.purple}>Works</strong>
//     </h1>
//     <p className={`${s.subtitle} text-xl mb-8`}>Here are my personal projects</p>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       {projects.map(project => (
//         <ProjectCard key={project.id} project={project} />
//       ))}
//     </div>
//   </section>
// );

// const Projects = () => {
//   return (
//     <BaseLayout>
//       <div className={s.content}>
//         <ProjectsSection />
//       </div>
//     </BaseLayout>
//   );
// };

// export default Projects;
import React from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';

const projects = [
  {
    id: 1,
    title: "Full Stack E-Commerce Website",
    description: "This project serves as a testament to my proficiency in utilizing modern web development technologies like Next.js 13, Tailwind CSS, Strapi CMS, and Redux to create high-performance, feature-rich e-commerce applications that meet the demands of today's digital landscape.",
    technologies: ["nextjs 13", "react", "tailwindcss", "TypeScript", "Strapi Cms", "Html", "Javascript", "mongodb"],
    link: "https://nike-clone-frontend-seven.vercel.app/"
  },
  {
    id: 2,
    title: "Music Streaming Application",
    description: "The Musica Application is a sleek, high-performance music streaming app built using the latest web technologies: React.js for the frontend framework, Vite for blazing-fast build tool and development environment, and Tailwind CSS for modern, utility-first styling.",
    technologies: ["nextjs 13", "react", "tailwindcss", "TypeScript", "framer-motion", "prisma", "drizzle", "mantine", "radix UI", "MySQL"],
    link: "https://music-app-eta-five.vercel.app/"
  },
  {
    id: 3,
    title: "Moviex",
    description: "Moviex - It is frontend application which makes user to select movie.",
    technologies: ["nextjs 13", "react", "tailwindcss", "TypeScript", "framer-motion", "prisma", "mantine", "Scss"],
    link: "https://moviex-gilt-chi.vercel.app/"
  },
  {
    id: 4,
    title: "Christmas-Wishes",
    description: "Christmas Wishes - It helps user to create a christmas wishing card of their like and share it to their friends and family",
    technologies: ["nextjs 13", "react", "tailwindcss", "TypeScript", "shadcn/ui", "prisma", "mongodb"],
    link: "#" // Placeholder link, update when available
  }
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>
    <div className="project-technologies">
      {project.technologies.map((tech, index) => (
        <span key={index} className="technology-tag">
          {tech}
        </span>
      ))}
    </div>
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-link"
    >
      View Project
    </a>
  </div>
);

const ProjectsSection = () => (
  <section className="projects-section">
    <h1 className="section-title">
      My Recent <strong className="purple">Works</strong>
    </h1>
    <p className="section-subtitle">Here are my personal projects</p>
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

const Projects = () => {
  return (
    <BaseLayout>
      <div className="content">
        <ProjectsSection />
      </div>
      <style jsx>{`
        .content {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #333;
        }
        .purple {
          color: #8e44ad;
        }
        .section-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #666;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          transition: transform 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
        }
        .project-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #2c3e50;
        }
        .project-description {
          margin-bottom: 1rem;
          color: #34495e;
        }
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .technology-tag {
          background-color: #ecf0f1;
          color: #2c3e50;
          padding: 0.3rem 0.6rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .project-link {
          display: inline-block;
          background-color: #3498db;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }
        .project-link:hover {
          background-color: #2980b9;
        }
      `}</style>
    </BaseLayout>
  );
};

export default Projects;