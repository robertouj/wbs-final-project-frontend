import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { CgMediaLive } from 'react-icons/cg';
import "./Schedule.css"

import Cal from './SimpleCalendar'

export default function Schedule()
{

  const NewTab = () =>
  {
    window.open(`/#/sessions/c9f2a12622782`, "_blank");
  };
  return (
    <>

      <h1 style={{ textAlign: 'center' }}>Schedule</h1>
      <Container >

        <Row className="schedule--container">


          <Col className="text-center"
            xl={{ span: 10 }}
            lg={{ span: 10 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <Button variant="outline-warning "
              onClick={NewTab}><CgMediaLive /> Live Session </Button>
            <Cal />
          </Col>

        </Row>
      </Container>

    </>
  )
}
