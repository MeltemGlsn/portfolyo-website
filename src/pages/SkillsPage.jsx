import skills from '../data/skills.json';
import SkillCard from '../components/SkillCard';

function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <SkillCard key={group.category} category={group.category} items={group.items} />
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
