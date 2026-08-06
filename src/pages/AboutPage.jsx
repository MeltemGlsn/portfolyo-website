import BasicInformationCard from '../components/BasicInformationCard';
import AboutMeCard from '../components/AboutMeCard';
import SkillCard from '../components/SkillCard';
import skills from '../data/skills.json';

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About Me</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Frontend developer with a background in biology, focused on building
          clean and usable web interfaces.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <BasicInformationCard />
        <AboutMeCard />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
          {skills.map((skill) => (
            <SkillCard key={skill.id} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
