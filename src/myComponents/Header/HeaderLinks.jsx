import Scrollspy from "react-scrollspy";
import React from "react";

const isMobileOnly = window.innerWidth <= 767 ? true : false;

class HeaderLinks extends React.Component {
  handleScrollToDiv = (id) => {
    const offset = document.getElementById("profile-section").clientHeight - 50;
    const sectionPosition = document.getElementById(id).offsetTop;
    window.scrollTo(0, sectionPosition + offset)
  }
  render() {
    return (
      <div className="row">
        {!isMobileOnly && (
          <div className="col-6 headerLinks__profile-name">
            <Scrollspy items={["landingPage-section"]}>
              <li>
                <button onClick={() => window.scroll(0, 0)}>Ravi BP</button>
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
              <button onClick={() => this.handleScrollToDiv("aboutMe-section")}>About</button>
            </li>
            <li onClick={this.props.handleDrawerToggle}>
              <button onClick={() => this.handleScrollToDiv("skills-section")}>Skills</button>
            </li>
            <li onClick={this.props.handleDrawerToggle}>
              <button onClick={() => this.handleScrollToDiv("projects-section")}>Projects</button>
            </li>
            {isMobileOnly && <li onClick={() => {
              this.props.handleDrawerToggle();
              window.scroll(0, 0);
            }}>
              <button>Back to Top</button>
            </li>}
          </Scrollspy>
        </div>
      </div>
    );
  }
}

export default HeaderLinks;
