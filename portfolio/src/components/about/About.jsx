import React from 'react';
import './about.css';
import image from '../img/face.png';

const About = () => {
  return (
    <div className="about">
      <img className="image" src={image} alt="head shot of the developer" />
      <div className="about-info">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui molestias officiis,
          similique quasi ab fugiat a quod sed dolore ea animi id praesentium omnis voluptate sint,
          assumenda dolorem saepe est perspiciatis vel, harum provident fuga. Quasi eaque maxime,
          voluptas perspiciatis assumenda quam magni repellendus ullam tempore unde quidem, at
          consectetur quis praesentium harum.
        </p>
      </div>
    </div>
  );
};

export default About;
