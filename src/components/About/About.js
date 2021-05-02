import React from 'react';
import SkillBar from 'react-skillbars';
import './About.css';
import picture from  '../../images/Gallery_1606626778263(1).png';

const skills = [
    {type: "Javascript", level: 85},
    {type: "React.js", level: 75},
    {type: "Node.js", level: 70},
    {type: "Express.js", level: 70},
    {type: "MongoDB", level: 80},
    {type: "HTML5", level: 90},
    {type: "CSS3", level: 88},
  ];



const About = () => {
    return (
        <div className='container about-container'>
            <div className="text-center mb-5">
                <h2 style={{color: '#FF0077'}}>About</h2>
                <h3>Let me introduce myself</h3>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 about-me">
                    <div className="text-center">
                    <img src={picture} alt=""/>
                    </div>
                    <h6>Positive driven and confident individual with learning new technology. Interested in the position of Web Developer(front-end), web development experience, and strong familiarity with JavaScript,React.js, Bootstrap4, HTML5, CSS3, and as well as collaborative skills in a team environment.</h6>
                </div>
                <div className="col-md-6 skills">
                    <h3>Skill</h3>
                    <p>Here is my all skills, with this skills i make my all projects and learn about that more.</p>
                    <div>
                    <SkillBar skills={skills} height={'20px'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;