import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import "./Projects.scss";
import ProjectModal from "./ProjectModal";
import ScrollAnimation from "react-animate-on-scroll";
import * as ProjectsJSON from 'myComponents/Sections/Projects.json';

const projects = ProjectsJSON.default;

const colorClass = [
    "label-default",
    "label-primary",
    "label-info",
    "label-danger",
    "label-success",
    "label-warning"
];

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
                    <div gradient="blue">View Details</div>
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
        const { handleAnimateDurationDestkop } = this.props
        return (
            <div id="projects-section">
                <div className="row projects-container">
                    <div className="col-12 projects-heading">
                        <ScrollAnimation
                            animateOnce={true}
                            offset={0}
                            delay={1}
                            animateIn="tada"
                            initiallyVisible={true}
                            duration={handleAnimateDurationDestkop(1)}
                        >
                            <h1>PROJECTS</h1>
                        </ScrollAnimation>
                    </div>

                    <MDBContainer>

                        <div className="projects-list row">
                            {projects.map((project, index1) => {
                                let projectCard = (
                                    <div key={index1} className="col-12 col-md-4 col-lg-3 project-card">
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
                                    <ProjectModal project={this.state.project} />
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
