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
  render() {
    return (
      <div className="row resumeBuild-container">
        <div className="resumeBuild">
          <h1 className="resumeBuild__heading">{resumeDataObj.profileName}</h1>
          <h2 className="resumeBuild__title">
            {resumeDataObj.currentJobTitle}
          </h2>
          <div className="resumeBuild__introduction">
            <p className="resumeBuild__yoe">Years of Experience: {resumeDataObj.expYrs}.</p>
            <p>{resumeDataObj.introduction}</p>
          </div>
          <div className="resumeBuild__sections">
            <div className="left-sections">
              <div className="experience sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconExperience /> */}
                  <h3 className="sectionHeadingGlobal">Experience</h3>
                </div>
                {resumeDataObj.experience.projects.map((project, index1) => {
                  let projectDivision = (
                    <div key={index1} className="sectionsGlobal__divisionsGlobal">
                      <div className="experience__year yearGlobal">
                        <p>{project.dateFrom} {project.dateTo && "to"}</p>
                        <p>{project.dateTo}</p>
                      </div>
                      <div className="experience__project divisionDetailsGlobal">
                        <h5 className="experience__project__jobTitle mainHeadingGlobal">
                          {project.jobTitle}
                        </h5>
                        <h6 className="experience__project__companyName">
                          {project.companyName}
                        </h6>
                        <p className="experience__project__technologyTitle subHeadingGlobal headingUnderlineGlobal">
                          {project.technologyTitle}
                        </p>
                        <p className="experience__project__projectDescription descriptionGlobal">
                          {project.projectDescription}
                        </p>
                        <p className="experience__project__responsibilities">
                          Project Experience:
                        </p>
                        <ul className="experience__project__responsibilityList">
                          {project.projectResponsibilites.map(
                            (responsibility, index2) => (
                              <li key={index2} className="descriptionGlobal">{responsibility}</li>
                            )
                          )}
                        </ul>
                        {index1 === 2 && <hr />}
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
                        <h5 className="hackathon__project__jobTitle mainHeadingGlobal">
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
                        <h5 className="education__project__jobTitle mainHeadingGlobal">
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
                  <h3 className="sectionHeadingGlobal">Certificates</h3>
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

              <div className="skills sectionsGlobal">
                <div className="icon icon-experience">
                  {/* <IconSkills /> */}
                  <h3 className="sectionHeadingGlobal">Skills</h3>
                </div>
                {resumeDataObj.skills.map((skill, index8) => {
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
