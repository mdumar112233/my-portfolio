import React from 'react';
import './Contact.css';
import linkedin from '../../images/linkedin.png';
import facebook from '../../images/facebook.png';
import github from '../../images/github(2).png';
import emailjs from 'emailjs-com';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u1v9t1k', 'template_x0v7euk', e.target, 'user_mGrgqB8w92Vhy03ZjoX8f')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };
    return (
        <div className='contact-container'>
            <div className="text-center text-white">
            <h2 style={{color: '#FF0077',fontWeight: 'bold',paddingTop: '40px'}}>Contact</h2>
                <h4>Get In Touch</h4>
                <div className="contact-form mt-5">
                <form onSubmit={handleSubmit}>
                    <input className='mb-4 w-50 input' type="name" name='name' placeholder='Enter your name'/> <br/>
                    <input className='mb-4 w-50 input' type="email" name='email' placeholder='Enter your email'/> <br/>
                    <textarea className='mb-4 w-50 input' type="text" name='text' placeholder='Text here'/> <br/>
                    <input className='submit-btn' type="submit" value='submit'/>
                    </form>
                </div>
                <div className='social text-center mt-5'>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mdumar.faruk.3139241"><img src={facebook} alt=""/></a>
                        <span><a target="_blank" rel="noreferrer" href="https://github.com/mdumar112233"><img src={github} alt=""/></a></span>
                        <span><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/umar-faruk-89a480185/"><img src={linkedin} alt=""/></a></span>
                </div>
                <div className='text-center mt-3'>
                     <span style={{color: '#4b4b4b'}}>Design by</span> <span style={{color: '#FF0077'}}>Md Umar Faruk</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;