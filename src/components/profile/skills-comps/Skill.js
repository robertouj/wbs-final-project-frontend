import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import { TiDeleteOutline } from 'react-icons/ti'

export default function Skill({ text, Key, setSkills, skills })
{

    const deleteHandler = (e) =>
    {
        setSkills(skills.filter(i => i.id !== Key))

    }



    return (

        <Col xl={{ span: 2 }} className={"my-3 "} >
            <div
                className="mb-4"
                style={{
                    backgroundColor: 'white',
                    border: "thin solid",
                    boxShadow: '2px 2px 46px -16px #000000'
                }}>

                <p style={{
                    textAlign: 'center',
                    marginBottom: 0
                }}>
                    {text}
                </p>

                <Row>
                    <div style={{ textAlign: 'center' }}>
                        <Form>
                            <Form.Group controlId="formBasicRange" >
                                <Form.Control type="range" />
                            </Form.Group>
                        </Form>
                        <Button onClick={deleteHandler} >  <TiDeleteOutline />   </Button>
                    </div>
                </Row>
            </div>
        </Col>
    )
}
