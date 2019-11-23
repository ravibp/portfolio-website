import React from "react";
import "./ProjectModal.scss";
import {bootstrapLabelClasses} from "../GlobalConstants";

class ProjectModal extends React.Component {

  render() {
    const { project } = this.props;
    const href = this.props.project ? this.props.project.websiteURL : "";
    return (
      <div className="row projectModal-container">
        <div id="test"></div>
        <div className="col-12 col-md-6 project-details">
          <h1>{project.title}</h1>
          <h2>{project.secondarytTitle}</h2>
          {project.description.map((desc, index1) => (
            <li key={index1}>{desc}</li>
          ))}
          <div className="skillSet-list">
            {project.skillSet.split(",").map((skill, index2) => {
              let rand =
                bootstrapLabelClasses[
                Math.floor(Math.random() * bootstrapLabelClasses.length)
                ];
              return (
                <div key={index2}>
                  <span className={rand}>{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-md-6 project-image">
          <a target="_blank" href={href} rel="noopener noreferrer">
            <img src={project.imageURL} alt={project.title} />
          </a>
        </div>
        <br />

        <div className="col-12 project-websiteLink">
          <a target="_blank" rel='noopener noreferrer' href={href}>View Website</a>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
