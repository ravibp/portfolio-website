import React from "react";
// @material-ui/core components

import "./AboutMe.scss";
import ScrollAnimation from "react-animate-on-scroll";
import { isMobileOnly } from "react-device-detect";
import * as ImagesJSON from 'assets/img/Images.json';
const Images = ImagesJSON.default;

class AboutMe extends React.Component {

  render() {
    const { handleAnimateDurationDestkop } = this.props
    return (
      <div id="aboutMe-section">
        <div className="row no-gutters aboutMe-container">
          <div className="col-12 aboutMe__heading">
            <ScrollAnimation
              animateOnce={true}
              offset={0}
              duration={handleAnimateDurationDestkop(1)}
              delay={1}
              animateIn="tada"
              initiallyVisible={true}
            >
              <h1>ABOUT ME</h1>
            </ScrollAnimation>
          </div>

          <div className="col-12 col-md-3 col-lg-4 ">
            <div className="aboutMe__profImg">
              <ScrollAnimation
                animateOnce={true}
                animateIn="bounceInRight"
                duration={handleAnimateDurationDestkop(2)}
                delay={1}
              >
                <img
                  src={Images.sections.aboutMe.aboutMeImg}
                  alt=""
                  ref="profImg-ref"
                  className="profImg"
                />
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-12 col-md-9 col-lg-8 aboutMe__details">
            <ScrollAnimation
              animateOnce={true}
              animateIn="bounceInRight"
              delay={1}
              duration={handleAnimateDurationDestkop(3)}
            >
              <h4 className="col-12">Hi! I'm Ravi,</h4>
              <p className="col-12">
                <span> Web Designer / Developer </span> focused on crafting
                great web experiences.
              </p>
              <p className="col-12">
                I've been in the field of web development for 2+ years and I
                love what I do. I take complex problems and turn them into
                simple and beautiful interface designs. I strive to write
                efficient and elegant code, whether be it HTML, CSS or
                JavaScript. I want to make things that make a difference!
              </p>
              <p className="col-12">A picture is worth a thousand words...</p>
              <p className="col-12">
                As the picture says creating digital art is one of my favorite
                hobbies.
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              animateIn="bounceInRight"
              delay={1}
              duration={handleAnimateDurationDestkop(3)}
            >
              <div className="col-12 aboutMe__cv">
                <a href="/resume" target="_blank">
                  Get My CV
                </a>
              </div>
              <div className="col-12 aboutMe__socialMediaLinks">
                <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/Maverick.M4"><i className="fab fa-facebook"></i></a>
                <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/Maverick.M4"><i className="fab fa-twitter"></i></a>
                <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/ravibp"><i className="fab fa-linkedin"></i></a>
                <a target="_blank" rel='noopener noreferrer' href="https://github.com/ravibp"><i className="fab fa-github"></i></a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
