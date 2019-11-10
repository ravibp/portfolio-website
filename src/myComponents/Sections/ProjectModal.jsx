import React from "react";
import { MDBBtn } from 'mdbreact';

import "./ProjectModal.scss";
import ScrollAnimation from "react-animate-on-scroll";
import * as ImagesJSON from 'assets/img/Images.json';
const Images = ImagesJSON.default;

const projects = [
  {
    title: "Sears Parts Direct",
    secondarytTitle: "E-Commerce Web Application",
    description: [
      "At Sears PartsDirect, you can find millions of replacement parts for most major brands of appliances, outdoor power equipment, water heaters and softeners, and more, no matter where you bought the product.",
      "It's goal is to help new and experienced DIYers quickly find and order the right part, from any device. It involves Cart, purchasing, Account, Offer, rating and tracking order details."
    ],
    skillSet:
      "React.js/ Redux.js, UI/ UX, Node.js, Express.js, Apollo GraphQL, DynamoDB, Jest, Enzyme, Postman, SoupUI ",
    // imageTemplate: project1
  }
];
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
    return (
      <div className="row projectModal-container">
        <div className="col-6 project-details">
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
        <div className="col-6 project-image">
          <img src={Images.sections.projects.project1} alt="Sears Parts Direct" />
        </div>
        <br />

        <div className="col-12 project-websiteLink">
          <MDBBtn color="primary"><a target="_blank" rel='noopener noreferrer' href={this.props.project ? this.props.project.websiteURL : ""}>View Website</a></MDBBtn>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
