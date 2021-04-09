import ProjectBack from "../ProjectBack";

const CardBack = ({ project }) => {
  // const handleResetScroll = () => {
  //   var top = document.getElementsByClassName("flip-card-inner");
  //   top.scrollTop = 0;
  // };

  return (
    <div
      class="flip-card-back"
      // onMouseLeave={handleResetScroll}
    >
      <ProjectBack project={project} />
    </div>
  );
};

export default CardBack;
