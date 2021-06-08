import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Data from "../../MockData.json"
import './Cards.css'

export default function Cards({ nickname, bio }) {
    return (
        <div>
            {/* <Container text-xs-start className="mentor--container">
                <Row>
                    <Col><Image roundedCircle src={'https://picsum.photos/200/300'} alt="" style={{width: '7rem'}}/></Col>
                    <Col xs={6} className="mentor--name" >{nickname}</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6} className="bio--section">{bio}</Col>
                </Row>
            </Container>     */}
            <Container >
                            <Row className="rows mt-3">
                                <Col className="columns" sm>
                                    <Card style={{ width: '50rem' }} className="ms-auto">
                                        <Card.Body>
                                            <Card.Title className="mb-5 ms-3">Mentor 1</Card.Title>
                                            <Container>
                                                <Row>
                                                    <Col >
                                                        <Image src="achmed.jpg" width="100rem" roundedCircle />
                                                        <span>placeholder</span> <br></br>
                                                        <span>placeholder</span>

                                                    </Col>
                                                    <Col sm={9}>
                                                        <Card.Subtitle className="mb-2 text-muted">skills field</Card.Subtitle>
                                                        <Card.Text>
                                                            description description description description description description description description description description description description description description description
                </Card.Text>
                                                        <Card.Link href="#">Card Link</Card.Link>
                                                        <Card.Link href="#">Another Link</Card.Link>
                                                    </Col>
                                                </Row>
                                            </Container>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
            </Container>
        </div>
    )
}


            {/* <Card style={{ width: '18rem' }} className="mx-auto mt-4">
                <Card.Img variant="top" src={'https://picsum.photos/200/300'} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>

                </Card.Body>
            </Card> */}