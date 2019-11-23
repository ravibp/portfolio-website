import React from "react";
import "./ProjectModal.scss";
import { bootstrapLabelClasses } from "../GlobalConstants";
import Img from 'react-image'

class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    const { project } = this.props;
    const { loading } = this.state;
    const href = this.props.project ? this.props.project.websiteURL : "";
    return (
      <div className="row projectModal-container">
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
          <a
            target="_blank" href={href} rel="noopener noreferrer">
            <Img  src={project.imageURL} alt={project.title} style={{
              opacity: loading ? "0" : "100",
              transition: "opacity 2s"
            }}
              onLoad={() => {
                this.setState({
                  loading: false,
                })
              }}
              loader={<img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading..." />}
            />
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
