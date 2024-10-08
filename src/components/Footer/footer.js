import React from 'react'
import './footer.css'
import InstagramIcon from '../../assets/insta.png';
import LinkedinIcon from '../../assets/link.png';
import GithubIcon from '../../assets/github.png';


const Footer = () => {
  return (
    <footer className='footer'>
      
        <div className='links'>
            <a href="https://www.instagram.com/kokilanethmini/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt='Insta' className='link' />
            </a>
            <a href="https://www.linkedin.com/in/kokila-nethmini-3bbb692a5/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt='LinkedIn' className='link' />
            </a>
            <a href="https://github.com/NethminiWGK" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt='GitHub' className='link' />
            </a>
            </div>
            <div className='copyright'>
            @ 2024 Kokila Nethmini. All rights reserved.
        </div>
            
    </footer>
  )
}
export default Footer;