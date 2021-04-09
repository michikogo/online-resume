import "./index.css";
import { Container } from "react-bootstrap";

import WelcomeContent from "./Components/WelcomeContent";

const Welcome = () => {
  return (
    <Container fluid className="welcome-background">
      <WelcomeContent />
    </Container>
  );
};

export default Welcome;
