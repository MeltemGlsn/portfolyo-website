import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-12 text-gray-900">Projects</h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
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
