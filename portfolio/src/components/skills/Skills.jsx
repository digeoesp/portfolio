import React from 'react';
import '../skills/skills.css';
import { FaBeer } from '@react-icons/all-files/fa/FaBeer';

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiMongodb,
  SiPython,
  SiDjango,
  SiGithub,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiJson,
  SiPostman,
  SiJupyter,
  SiExpress,
} from 'react-icons/si';

const Skills = () => {
  return (
    <main>
      <section className="skills-container">
        <div className="logo-name">
          <SiNodedotjs />
          <p>Node.Js</p>
        </div>
        <div className="logo-name">
          <SiMongodb />
          <p>MongoDb</p>
        </div>
        <div className="logo-name">
          <SiExpress />
          <p>Express</p>
        </div>
        <div className="logo-name">
          <SiReact />
          <p>React</p>
        </div>
        <div className="logo-name">
          <SiJavascript />
          <p>Javascript</p>
        </div>
        <div className="logo-name">
          <SiPython />
          <p>Python</p>
        </div>
        <div className="logo-name">
          <SiDjango />
          <p>Django</p>
        </div>
        <div className="logo-name" className="logo-name">
          <SiGithub />
          <p>GitHub</p>
        </div>
        <div className="logo-name" className="logo-name">
          <SiAdobephotoshop />
          <p>PhotoShop</p>
        </div>
        <div className="logo-name" className="logo-name">
          <SiAdobeillustrator />
          <p>Illustrator</p>
        </div>
        <div className="logo-name" className="logo-name">
          <SiJson />
          <p>JSON</p>
        </div>
        <div className="logo-name" className="logo-name">
          <SiPostman />
          <p>Postman</p>
        </div>
        <div className="logo-name">
          <SiJupyter />
          <p>Jupyter</p>
        </div>
        <div className="logo-name">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="logo-name">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="logo-name">
          <SiPostgresql />
          <p>PostgresQl</p>
        </div>
      </section>
    </main>
  );
};

export default Skills;
