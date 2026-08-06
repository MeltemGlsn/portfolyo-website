import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-2xl font-semibold mb-12 text-gray-900 dark:text-white">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            github={project.github}
            demo={project.demo}
            image={project.image}
            bg={project.bg}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
