import React from "react";
import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

import Cal from "./SimpleCalendar";

export default function Schedule() {
  const NewTab = () => {
    window.open(`/#/sessions/c9f2a12622782`, "_blank");
  };

  return (
    <>
      <h1>Schedule</h1>
      <h3>bla bla bla</h3>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <p>sddasff fsdfadsfdsa dsfdsfdsf.</p>
            <Button variant="primary" onClick={NewTab}>
              <i className="bi bi-door-open-fill"></i> Start session
            </Button>
            <Cal />
          </Col>
        </Row>
      </Container>
    </>
  );
}
