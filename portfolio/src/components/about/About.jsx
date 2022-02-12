import React from 'react';
import './about.css';
import image from '../img/1.png';

const About = () => {
  return (
    <div className="about">
      <img className="image" src={image} alt="head shot of the developer" />

      <div>
        <h1 className="header">
          Hi, my name is Diego Espinoza
          <br /> I'm a software developer
        </h1>
        <div className="button-container">
          <button className="button">projects</button>
          <button className="button">experience</button>
          <button className="button">contact</button>
          <button className="button">resume</button>
        </div>
        <p className="aboutMe">
          San Diego based software developer with a passion for solving complex problems in
          Javascript and Python. My background in a demanding, fast-paced environment prepared me to
          tackle challenges efficiently. I work well in a team environment by communicating clearly,
          pulling my own weight, and helping others.
        </p>
      </div>
    </div>
  );
};

export default About;
