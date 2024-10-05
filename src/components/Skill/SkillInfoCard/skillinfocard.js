import React from 'react';
import "./skillinfocard.css";

const SkillInfoCard = ({heading, skills}) => {
  return (
  <div className='skillsInfoCard'>
        <h6>{heading}</h6>
        <div className='skillsInfoContent'>
            {skills.map((item, index) => (
                <React.Fragment key={`skill_${index}`}>
                    <div className='skillInfo'>
                        <p>{item.skills}</p>
                        <p className='percentage'>{item.percentage}</p>
                    </div>

                    <div className='skillProgressBg'>
                        <div className='skillProgress' style={{ width: item.percentage}} />
                    </div>
                    </React.Fragment>
            ))}

        </div>
  </div>
  )
}

export default SkillInfoCard;