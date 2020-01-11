import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/landingPageStyle.jsx";
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
import "myComponents/LandingPage.scss";
import {
  IMAGES,
  LOCALIMAGES
} from 'assets/img/Images.js';
import { handleAos } from "myComponents/GlobalConstants";

const isMobileOnly = window.innerWidth <= 767 ? true : false;
const images = LOCALIMAGES;


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLandingVideo = this.handleLandingVideo.bind(this);
    this.showLoadingScreen()
  }
  showLoadingScreen = () => {
    const appComponent = document.getElementById("root");
    appComponent.style.opacity = "0";
    appComponent.style.height = "100vh";
    appComponent.style.overflowY = "hidden";
  }
  componentDidMount() {
    if (!isMobileOnly) {
      document.getElementById('aboutMe-section').style.backgroundImage = `url(${images.sections.aboutMe.bgImgAboutMe})`;
      document.getElementById('skills-section').style.backgroundImage = `url(${images.sections.skills.bgImgSkills})`;
    }
    else {
      document.getElementById('aboutMe-section').style.backgroundImage = `url(${images.sections.aboutMe.bgImgAboutMeMobile})`;
      document.getElementById('skills-section').style.backgroundImage = `url(${images.sections.skills.bgImgSkillsMobile})`;
    }
    window.scrollTo(0, 0);
  }

  handleLandingVideo() {
    let renderedVideo = null;
    if (!isMobileOnly) {
      renderedVideo = images.landingPage.bgVideo;
    } else {
      renderedVideo = images.landingPage.bgVideoMobile;
    }
    return [renderedVideo, images.landingPage.bgVideoThumbnail];
  }
  handleScrollToDiv = (id) => {
    const offset = document.getElementById("profile-section").clientHeight - 50;
    const sectionPosition = document.getElementById(id).offsetTop;
    window.scrollTo(0, sectionPosition + offset)
  }
  render() {
    const { classes } = this.props;
    return (
      <div id="landingPage-section" className="landingPage-container">
        <Header />
        <div id="profile-section" className="profile">
          <Parallax filter backgroundVideo={this.handleLandingVideo()}>
            <div className={classes.container}>
              <div className="row">
                <div style={{ margin: "auto" }}>
                  <div onClick={this.handleScrollToDiv.bind(this, "aboutMe-section")} className="profile__image" >
                    <div id="f1_container" >
                      <div id="f1_card" >
                        <div className="front face" >
                          <img src={images.profileImg[0]} alt="ravi bp 2" />
                        </div>
                        <div className="back face center">
                          <img src={images.profileImg[1]} alt="ravi bp 2" />
                        </div>
                      </div>
                    </div>
                  </div>
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
            <AboutMe id="aboutMe-div" handleAos={handleAos} images={images} />
            <Skills id="skills-div" handleAos={handleAos} images={images} />
            <Projects id="projects-div" handleAos={handleAos} images={images} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
