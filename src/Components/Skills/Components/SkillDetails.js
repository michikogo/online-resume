import React from "react";
import { Card } from "react-bootstrap";

const SkillDetails = ({ sectionData }) => {
  return (
    <Card className="skill-details-card">
      Knowledgable in {sectionData.name}
      Created
    </Card>
  );
};

export default SkillDetails;
