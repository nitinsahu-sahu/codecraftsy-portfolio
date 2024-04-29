import { useForm, ValidationError } from "@formspree/react";

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xoqgrvwq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contact Us</h2>
          <p>
            Have a question or want to work together? Reach out to us using the
            form below.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
