import BasicInformationCard from '../components/BasicInformationCard';
import AboutMeCard from '../components/AboutMeCard';
import experience from '../data/experience.json';
import education from '../data/education.json';
import certifications from '../data/certifications.json';

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About Me</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Full Stack Developer | AI &amp; Cloud Engineer
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <BasicInformationCard />
        <AboutMeCard />
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={job.role}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {job.role} <span className="font-normal text-gray-500 dark:text-gray-400">— {job.company}</span>
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{job.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {edu.degree} <span className="font-normal text-gray-500 dark:text-gray-400">— {edu.school}</span>
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{edu.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
          Certifications
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
