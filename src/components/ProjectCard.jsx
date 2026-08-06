const bgClasses = {
  blue: 'bg-blue-50',
  green: 'bg-green-50',
  pink: 'bg-pink-50',
  purple: 'bg-purple-50',
};

function ProjectCard({ title, description, tags, github, demo, image, bg }) {
    return (
      <div className={`rounded-xl p-6 ${bgClasses[bg] ?? 'bg-gray-50'} w-full max-w-md flex flex-col justify-between`}>
        {/* Üst Bilgiler */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
  
          {/* Etiketler */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
  
          {/* Linkler */}
          <div className="flex justify-between items-center pt-2 text-sm font-medium text-gray-800">
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              View on GitHub
            </a>
            <a href={demo} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              Go to app <span className="text-lg">→</span>
            </a>
          </div>
        </div>
  
        {/* Görsel */}
        <div className="mt-6 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-[300px] h-auto object-contain"
          />
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  