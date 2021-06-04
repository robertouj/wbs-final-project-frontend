import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap/';

export default function About() {
    return (
        
              <>
            <h1 >
                About Page
            </h1>


            <Container >
                <Row className="rows">
                    <Col className="columns" >
                        <Card className="mx-auto mb-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="achmed.jpg" />
                            <Card.Body>
                                <Card.Title>Frontend Team</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Dimitris</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">FullStack DEV</Card.Subtitle>
                                <br></br>
                                <br></br>


                                <Card.Text>

                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="columns">
                        <Card className="mx-auto mb-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="achmed.jpg" />
                            <Card.Body>
                                <Card.Title>Frontend Team</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Ahmad</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">FullStack DEV</Card.Subtitle>
                                <Card.Text>
                                    <br></br>
                                    <br></br>

                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="columns">
                        <Card className="mx-auto mb-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="achmed.jpg" />
                            <Card.Body>
                                <Card.Title>Product Owner, Scrum Master, Debugging Master, Backend Team</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Roberto</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">FullStack DEV</Card.Subtitle>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="columns">
                        <Card className="mx-auto mb-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="achmed.jpg" />
                            <Card.Body>
                                <Card.Title>Backend Team</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Danial</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">FullStack DEV</Card.Subtitle>
                                <Card.Text>
                                    <br></br>
                                    <br></br>

                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </>
        
    )
}
