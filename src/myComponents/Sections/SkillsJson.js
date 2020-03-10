import { ReactComponent as IconReact } from "assets/icons/IconReact.svg";
import { ReactComponent as IconAngular } from "assets/icons/IconAngular.svg";
import { ReactComponent as IconBoostrap } from "assets/icons/IconBootstrap.svg";
import { ReactComponent as IconPhotoshop } from "assets/icons/IconPhotoshop.svg";
import { ReactComponent as IconMySQL } from "assets/icons/IconMySQL.svg";
import { ReactComponent as IconNodeJS } from "assets/icons/IconNodeJS.svg";
import { ReactComponent as IconHTML } from "assets/icons/IconHTML.svg";
import { ReactComponent as IconCSS } from "assets/icons/IconCSS.svg";
import { ReactComponent as IconMongoDB } from "assets/icons/IconMongoDB.svg";
import { ReactComponent as IconGraphQL } from "assets/icons/IconGraphQL.svg";
import { bootstrapLabelClasses, handleAos } from "../GlobalConstants";

export const skillsJson = [
    [{
      skillName: "HTML5",
      skillRating: 90,
      skillId: "skill-html",
      skillTitleColor: "darkred",
      skillBarColor: "#03A9F4",
      skillClassName: "circle-1",
      skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
      skillIconComponent: IconHTML,
      skillHandleAos: handleAos("fade-up", 0, 500, -250)
    },
    {
      skillName: "CSS3",
      skillRating: 90,
      skillId: "skill-css",
      skillTitleColor: "darkblue",
      skillBarColor: "#03A9F4",
      skillClassName: "circle-1",
      skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
      skillIconComponent: IconCSS,
      skillHandleAos: handleAos("fade-up", 0, 500, -250)
    }],
    [{
      skillName: "MongoDB",
      skillRating: 80,
      skillId: "skill-mongodb",
      skillTitleColor: "darkyellow",
      skillBarColor: "#03A9F4",
      skillClassName: "circle-2",
      skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
      skillIconComponent: IconMongoDB,
      skillHandleAos: handleAos("fade-up", 0, 500, -250)
    },
    {
      skillName: "MySQL",
      skillRating: 70,
      skillId: "skill-mysql",
      skillTitleColor: "darkyellow",
      skillBarColor: "#03A9F4",
      skillClassName: "circle-2",
      skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
      skillIconComponent: IconMySQL,
      skillHandleAos: handleAos("fade-up", 0, 500, -250)
    },
    {
      skillName: "NodeJs",
      skillRating: 75,
      skillId: "skill-nodejs",
      skillTitleColor: "darkblue",
      skillBarColor: "#03A9F4",
      skillClassName: "circle-2",
      skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
      skillIconComponent: IconNodeJS,
      skillHandleAos: handleAos("fade-up", 0, 500, -250)
    }],
    [
      {
        skillName: "Apollo GraphQL",
        skillRating: 50,
        skillId: "skill-graphql",
        skillTitleColor: "darkgreen",
        skillBarColor: "#03A9F4",
        skillClassName: "circle-3",
        skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
        skillIconComponent: IconGraphQL,
        skillHandleAos: handleAos("fade-up", 0, 500, -250)
      },
      {
        skillName: "Bootstrap 4",
        skillRating: 80,
        skillId: "skill-bootstrap",
        skillTitleColor: "darkred",
        skillBarColor: "#03A9F4",
        skillClassName: "circle-3",
        skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
        skillIconComponent: IconBoostrap,
        skillHandleAos: handleAos("fade-up", 0, 500, -250)
      },
      {
        skillName: "Photoshop CC",
        skillRating: 60,
        skillId: "skill-photoshop",
        skillTitleColor: "darkred",
        skillBarColor: "#03A9F4",
        skillClassName: "circle-3",
        skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
        skillIconComponent: IconPhotoshop,
        skillHandleAos: handleAos("fade-up", 0, 500, -250)
      },
      {
        skillName: "ReactJs/ Redux",
        skillRating: 90,
        skillId: "skill-react",
        skillTitleColor: "darkyellow",
        skillBarColor: "#03A9F4",
        skillClassName: "circle-3",
        skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
        skillIconComponent: IconReact,
        skillHandleAos: handleAos("fade-up", 0, 500, -250)
      },
      {
        skillName: "Angular 7",
        skillRating: 60,
        skillId: "skill-angular",
        skillTitleColor: "blue",
        skillBarColor: "#03A9F4",
        skillClassName: "circle-3",
        skillLabelClass: bootstrapLabelClasses[Math.floor(Math.random() * bootstrapLabelClasses.length)],
        skillIconComponent: IconAngular,
        skillHandleAos: handleAos("fade-up", 0, 500, -250)
      },]
  ];

  export const skillsCategory = {
      "Framework": "React.js, Redux, Angular 7, Node.js, Express.js, Jest, Enzyme.",
      "Scripting/ Markup/ Styling": "Javascript (ES7), HTML 5, CSS 3, Bootstrap 4, Material Bootstrap.",
      "Database/ QL": "MongoDB, MySQL, DynamoDB, GraphQL.",
      "IDE’s": "Visual Studio Code, Eclipse.",
      "Platforms": "Windows family.",
      "Other Tools": "Git, Jira, BrowserStack, Slack, Postman."
  }