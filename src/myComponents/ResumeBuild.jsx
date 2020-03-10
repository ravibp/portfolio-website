import React from "react";

import "myComponents/ResumeBuild.scss";
import * as ResumeData from "./ResumeBuildData.json";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ReactComponent as IconExperience } from "assets/img/resume/IconExperience.svg";
// import { ReactComponent as IconIdea } from "assets/img/resume/IconIdea.svg";
// import { ReactComponent as IconGraduation } from "assets/img/resume/IconGraduation.svg";
// import { ReactComponent as IconSkills } from "assets/img/resume/IconSkills.svg";
// import { ReactComponent as IconLanguage } from "assets/img/resume/IconLanguage.svg";
// import { ReactComponent as IconPersonalInfo } from "assets/img/resume/IconPersonalInfo.svg";
// import { ReactComponent as IconCertificate } from "assets/img/resume/IconCertificate.svg";

const resumeDataObj = ResumeData.default.data;

class ResumeBuild extends React.Component {
  showRenderedPage() {
    const spinnerComponent = document.querySelector(".loader");
    const appComponent = document.getElementById("root");
    spinnerComponent.style.opacity = "0";
    spinnerComponent.style.transition = "opacity 1s";
    appComponent.style.opacity = "1";
    appComponent.style.transition = "opacity 1s";
    appComponent.style.height = "auto";
    appComponent.style.overflowY = "visible";
  };
  componentDidMount() {
    this.showRenderedPage();
  }
  render() {
    let skillsDiv = [];
    for (let [key, value] of Object.entries(resumeDataObj.skills)) {
      skillsDiv.push(
        <div className="skills__division">
          <h5><b>{key}</b></h5>
          <p>{value}</p>
        </div>
      )
    }
    return (
      <div className="row resumeBuild-container">
        <div className="resumeBuild">
          <h1 className="resumeBuild__heading">{resumeDataObj.profileName}</h1>
          <h2 className="resumeBuild__title">
            {resumeDataObj.currentJobTitle}
          </h2>
          <div className="resumeBuild__introduction">
            <p className="resumeBuild__yoe">Years of Experience: {resumeDataObj.expYrs}</p>
            <p>{resumeDataObj.introduction}</p>
          </div>
          <div className="resumeBuild__sections">
            <div className="professionalSummary">
              <h3 className="sectionHeadingGlobal">Professional Summary</h3>
              <ul className="">
                {resumeDataObj.professionalSummary.map((summary, index) => (
                  <li key={index} className="descriptionGlobal">{summary}</li>
                ))}
              </ul>
            </div>
            <div className="professionalSummary">
              <h3 className="sectionHeadingGlobal">Work Experience</h3>
              <ul className="">
                {resumeDataObj.workExperience.map((work, index) => (
                  <li key={index} className="descriptionGlobal">{work}</li>
                ))}
              </ul>
            </div>
            <div className="left-sections">
              <div className="experience sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconExperience /> */}
                  <h3 className="sectionHeadingGlobal">Project Experience</h3>
                </div>
                {resumeDataObj.experience.projects.map((project, index1) => {
                  let projectDivision = (
                    <div key={index1} className="sectionsGlobal__divisionsGlobal">
                      <div className="experience__year yearGlobal">
                        <p>{project.dateFrom} {project.dateTo && "to"}</p>
                        <p>{project.dateTo}</p>
                      </div>
                      <div className="experience__project divisionDetailsGlobal">
                        {project.projectTitle && <h5>
                          <b>{`Project Title: `}</b><span>{project.projectTitle}</span>
                        </h5>}
                        {project.trainingTitle && <h5>
                          <b>{`Training: `}</b><span>{project.trainingTitle}</span>
                        </h5>}
                        {
                          project.companyName && (
                            <h5>
                <b>{`Company: `}</b><i>{`${project.companyName} `}</i><span>{`(Role: ${project.role})`}</span>
                            </h5>
                          )
                        }
                        {
                          project.clientName && (
                            <h5>
                              <b>{`Client: `}</b><i>{project.clientName}</i>
                            </h5>
                          )
                        }
                        <p className="">
                          <b>{`Technology / Tools: `}</b><span className="experience__project__technologyTitle headingUnderlineGlobal">{project.technologyTitle}</span>
                        </p>
                        <p className="experience__project__projectDescription descriptionGlobal">
                          {project.projectDescription}
                        </p>
                        {(project.projectStack || project.projectResponsibilites) &&
                          <p className="experience__project__responsibilities">
                            Project Experience:
                          </p>
                        }

                        {project.projectStack && project.projectStack.map((project, index2) => (
                          <div key={index2}>
                            <p><b>{project.stack}</b>: {project.description} </p>
                            <ul className="experience__project__responsibilityList">
                              {project.responsibilities.map(
                                (responsibility, index3) => (
                                  <li key={index3} className="descriptionGlobal">{responsibility}</li>
                                )
                              )}
                            </ul>
                          </div>
                        ))}
                        <ul className="experience__project__responsibilityList">
                          {project.projectResponsibilites && project.projectResponsibilites.map(
                            (responsibility, index4) => (
                              <li key={index4} className="descriptionGlobal">{responsibility}</li>
                            )
                          )}
                        </ul>
                        {/* Line Divider for portfolio projects */}
                        <br/>
                        {/* {index1 === 2 && <hr />} */}
                      </div>
                    </div>
                  );
                  return projectDivision;
                })}
              </div>

              <div className="hackathon sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconIdea /> */}
                  <h3 className="sectionHeadingGlobal">Hackathon Experience</h3>
                </div>
                {resumeDataObj.hackathon.map((hakathonObj, index3) => {
                  let hackathonDivision = (
                    <div key={index3} className="hackathon__division">
                      <div className="hackathon__project">
                        <h5 className="hackathon__project__projectTitle mainHeadingGlobal">
                          {hakathonObj.title}
                        </h5>
                        <p className="hackathon__description descriptionGlobal">
                          {hakathonObj.description}
                        </p>
                      </div>
                    </div>
                  );
                  return hackathonDivision;
                })}
              </div>
              <div className="awards sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconIdea /> */}
                  <h3 className="sectionHeadingGlobal">Awards</h3>
                </div>
                {resumeDataObj.awards.map((award, index3) => {
                  let awardsDivision = (
                    <div key={index3} className="hackathon__division">
                      <div className="hackathon__project">
                        <h5 className="hackathon__project__projectTitle mainHeadingGlobal">
                          {award.title}
                        </h5>
                        <p className="hackathon__description descriptionGlobal">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  );
                  return awardsDivision;
                })}
              </div>
              <div className="education sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconGraduation /> */}
                  <h3 className="sectionHeadingGlobal">Education</h3>
                </div>
                {resumeDataObj.education.map((educationObj, index4) => {
                  let educationDivision = (
                    <div key={index4} className="sectionsGlobal__divisionsGlobal">
                      <div className="education__year yearGlobal">
                        <p>{educationObj.dateFrom} to</p>
                        <p>{educationObj.dateTo}</p>
                      </div>
                      <div className="education__project divisionDetailsGlobal">
                        <h5 className="education__project__projectTitle mainHeadingGlobal">
                          {educationObj.collegeName}
                        </h5>
                        <p className="education__project__companyName descriptionGlobal">
                          {educationObj.courseName}
                        </p>
                      </div>
                    </div>
                  );
                  return educationDivision;
                })}
              </div>

              <div className="certificates sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconCertificate /> */}
                  <h3 className="sectionHeadingGlobal">Certifications</h3>
                </div>
                {resumeDataObj.certificates.map((cerfiticateObj, index5) => {
                  let certificatesDiv = (
                    <div key={index5} className="certificates__division sectionsGlobal__divisionsGlobal">
                      <div className="certificates__year yearGlobal">
                        <p>{cerfiticateObj.year}</p>
                      </div>
                      <div className="certificates__project divisionDetailsGlobal">
                        <p className="certificates__title descriptionGlobal">
                          {cerfiticateObj.title}
                        </p>
                      </div>
                    </div>
                  );
                  return certificatesDiv;
                })}
              </div>
            </div>
            <div className="right-sections">
              <div className="skills sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconSkills /> */}
                  <h3 className="sectionHeadingGlobal">{`Skills`}</h3>
                </div>
                {skillsDiv}
                {/* {resumeDataObj.skillsBar.map((skill, index8) => {
                  var skillsDiv = (
                    <div key={index8} className="skills__division">
                      <div className="skills__heading descriptionGlobal">
                        {skill.skillName}
                      </div>
                      <div className="skills__rating">
                        <div className="skills__ratingBar">
                          <div
                            className="skills__ratingBarFill"
                            style={{ width: `${skill.rating * 10}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="skills__description descriptionGlobal">
                        {skill.skillDetails}
                      </div>
                    </div>
                  );
                  return skillsDiv;
                })} */}
              </div>
              <div className="personalInfo sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconPersonalInfo /> */}
                  <h3 className="sectionHeadingGlobal">Personal Info</h3>
                </div>
                {resumeDataObj.personalInformation.map((personalInfo, index6) => {
                  var personalInfoDiv = (
                    <div key={index6} >
                      <p className="personalInfo__heading subHeadingGlobal">
                        {personalInfo.infoHeading}
                      </p>
                      <p className="personalInfo__description descriptionGlobal">
                        {personalInfo.infoDescription}
                      </p>
                    </div>
                  );
                  return personalInfoDiv;
                })}
              </div>

              <div className="languages sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconLanguage /> */}
                  <h3 className="sectionHeadingGlobal">Languages</h3>
                </div>
                <div className="languages__list">
                  {resumeDataObj.languages.map((language, index9) => {
                    var languagesDiv = (
                      <div key={index9} >
                        <p className="descriptionGlobal">{language}</p>
                      </div>
                    );
                    return languagesDiv;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeBuild;
