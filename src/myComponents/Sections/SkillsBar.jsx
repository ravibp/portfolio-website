import React from "react";
import AnimatedNumber from "animated-number-react";
import "myComponents/Sections/SkillsBar.scss";
import { skillsJson } from 'myComponents/Sections/SkillsJson';

const isMobileOnly = window.innerWidth <= 767 ? true : false;
const skillsArray = [];
skillsJson.forEach(skillArr =>
  skillArr.forEach(skillObj => skillsArray.push(skillObj))
)

skillsArray.sort((a, b) =>
  (b.skillRating - a.skillRating))

class SkillsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberFlag: false
    };
  }
  componentDidMount() {
    if (!isMobileOnly) {
      window.addEventListener("scroll", this.populateSkillBar);
      skillsArray.forEach(skill => {
        document.getElementById(skill.skillId + "-bar").style.width = 0;
        document.getElementById(skill.skillId + "-bar").style.background =
          skill.skillBarColor;
        document.getElementById(skill.skillId + "-bar").style.transition =
          "width 2.5s";
      });
    } else {
      skillsArray.forEach(skill => {
        document.getElementById(
          skill.skillId + "-bar"
        ).style.width = `${skill.skillRating}%`;
        document.getElementById(skill.skillId + "-bar").style.background =
          skill.skillBarColor;
      });
    }
  }
  populateSkillBar = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 1200 && windowsScrollTop < 2000) {
      this.setState({
        numberFlag: true
      });
      skillsArray.forEach(skill => {
        document.getElementById(skill.skillId + "-bar").style.transitionDelay =
          "1s";
        document.getElementById(
          skill.skillId + "-bar"
        ).style.width = `${skill.skillRating}%`;
      });
      window.removeEventListener("scroll", this.animateSkills);
    }
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.populateSkillBar);
  }
  formatValue = value => value.toFixed(0);

  showNumber = (number, duration, delay) => {
    if (this.state.numberFlag) {
      return (
        <div>
          <AnimatedNumber
            value={number}
            formatValue={this.formatValue}
            delay={isMobileOnly ? 0 : delay}
            duration={isMobileOnly ? 0 : duration}
          />
          <span> %</span>
        </div>
      );
    } else {
      return (
        <div className="">
          <AnimatedNumber
            value={isMobileOnly ? number : 0}
            formatValue={this.formatValue}
            delay={isMobileOnly ? 0 : delay}
            duration={isMobileOnly ? 0 : duration}
          />
          <span> %</span>
        </div>
      );
    }
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.numberFlag !== nextState.numberFlag) {
      return true;
    }
    return false;
  }
  render() {
    const { handleAos } = this.props
    return (
      <div className="skillBar-container row no-gutters">
        {skillsArray.map((skill, index) => (
          <div  {...handleAos("fade-left", 0, 500, -250)} key={index} className="row col-12 no-gutters">
            <div className="skillBar-container__title col-3">{skill.skillName}</div>
            <div className="skillBar-container__progressBar col-7">
              <div
                id={`${skill.skillId}-bar`}
                className="skillBar-container__progress col-12"
              ></div>
            </div>
            <div className="skillBar-container__progressValue col-2">
              {this.state.numberFlag &&
                this.showNumber(skill.skillRating, 2500, 1000)}
              {!this.state.numberFlag &&
                this.showNumber(skill.skillRating, 0, 0)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SkillsBar;
