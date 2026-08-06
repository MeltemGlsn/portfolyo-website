import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png';
import ProjectsSection from '../components/ProjectsSection';

const coreStack = ['Java', 'Spring Boot', 'React.js', 'Python', 'AWS', 'PostgreSQL', 'TypeScript'];

function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-20">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="md:w-2/3 space-y-5">
          <p className="text-gray-800 dark:text-gray-200 text-lg">Hi! 👋</p>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-relaxed">
            I'm <span className="text-pink-600 underline decoration-pink-600 decoration-8">Meltem</span>. <br />
            I'm a Full Stack Developer specialising in Java/Spring Boot, React, Python and AWS.
            <br />
            Let's meet!
          </h1>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((skill) => (
              <span
                key={skill}
                className="text-xs bg-purple-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="https://github.com/MeltemGlsn" className="hover:underline font-medium">GitHub</a>
            <a href="https://www.linkedin.com/in/meltem-gulsen/" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">LinkedIn</a>
            <a href="mailto:meltemgulsenytu@gmail.com" className="hover:underline font-medium">Email</a>
            <Link to="/about" className="hover:underline font-medium">More about me →</Link>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-[24px] border-[12px] border-pink-500 overflow-hidden w-60 h-60">
          <img
            src={profileImage}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
}

export default HomePage;
