import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import firebaseDB from "../../../firebase";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {}, [animate]);

  const handleSubmit = (e, email, body) => {
    e.preventDefault();

    // firebase here
    firebaseDB
      .firestore()
      .collection("ResumeContacts")
      .add({ email, body })
      .then(() => {
        console.log("Submitted");
        console.log(email);
        console.log(body);
        console.log("animate: " + animate);
        setAnimate(true);
        setEmail("");
        setBody("");
      })
      .catch((err) => {
        console.log(err);
      });
    // setAnimate(false);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, email, body)}>
      {/* Email */}
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label className="contact-form-label">Email Address</Form.Label>
        <Form.Control
          required
          className="contact-form-input"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      {/* Message */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label className="contact-form-label">Message</Form.Label>
        <Form.Control
          required
          className="contact-form-input"
          as="textarea"
          rows={4}
          placeholder="Enter Message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </Form.Group>
      {/* Button */}
      <div className={animate ? "contact-form-button-row-loading" : ""}>
        <button
          className={
            animate
              ? "contact-form-button contact-form-button-sending"
              : "contact-form-button contact-form-button-sent"
          }
          disabled={animate}
          type="submit"
        ></button>
      </div>
    </Form>
  );
};

export default ContactForm;
