import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/web-design.jpg';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>
            I am a third-year undergraduate at the Faculty of Information Technology, University of Moratuwa.
            I am always eager to explore new challenges, learn continuously, and contribute to impactful tech solutions.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImage'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Actively pursuing UI/UX design, focusing on creating intuitive and visually appealing user experiences that enhance both functionality and aesthetics in digital products. </p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImage'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>Aiming to create responsive, visually engaging, and user-friendly websites that offer seamless experiences across all devices.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImage'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Creating feature-rich and user-friendly applications that provide smooth and efficient performance across various devices.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;