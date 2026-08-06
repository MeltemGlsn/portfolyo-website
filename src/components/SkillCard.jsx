function SkillCard({ category, items }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm text-left">
      <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-3">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs bg-purple-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
