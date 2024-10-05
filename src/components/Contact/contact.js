import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_2nh1smv', 'template_h1r4n1r', form.current, 'Is8Z38i3mrqa8Z9Lc'
          )
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent!');

            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        };
  return (
    <section id='contactPage'>
    <div id="contact">
        <h5 className='contactPageTitle'>Contact Me</h5>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='your_name'/>
            <input type='email' className='email' placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
           
        </form>
    </div>
    </section>
  );
}

export default Contact;