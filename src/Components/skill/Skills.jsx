// Skills.js
import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg'

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaCuttlefish, FaPython
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';

import './Skills.css';

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss color="#38bdf8" /> },
  { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
  { name: 'ReactJS', icon: <FaReact color="#61dafb" /> },
  { name: 'NodeJS', icon: <FaNodeJs color="#3C873A" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'C++', icon: <FaCuttlefish color="#00599C" /> },
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
];

const Skills = () => {
  return (
    <div id='skill' className="skills-wrapper">
    <div className="skills-title">
          <h1>My Skills</h1>
        <img src={theme_pattern}alt="" />
    </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
