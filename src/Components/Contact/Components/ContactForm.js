import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e, email, subject, body) => {
    e.preventDefault();

    // firebase here
    console.log(email);
    console.log(body);
    console.log(subject);
    console.log("Submitted");
    setEmail("");
    setSubject("");
    setBody("");
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e, email, subject, body)}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </Form.Group>
      <div className={animate ? "contact-form-button-row-loading" : ""}>
        {/* <div> */}
        <button
          className={
            animate
              ? "contact-form-button contact-form-button-sending"
              : "contact-form-button contact-form-button-sent"
          }
          type="submit"
          onClick={() => console.log(setAnimate(!animate), animate)}
        ></button>
        {/* </div> */}
      </div>
    </Form>
  );
};

export default ContactForm;
