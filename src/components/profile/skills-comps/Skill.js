import React from 'react'
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import { TiDeleteOutline } from 'react-icons/ti'

export default function Skill({ skills })
{

    // console.log(skills)
    return (
        <Container style={{
            backgroundColor: 'white',
            border: "thin solid",
            boxShadow: '2px 2px 46px -16px #000000',
            maxWidth: '12rem'
        }}>
            <Col className={"my-3 "} >
                <div

                >

                    <p style={{
                        textAlign: 'center',
                        marginBottom: 0
                    }}>
                        {skills}

                    </p>
                </div>
                <Row>
                    <div style={{ textAlign: 'center' }}>
                        <Button style={{ backgroundColor: '#b6c9f0' }}>  <TiDeleteOutline />   </Button>
                    </div>
                </Row>

            </Col>
        </Container>
    )
}
