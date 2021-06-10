import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './Cards.css'
import { CgMediaLive } from 'react-icons/cg';
import Modals from "../Modals/Modal";




export default function Cards({ nickname, bio, skill1, skill2, photo })
{

    return (


        < Container >

            <Row >

                <Col className="my-5 " >
                    <Card  >
                        <Card.Body className="card--container">
                            <Card.Title className="mb-5 ms-3 mentor--name">{nickname}</Card.Title>
                            <Container className="">
                                <Row>
                                    <Col >
                                        <Image src={'https://picsum.photos/200/300'} width="100rem" roundedCircle />
                                        <br></br>
                                        <span>placeholder</span>
                                        <span>placeholder</span>

                                    </Col>
                                    <Col sm={9}>
                                        <Card.Subtitle className="mb-2 text-muted card--skills">{` #${ skill1 }   ${ skill2 !== '' ? '#' + skills2 : '' }   `}</Card.Subtitle>
                                        <Card.Text>
                                            {bio}
                                        </Card.Text>
                                        <Row>
                                            <Col >
                                                <button style={{ border: ' none', backgroundColor: 'white' }}><Card.Link className="mentor--icon" href="#"><Modals /> </Card.Link></button>
                                                <button style={{ border: ' none', backgroundColor: 'white' }}><Card.Link className="mentor--icon" href="#"><CgMediaLive /></Card.Link></button>
                                            </Col>

                                        </Row>
                                    </Col>
                                </Row>
                            </Container>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container >

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