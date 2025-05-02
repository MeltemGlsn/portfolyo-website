import BasicInformationCard from '../components/BasicInformationCard';
import AboutMeCard from '../components/AboutMeCard';
import profileImage from '../assets/profile.png';
import SkillCard from '../components/SkillCard';
import skills from '../data/skills.json';
import ProjectsSection from '../components/ProjectsSection';

function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-20">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="md:w-2/3 space-y-5">
          <p className="text-gray-800 text-lg">Hi! 👋</p>
          <h1 className="text-3xl font-bold text-gray-900 leading-relaxed">
            I'm <span className="text-pink-600 underline decoration-pink-600 decoration-8">Meltem</span>. <br />
            I’m a full-stack developer. I can craft solid and scalable frontend products.
            <br />
            Let’s meet!
          </h1>
          <div className="flex gap-4 text-sm">
            <a href="https://github.com/MeltemGlsn" className="hover:underline font-medium">GitHub</a>
            <a href="mailto:pratamaiosi@gmail.com" className="hover:underline font-medium">Email</a>
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

      {/* Skills Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} />
          ))}
        </div>
      </section>

      {/* Profile Section */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">Profile</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <BasicInformationCard />
          <AboutMeCard />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
}

export default HomePage;
