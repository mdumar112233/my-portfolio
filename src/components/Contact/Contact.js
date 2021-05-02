import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css';
import linkedin from '../../images/linkedin.png';
import facebook from '../../images/facebook.png';
import github from '../../images/github(2).png';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='contact-container'>
            <div className="text-center text-white">
            <h2 style={{color: '#FF0077',fontWeight: 'bold',paddingTop: '40px'}}>Contact</h2>
                <h4>Get In Touch</h4>
                <div className="contact-form mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-4 w-50' type='name' {...register("exampleRequired", { required: true })} /> <br/>
                    {errors.exampleRequired && <p style={{color: 'red'}}>This field is required</p>}
                    <input className='mb-4 w-50' type='email' {...register("exampleRequired", { required: true })} /> <br/>
                    {errors.exampleRequired && <p style={{color: 'red'}}>This field is required</p>}
                    <textarea className='mb-4 w-50' type='password' {...register("exampleRequired", { required: true })} /> <br/>
                    {errors.exampleRequired && <p style={{color: 'red'}}>This field is required</p>}
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