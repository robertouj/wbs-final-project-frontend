import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { CgMediaLive } from 'react-icons/cg';

import Cal from './SimpleCalendar'

export default function Schedule()
{

  const NewTab = () =>
  {
    window.open(`/#/sessions/c9f2a12622782`, "_blank");
  };
  return (
    <>

      <h1>Schedule</h1>
      <h3>bla bla bla</h3>
      <Container >

        <Row >


          <Col
            xl={{ span: 10 }}
            lg={{ span: 10 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <Button variant="outline-warning"
              onClick={NewTab}><CgMediaLive /> Live Session </Button>
            <Cal />
          </Col>

        </Row>
      </Container>

    </>
  )
}
