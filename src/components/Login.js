import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';

export default function Login() {
    return (
        <div>
             <Container className="m-auto p-3">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center m-auto p-3">
                        <img className="icon-img" src={ArrowRight} alt="icon" />
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="secondary btn-block" type="submit">Login</Button>

                            <div className="text-left m-auto">
                                <a href="#"><small className="reset">Password Reset</small></a> II
                                                <a href="#"><small className="reset ml-2">I forgot my Password</small></a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
