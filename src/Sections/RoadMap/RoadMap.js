import "./index.css";
import { Container } from "react-bootstrap";

import RoadMapContent from "./Components/RoadMapContent";
import WorkSVG from "./Components/SVG/WorkSVG";
import GraduationSVG from "./Components/SVG/GraduationSVG";

const RoadMap = () => {
  const details = [
    {
      id: 3,
      image: <GraduationSVG />,
      position: "BS Computer Science",
      company: "De La Salle University-Manila",
      date: "September 2016 - February 2021",
      location: "Taft, Manila, Philippines",
      description: [null],
    },
    {
      id: 2,
      image: <WorkSVG />,
      position: "Intern Web Developer",
      company: "BotBrosAI",
      date: "January 2019 - May 2019",
      location: "San Juan City, Metro Manila, Philippines",
      description: [
        "Developed websites such as e-commerce and dashboards for admin use.",
        "React, redux and laravel were utilized for the projects each project had an scrum agile methodology, such as daily scrum and planning poker.",
      ],
    },
    {
      id: 1,
      image: <WorkSVG />,
      position: "Program Aid",
      company: "Morristown Adult Day Care",
      date: "June 2016 - July 2016",
      location: "Parsippany, NJ, USA",
      description: [
        "Assisted and entertained elderly with their everyday needs, namely preparing food, daily check ups and daily exercise.",
        "Occasionally went on field trips with elders to show them around the county.",
      ],
    },
  ];

  return (
    <Container fluid className="roadmap-background">
      <RoadMapContent details={details} />
    </Container>
  );
};

export default RoadMap;
