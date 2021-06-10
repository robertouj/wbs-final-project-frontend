import { InputGroup, Button, FormControl, Container, Row, Col } from "react-bootstrap";

import React from 'react'






export default function AddSkill({ text, setText, newSkills, setNewSkills })
{



    const listenHandler = (i) =>
    {
        setText(i.target.value)

    }



    const enterHandler = (e) =>
    {

        if (e.key === 'Enter' && e.target.value) {
            e.preventDefault();
            setNewSkills([
                ...newSkills,
                {
                    text,
                    id: Math.random() * 1000
                }
            ])
            setText('');
        }


    }


    const clickHandler = (j) =>
    {
        j.preventDefault();

        setNewSkills([
            ...newSkills,
            {
                text,
                id: Math.random() * 1000
            }
        ])
        setText('');
    }
    // console.log(skills)
    return (
        <>
            <Container className="mb-5">
                <Row>
                    <Col
                        className="d-flex justify-content-center"
                        style={{
                            textAlign: 'center'
                        }}>
                        <form style={{
                            height: '2.6rem',
                            width: '500px'
                        }}>
                            <input
                                id="skill"
                                name="skill"
                                onChange={listenHandler}
                                onKeyPress={enterHandler}
                                type="text"
                                value={text}
                                placeholder="type a skill..."
                                style={{ height: '2.57rem', width: '220px' }}

                            />
                            <Button
                                className="bttn"
                                onClick={clickHandler}
                                style={{
                                    height: '2.6rem',
                                    backgroundColor: 'rgb(18,93,152,.7)',
                                    marginBottom: '5px'
                                    
                                }}
                                type="submit">ADD</Button>
                        </form>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

