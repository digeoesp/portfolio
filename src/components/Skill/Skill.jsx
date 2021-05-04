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
        <SiJson id="js-icon" />
        <SiPostman id="pm-icon" />
        <SiJupyter id="jp-icon" />
      </div>

      <div className="icon-desc">
        <p className="javascript" id="java-text">
          JavaScript
        </p>
        <p className="html" id="html-text">
          Html
        </p>
        <p className="css" id="css-text">
          CSS
        </p>
        <p className="javascript" id="node-text">
          Node.Js
        </p>
        <p className="javascript" id="pstg-text">
          PostgresQl
        </p>
        <p className="javascript" id="react-text">
          React
        </p>
        <p className="javascript" id="mongo-text">
          MongoDb
        </p>
        <p className="javascript" id="python-text">
          Python
        </p>
        <p className="javascript" id="django-text">
          Django
        </p>
        <p className="javascript" id="git-text">
          GitHub
        </p>
        <p className="javascript" id="ps-text">
          PhotoShop
        </p>
        <p className="javascript" id="lr-text">
          LightRoom
        </p>
        <p className="javascript" id="json-text">
          JSON
        </p>
        <p className="javascript" id="pm-text">
          Postman
        </p>
        <p className="jupyter" id="jupy-text">
          Jupyter
        </p>
      </div>
      <h3 className="skills-footer">And many more</h3>
    </div>
  );
};
export default Skill;
