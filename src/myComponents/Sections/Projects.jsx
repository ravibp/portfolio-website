import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

import "./Projects.scss";
import ProjectModal from "./ProjectModal";
import * as ProjectsJSON from 'myComponents/Sections/Projects.json';

const projects = ProjectsJSON.default;

const ProjectCard = (props) => {
    const { project } = props
    return (
        <MDBCol className="">
            <MDBCard style={{ maxWidth: "22rem" }}>
                <MDBCardImage alt="project image" className="img-fluid project-image" src={project.imageURL} waves />
                <MDBCardBody>
                    <MDBCardTitle>{project.title}</MDBCardTitle>
                    <MDBCardText>
                        {project.secondarytTitle}
                    </MDBCardText>
                    <h4 className="view-details">View Details</h4>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            project: null
        }
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const { handleAos } = this.props;

        return (
            <div id="projects-section">
                <div className="row projects-container">
                    <div {...handleAos("fade-up", 0, 500, -250)} className="col-12 projects-heading">
                        <h1>PROJECTS</h1>
                    </div>

                    <MDBContainer>

                        <div className="projects-list row">
                            {projects.map((project, index1) => {
                                let projectCard = (
                                    <div {...handleAos("fade-up", 0, 500, 0)} key={index1} className="col-12 col-md-4 col-lg-3 project-card">
                                        <MDBBtn onClick={() => {
                                            this.toggle()
                                            this.setState({
                                                project: project
                                            })
                                        }}>
                                            <ProjectCard project={project} />
                                        </MDBBtn>
                                    </div>
                                )

                                return projectCard;
                            })}
                            <MDBModal className="project-modal" isOpen={this.state.modal} toggle={this.toggle} centered size="lg">
                                <MDBModalHeader toggle={this.toggle} />
                                <MDBModalBody>
                                    <ProjectModal {...handleAos("fade-up", 0, 500, 0)} project={this.state.project} />
                                </MDBModalBody>
                            </MDBModal>
                        </div>

                    </MDBContainer>
                </div>
            </div>
        );
    }
}


export default Projects;
