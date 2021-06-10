import React from 'react'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import './Cards.css'
import { CgMediaLive } from 'react-icons/cg';
import Modals from "../Modals/Modal";




export default function Cards({ nickname, bio, photo, skills })
{
    const NewTab = () =>
    {
        window.open(`/#/sessions/c9f2a12622782`, "_blank");
    };
    return (


        < Container >

            <Row >

                <Col className="my-5 " >
                    <Card  >
                        <Card.Body className="card--container">
                            <Card.Title className="my-3 ms-4 mentor--name">{nickname}</Card.Title>
                            <Container >
                                <Row>
                                    <Col className="ms-2 my-3" >
                                        <Image src={'https://picsum.photos/200/300'} width="200rem" rounded />
                                        <br></br>


                                    </Col>
                                    <Col sm={9}>
                                        <Card.Subtitle className="mb-2 text-muted card--skills">{skills.map(i => `#${ i.name }`)}</Card.Subtitle>
                                        <Card.Text>
                                            {bio}
                                        </Card.Text>
                                        <Row>
                                            <Col >
                                                <Button style={{ border: ' none', backgroundColor: 'white' }}><Card.Link className="mentor--icon" href="#"><Modals /> </Card.Link></Button>
                                                <Button variant="outline-warning" s
                                                    onClick={NewTab}><CgMediaLive /> Live Session</Button>
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