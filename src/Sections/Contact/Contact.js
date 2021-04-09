import "./index.css";
import { Container } from "react-bootstrap";

import ContactContent from "./Components/ContactContent";

const Contact = () => {
  return (
    <Container fluid className="contact-background">
      <ContactContent />
    </Container>
  );
};

export default Contact;
