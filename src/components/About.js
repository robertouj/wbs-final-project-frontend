import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap/';
import "./About.css"
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


export default function About() {
    return (
        
              <>
            <h1 >
                About Page
            </h1>


            <Container className="about--container">
                <Col >
                <h1 className="about-title">Meet our team</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quae consectetur eligendi possimus, voluptas fuga optio natus, sequi dolores ducimus veritatis voluptatum 
                   voluptates, at dignissimos reprehenderit culpa ipsam adipisci ipsa? Tenetur quod accusantium eligendi, molestiae atque aliquam ab voluptatibus eos voluptatem nostrum
                    odio reiciendis quaerat iure deserunt aperiam. Beatae, impedit obcaecati. Illum animi tempore ipsam maxime nostrum praesentium esse doloribus quo quidem fugit repellendus 
                    reprehenderit molestias quos minima magni sit sequi quisquam ipsa delectus fugiat earum rerum culpa, nulla natus. Aut ea voluptates doloribus omnis voluptate laborum corrupti 
                    ipsum, saepe, recusandae delectus, quae sequi amet voluptatibus accusantium eius. Fugiat quibusdam voluptatum aliquid maiores ut? Illo nisi dolorem assumenda minima voluptatem, 
                    voluptas minus recusandae ullam, eveniet officiis voluptatum! Aut voluptas quod hic eveniet esse officia porro ab explicabo? Nihil id molestias ullam ut placeat sunt blanditiis 
                    voluptatum totam animi aspernatur fugiat laudantium quos temporibus, obcaecati unde asperiores ipsam! Iure magnam, nulla necessitatibus asperiores ad corrupti in, quas reiciendis
                     qui animi soluta sapiente officia enim sequi sed. Veniam explicabo excepturi vel nulla unde. Qui esse itaque quia quaerat velit animi cum non eaque, iusto voluptates laboriosam soluta,
                   inventore reprehenderit deserunt aspernatur repudiandae? Aut autem reiciendis laudantium. Debitis, voluptates praesentium! Quaerat, minima ea.</p>
                </Col>
                <Row className="rows">
                    <Col className="columns " >
                        <Card  className="mx-auto mb-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg" />
                            <Card.Body>
                                <Card.Title className="text-muted card--title">Dimitris</Card.Title>
                                <Card.Subtitle className="mb-2 ">Frontend Team</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted card--work">FullStack DEV</Card.Subtitle>
                                <br></br>
                                <br></br>


                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary"><AiFillLinkedin /></Button> */}
                                <Card.Link className="about--links" href="#"><AiFillLinkedin /></Card.Link>
                                <Card.Link className="about--links" href="#"><AiOutlineMail /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="columns" >
                        <Card className="mx-auto mb-4"  style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg" />
                            <Card.Body>
                                <Card.Title className="text-muted card--title">Ahmad</Card.Title>
                                <Card.Subtitle className="mb-2 ">Frontend Team</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted card--work">FullStack DEV</Card.Subtitle>
                                <Card.Text>
                                    <br></br>
                                    <br></br>

                                </Card.Text>
                                {/* <Button variant="primary"><AiFillLinkedin /></Button> */}
                                <Card.Link className="about--links" href="#"><AiFillLinkedin /></Card.Link>
                                <Card.Link className="about--links" href="#"><AiOutlineMail /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="columns">
                        <Card className="mx-auto mb-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg" />
                            <Card.Body>
                                <Card.Title className="text-muted card--title">Roberto</Card.Title>
                                <Card.Subtitle className="mb-2">Product Owner, Scrum Master, Debugging Master, Backend Team</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted card--work" >FullStack DEV</Card.Subtitle>
                                <Card.Text>
                                    <br></br>

                                </Card.Text>
                                {/* <Button variant="primary"><AiFillLinkedin /></Button> */}
                                <Card.Link className="about--links" href="#"><AiFillLinkedin /></Card.Link>
                                <Card.Link className="about--links" href="#"><AiOutlineMail /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="columns">
                        <Card className="mx-auto mb-4" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg" />
                            <Card.Body>
                                <Card.Title className="text-muted card--title">Daniel</Card.Title>
                                <Card.Subtitle className="mb-2 ">Backend Team</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted card--work">FullStack DEV</Card.Subtitle>
                                <Card.Text>
                                    <br></br>
                                    <br></br>

                                </Card.Text>
                                {/* <Button variant="primary"><AiFillLinkedin /></Button> */}
                                <Card.Link className="about--links" href="#"><AiFillLinkedin /></Card.Link>
                                <Card.Link className="about--links" href="#"><AiOutlineMail /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </>
        
    )
}
