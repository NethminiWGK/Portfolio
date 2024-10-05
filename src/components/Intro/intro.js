import React from 'react';
import './intro.css';
import bg from '../../assets/image3.png';
import CV from '../../assets/cv.pdf';
import { useTypewriter } from 'react-simple-typewriter';

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer","UI/UX Designer","Programmer"],
    loop: true,
    typeSpeed: 20,
    delaySpeed: 2000,
  }); 
  return (
  <section id="intro">
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Kokila Nethmini</span></span>
         <span className='text'>A {text}</span>
        <p className='introPara'>I'm a skilled web designer with experience in creating visually appealing and user friendly websites.</p>
        <div className="downloadBtn">
        <a href={CV} download="Kokila_Nethmini_CV.pdf" >
          <button className='btn'>Download CV</button>
        </a>
        </div>
    </div>

    <img src={bg} alt="Profile" className='bg'/>
  </section>
  )
}

export default Intro;