import React from 'react';
import './about.css';
import image from '../img/1.png';

const About = () => {
  return (
    <div className="about">
      <h1>Hi, my name is Diego Espinoza I'm a software developer</h1>
      <p className="aboutMe">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dolore laborum voluptatum
        assumenda excepturi fugiat illo eius praesentium itaque, earum tempora, eaque iusto fuga
        temporibus quasi a totam laboriosam alias! Nihil quis, similique aut quam expedita
        obcaecati, sit quo repudiandae necessitatibus esse totam praesentium, unde alias cupiditate
        ipsum? Eligendi odit quas delectus. Iure, qui quidem!x
      </p>
      <button className="button">projects</button>
      <button>experience</button>
      <button>contact</button>
      <button>resume</button>
      <img src={image} alt="head shot of the developer" />
    </div>
  );
};

export default About;
