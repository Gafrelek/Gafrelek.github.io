import React from 'react';
import './Skill.css';
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';

// Map icon names to their corresponding components
const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3: FaCss3,
  FaJsSquare: FaJsSquare,
  FaReact: FaReact,
  FaGithub: FaGithub,
};

const Skill = ({ skillName, iconName }) => {
  // Retrieve the icon component by its name
  const IconComponent = iconMap[iconName];

  return (
    <div className="skill">
      <div className="skillContainer">
        <p>{skillName}</p>
        <div className="skillIcon">
          {IconComponent ? (
            <IconComponent />
          ) : (
            <p>Icon not found</p> /* Fallback for invalid icon names */
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
