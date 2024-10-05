import React from 'react';
import './skillcard.css';


const SkillCard = ({title,iconUrl,isActive,onClick}) => {
  return (
        <div className={`skillsCard ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
        >
         <div className='skillIcon'>
            <img src={iconUrl} alt={title} />
            </div>  

            <span>{title}</span>
        </div>
  );
};
export default SkillCard;