import skills from '../data/skills.json';
import SkillCard from '../components/SkillCard';

function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} name={skill.name} />
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
