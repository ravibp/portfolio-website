import Scrollspy from "react-scrollspy";
import React from "react";

const isMobileOnly = window.innerWidth <= 767 ? true : false;

class HeaderLinks extends React.Component {

  render() {
    return (
      <div className="headerLinks">
        <div className="row">
          {!isMobileOnly && (
            <div className="col-6 headerLinks__profile-name">
              <Scrollspy items={["landingPage-section"]}>
                <li>
                  <a href="#landingPage-section">Ravi BP</a>
                </li>
              </Scrollspy>
            </div>
          )}

          <div
            className={
              !isMobileOnly
                ? "col-6 headerLinks__rightLinks"
                : "col-12 headerLinks__rightLinks"
            }
          >
            <Scrollspy
              items={[
                "aboutMe-section",
                "skills-section",
                "projects-section",
                // "hobbies-section"
              ]}
              currentClassName="is-current"
              offset={!isMobileOnly ? -10 : -200}
            >
              <li onClick={this.props.handleDrawerToggle}>
                <a href="#aboutMe-section">About</a>
              </li>
              <li onClick={this.props.handleDrawerToggle}>
                <a href="#skills-section">Skills</a>
              </li>
              <li onClick={this.props.handleDrawerToggle}>
                <a href="#projects-section">Projects</a>
              </li>
              {isMobileOnly && <li onClick={() => {
                this.props.handleDrawerToggle();
                window.scroll(0, 0);
              }}>
                <a>Back to Top</a>
              </li>}
            </Scrollspy>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderLinks;
