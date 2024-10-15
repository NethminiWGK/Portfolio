import React, { useState } from 'react';
import "./skill.css";
import SkillCard from './SkillCard/skillcard';
import { SKILLS } from '../../utils/data';
import SkillInfoCard from './SkillInfoCard/skillinfocard';


const Skill = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

    
  return (
    <section id="skill">
    <div className='skillContainer'>
         <span className='skillTitle'>My Skills</span>
        <div className='skillContent'>

            
            <div className='skills'>
            {SKILLS.map((item) => (
                <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title=== item.title}
                    onClick={() => {
                        handleSelectSkill(item);

                    }}
                    />
            ))}
            </div>

            <div className='skillInfo'>
                <SkillInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>

        </div>
    </div>
    </section>
  );
};

export default Skill;