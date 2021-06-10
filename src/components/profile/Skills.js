import React from 'react'
import { useState } from 'react';
import AddSkill from './skills-comps/AddSkill'
import SkillsList from './skills-comps/SkillsList'
import APIData from '../../MockData.json'
import { Col, Container, Row } from 'react-bootstrap';

export default function Skills({ skills })
{


    const [newSkills, setNewSkills] = useState([]);
    const [name, setName] = useState([]);


    console.log(newSkills)



    return (
        <>


            <Container >
                <Row >
                    <Col className="d-flex justify-content-center">
                        <AddSkill text={name} setText={setName} newSkills={newSkills} setNewSkills={setNewSkills} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SkillsList skills={skills} newSkills={newSkills} />
                    </Col>
                </Row>
            </Container>


        </>
    )
}
