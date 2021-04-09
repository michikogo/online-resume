import "./index.css";
import { Container } from "react-bootstrap";
import AboutContent from "./Components/AboutContent";

const About = () => {
  const programming = [
    [
      { id: 1, name: "C", image: "c.png" },
      { id: 2, name: "C#", image: "c#.png" },
    ],
    [
      { id: 3, name: "Java", image: "java.png" },
      { id: 4, name: "Python", image: "python.png" },
      { id: 5, name: "HTML", image: "html.png" },
    ],
    [
      { id: 6, name: "CSS", image: "css.png" },
      { id: 7, name: "JavaScript", image: "javascript.png" },
      // { id: 8, name: "jQuery", image: "jquery.png" },
      { id: 9, name: "React Hooks", image: "react.png" },
      { id: 10, name: "Vue.js", image: "vue.png" },
    ],
    [
      { id: 11, name: "Angular", image: "angular.png" },
      { id: 12, name: "Handlebars", image: "handlebars.png" },
      { id: 13, name: "Firebase", image: "firebase.png" },
    ],
    [
      { id: 14, name: "mySQL", image: "mysql.png" },
      { id: 15, name: "mongoDB", image: "mongodb.png" },
    ],
  ];
  // console.log("programming: " + programming.length);

  const applications = [
    [
      { id: 1, name: "Dev C", image: "dev-c.png" },
      { id: 2, name: "Netbeans", image: "intellij-idea.png" },
    ],
    [
      { id: 3, name: "Eclipse", image: "eclipse.png" },
      { id: 4, name: "Android Studio", image: "android-studio.png" },
      { id: 5, name: "Unity", image: "unity.png" },
    ],
    [
      { id: 6, name: "VS Code", image: "visual-studio-code.png" },
      { id: 7, name: "Github", image: "github.png" },
      // { id: 8, name: "jQuery", image: "jquery.png" },
      { id: 9, name: "GitLab", image: "gitlab.png" },
      { id: 10, name: "Trello", image: "trello.png" },
    ],
    [
      { id: 11, name: "Figma", image: "figma.png" },
      { id: 12, name: "Slack", image: "slack.png" },
      { id: 13, name: "Photoshop", image: "adobe.png" },
    ],
    [
      { id: 14, name: "Pentaho", image: "pentaho.png" },
      { id: 15, name: "PowerBI", image: "powerBi.png" },
    ],
  ];
  // console.log("applications: " + applications.length);

  return (
    <Container fluid className="about-background">
      <AboutContent programming={programming} applications={applications} />
    </Container>
  );
};

export default About;
