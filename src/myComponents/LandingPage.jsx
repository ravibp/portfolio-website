import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/landingPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// my components
import Parallax from "myComponents/Parallax.jsx";
import Header from "myComponents/Header/Header.jsx";
import AboutMe from "myComponents/Sections/AboutMe.jsx";
// import Resume from "myComponents/Sections/Resume.jsx";
import Projects from "myComponents/Sections/Projects.jsx";
import Skills from "myComponents/Sections/Skills.jsx";
// import Hobbies from "myComponents/Sections/Hobbies.jsx";
import Footer from "myComponents/Footer/Footer.jsx";
import "./LandingPage.scss";
import { isMobileOnly } from "react-device-detect";
import * as ImagesJSON from 'assets/img/Images.json';

const Images = ImagesJSON.default;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLandingVideo = this.handleLandingVideo.bind(this);
    document.getElementById("root").style.opacity = "0";
  }
  componentDidMount() {
    if (!isMobileOnly) {
      document.getElementById('aboutMe-section').style.backgroundImage = `url(${Images.sections.aboutMe.bgImg})`;
      document.getElementById('skills-section').style.backgroundImage = `url(${Images.sections.skills.bgImg})`;
    }
    else {
      document.getElementById('aboutMe-section').style.backgroundImage = `url(${Images.sections.aboutMe.bgImgMobile})`;
      document.getElementById('skills-section').style.backgroundImage = `url(${Images.sections.skills.bgImgMobile})`;
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

  handleLandingVideo() {
    let renderedVideo = null;
    if (!isMobileOnly) {
      renderedVideo = Images.landingPage.bgVideo;
    } else {
      renderedVideo = Images.landingPage.bgVideoMobile;
    }
    return renderedVideo;
  }
  handleAnimateDurationDestkop = (duration) => {
    return (isMobileOnly ? 0 : duration)
  }
  render() {
    const { classes } = this.props;
    return (
      <div id="landingPage-section" className="landingPage-container">
        <Header />
        <div className="profile">
          <Parallax filter backgroundVideo={this.handleLandingVideo()}>
            <div className={classes.container}>
              <div className="row">
                <div className="col-12 col-md-12">
                  <a href="#aboutMe-section">
                    <div className="profile__image">
                      <div id="f1_container">
                        <div id="f1_card" className="">
                          <div className="front face">
                            <img
                              src={Images.profileImg[0]}
                              alt="ravi bp"
                              onLoad={() => {
                                console.log("loaded img");
                              }}
                            />
                          </div>
                          <div className="back face center">
                            <img src={Images.profileImg[1]} alt="ravi bp 2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-12 col-md-12">
                  <div className="profile__title">
                    {isMobileOnly && <h1 className={"col-12"}>Ravi BP</h1>}
                    <h1 className={"col-12"}>MERN STACK</h1>
                    <h1 className={"col-12"}>DEVELOPER</h1>
                  </div>

                  <p className="profile__description">
                    Creative web developer dedicated to building fast and
                    responsive websites with quality code.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </div>

        <div
          className={classNames(
            classes.main,
            classes.mainRaised + "  ml-0 mr-0 pl-0 pr-0"
          )}
        >
          <div id="hamburgerOverlay-ref" className="hamburger-overlay"></div>
          <div className="landingPage-container__sections-container">
            <AboutMe id="aboutMe-div" handleAnimateDurationDestkop={this.handleAnimateDurationDestkop} />
            <Skills id="skills-div" handleAnimateDurationDestkop={this.handleAnimateDurationDestkop} />
            <Projects id="projects-div" handleAnimateDurationDestkop={this.handleAnimateDurationDestkop} />
            {/* <Hobbies id="hobbies-div" /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// export default LandingPage;
export default withStyles(landingPageStyle)(LandingPage);
