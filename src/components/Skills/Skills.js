import React from 'react';
import "./Skills.css";
import Tilt from "react-parallax-tilt";
import C from "../../assets/images/skill-section/c.png"
import Js from "../../assets/images/skill-section/javaScript.png"
import ReactJs from "../../assets/images/skill-section/react.png"
import MongoDBImg from "../../assets/images/skill-section/mongodb.png"
import Bootstrap from "../../assets/images/skill-section/bootstrap.png"
import HTML from "../../assets/images/skill-section/html5.png"
import node from "../../assets/images/skill-section/node.png"



const Skills = () => {
  return (
    <div>
      <center>
        <h1>Skills</h1>
        <h4>Full Stack Development</h4>

         <div class="skill_images">

                                   
                                            <ul>


                                            <li>
                                                    <Tilt scale={1.2} transitionSpeed={2500}>
                                                        <span data-tooltip="down 100" aria-label="C" >
                                                            <img className="My_Skill" alt="C" src={node} /></span>
                                                    </Tilt>
                                                    <p>Node</p>
                                                </li>

                                                <li>
                                                    <Tilt scale={1.2} transitionSpeed={2500}>
                                                        <span data-tooltip="down 100" aria-label="C" >
                                                            <img className="My_Skill" alt="C" src={C} /></span>
                                                    </Tilt>
                                                    <p>C-Language</p>
                                                </li>


                                                <li>
                                                    <Tilt scale={1.2} transitionSpeed={2500}>
                                                        <span data-tooltip="down 100" aria-label="JavaScript" >
                                                            <img className="My_Skill" alt="JavaScript" src={Js} /></span>
                                                    </Tilt>
                                                    <p>JavaScript</p>
                                                </li>


                                                <li>
                                                    <Tilt scale={1.2} transitionSpeed={2500}>
                                                        <span data-tooltip="down 100" aria-label="React Js" >
                                                            <img className="My_Skill" id="React-logo" alt="React" src={ReactJs} /></span>
                                                    </Tilt>
                                                    <p>React JS</p>
                                                </li>


                                                <li>

                                                    <Tilt scale={1.2} transitionSpeed={2500}>
                                                        <span data-tooltip="down 100" aria-label="MongoDB" >
                                                            <img className="My_Skill" alt="MongoDB" src={MongoDBImg} /></span>
                                                    </Tilt>
                                                    <p>MongoDB</p>
                                                </li>


                                                <li>
                                                    <Tilt scale={1.2} transitionSpeed={2500}>

                                                        <span data-tooltip="down 100" aria-label="Bootstrap" >
                                                            <img className="My_Skill" alt="Bootstrap" src={Bootstrap} /></span>
                                                    </Tilt>
                                                    <p>Bootstrap</p>
                                                </li>


                                                <li>
                                                    <Tilt scale={1.2} transitionSpeed={2500}>

                                                        <span data-tooltip="down 100" aria-label="HTML 5" >
                                                            <img className="My_Skill" alt="HTML 5" src={HTML} /></span>
                                                    </Tilt>
                                                    <p>HTML</p>
                                                </li>

                                            </ul>
                                </div>
              
      </center>
    </div>
  )
}

export default Skills