import React from "react";
import { Card } from "react-bootstrap";

const SkillDetails = ({ sectionData }) => {
  return <Card>Description is here {sectionData.name}</Card>;
};

export default SkillDetails;
