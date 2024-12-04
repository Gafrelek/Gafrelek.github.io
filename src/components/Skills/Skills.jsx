import React from 'react';
import './Skills.css';
import Skill from './Skill.jsx';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <Skill skillName="HTML" iconName="FaHtml5" />
        <Skill skillName="CSS3" iconName="FaCss3" />
        <Skill skillName="JS" iconName="FaJsSquare" />
        <Skill skillName="React" iconName="FaReact" />
        <Skill skillName="Github" iconName="FaGithub" />
      </div>
    </section>
  );
};

export default Skills;
