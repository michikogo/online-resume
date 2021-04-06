import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import firebaseDB from "../../../firebase";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {}, [animate]);

  const handleSubmit = (e, email, subject, body) => {
    e.preventDefault();

    // firebase here
    firebaseDB
      .firestore()
      .collection("ResumeContacts")
      .add({ email, subject, body })
      .then(() => {
        console.log("Submitted");
        console.log(email);
        console.log(body);
        console.log(subject);
        console.log("animate: " + animate);
        setAnimate(true);
        setEmail("");
        setSubject("");
        setBody("");
      })
      .catch((err) => {
        console.log(err);
      });
    // setAnimate(false);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, email, subject, body)}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          // required
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
          required
          as="textarea"
          rows={3}
          placeholder="Enter Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </Form.Group>
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
