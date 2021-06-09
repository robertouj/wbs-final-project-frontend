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
                        xl={{ span: 1, offset: 4 }}
                        lg={{ span: 1, offset: 4 }}
                        md={{ span: 2, offset: 3 }}
                        sm={{ span: 1, offset: 2 }}
                        xs={{ offset: 2 }}

                    >
                        <form >
                            <input
                                id="skill"
                                name="skill"
                                onChange={listenHandler}
                                onKeyPress={enterHandler}
                                type="text"
                                value={text}
                                placeholder="type a skill..."
                                style={{ height: '2.6rem', width: '220px' }}

                            />

                        </form>
                    </Col>
                    <Col
                        xl={{ offset: 1 }}
                        lg={{ offset: 1 }}
                        md={{ offset: 1 }}
                        sm={{ offset: 3 }}
                        xs={{ offset: 1 }}

                    >
                        <Button className="bttn" onClick={clickHandler} style={{ height: '2.6rem', backgroundColor: '#ac66cc' }} type="submit">ADD TO</Button></Col>
                </Row>

            </Container>
        </>
    );
}

