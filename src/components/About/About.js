import React from 'react';
import './About.css'

const About = () => {
  return (
    <div>
        <h1>About me</h1>
         <div className="about-body">
        <div className="about-description">
          <h3> Hi, I'm Dheeraj </h3> <h6> I'm passionate Full Stack web developer.
            Right now I have finished my Full Stack Web Development cousre.
            I love to learn and explore new areas. I am proficient in MERN stack and eager to learn and ready to
            contribute to the development of an organization and also open to work.</h6>
        </div>
        <div className="about-img">
          <img
            src= "http://cdn.onlinewebfonts.com/svg/img_247630.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default About