import "./cardStyle.css";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card
const CardAnimationTrial = ({ project }) => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <CardFront project={project} />
        <CardBack project={project} />
      </div>
    </div>
  );
};

export default CardAnimationTrial;
