import "./index.css";
import { Container } from "react-bootstrap";

import ProjectContent from "./Component/ProjectContent";

const Education = () => {
  const webProjects = [
    {
      id: 1,
      image: "bakeryMNL.PNG",
      name: "BakeryMNL",
      type: "eCommerce Website",
      summary:
        "BakeryMNL is a simple responsive site that uses ReactJs and JSON Server. This site eCommerce site was created to enhance my skills in both React Hooks and JSON Server.",
      features: [
        "Simple responsive website that allows users to buy products, show their total bill, add more products and place their information for shipping or pickup",
        "The website was created to practice react and react-bootstrap, and JSON server.",
      ],
      tags: ["React", "JSON Server", "react-bootstrap", "Responsive"],
      isAddress: true,
      address: "https://michikogo.github.io/BakeryMNL/#/",
    },
    {
      id: 2,
      image: "HUMALIT.PNG",
      name: "HUMALIT",
      type: "Catalogue Website",
      summary:
        "HUMALIT Group 3 is an article and reflection catalogue website that was used as the final project for a non CS class.",
      features: [
        "Static website that is used as the final output for an non CS class.",
        "The site contains articles and analysis relating to the given theme.",
        "When creating the site, using vue and bootstrap, agile methodology and wireframes were used.",
      ],
      tags: ["Vue", "Bootstrap", "Responsive"],
      isAddress: true,
      address: "https://michikogo.github.io/HUMALIT-FinalOutput/#/",
    },
    {
      id: 3,
      image: "mermaidSpa.PNG",
      name: "The Mermaid and Spa",
      type: "Business Website",
      language: "ReactJs/ Firebase",
      summary:
        "MermaidSpa is an ecommerce site that users can buy products, check their services and promos. This site was used practice my react and firebase skills.",
      features: [
        "Simple responsive website that allows users to check products, services, and make reservations.",
        "The website was created to practice react and react-bootstrap, and learn firebase.",
      ],
      tags: ["React", "react-bootstrap", "Responsive"],
      isAddress: true,
      address: "https://michikogo.github.io/The-Mermaid-Spa-and-Bath/#/",
    },
    {
      id: 4,
      image: "projectImage.PNG",
      name: "Task Tracker",
      type: "Freelanced Web Application",
      summary: "",
      tags: ["HTML", "CSS", "jQuery", "Bootstrap"],
      features: [
        "To do list tracker with features such as add, edit, delete and filter a task and showing duration of task.",
        "The site was commissioned by a lowerbatch who needed help with creating web applications.",
      ],
      isAddress: false,
      address: "",
    },
  ];
  const mobileProjects = [
    {
      id: 1,
      image: "projectImage.PNG",
      name: "Car Sitter",
      type: "Mobile Application",
      summary: "",
      tags: ["Andriod Studio", "Java"],
      features: [
        "Created a mobile application where people can store their car information and alert them if they have to do their yearly car checkup.",
      ],
      isAddress: false,
      address: "",
    },
  ];
  const otherProjects = [
    {
      id: 1,
      image: "projectImage.PNG",
      name: "Basketball Shot Analysis",
      type: "Undergraduate Thesis",
      summary: "",
      features: [
        "Created a tool to check the basketball shot form of a player when shooting either a three point or free throw.",
        "The project consisted of a camera, editing software, tensorflow, python and machine learning such as CNN and SVM.",
        "The goal of the project is to find the best shooting form to get a successful shot.",
      ],
      tags: ["Python", "Machine Learning", "Preprocessing", "OpenPose"],
      isAddress: false,
      address: "",
    },
    {
      id: 2,
      image: "projectImage.PNG",
      name: "Color Match",
      type: "Game Development",
      summary: "",
      features: [
        "A game with 30 levels that players must go through the gates with the same color as the player progresses the level gets harder and faster.",
        "The game requires languages such as C# and Unity to create objects, shaders and point systems.",
        "The game was showcased in during a school event for students to give feedback and rate the game.",
      ],
      tags: ["Unity", "C+"],
      isAddress: false,
      address: "",
    },
    {
      id: 3,
      image: "projectImage.PNG",
      name: "Calendar View",
      type: "Java",
      summary: "",
      tags: ["Python", "Machine Learning"],
      features: [
        "Created a tool to check the basketball shot form of a player when shooting either a three point or free throw.",
        "The project consisted of a camera, editing software, tensorflow, python and machine learning such as CNN and SVM.",
        "The goal of the project is to find the best shooting form to get a successful shot.",
      ],
      isAddress: false,
      address: "",
    },
    {
      id: 4,
      image: "projectImage.PNG",
      name: "Pokemon Fishing",
      type: "Java",
      summary: "",
      features: [
        "The game consisted of a player moving each block using W,A,S,D keys then fishing to see which pokemon they caught.",
        "The project was in compliance with a CS subject that enhances students java skills and MVC framework.",
      ],
      tags: ["Java", "Machine Learning"],
      isAddress: false,
      address: "",
    },
  ];

  return (
    <Container fluid className="project-background">
      <ProjectContent
        webProjects={webProjects}
        mobileProjects={mobileProjects}
        otherProjects={otherProjects}
      />
    </Container>
  );
};

export default Education;
