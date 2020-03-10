import React, { Fragment } from "react";
import SkillsBar from "myComponents/Sections/SkillsBar.jsx";
import "myComponents/Sections/Skills.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactComponent as Icon1 } from "assets/icons/Icon1.svg";
import { ReactComponent as Icon2 } from "assets/icons/Icon2.svg";
import { ReactComponent as Icon3 } from "assets/icons/Icon3.svg";
import ReactTooltip from "react-tooltip";
import { skillsJson, skillsCategory } from 'myComponents/Sections/SkillsJson';

class Skills extends React.Component {

  componentDidMount() {
    let skillContainerHeight = document.getElementById("skills-section").clientHeight;
    this.refs["skillsOpacity-ref"].style.height = `${skillContainerHeight}px`
  }

  displaySkillsCategory = () => {
    return (
      <div>
        <h3>What I can do</h3>
        <ul>
          <li>
            <Icon1 />
            <p>UI/ UX Design</p>
          </li>
          <li>
            <Icon2 />
            <p>MEAN/ MERN Stack Development</p>
          </li>
          <li>
            <Icon3 />
            <p>Photo/ Video Editing</p>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    let skillsDiv = [];
    for (let [key, value] of Object.entries(skillsCategory)) {
      skillsDiv.push(
        <div key={key} className="skill-divItem">
          <h6><b>{key}</b></h6>
          <p>{value}</p>
        </div>
      )
    }
    const { handleAos } = this.props;
    return (
      <div id="skills-section">
        <div id="skillsOpacity" ref="skillsOpacity-ref"></div>
        <div className="row no-gutters skills-container">
          <div {...handleAos("fade-up", 0, 500, -250)} className="col-12 skills-heading">
            <h1>SKILLS</h1>
          </div>
          <div {...handleAos("fade-up", 0, 500, -250)} className="d-none d-lg-block col-lg-3 skills-category">
            {this.displaySkillsCategory()}
          </div>
          <div
            {...handleAos("flip-right", 0, 500, -250)}
            className="col-12 col-sm-6 col-md-6 col-lg-4 skills-diagram"
            ref="skills-diagram-ref"
          >
            <div className="circle-wrapper" ref="circle-wrapper-ref">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="icons">
                {/* eslint-disable */}
                {skillsJson.map((skillCircle, index1) => (
                  <span key={index1}>
                    {skillCircle.map((skill, index2) => {
                      return (
                        <a key={index2} {...skill.skillHandleAos} data-tip={skill.skillName} className={skill.skillClassName}>
                          <skill.skillIconComponent />
                          <ReactTooltip place="top" type="dark" effect="solid" />
                        </a>
                      )
                    })}

                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Bar component */}
          <div
            {...handleAos("zoom-in", 0, 500, -250)}
            className="col-12 col-sm-6 col-md-6 col-lg-5 skills-bar"
            ref="skills-bar-ref"
          >
            <SkillsBar handleAos={handleAos} />
          </div>
          {/* Skill category component */}
          {screen.width < 768 && (
            <div
              {...handleAos("zoom-in", 0, 500, -250)}
              className="col-12 col-sm-12 col-md-6 col-lg-5 skills-division"
            >
              <div>
                {skillsDiv}
              </div>
            </div>
          )}
          <div {...handleAos("fade-up", 0, 500, -250)} className="d-block d-lg-none col-12 skills-category">
            {this.displaySkillsCategory()}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
