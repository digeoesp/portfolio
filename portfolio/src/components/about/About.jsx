import React from 'react';
import './about.css';
import image from '../img/face.png';

const About = () => {
  return (
    <main className="about-container">
      <div>
        <img className="headshot" src={image} alt="head shot of the developer" />
      </div>

      <section>
        <div>
          <h1>Hi, my name is Diego Espinoza I'm a software developer</h1>
        </div>

        <nav>
          <ul>
            <li>
              <a href="">projects</a>
            </li>
            <li>
              <a href="">experience</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
            <li>
              <a href="">resume</a>
            </li>
          </ul>
        </nav>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui molestias
            officiis, similique quasi ab fugiat a quod sed dolore ea animi id praesentium omnis
            voluptate sint, assumenda dolorem saepe est perspiciatis vel, harum provident fuga.
            Quasi eaque maxime, voluptas perspiciatis assumenda quam magni repellendus ullam tempore
            unde quidem, at consectetur quis praesentium harum.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
