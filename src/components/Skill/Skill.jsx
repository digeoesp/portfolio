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
    <div id="languages-icons">
      <h2 className="skills">skills</h2>
      <div className="icon-flex">
        <SiJavascript class-="icons" />
        <SiHtml5 class-="icons" />
        <SiCss3 class-="icons" />
        <SiNodeDotJs class-="icons" />
        <SiPostgresql class-="icons" />
        <SiReact class-="icons" />
        <SiMongodb class-="icons" />
        <SiPython class-="icons" />
        <SiDjango class-="icons" />
        <SiGithub class-="icons" />
        <SiAdobephotoshop class-="icons" />
        <SiAdobelightroomcc class-="icons" />
        <SiJson class="icons" />
        <SiPostman class="icons" />
        <SiJupyter class="icons" />
      </div>
      <h3 className="skills-footer">And many more!</h3>
    </div>
  );
};
export default Skill;
