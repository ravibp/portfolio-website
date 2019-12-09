import React from "react";
import "myComponents/Sections/Resume.scss";
import resumeImage from "assets/img/resumeImage.jpg";

class Resume extends React.Component {
  render() {
    return (
      <div className="resume-container">
        <h2 className ="resume-heading">My Resume</h2>
        <div className="resume-img">
            <img src={resumeImage} alt="ravi's resume" />
        </div>
      </div>
    );
  }
}

export default Resume;
