import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';

export default function Register() {
    return (
        <div>
             <Container className="m-auto p-3">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center m-auto p-3">
                        <img className="icon-img" src={ArrowRight} alt="icon" />
                        <Form>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="username" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Repeat Password" />
                            </Form.Group>

                            <Button variant="secondary btn-block" type="submit">Login</Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
