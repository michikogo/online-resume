import ProjectFront from "../ProjectFront";
const CardFront = ({ project }) => {
  return (
    <div className="flip-card-front">
      <ProjectFront project={project} />
    </div>
  );
};

export default CardFront;
