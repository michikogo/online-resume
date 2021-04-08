import "./index.css";
import { Container } from "react-bootstrap";

import "rodal/lib/rodal.css";
import Rodal from "rodal";
import ProjectContent from "./Component/ProjectContent";

const Education = () => {
  const projects = [
    {
      id: 1,
      image: "bakeryMNL.PNG",
      name: "BakeryMNL",
      type: "eCommerce Website",
      language: "ReactJs/ JSON",
      header:
        "BakeryMNL is a simple responsive site that uses ReactJs and JSON Server. This site eCommerce site was created to enhance my skills in both React Hooks and JSON Server.",
      tags: [
        "React",
        "JSON Server",
        "react-bootstrap",
        "Responsive",
        "Wireframe",
      ],
      features: [
        "Simple responsive website that allows users to buy products, show their total bill, add more products and place their information for shipping or pickup",
        "The website was created to practice react and react-bootstrap, and JSON server.",
      ],
      isAddress: true,
      address: "https://michikogo.github.io/BakeryMNL/#/",
    },
    {
      id: 2,
      image: "HUMALIT.PNG",
      name: "HUMALIT",
      type: "Catalogue Website",
      language: "Vue.js",
      header:
        "HUMALIT Group 3 is an article and reflection catalogue website that was used as the final project for a non CS class.",
      tags: ["Vue", "BootStrap", "Responsive", "Agile", "Wireframe"],
      features: [
        "Static website that is used as the final output for an non CS class.",
        "The site contains articles and analysis relating to the given theme.",
        "When creating the site, using vue and bootstrap, agile methodology and wireframes were used.",
      ],
      isAddress: true,
      address: "https://michikogo.github.io/HUMALIT-FinalOutput/#/",
    },
    {
      id: 3,
      image: "mermaidSpa.PNG",
      name: "The Mermaid and Spa",
      type: "Business Website",
      language: "ReactJs/ Firebase",
      header:
        "MermaidSpa is an ecommerce site that users can buy products, check their services and promos. This site was used practice my react and firebase skills.",
      tags: ["React", "react-bootstrap", "Responsive", "Agile", "Wireframe"],
      features: [
        "Simple responsive website that allows users to check products, services, and make reservations.",
        "The website was created to practice react and react-bootstrap, and learn firebase.",
      ],
      isAddress: false,
      address: "https://michikogo.github.io/The-Mermaid-Spa-and-Bath/#/",
    },
  ];

  return (
    <Container fluid className="project-background">
      <ProjectContent projects={projects} />
    </Container>
  );
};

export default Education;
