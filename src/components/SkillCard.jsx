import jsLogo from '../assets/skills/js.png';
import reactLogo from '../assets/skills/react.png';
import reduxLogo from '../assets/skills/redux.png';
import nodeLogo from '../assets/skills/node.png';
import vscodeLogo from '../assets/skills/vscode.png';
import figmaLogo from '../assets/skills/figma.png';

const skillImages = {
  JavaScript: jsLogo,
  React: reactLogo,
  Redux: reduxLogo,
  'Node.js': nodeLogo,
  'VS Code': vscodeLogo,
  Figma: figmaLogo,
};

function SkillCard({ name }) {
  const image = skillImages[name];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
      <img src={image} alt={name} className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-semibold text-gray-700">{name}</p>
    </div>
  );
}

export default SkillCard;
