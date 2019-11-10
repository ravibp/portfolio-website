import React from "react";
import { MDBBtn } from 'mdbreact';

import "./ProjectModal.scss";
import ScrollAnimation from "react-animate-on-scroll";

import * as ImagesJSON from 'assets/img/Images.json';
const Images = ImagesJSON.default;

const colorClass = [
  "label-default",
  "label-primary",
  "label-info",
  "label-danger",
  "label-success",
  "label-warning"
];
class ProjectModal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { project } = this.props;
    const href= this.props.project ? this.props.project.websiteURL : "";
    return (
      <div className="row projectModal-container">
        <div id="test"></div>
        <div className="col-12 col-md-6 project-details">
          <h1>{project.title}</h1>
          <h2>{project.secondarytTitle}</h2>
          {project.description.map((desc, index1) => (
            <p key={index1}>{desc}</p>
          ))}
          <div className="skillSet-list">
            {project.skillSet.split(",").map((skill, index2) => {
              let rand =
                colorClass[
                Math.floor(Math.random() * colorClass.length)
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
          <a target="_blank" href={href}>
            <img src={project.imageURL} alt={project.title} />
          </a>

        </div>
        <br />

        <div className="col-12 project-websiteLink">
          <MDBBtn color="primary"><a target="_blank" rel='noopener noreferrer' href={href}>View Website</a></MDBBtn>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
