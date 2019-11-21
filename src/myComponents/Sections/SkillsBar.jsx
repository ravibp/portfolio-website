import React from "react";
import AnimatedNumber from "animated-number-react";
import "./SkillsBar.scss";

const isMobileOnly = window.innerWidth <= 767 ? true : false;

const skillsJson = [
  {
    skillName: "HTML5",
    skillRating: "90",
    skillId: "skill-html",
    skillTitleColor: "darkred",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "CSS3",
    skillRating: "90",
    skillId: "skill-css",
    skillTitleColor: "darkblue",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "JS",
    skillRating: "80",
    skillId: "skill-js",
    skillTitleColor: "darkgreen",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "ReactJs/ Redux",
    skillRating: "80",
    skillId: "skill-react",
    skillTitleColor: "darkyellow",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "Angular 4",
    skillRating: "60",
    skillId: "skill-angular",
    skillTitleColor: "blue",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "Bootstrap 4",
    skillRating: "80",
    skillId: "skill-bootstrap",
    skillTitleColor: "darkred",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "NodeJs",
    skillRating: "60",
    skillId: "skill-nodejs",
    skillTitleColor: "darkblue",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "MySQL/ MongoDB",
    skillRating: "70",
    skillId: "skill-database",
    skillTitleColor: "darkyellow",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "Apollo GraphQL",
    skillRating: "50",
    skillId: "skill-graphql",
    skillTitleColor: "darkgreen",
    skillBarColor: "#03A9F4"
  },
  {
    skillName: "Photoshop CC",
    skillRating: "60",
    skillId: "skill-photoshop",
    skillTitleColor: "darkred",
    skillBarColor: "#03A9F4"
  }
];
class SkillsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberFlag: false
    };
  }
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  componentDidMount() {
    if (!isMobileOnly) {
      window.addEventListener("scroll", this.populateSkillBar);
      skillsJson.forEach(skill => {
        document.getElementById(skill.skillId + "-bar").style.width = 0;
        document.getElementById(skill.skillId + "-bar").style.background =
          skill.skillBarColor;
        document.getElementById(skill.skillId + "-bar").style.transition =
          "width 2.5s";
      });
    } else {
      skillsJson.forEach(skill => {
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
      skillsJson.forEach(skill => {
        document.getElementById(skill.skillId + "-bar").style.transitionDelay =
          "2s";
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
    return (
      <div className="skillBar-container row no-gutters">
        {skillsJson.map((skill, index) => (
          <div key={index} className="row col-12 no-gutters">
            <div className="skillBar-container__title col-3">{skill.skillName}</div>
            <div className="skillBar-container__progressBar col-7">
              <div
                id={`${skill.skillId}-bar`}
                className="skillBar-container__progress col-12"
              ></div>
            </div>
            <div className="skillBar-container__progressValue col-2">
              {this.state.numberFlag &&
                this.showNumber(skill.skillRating, 2500, 2000)}
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
