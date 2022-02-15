import React from 'react';

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodeDotJs,
  SiPostgresql,
  SiReact,
  SiMongodb,
  SiPython,
  SiDjango,
  SiGithub,
  SiAdobephotoshop,
  SiAdobelightroomcc,
  SiJson,
  SiPostman,
  SiJupyter,
} from 'react-icons/si';

const Skill = () => {
  return (
    <div>
      <h2 className="skills">skills</h2>
      <div id="languages-icons">
        <SiJavascript />
        <SiHtml5 />
        <SiCss3 />
        <SiNodeDotJs />
      </div>
      <div id="language-icon2">
        <SiPostgresql />
        <SiReact />
        <SiMongodb />
        <SiPython />
      </div>
      <div>
        <SiDjango />
        <SiGithub />
        <SiAdobephotoshop />
        <SiAdobelightroomcc />
      </div>
      <div id="bottom-icon">
        <SiJson />
        <SiPostman />
        <SiJupyter />
      </div>
      <h3 className="skills-footer">And many more</h3>
    </div>
  );
};
export default Skill;
