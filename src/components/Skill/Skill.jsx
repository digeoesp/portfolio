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
        <SiJavascript id="java-icon" />
        <SiHtml5 id="html-icon" />
        <SiCss3 id="css-icon" />
        <SiNodeDotJs id="node-icon" />
        <SiPostgresql id="post-icon" />
        <SiReact id="react-icon" />
        <SiMongodb id="mongo-icon" />
        <SiPython id="python-icon" />
        <SiDjango id="django-icon" />
        <SiGithub id="git-icon" />
        <SiAdobephotoshop id="ps-icon" />
        <SiAdobelightroomcc id="lr-icon" />
        <SiJson id="icon" />
        <SiPostman id="pm-icon" />
        <SiJupyter id="icon" />
      </div>

      <div className="icon-desc">
        <p className="javascript">JavaScript</p>
        <p className="html">Html</p>
        <p className="css">Css</p>
        <p className="javascript">Node.Js</p>
        <p className="javascript">PostgresQl</p>
        <p className="javascript">React</p>
        <p className="javascript">MongoDb</p>
        <p className="javascript">Python</p>
        <p className="javascript">Django</p>
        <p className="javascript">GitHub</p>
        <p className="javascript">PhotoShop</p>
        <p className="javascript">LightRoom</p>
        <p className="javascript">JSON</p>
        <p className="javascript">Postman</p>
        <p className="jupyter">Jupyter</p>
      </div>
      <h3 className="skills-footer">And many more</h3>
    </div>
  );
};
export default Skill;
