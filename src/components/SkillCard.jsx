import React from 'react';
import './SkillCard.css';

const SkillCard = ({ category, skills }) => {
  return (
    <div className="skill-item">
      <h4>{category}</h4>
      <p>{skills}</p>
    </div>
  );
};

export default SkillCard;
