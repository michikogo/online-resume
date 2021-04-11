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
        "Add, edit and delete can be done in cart page using JSON server ",
        "On bakery page each item's description can be seen and items can be added to cart",
      ],
      tags: ["React", "JSON Server", "react-bootstrap", "Responsive"],
      isAddress: true,
      address: "https://michikogo.github.io/BakeryMNL/#/",
    },
    {
      id: 2,
      image: "HUMALIT.PNG",
      name: "HUMALIT",
      type: "Catalogue Application",
      summary:
        "Static website that was created as the final output for an non CS class. The site contains articles and analysis relating to the given theme.",
      features: [
        "When creating the site agile method was used for the progress to be seen and tested for errors.",
        "Wireframes were made to speed up the development.",
      ],
      tags: ["Vue", "vue-bootstrap", "Responsive"],
      isAddress: true,
      address: "https://michikogo.github.io/HUMALIT-FinalOutput/#/",
    },
    {
      id: 3,
      image: "mermaidSpa.PNG",
      name: "The Mermaid and Spa",
      type: "Business Application",
      language: "ReactJs/ Firebase",
      summary:
        "Simple responsive website that allows users to check products, services, and make reservations.",
      features: [
        "Using firebase, each product was pulled from the database to be shown on the webpage.",
        "Using firebase, reservations are reflected on the database.",
        "Using react and react-bootstrap, the design of the website was created.",
      ],
      tags: ["React", "react-bootstrap", "Responsive"],
      isAddress: true,
      address: "https://michikogo.github.io/The-Mermaid-Spa-and-Bath/#/",
    },
    {
      id: 4,
      image: "projectImage.PNG",
      name: "Task Tracker",
      type: "Freelanced Application",
      summary:
        "The site was commissioned by a student who needed help with creating web applications.",
      tags: ["HTML", "CSS", "jQuery", "Bootstrap"],
      features: [
        "To do list tracker with features such as add, edit, delete and filter a task and showing duration of task.",
        "The project prohibited the use of databases, so features were done using jQuery.",
      ],
      isAddress: false,
      address: "",
    },
    {
      id: 5,
      image: "projectImage.PNG",
      name: "Simple Instagram",
      type: "Social Network Application",
      summary:
        "Simple react website that is similar to instagram with features such as browsing through profiles, hearting pictures and commenting on them.",
      tags: ["React", "ant-design"],
      features: [
        "Using react, when hearting a picture the icon can change from black to pink.",
        "Using react and other npm packages, carousels were created to browse through profiles.",
        "There was no backend in this project since this was the first react project, with this ant design was explored.",
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
      summary:
        "Mobile application where users can store their car information and alert them for their yearly car check up.",
      tags: ["Andriod Studio", "SQLite"],
      features: [
        "Android studio was used as the base environment for this development, with it all of the design and connections to the database were made possible.",
        "SQLite was used as the main database for users to store their car information.",
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
      summary:
        "Created a tool to check the best machine learning algorithm to detect the best basketball shooting form of a player for both three point or free throws. The project consisted of a camera, editing software, tensorflow, python and machine learning such as CNN and SVM. The project consisted of 4 members. I handled feature extraction, preprocessing and machine learning.",
      features: [
        "In feature extraction, I extracted the X and Y coordinates of the player.",
        "In preprocessing, I computed the angles and lengths given the coordinates, cleaned the rows with no values and affine transformed the players for all of them to be in uniformed height.",
        "In machine learning, I used SVM and KNN to compare which machine algorithm is the best to detect the best basketball shooting form using its accuracy.",
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
      summary:
        "A game with 30 levels that players must go through the gates with the same color as the player progresses the level gets harder and faster.",
      features: [
        "The game requires languages such as C# and Unity to create objects, shaders and point systems.",
        "The game was showcased in during a school event for students to give feedback and rate the game.",
      ],
      tags: ["Unity", "C#"],
      isAddress: false,
      address: "",
    },
    {
      id: 3,
      image: "projectImage.PNG",
      name: "Calendar View",
      type: "Java",
      summary:
        "Calendar view that had features namely adding, editing, deleting and notifying the user. The project was in compliance with a CS subject that requires students to use agile, waterfall and scrum methodologies.",
      tags: ["Python", "Machine Learning"],
      features: [
        "The project consisted of a team of 9 members and each member had a module to work on and at the end of each week the project is compiled for the testers to check if there are any errors in the project.",
        "In the project, I handled adding and editing features, which allows users to add and edit the date, time, event name and duration of notifying the user.",
      ],
      isAddress: false,
      address: "",
    },
    {
      id: 4,
      image: "projectImage.PNG",
      name: "Pokemon Fishing",
      type: "Java",
      summary:
        "The game consisted of a player moving each block using W,A,S,D keys then fishing to see which pokemon they caught. The project was in compliance with a CS subject that enhances students' java skills and MVC framework.",
      features: [
        "In the game, the players coordinate and the place they're going to move to were computed to show that the player moved in the GUI.",
        "When fishing, a random number will be produced to indicate the pokemon that was caught.",
      ],
      tags: ["Java", "Java GUI"],
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
